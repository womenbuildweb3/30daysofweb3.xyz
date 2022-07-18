# Writing a Test Script

We can test our smart contract locally before we deploy to a testnet so we can make sure it works as intended. A testnet (test network) is an alternative blockchain network used to run and test programs before releasing updates to the mainnet (main network).

Create a file in the `scripts` folder called `run.js`. We will start by importing hardhat at the top of file so we can use it later.

Create an async function called `main` and another async function called `runMain`, which will use a `try...catch` statement to run the `main` function. At the bottom of the file, we can execute`runMain()`.

```javascript
const hre = require("hardhat");

const main = async () => {};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
```

Inside our `main` function, we can use hardhat to deploy the contract locally by adding the code below:

```javascript
const rsvpContractFactory = await hre.ethers.getContractFactory("Web3RSVP");
const rsvpContract = await rsvpContractFactory.deploy();
await rsvpContract.deployed();
console.log("Contract deployed to:", rsvpContract.address);
```

Hardhat allows us to access different test wallets inside our script so we can simulate different wallets interacting with our contract. To get our deployer wallet address and a couple others for testing, we use the `getSigners` method.

```javascript
const [deployer, address1, address2] = await hre.ethers.getSigners();
```

The first thing we want to test is creating a new event. Before we can call this method, we need to define the event data we are going to use. You can use an IPFS CID we already created.

```javascript
let deposit = hre.ethers.utils.parseEther("1");
let maxCapacity = 3;
let timestamp = 1718926200;
let eventDataCID =
  "bafybeibhwfzx6oo5rymsxmkdxpmkfwyvbjrrwcl7cekmbzlupmp5ypkyfi";
```

_Extras_: _A timestamp is a sequence of characters or encoded information identifying when a certain event occurred, usually giving date and time of day, sometimes accurate to a small fraction of a second._ _More info @ [unixtimestamp](https://www.unixtimestamp.com/)_

Next we can create a new event with our mock data. Once the transaction is done, `txn.wait` will return data about the transaction including an array of the emitted events which we can log to our console. We can save the eventID created so we can use it to RSVP.

You can log the entire `wait` object if you want to see everything that is returned.

```javascript
let txn = await rsvpContract.createNewEvent(
  timestamp,
  deposit,
  maxCapacity,
  eventDataCID
);
let wait = await txn.wait();
console.log("NEW EVENT CREATED:", wait.events[0].event, wait.events[0].args);

let eventID = wait.events[0].args.eventID;
console.log("EVENT ID:", eventID);
```

We can have each account we pulled from `getSigners` RSVP to the event. By default, Hardhat will call our contract functions from the deployer wallet address. To call a contract function from another wallet, we can use the `.connect(address)` modifier.

To send our deposit, we can pass in an object as the last parameter with the value set to the deposit amount.

```javascript
txn = await rsvpContract.createNewRSVP(eventID, { value: deposit });
wait = await txn.wait();
console.log("NEW RSVP:", wait.events[0].event, wait.events[0].args);

txn = await rsvpContract
  .connect(address1)
  .createNewRSVP(eventID, { value: deposit });
wait = await txn.wait();
console.log("NEW RSVP:", wait.events[0].event, wait.events[0].args);

txn = await rsvpContract
  .connect(address2)
  .createNewRSVP(eventID, { value: deposit });
wait = await txn.wait();
console.log("NEW RSVP:", wait.events[0].event, wait.events[0].args);
```

We can confirm all of the RSVPs with `confirmAllAttendees`. Since we created the event from the deployer address, we have to call this function from the deployer address too.

```javascript
txn = await rsvpContract.confirmAllAttendees(eventID);
wait = await txn.wait();
wait.events.forEach((event) =>
  console.log("CONFIRMED:", event.args.attendeeAddress)
);
```

Because we require that the event owner must wait 7 days before withdrawing unclaimed deposits, it will fail if we try to call this function now.

To work around this, hardhat lets us simulate the passing of time. We can wait 10 years to make sure it's been enough time.

```javascript
// wait 10 years
await hre.network.provider.send("evm_increaseTime", [15778800000000]);

txn = await rsvpContract.withdrawUnclaimedDeposits(eventID);
wait = await txn.wait();
console.log("WITHDRAWN:", wait.events[0].event, wait.events[0].args);
```

To easily test this script, we can add a shortcut in our `package.json` file.

```json
"scripts": {
    "script": "node scripts/run.js"
```

Before we can test the script, we will need to run `npx hardhat compile` in the terminal to compile our contract.

Once that is done, go ahead and test out the script with `npm run script` to make sure your contract is working as expected.

Now we can run `npm run script` in our terminal whenever we want to test our contract.
