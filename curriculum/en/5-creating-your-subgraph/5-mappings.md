---
title: Mappings
description: Write the code that translates data from your datasources to the entities defined in your schema.
optional: false
tweet: "I just wrote mappings for my subgraph @graphprotocol with #30DaysofWeb3 @womenbuildweb3 👾"
---

You can find the mappings file (src/{Name}.ts) in the `src` folder. Mappings use AssemblyScript, a strongly-typed language based on Typescript, and act like the resolvers in your typical GraphQL API. They are responsible for the logic that happens in-between an event firing from our smart contract and that data being organized into our schema.

This file will already have a basic layout generated for you. You should see a function for each event handler defined in our subgraph manifest. Each function in our mapping must be exported, and takes in the event it will handle as an argument.

We can run `graph codegen` in the terminal to generate AssemblyScript types for our entities and events, and import them at the top of our mappings file (make sure you are in the root directory of your project folder and have saved your changes before running this command). With this you should also be able to easily see all of the properties of the `event` object in your code editor.

![subgraph event object](https://i.imgur.com/gvYnfdX.png)

If you make any other changes to the schema or subgraph manifest, you can always run `graph codegen` again to generate new types.

We will delete everything in the first function and replace the `Example Entity` object imported at the top with the entity types we just generated. We won’t need the Web3RSVP contract type imported in the second line either since we won’t need to make any contract calls. We can also delete the BigInt type imported in the first line, and replace that with the `Address`, `ipfs`, and `json` types.

The mappings file should now look like this:

```javascript
import { Address, ipfs, json } from "@graphprotocol/graph-ts";
import {
  ConfirmedAttendee,
  NewEventCreated,
  NewRSVP,
  DepositsPaidOut,
} from "../generated/Web3RSVP/Web3RSVP";
import { Account, RSVP, Confirmation, Event } from "../generated/schema";
import { integer } from "@protofire/subgraph-toolkit";

export function handleNewEventCreated(event: NewEventCreated): void {}

export function handleNewRSVP(event: NewRSVP): void {}

export function handleConfirmedAttendee(event: ConfirmedAttendee): void {}

export function handleDepositsPaidOut(event: DepositsPaidOut): void {}
```

We can start with the `handleNewEventCreated` function. We can create a new instance of an `Event` entity by passing in a unique id that is a string of hexadecimal characters.

Here is how our events look in our contract:

```solidity
event NewEventCreated(
bytes32 eventID,
      address creatorAddress,
      uint256 eventTimestamp,
      uint256 maxCapacity,
      uint256 deposit,
      string eventDataCID
);

event NewRSVP(bytes32 eventID, address attendeeAddress);

event ConfirmedAttendee(bytes32 eventID, address attendeeAddress);

event DepositsPaidOut(bytes32 eventID);
```

Because we have an `eventID` already from the `NewEventCreated` event, we can use this as the unique id for the `Event` entity. We also want to make sure that we don’t create any duplicate events with the same id, so we can try to load this event first, and if it isn’t found, we can create it and save it. (Note: If you forget to use the `save` method at the end of your function, this data won’t save! Always make sure you are saving any changes made to an entity).

Because the `eventID` emitted from our contract is of the type `Bytes32`, we can use the built-in method `toHex()` to convert the id to a hexadecimal string representing the bytes in the array.

```javascript
let newEvent = Event.load(event.params.eventID.toHex());
if (newEvent == null) {
  newEvent = new Event(event.params.eventID.toHex());
  newEvent.save();
}
```

This is a standard pattern we will follow for each of our mapping functions. We will first check to see if we can load our entity with a unique id, and create a new instance only if that result is null.

The last thing we need to do here is set the values for each field from our schema. We can access most of this data in the event.params object. For the `paidOut` field, we can just set this to false.

```javascript
let newEvent = Event.load(event.params.eventID.toHex());
if (newEvent == null) {
newEvent = new Event(event.params.eventID.toHex());
newEvent.eventID = event.params.eventID;
newEvent.eventOwner = event.params.creatorAddress;
newEvent.eventTimestamp = event.params.eventTimestamp;
newEvent.maxCapacity = event.params.maxCapacity;
newEvent.deposit = event.params.deposit;
newEvent.paidOut = false;
```

For the `totalRSVPs` and `totalConfirmedAttendees` fields, we will be using the protofire subgraph toolkit we added earlier. In our `handleNewEventCreated` function, we want to set the totals to 0 to start, so we can use `integer.ZERO` to set these fields to 0.

```
newEvent.totalRSVPs = integer.ZERO;
newEvent.totalConfirmedAttendees = integer.ZERO;
```

For the `name`, `description`, `link`, and `imagePath` fields, we will be using the `eventCID` to access data stored with ipfs (web3.storage). We can use the CID and the name of the event details file, `data.json`, to pull this data in.

```javascript
let metadata = ipfs.cat(event.params.eventDataCID + "/data.json");

if (metadata) {
  const value = json.fromBytes(metadata).toObject();
  if (value) {
    const name = value.get("name");
    const description = value.get("description");
    const link = value.get("link");
    const imagePath = value.get("image");

    if (name) {
      newEvent.name = name.toString();
    }

    if (description) {
      newEvent.description = description.toString();
    }

    if (link) {
      newEvent.link = link.toString();
    }

    if (imagePath) {
      const imageURL =
        "https://ipfs.io/ipfs/" +
        event.params.eventDataCID +
        imagePath.toString();
      newEvent.imageURL = imageURL;
    } else {
      // return fallback image if no imagePath
      const fallbackURL =
        "https://ipfs.io/ipfs/bafybeibssbrlptcefbqfh4vpw2wlmqfj2kgxt3nil4yujxbmdznau3t5wi/event.png";
      newEvent.imageURL = fallbackURL;
    }
  }
}

newEvent.save();
```

Our `handleNewEventCreated` function should now look like this:

```javascript
export function handleNewEventCreated(event: NewEventCreated): void {
  let newEvent = Event.load(event.params.eventID.toHex());
  if (newEvent == null) {
    newEvent = new Event(event.params.eventID.toHex());
    newEvent.eventID = event.params.eventID;
    newEvent.eventOwner = event.params.creatorAddress;
    newEvent.eventTimestamp = event.params.eventTimestamp;
    newEvent.maxCapacity = event.params.maxCapacity;
    newEvent.deposit = event.params.deposit;
    newEvent.paidOut = false;
    newEvent.totalRSVPs = integer.ZERO;
    newEvent.totalConfirmedAttendees = integer.ZERO;

    let metadata = ipfs.cat(event.params.eventDataCID + "/data.json");

    if (metadata) {
      const value = json.fromBytes(metadata).toObject();
      if (value) {
        const name = value.get("name");
        const description = value.get("description");
        const link = value.get("link");
        const imagePath = value.get("image");

        if (name) {
          newEvent.name = name.toString();
        }

        if (description) {
          newEvent.description = description.toString();
        }

        if (link) {
          newEvent.link = link.toString();
        }

        if (imagePath) {
          const imageURL =
            "https://ipfs.io/ipfs/" +
            event.params.eventDataCID +
            imagePath.toString();
          newEvent.imageURL = imageURL;
        } else {
          const fallbackURL =
            "https://ipfs.io/ipfs/bafybeibssbrlptcefbqfh4vpw2wlmqfj2kgxt3nil4yujxbmdznau3t5wi/event.png";
          newEvent.imageURL = fallbackURL;
        }
      }
    }

    newEvent.save();
  }
}
```

For our `handleNewRSVP` function, we will create a new RSVP entity and a new account entity (assuming it’s a new user). To keep our functions simple, we can split this into two functions.

```javascript
function getOrCreateAccount(address: Address): Account {
  let account = Account.load(address.toHex());
  if (account == null) {
    account = new Account(address.toHex());
    account.totalRSVPs = integer.ZERO;
    account.totalAttendedEvents = integer.ZERO;
    account.save();
  }
  return account;
}

export function handleNewRSVP(event: NewRSVP): void {
  let id = event.params.eventID.toHex() + event.params.attendeeAddress.toHex();
  let newRSVP = RSVP.load(id);
  let account = getOrCreateAccount(event.params.attendeeAddress);
  let thisEvent = Event.load(event.params.eventID.toHex());
  if (newRSVP == null && thisEvent != null) {
    newRSVP = new RSVP(id);
    newRSVP.attendee = account.id;
    newRSVP.event = thisEvent.id;
    newRSVP.save();
    thisEvent.totalRSVPs = integer.increment(thisEvent.totalRSVPs);
    thisEvent.save();
    account.totalRSVPs = integer.increment(account.totalRSVPs);
    account.save();
  }
}
```

Our `handleConfirmedAttendee` function will follow the same pattern:

```javascript
export function handleConfirmedAttendee(event: ConfirmedAttendee): void {
  let id = event.params.eventID.toHex() + event.params.attendeeAddress.toHex();
  let newConfirmation = Confirmation.load(id);
  let account = getOrCreateAccount(event.params.attendeeAddress);
  let thisEvent = Event.load(event.params.eventID.toHex());
  if (newConfirmation == null && thisEvent != null) {
    newConfirmation = new Confirmation(id);
    newConfirmation.attendee = account.id;
    newConfirmation.event = thisEvent.id;
    newConfirmation.save();

    thisEvent.totalConfirmedAttendees = integer.increment(
      thisEvent.totalConfirmedAttendees
    );
    thisEvent.save();

    account.totalAttendedEvents = integer.increment(
      account.totalAttendedEvents
    );
    account.save();
  }
}
```

For our `handleDepositsPaidOut` function, all we need to do is change the paidOut field of the matching event from false to true:

```javascript
export function handleDepositsPaidOut(event: DepositsPaidOut): void {
  let thisEvent = Event.load(event.params.eventID.toHex());
  if (thisEvent) {
    thisEvent.paidOut = true;
    thisEvent.save();
  }
}
```

You can see a final version of the mappings file [here](https://github.com/womenbuildweb3/web3RSVP-subgraph/blob/main/src/mapping.ts).

Finally we can run `graph build` in the terminal to build our subgraph and make sure we don't get any errors.

## ✋ Need Help?

If you need help, check to see if your question has already been asked in **#section-5-help**. If you don't see it in there, post a question with any details that would make it easy for a team member to help you. We'll answer most frequently asked questions in live office hours, so keep an eye out in **#announcements** for those!

## You Did It 🎉

You just wrote the mappings for your subgraph- the toughest part is done! Shoot out a tweet and update the community on your progress by hitting the Share button below. Paste the link to your tweet in **#builders-hype** and hype up any other tweets you see in there 🔥

---

Writers: [Sarah Schwartz](https://twitter.com/schwartzswartz),
Editors: [Cami](https://twitter.com/camiinthisthang)
