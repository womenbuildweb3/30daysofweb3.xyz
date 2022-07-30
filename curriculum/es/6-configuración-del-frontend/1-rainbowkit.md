---
title: RainbowKit
description: Admita fácilmente experiencias de conexión de billetera intuitivas en su dapp usando RainbowKit, una biblioteca de React.
optional: false
tweet: "Aprende a usar @rainbowdotme's RainbowKit con #30DaysofWeb3 @womenbuildweb3 💥"
---

## Que es RainbowKit?

**RainbowKit** es una biblioteca React que le facilita a los desarrolladores conectar su dApp a una billetera. Es fácil de usar, responsiva, personalizable y adaptable. Desde la conexión básica y la desconexión de la billetera hasta la visualización de saldos, RainbowKit puede funcionar con varias billeteras, intercambiar cadenas de conexión y convertir direcciones a ENS (*Ethereum Name Service*).

Puede personalizar completamente su tema RainbowKit e incluir solo las funciones necesarias para sus dApps. RainbowKit utiliza las bibliotecas más utilizadas en el ecosistema web3: ethers y wagmi.

## Cargando variables de entorno

En la raíz de su proyecto, cree un nuevo archivo llamado `.env.local`. En web3rsvp-frontend-starter, hay un archivo llamado **.env.example** que muestra un ejemplo de cómo configurar su archivo .env.local. Este archivo es donde guardaremos secretos como nuestras claves API para que no estén expuestos en la interfaz.

Mientras esté en este archivo, también puede reemplazar `<Your Infura project id>` con su ID de proyecto Infura. Puede encontrarlo yendo a su panel de Infura y seleccionando la configuración de su proyecto.

## Importación y Configuración de Cadenas
Podemos configurar Rainbowkit en nuestro archivo `_app.js`. Para configurar las cadenas, así como los conectores que se requieran, se debe configurar un cliente wagmi. Puede usar tantas cadenas como desee, pero en nuestra dApp, hemos usado la cadena Polygon desde que implementamos en la red de prueba Polygon (Mumbai).

```javascript
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from "wagmi/providers/public";
```

A continuación, tendremos que configurar las cadenas a las que nos queremos conectar con nuestro ID de proyecto Infura e inicializar el `wagmiClient`.

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

Al establecer `autoConnect` en `true`, podemos mantener al usuario conectado automáticamente para que solo tenga que conectar su billetera una vez.

Dentro de nuestro archivo `_app.js`, podemos empaquetar nuestra aplicación con `RainbowKitProvider` y `WagmiConfig`.

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

Escritoras: [Sarah Z](https://twitter.com/haegeez), [Busayo](https://twitter.com/AmoweO)
Traductoras: [Dami](https://twitter.com/dakitidami), [Brenda](https://twitter.com/engineerbrenda), [Caro Meneses](https://twitter.com/carmedinat)