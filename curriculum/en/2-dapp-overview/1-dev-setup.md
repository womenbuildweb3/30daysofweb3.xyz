---
title: Setup Your Dev Environment
description: Setup Your Dev Environment
optional: false
---

## IDE (Integrated Developer Environment)

Although any IDE will work, we recommend the use of **VSCode**, a free IDE which you can download [here.](https://code.visualstudio.com/download)

## Node.js and NPM

You will need Node.js and npm installed on your machine.

**Node.js** is a runtime environment that executes JavaScript outside the browser, enabling developers to build full-stack JavaScript apps. **NPM** stands for *node package manager* and is the command-line interface to a vibrant ecosystem of open-source Node.js packages. If you want to learn more about NPM, check out [this article](https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/).

To check if you have Node.js and npm installed, you can run `node -v` and `npm -v`. If you get back a number that looks like 8.0.6, that means you do have these installed.
![node version](https://user-images.githubusercontent.com/15346823/179375406-e00e704f-0dfe-40a4-82a3-82463766fe4c.png)

To download Node.js and npm, we recommend using **nvm**, a node version manager that helps you manage various Node.js and npm versions. Follow the installation guide [here.](https://github.com/nvm-sh/nvm#installing-and-updating)

Once you have installed nvm, run the following to download a stable version of Node.js and npm.

```
nvm install --lts
nvm use --lts
```

Confirm your Node.js version by calling `nvm current`. You should be using Node v16.

Now you’re good to go! We’ll be installing dependencies in our app as we build, but this will set you up to be able to download smoothly.

## Project Setup

### Create a Smart Contract

During these 30 days, we’ll be working to create a full-stack RSVP dapp. Think of it as a web3-native eventbrite, except attendees need to deposit ETH to rsvp and will get it back upon them checking in at the event.

Let’s start coding! Today we’ll be writing about ½ of the smart contract.

**Create a new project from your terminal:**

- Navigate to the folder you want to create this project inside. If you want to create this project on your Desktop, navigate to that directory by running `cd Desktop`.
- Create a new folder for your project to live in `mkdir web3rsvp`
- Run the following command to initialize an npm project: `npm init` and then follow the instructions (you can press enter and say yes on everything if you'd like!).
- After the project initialization and a successful creation of a `package.json` file, run the following command to install hardhat (_a development environment to compile, deploy, test, and debug your Ethereum code_): `npm install --save-dev hardhat` or `yarn add --dev hardhat`.
- After this, run `npx hardhat`.
- Select a basic project, select `y` for all prompts. `y` simply stands for `yes`.
- Finally, open this newly created project in your code editor. Do this by opening VS code and hitting `file` > `open` > look for the folder you just created.
- If you have any issues with this setup, you can fork and then clone this [starter repo](https://github.com/womenbuildweb3/hardhat-sample).

First, fork the project:
![fork the project](https://user-images.githubusercontent.com/15346823/179375505-7b311148-c5cf-4448-bdea-fc2077053281.png)

Then, clone the repo onto your machine by copying the link that is given to you when you press `code.` Note that the username should be your username. If you still see `womenbuildweb3` as the user name, you haven't forked the repo. After copying the link, run this command in your terminal:
`git clone <insert link here>`

![code](https://user-images.githubusercontent.com/15346823/179375540-3f1060ed-7a2a-48d2-ad20-165822656041.png)

Under the `contracts` folder, head to your `Greeter.sol` file and rename it to `Web3RSVP.sol`.

Delete everything in this file except for the first two lines, plus the comment at the very top.

This is what your file should look like:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
```

The SPDX-License-Identifier helps define the license of our file. In this project, we are choosing the [MIT license](https://spdx.org/licenses/MIT.html). This is because our project is completely open source.

The `pragma solidity ^0.8.4;` line tells the compiler which version of Solidity it will use when compiled. **Important Note:** It's a requirement that the pragma solidity line matches the version of Solidity defined in the module exports of your hardhat.config.js file.
