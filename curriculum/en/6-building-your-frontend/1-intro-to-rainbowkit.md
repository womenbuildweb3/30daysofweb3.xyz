---
title: Connect your wallet with RainbowKit
description: Easily support intuitive wallet connection experiences in your dapp by using RainbowKit, a React library.
optional: false
tweet: "Learn to use @rainbowdotme's RainbowKit with #30DaysofWeb3 @womenbuildweb3 🌈"
---

![RainbowKit UI](https://i.imgur.com/QgE9oIj.jpg)

## What is RainbowKit?

**RainbowKit** is _a React library that makes it simple for developers to add wallet connection to their dapp_. It's simple to use, responsive, customizable, and adaptable. From basic features like connecting and disconnecting a wallet, to the displaying of balances, RainbowKit is able to work with various wallets, swap connection chains, and convert addresses to ENS (Ethereum Name Service).

You can fully customize your RainbowKit theme and include only the necessary features for your dApps. RainbowKit utilizes the most commonly used libraries in the web3 ecosystem: ethers and wagmi.

## Loading Environment Variables

At the root of your project, create a new file called `.env.local`. You can use the `touch .env.local` command in your terminal to create this file. In the web3rsvp-frontend-starter, there is a file called **.env.example** that shows an example of how to set up your .env.local file. This file is where we will keep secrets like our API keys so they aren't exposed on the frontend. 

The `.env.local` file should look something like this:

```
# Create a .env.local file and populate these with corresponding values

// This is where you the Web3storage API token goes.
WEB3STORAGE_TOKEN=<Api_Token>

// This is where the Alchemy API or Infura API key goes
NEXT_PUBLIC_INFURA_ID=<Your Infura API key>
NEXT_PUBLIC_TESTNET_EXPLORER_URL=https://mumbai.polygonscan.com/
```

While you're in this file, you can also replace `<Your Infura API key>` with your Infura API key. You can find that by going to your [Infura dashboard](https://infura.io/dashboard) and selecting `MANAGE KEY`. If you're using Alchemy, you can find the API key in your [Alchemy dashboard](https://dashboard.alchemyapi.io/) and selecting `VIEW KEY`.

> Note: don't worry about the Web3storage API token. We'll be setting up webstorage in a later section.

> Note: Infura has renamed project id to API Key. [see more here](https://docs.infura.io/infura/networks/ethereum/how-to/secure-a-project/project-id) - you will no longer see project id in your project settings. Select the API Key found under the endpoints tab of your project settings!

## Importing and Configuration of Chains

We can configure RainbowKit in our `_app.js` file (located in the `pages` folder of the project). To configure chains, as well as the connectors that are required, a wagmi client has to be set up. You are free to use as many chains as you wish but in our dApp, we used Polygon chain since we deployed on the Polygon testnet (Mumbai).

We will start by adding the following imports to the top of our file, below the `import "../styles/globals.css";` line:

```javascript
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from "wagmi/providers/public";
```

Next, we will have to configure the chains we want to connect to with our Infura project ID and initialize the `wagmiClient`.

```javascript
const infuraId = process.env.NEXT_PUBLIC_INFURA_ID;

const { chains, provider } = configureChains(
  [chain.polygon],
  [infuraProvider({ infuraId }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "web3rsvp",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});
```

By setting `autoConnect` to `true`, we can keep the user logged in automatically so they only have to connect their wallet once.

Within our `_app.js` file, we can wrap our application with `RainbowKitProvider` and `WagmiConfig`.

```javascript
export default function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
```

## ✋ Need Help?

If you need help, check to see if your question has already been asked in **#section-6-help**. If you don't see it in there, post a question with any details that would make it easy for a team member to help you. We'll answer most frequently asked questions in live office hours, so keep an eye out in **#announcements** for those!

---

Writers: [Busayo](https://twitter.com/AmoweO),
Editors: [Sarah Z](https://twitter.com/haegeez), [Krystal](https://twitter.com/theekrystallee)
