# Connect your wallet with RainbowKit ESPANOL

RainbowKit es una biblioteca React que le facilita a los desarrolladores conectar su dApp a una billetera. Es fácil de usar, responsiva, personalizable y adaptable. Desde la conexión básica y la desconexión de la billetera hasta la visualización de saldos, RainbowKit puede funcionar con varias billeteras, intercambiar cadenas de conexión y convertir direcciones a ENS (*Ethereum Name Service*).

Puede personalizar completamente su tema RainbowKit e incluir solo las funciones necesarias para sus dApps. RainbowKit utiliza las bibliotecas más utilizadas en el ecosistema web3: ethers y wagmi.



## Importación y Configuración de Cadenas
## Loading Environment Variables

At the root of your project, create a new file called `.env.local`. In the web3rsvp-frontend-starter, there is a file called **.env.example** that shows an example of how to set up your .env.local file. This file is where we will keep secrets like our API keys so they aren't exposed on the frontend.

While you're in this file, you can also replace `<Your Infura project id>` with your Infura project id. You can find that by going to your Infura dashboard and selecting your project settings.

## Importing and Configuration of Chains

We can configure RainbowKit in our `_app.js` file (located in the `pages` folder of the project). To configure chains, as well as the connectors that are required, a wagmi client has to be set up. You are free to use as many chains as you wish but in our dApp, we used Polygon chain since we deployed on the Polygon testnet (Mumbai).

We will start by adding the following imports to the top of our file, below the `import "../styles/globals.css";` line:

```
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from "wagmi/providers/public";
```

Next, we will have to configure the chains we want to connect to with our Infura project ID and initialize the `wagmiClient`.

```
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

```
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
