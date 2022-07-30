---
title: Creating Your Deploy Script
description: Deploy your smart contract to Polygon Mumbai test network using Hardhat.
optional: false
tweet: "Deploy a smart contract to @0xPolygon Mumbai testnet with #30DaysofWeb3 @womenbuildweb3 💪"
---

In our scripts folder, we can create a file called `deploy.js`, where we can paste a copy of our test script and take out any test transactions. Our `deploy.js` file should look like this:

```javascript
const hre = require("hardhat");

const main = async () => {
  const rsvpContractFactory = await hre.ethers.getContractFactory("Web3RSVP");
  const rsvpContract = await rsvpContractFactory.deploy();
  await rsvpContract.deployed();
  console.log("Contract deployed to:", rsvpContract.address);
};

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

## Deploying to Mumbai Testnet

We’ll need test MATIC in our Coinbase Wallet on the Mumbai network in order to deploy our contract.

For this step, you'll need your wallet address. To find this in your Coinbase Wallet, click on the "Assets" tab (the first tab on the app). Then, click the downward facing arrow to show your wallet address. You'll want to copy the one that says, "Your Ethereum Address". After copying your address, get some free test MATIC here by entering in your wallet address: https://faucet.polygon.technology/

Before we deploy our contract, we want to make sure we have compiled the latest version. To do this we can run `npx hardhat compile` in the terminal from the project folder. If successful, you should see a message that reads: "Compiled 1 Solidity file successfully."

To deploy, all we need to do is run the deploy script we just created. We can add a script in our `package.json` file so we can reuse our deploy command if we ever need it again.

```json
"scripts": {
    "deploy": "npx hardhat run scripts/deploy.js --network mumbai",

```

If we ever need to change something in our contract and redeploy, all we have to do is run `npx hardhat compile` and then `npm run deploy`. If this was successful, you will see something similar to this message in your terminal: `Contract deployed to: 0x80B72dcab8FA1d220E9e8bc93acC75EA36535623`.

---

Writers: [Sarah Schwartz](https://twitter.com/schwartzswartz),
Editors: [Kristen](https://twitter.com/cuddleofdeath)
