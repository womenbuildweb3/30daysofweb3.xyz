# Building your frontend

## Introduction

In this lesson, we will build a frontend for our dapp using React, Next.js, ethers.js, Rainbowkit, Web3.Storage, and The Graph. Our app will work with Coinbase Wallet or other user-controlled wallets like MetaMask, Rainbow, and WalletConnect. Users will be able to connect their wallet and interact with our smart contract so they can create new events, RSVP to events, and confirm attendees.

In the next few sections, we will work on enabling users to create new events. First, we will set up RainbowKit to support an intuitive muli-wallet experience in our app. Next, we will integrate Web3.Storage to store some event data off-chain, or off the blockchain. Then we will import and use ethers.js to interact with our deployed smart contract. Finally, we will brush up our frontend to call our smart contract's `createNewEvent` function and handle successful or failed ransactions.

## Setup

To get started, you can fork and clone our starter repo, which has some design assets to make our app look a little nicer.

- Go to the repo by clicking [here](https://github.com/womenbuildweb3/web3RSVP-frontend-starter), and then click the **fork** button. You've now created your own fork (your own version of this project).
- Now you need to get the code locally on your machine. Click the **clone** button and copy the link that appears from the drop down.
- In your terminal, in the correct folder (Desktop), run this: `git clone https://github.com/...` (paste in your own link that you copied). If done successfully, you should see something that says: `Cloning into 'web3RSVP-frontend-starter'...`.
- Next, make sure to change directory into the new folder by running the `cd web3RSVP-frontend-starter` command in your terminal.

Install all dependencies needed for this project by running `npm install` or `yarn`. You can start the development server by running `npm run dev` or `yarn run dev`.

Now you have this code on your computer! Open this folder in VS code either manually or by entering the `code .` command into the terminal (Note: On some Linux systems, the `code .` command may require additional installation if your VSCode was not previously installed via the terminal.)

If you want to change any of the the designs or images used along the way, go for it! This project is 100% yours to customize however you like.
