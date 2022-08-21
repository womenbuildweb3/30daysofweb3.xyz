---
title: RSVP to an Event
description: Let users RSVP to an event on your full-stack decentralized event platform.
optional: false
tweet: "I've coded in 3 languages so far while building my fullstack dapp- Solidity, Assemblyscript, and Javascript 💻 #30DaysofWeb3 @womenbuildweb3 🎫"
---

## ✋ Need Help?

If you need help, check to see if your question has already been asked in **#section-8-help**. If you don't see it in there, post a question with any details that would make it easy for a team member to help you. We'll answer most frequently asked questions in live office hours, so keep an eye out in **#announcements** for those!

## RSVP'ing to Events

We want users to also be able to RSVP to an event on the event details page.

In the same `pages/events/[id].js` file, import our wallet and contract functions at the top:

```javascript
import { useState } from "react";
import { ethers } from "ethers";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import connectContract from "../../utils/connectContract";
import Alert from "../../components/Alert";
```

At the top of the Event function, we can add some state variables to keep track of the user account, the status of the contract transaction, and the current time.

```javascript
const { data: account } = useAccount();
const [success, setSuccess] = useState(null);
const [message, setMessage] = useState(null);
const [loading, setLoading] = useState(null);
const [currentTimestamp, setEventTimestamp] = useState(new Date().getTime());
```

Now we’ll check whether the user has already RSVP’d or not by creating a function called `checkIfAlreadyRSVPed`. If they haven't already, then the user will see a button to RSVP. To find out if they have already RSVPed, we can loop through the rsvps array from the event and see if any of the wallet addresses match.

```javascript
function checkIfAlreadyRSVPed() {
  if (account) {
    for (let i = 0; i < event.rsvps.length; i++) {
      const thisAccount = account.address.toLowerCase();
      if (event.rsvps[i].attendee.id.toLowerCase() == thisAccount) {
        return true;
      }
    }
  }
  return false;
}
```

Next we can create a function called `newRSVP` and call the `createNewRSVP` method from our contract. We can pass in the deposit amount we fetched from our subgraph as the transaction value.

```javascript
const newRSVP = async () => {
  try {
    const rsvpContract = connectContract();
    if (rsvpContract) {
      const txn = await rsvpContract.createNewRSVP(event.id, {
        value: event.deposit,
        gasLimit: 300000,
      });
      setLoading(true);
      console.log("Minting...", txn.hash);

      await txn.wait();
      console.log("Minted -- ", txn.hash);
      setSuccess(true);
      setLoading(false);
      setMessage("Your RSVP has been created successfully.");
    } else {
      console.log("Error getting contract.");
    }
  } catch (error) {
    setSuccess(false);
    setMessage("Error!");
    setLoading(false);
    console.log(error);
  }
};
```

Just like in our `create-event` page, we will want to show an alert based on the status of the user's contract transaction. We can add this inside the first section on the page.

```javascript
<section className="relative py-12">
  {loading && (
    <Alert
      alertType={"loading"}
      alertBody={"Please wait"}
      triggerAlert={true}
      color={"white"}
    />
  )}
  {success && (
    <Alert
      alertType={"success"}
      alertBody={message}
      triggerAlert={true}
      color={"palegreen"}
    />
  )}
  {success === false && (
    <Alert
      alertType={"failed"}
      alertBody={message}
      triggerAlert={true}
      color={"palevioletred"}
    />
  )}
```

Above the section that shows the number of RSVPs and max capacity for the event, we can add a button to RSVP which we will only show if the user has not already RSVPed. If they have already RSVPed, we can show them a link to the event.

All of this is wrapped in a conditional statement that also checks if the user is logged in. If they aren't logged in, we can show the the connect wallet button.

If the event has already passed, we will hide all of this and let the user know that the event has already happened.

```javascript
<div className="max-w-xs w-full flex flex-col gap-4 mb-6 lg:mb-0">
  {event.eventTimestamp > currentTimestamp ? (
    account ? (
      checkIfAlreadyRSVPed() ? (
        <>
          <span className="w-full text-center px-6 py-3 text-base font-medium rounded-full text-teal-800 bg-teal-100">
            You have RSVPed! 🙌
          </span>
          <div className="flex item-center">
            <LinkIcon className="w-6 mr-2 text-indigo-800" />
            <a
              className="text-indigo-800 truncate hover:underline"
              href={event.link}
            >
              {event.link}
            </a>
          </div>
        </>
      ) : (
        <button
          type="button"
          className="w-full items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={newRSVP}
        >
          RSVP for {ethers.utils.formatEther(event.deposit)} MATIC
        </button>
      )
    ) : (
      <ConnectButton />
    )
  ) : (
    <span className="w-full text-center px-6 py-3 text-base font-medium rounded-full border-2 border-gray-200">
      Event has ended
    </span>
  )}
  <div className="flex item-center">
```

And yay! RSVP creation done! 🎉

Test out the RSVP button to make sure that everything is working. It might take a few minutes for the event page to show that you have already RSVPed.

## Builders Hype

Take a second to pause and soak it all in- you're almost done with building a fullstack dapp. You've created your smart contract, subgraph, and now your front end. You've written code in 3 languages and that's no small feat. Shoot out a tweet and let the world know what you've accomplished 🔥

---

Writers: [Sarah Schwartz](https://twitter.com/schwartzswartz),
Editors: [Kristen](https://twitter.com/CuddleofDeath)
