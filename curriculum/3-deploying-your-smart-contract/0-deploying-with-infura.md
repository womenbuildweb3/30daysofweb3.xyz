# Deploying with Infura

## What is Infura?

[**Infura**](https://infura.io/) is a company that provides web3 infrastructure tools that allow developers to develop on a blockchain. Infura provides the nodes that are the entry point to the blockchain and allow you to execute transactions. Without a node provider like Infura, a developer would have to run their own node to communicate with the blockchain, which can be expensive, difficult, and time consuming.

## How Infura fits into your project

Once we deploy our smart contract, we need it to be able to communicate with the blockchain to execute transactions (create a new event, rsvp to an existing event, etc). Because we don’t want to run our own node, we’ll use Infura’s node infrastructure to give us the functionality of interacting with the blockchain.

## Update hardhat config & install dotenv

We also need to update our `hardhat.config.js` file with information about what network we will deploy to, a provider URL from Infura, and our wallet’s private key. Because this includes sensitive information ( Reminder: _NEVER SHARE YOUR PRIVATE KEY WITH ANYONE!_ ), we will store our provider URL and private key in a new .env file in the root directory of our folder.

At the root of your project, create a file called ".env". Alternatively, you can also run `touch .env` in your terminal and it will create the .env file for you.

Then, install `dotenv` by running `npm install dotenv`. Dotenv is a module that loads environment variables from a .env file - it will allow you to keep your private keys secure while using them in your app and will keep you from committing these to github.

Update your `hardhat.config.js` file like this:

```javascript
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: process.env.STAGING_INFURA_URL,
      accounts: [`0x${process.env.STAGING_PRIVATE_KEY}`],
      gas: 2100000,
      gasPrice: 8000000000,
    },
  },
};
```

## Configure Infura with Polygon Mumbai

Navigate to https://infura.io/ and create an account.
Go to ‘Dashboard’ and then hit ‘Create new project’. Select ‘Ethereum’ from the dropdown selection and name your project.

Under the section, ‘Keys’, click the dropdown to change the endpoint to Polygon Mumbai.
If this is grayed out, you’ll have to select it as an add-on. Infura may ask for a credit card to protect the service from being spammed by bots, but will not charge you (make sure the total amount shows $0).

Copy the new endpoint that appears in Infura after selecting Polygon Mumbai and save that as a variable to your project in the .env file we just created.

Next, get the private key from your Coinbase wallet by opening the extension and going to _Settings > Advanced Settings > Show private key_. Log in using your password and then copy your private key.

Head back to your .env file and create a variable called `STAGING_PRIVATE_KEY` and set the value to be your private key that you just copied. Here is what your `.env` file should look like now

```
STAGING_INFURA_URL=https://polygon-mumbai.infura.io/v3/12345678
STAGING_PRIVATE_KEY=1234_YOUR_PRIVATE_KEY_5678
```
