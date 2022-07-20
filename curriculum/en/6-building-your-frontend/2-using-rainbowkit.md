---
title: Add Wallet Connection
description: Add wallet connection to your dapp with RainbowKit and wagmi.sh
optional: false
---

Now that we’ve wrapped our app with the `WagmiConfig` and `RainbowKitProvider` components, we can use wagmi hooks and RainbowKit’s `ConnectButton` component to enable users to connect their wallet and to inform the user that their wallet is connected.

In `/components/Navbar.js`, we can import RainbowKit’s `ConnectButton` component and wagmi’s `useAccount` and `useDisconnect` hooks. Add the following imports below the `import Navmenu from "./Navmenu";` line:

```javascript
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useDisconnect } from "wagmi";
```

We’ll use the `useAccount` hook to access the connected wallet if it exists, and the `useDisconnect` hook to disconnect the currently connected wallet. You can add these constants directly below the beginning of our Navbar function, like so:

```javascript
export default function Navbar() {
    const { data: account } = useAccount();
    const { disconnect } = useDisconnect();
```

In our `Navbar`, we can check the user's wallet connection status. If the user's wallet is connected, we will render a button that displays the user's wallet address and toggles a dropdown menu. Otherwise, if the user's wallet is not connected, we will render RainbowKit’s “Connect Wallet” button. We can add this button after the Create Event button.

```javascript
    </Link>
    {account ? (
        <Navmenu account={account} disconnect={() => disconnect()} />
    ) : (
        <ConnectButton />
    )}
</div>
```

Here's what your Navbar.js file should look like:

```javascript
import { useState, useEffect } from "react";
import Link from "next/link";
import Navmenu from "./Navmenu";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useDisconnect } from "wagmi";

export default function Navbar() {
  const { data: account } = useAccount();
  const { disconnect } = useDisconnect();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <header className="bg-white border-b-2 border-gray-100">
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          aria-label="Top"
        >
          <div className="w-full py-6 flex flex-wrap items-center justify-between border-b border-indigo-500 lg:border-none">
            <div className="flex items-center">
              <Link href="/">
                <a>web3rsvp</a>
              </Link>
            </div>
            <div className="ml-10 space-x-4 flex items-center">
              <Link href="/create-event">
                <a className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 border border-indigo-100 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Create Event
                </a>
              </Link>
              {account ? (
                <Navmenu account={account} disconnect={() => disconnect()} />
              ) : (
                <ConnectButton />
              )}
            </div>
          </div>
        </nav>
      </header>
    )
  );
}
```

We pass the account object and disconnect function to our Navmenu component. The following two steps **are already done for you.**

In `/components/Navmenu.js`, you'll notice that we display the connect wallet address with this line:

```javascript
<p className="text-ellipsis overflow-hidden">{account.address}</p>
```

We also enable users to disconnect their wallets:

```javascript
<a
  onClick={disconnect}
  className={joinClassNames(
    account ? "bg-gray-100 text-gray-900" : "text-gray-700",
    "block px-4 py-2 text-sm cursor-pointer"
  )}
>
  Log Out
</a>
```

Throughout our dApp, we check the user's wallet connection to conditionally render the UI by using the `useAccount` hook from wagmi.

After successful configuration and importing, when you click the connect button, you should expect a UI (user interface, basically the look and feel of an app or page.) like this:

![RainbowKit Ui](https://i.imgur.com/QgE9oIj.jpg)

**Note:** RainbowKit recently announced a new command line script to create a Next.js app with RainbowKit and wagmi set up for you. Learn more about it here: https://www.rainbowkit.com/docs/installation#quick-start
