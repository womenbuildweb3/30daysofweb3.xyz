---
title: Defining Functions
description: Define functions in Solidity to handle events in your full-stack decentralized event platform.
optional: false
tweet: "Write a smart contract in Solidity for a full-stack dapp with #30DaysofWeb3 @womenbuildweb3 ✍️"
---

## Create a New Event

Next, we’ll write the function that will get called when a user creates a new event in our frontend. This is one of our setter methods - a function that gets executed and sets the value based on information the user passed in.

**A reminder of what this function should be able to handle:**

- A unique ID
- A reference to who created the event (a wallet address of the creator)
- The time of the event, so we know when refunds should become available.
- The maximum capacity of attendees for that event
- The deposit amount for that event
- Keep track of those who RSVP’d
- Keep track of users who check into the event

After adding that function under our mapping, here's what your smart contract should look like so far:

```solidity
struct CreateEvent {
    bytes32 eventId;
    string eventDataCID;
    address eventOwner;
    uint256 eventTimestamp;
    uint256 deposit;
    uint256 maxCapacity;
    address[] confirmedRSVPs;
    address[] claimedRSVPs;
    bool paidOut;
}

mapping(bytes32 => CreateEvent) public idToEvent;

function createNewEvent(
    uint256 eventTimestamp,
    uint256 deposit,
    uint256 maxCapacity,
    string calldata eventDataCID
) external {
    // generate an eventID based on other things passed in to generate a hash
    bytes32 eventId = keccak256(
        abi.encodePacked(
            msg.sender,
            address(this),
            eventTimestamp,
            deposit,
            maxCapacity
        )
    );

    address[] memory confirmedRSVPs;
    address[] memory claimedRSVPs;


    // this creates a new CreateEvent struct and adds it to the idToEvent mapping
    idToEvent[eventId] = CreateEvent(
        eventId,
        eventDataCID,
        msg.sender,
        eventTimestamp,
        deposit,
        maxCapacity,
        confirmedRSVPs,
        claimedRSVPs,
        false
    );
}

```

**Line by line explanation of what we just did:**

We define the function `createNewEvent` and define the parameters the function should accept. These are the settings-specific to an event that we will get from the person actually creating the event on the frontend. These things are: the eventTimestamp (when the event will start), the deposit required to RSVP to this event, the max capacity of this event, and a reference to the IPFS hash containing information like the event name and description.

```solidity
function createNewEvent(
    uint256 eventTimestamp,
    uint256 deposit,
    uint256 maxCapacity,
    string calldata eventDataCID
)
```

We set the function visibility to external since it is highly performant and saves on gas.

`external {`

In the body of the function, we create a unique ID for the event by **hashing** together a few values.

We let the user pass in their own unique ID, but this may lead to **collisions**. Collisions are a problem to look out for when creating hash tables or mappings. Collisions occur when two or more elements are referenced by the same hash (unique ID).

For example, if 2 users created an event at the same exact time, they might both get the same identifier, or they might unknowingly choose the same eventID as someone else. This would cause issues later when we try to look up elements by their unique eventID.

In order to combat this, we generate a unique ID by creating a hash by passing in all of the arguments passed into the function call. The combination of all of the arguments and the hash function would vastly decrease the likelihood of a collision.

```solidity
// generate an eventID based on other things passed in to generate a hash
bytes32 eventId = keccak256(
    abi.encodePacked(
        msg.sender,
        address(this),
        eventTimestamp,
        deposit,
        maxCapacity
    )
);
```

We initialize the two arrays we’ll use to track RSVPs and attendees. We know we need to define these two arrays because in our struct, CreateEvent, we define that there will be two arrays which will be used to track the addresses of users who RSVP, and the address of users who actually arrive and get checked into the event AKA are confirmed.

```solidity
address[] memory confirmedRSVPs;
address[] memory claimedRSVPs;
```

Now that we have a unique ID, we can create a new entry to our mapping. You can think of this as adding a new event to our directory of events managed by this smart contract.

The `key` is the eventID and the `value` is a struct, or object, with the following properties that we grabbed either from the function arguments passed by the user in the front end (eventName, eventTimestamp, deposit, maxCapacity), some we generated ourselves, or gathered from the smart contract side (eventID, eventOwner, confirmedRSVPS, claimedRSVPs). Finally we set the boolean paidOut to false because at the time of eventCreation, there have been no payouts to the RSVPers (there are none yet) or the event owner yet.

```solidity
idToEvent[eventId] = CreateEvent(
    eventId,
    eventName,
    msg.sender,
    eventTimestamp,
    deposit,
    maxCapacity,
    confirmedRSVPs,
    claimedRSVPs,
    false
);
```

## RSVP To Event

Next, we’ll write the function that gets called when a user finds an event and RSVPs to it on the front end.

**Reminder of the requirements for a function to allow users to RSVP to an event:**

- Pass in a unique event ID the user wishes to RSVP to
- Ensure that the value of their deposit is sufficient for that event’s deposit requirement
- Ensure that the event hasn’t already started based on the timestamp of the event - people shouldn’t be able to RSVP after the event has started
- Ensure that the event is under max capacity
- Add this function to your contract, just under the createNewEvent function.

Here's what your function createNewRSVP will look like:

```solidity
function createNewRSVP(bytes32 eventId) external payable {
    // look up event from our mapping
    CreateEvent storage myEvent = idToEvent[eventId];

    // transfer deposit to our contract / require that they send in enough ETH to cover the deposit requirement of this specific event
    require(msg.value == myEvent.deposit, "NOT ENOUGH");

    // require that the event hasn't already happened (<eventTimestamp)
    require(block.timestamp <= myEvent.eventTimestamp, "ALREADY HAPPENED");

    // make sure event is under max capacity
    require(
        myEvent.confirmedRSVPs.length < myEvent.maxCapacity,
        "This event has reached capacity"
    );

    // require that msg.sender isn't already in myEvent.confirmedRSVPs AKA hasn't already RSVP'd
    for (uint8 i = 0; i < myEvent.confirmedRSVPs.length; i++) {
        require(myEvent.confirmedRSVPs[i] != msg.sender, "ALREADY CONFIRMED");
    }

    myEvent.confirmedRSVPs.push(payable(msg.sender));

}
```

## Check In Attendees

Part of our app requires users to pay a deposit which they get back when they arrive to the event. We'll write the function that checks in attendees and returns their deposit.

```solidity
function confirmAttendee(bytes32 eventId, address attendee) public {
    // look up event from our struct using the eventId
    CreateEvent storage myEvent = idToEvent[eventId];

    // require that msg.sender is the owner of the event - only the host should be able to check people in
    require(msg.sender == myEvent.eventOwner, "NOT AUTHORIZED");

    // require that attendee trying to check in actually RSVP'd
    address rsvpConfirm;

    for (uint8 i = 0; i < myEvent.confirmedRSVPs.length; i++) {
        if(myEvent.confirmedRSVPs[i] == attendee){
            rsvpConfirm = myEvent.confirmedRSVPs[i];
        }
    }

    require(rsvpConfirm == attendee, "NO RSVP TO CONFIRM");


    // require that attendee is NOT already in the claimedRSVPs list AKA make sure they haven't already checked in
    for (uint8 i = 0; i < myEvent.claimedRSVPs.length; i++) {
        require(myEvent.claimedRSVPs[i] != attendee, "ALREADY CLAIMED");
    }

    // require that deposits are not already claimed by the event owner
    require(myEvent.paidOut == false, "ALREADY PAID OUT");

    // add the attendee to the claimedRSVPs list
    myEvent.claimedRSVPs.push(attendee);

    // sending eth back to the staker `https://solidity-by-example.org/sending-ether`
    (bool sent,) = attendee.call{value: myEvent.deposit}("");

    // if this fails, remove the user from the array of claimed RSVPs
    if (!sent) {
        myEvent.claimedRSVPs.pop();
    }

    require(sent, "Failed to send Ether");
}
```

## Confirm The Whole Group

As an event organizer, you might want to be able to confirm all of your attendees at once, instead of processing them one at a time.

Let’s write a function to confirm every person that has RSVPs to a specific event:

```solidity
function confirmAllAttendees(bytes32 eventId) external {
    // look up event from our struct with the eventId
    CreateEvent memory myEvent = idToEvent[eventId];

    // make sure you require that msg.sender is the owner of the event
    require(msg.sender == myEvent.eventOwner, "NOT AUTHORIZED");

    // confirm each attendee in the rsvp array
    for (uint8 i = 0; i < myEvent.confirmedRSVPs.length; i++) {
        confirmAttendee(eventId, myEvent.confirmedRSVPs[i]);
    }
}
```

## Send Unclaimed Deposits to Event Organizer

Finally, we need to write a function that will withdraw deposits of people who didn’t show up to the event and send them to the event organizer:

```solidity
function withdrawUnclaimedDeposits(bytes32 eventId) external {
    // look up event
    CreateEvent memory myEvent = idToEvent[eventId];

    // check that the paidOut boolean still equals false AKA the money hasn't already been paid out
    require(!myEvent.paidOut, "ALREADY PAID");

    // check if it's been 7 days past myEvent.eventTimestamp
    require(
        block.timestamp >= (myEvent.eventTimestamp + 7 days),
        "TOO EARLY"
    );

    // only the event owner can withdraw
    require(msg.sender == myEvent.eventOwner, "MUST BE EVENT OWNER");

    // calculate how many people didn't claim by comparing
    uint256 unclaimed = myEvent.confirmedRSVPs.length - myEvent.claimedRSVPs.length;

    uint256 payout = unclaimed * myEvent.deposit;

    // mark as paid before sending to avoid reentrancy attack
    myEvent.paidOut = true;

    // send the payout to the owner
    (bool sent, ) = msg.sender.call{value: payout}("");

    // if this fails
    if (!sent) {
        myEvent.paidOut == false;
    }

    require(sent, "Failed to send Ether");

}
```

---

Writers: [Cami](https://twitter.com/camiinthisthang)
