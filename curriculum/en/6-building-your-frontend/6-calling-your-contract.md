---
title: Calling Your Contract
description: Call your smart contract methods using Ethers.js.
optional: false
tweet: "Call smart contract methods using Ethers.js with #30DaysofWeb3 @womenbuildweb3 💥"
---

Open up `create-event.js` in the `pages` folder. You can see a preview of this page by going to http://localhost:3000/create-event. You should see a form with all of the input fields we need already set up.

**Note:** If you don't see anything, make sure you run `npm run dev` in your terminal inside your project folder.

Clicking the create button will trigger the `handleSubmit` method to be called. Right now, it just console logs "Form submitted". Now we'll walk through and set up the logic that should happen when the form gets submitted.

We are using state variables to keep track of the form data. We'll organize them into a single object that we'll use to pass to our API endpoint which will store some of our event data off-chain via Web3.Storage.

Add this inside of your handleSubmit function, just under `e.preventDefault()`:

```javascript
const body = {
  name: eventName,
  description: eventDescription,
  link: eventLink,
  image: getRandomImage(),
};
```

For the image, we'll import the following two items at the top of the `create-event.js` file:

- Our first import will pull the `getRandomImage` function from our `getRandomImage.js` file.
- Secondly, we'll also import `ethers` so we can use it to call our contract.

Your imports will look like this:

```javascript
import getRandomImage from "../utils/getRandomImage";
import { ethers } from "ethers";
```

You'll notice we aren't sending all of the event data here. This is because the event deposit, max capacity, timestamp, etc. will be stored in on-chain with our smart contract. Before we can call our contract though, we need to store some event data on Web3.Storage and get our CID.

In our `handleSubmit` function, we can use a `try..catch` statement to send the body to our API endpoint /store-event-data. If we get a successful response, meaning we were able to store the data with Web3.Storage and got back a CID, we can pass this into a new function called `createEvent`. Here's what your function should look like:

```javascript
async function handleSubmit(e) {
  e.preventDefault();

  const body = {
    name: eventName,
    description: eventDescription,
    link: eventLink,
    image: getRandomImage(),
  };

  try {
    const response = await fetch("/api/store-event-data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (response.status !== 200) {
      alert("Oops! Something went wrong. Please refresh and try again.");
    } else {
      console.log("Form successfully submitted!");
      let responseJSON = await response.json();
      await createEvent(responseJSON.cid);
    }
    // check response, if success is false, dont take them to success page
  } catch (error) {
    alert(
      `Oops! Something went wrong. Please refresh and try again. Error ${error}`
    );
  }
}
```

To connect our contract, we'll import the function we wrote earlier from the `utils` folder like so:

```javascript
import connectContract from "../utils/connectContract";
```

Next, we'll create a new function called `createEvent` where we can pass the event data into our contract's `createNewEvent` function.

We will need to make sure we send the amount for the event deposit as **wei**, which is _the smallest denomination of ETH_ (1 ETH = 1000000000000000000 Wei). We can use a method from ethers called `parseEther` to easily parse an amount in ETH (or MATIC in this case) to the correct amount our contract can understand.

We also need to generate a unix timestamp from the date and time inputs from our form.

To actually call our contract, we can just call the method like this (**Note:** The below await function is simply an example):

```javascript
await contract.methodName(parameters, { optionName: optionValue });
```

After passing in the function parameters, we can also pass in an object where we can set the gas limit for the transaction.

This will return a transaction object with more data about our transaction. To easily access this information like the transaction hash, we can store this into a variable called `txn`.

```javascript
const createEvent = async (cid) => {
  try {
    const rsvpContract = connectContract();

    if (rsvpContract) {
      let deposit = ethers.utils.parseEther(refund);
      let eventDateAndTime = new Date(`${eventDate} ${eventTime}`);
      let eventTimestamp = eventDateAndTime.getTime();
      let eventDataCID = cid;

      const txn = await rsvpContract.createNewEvent(
        eventTimestamp,
        deposit,
        maxCapacity,
        eventDataCID,
        { gasLimit: 900000 }
      );
      console.log("Minting...", txn.hash);
      console.log("Minted -- ", txn.hash);
    } else {
      console.log("Error getting contract.");
    }
  } catch (error) {
    console.log(error);
  }
};
```

Writers: [Sarah Schwartz](https://twitter.com/schwartzswartz),
Editors: [Sarah Z](https://twitter.com/haegeez)