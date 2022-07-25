---
title: Crear un script de implementación
description: Deploy your smart contract to Polygon Mumbai test network using Hardhat.
optional: false
tweet: "Deploy a smart contract to @0xPolygon Mumbai testnet with #30DaysofWeb3 @womenbuildweb3 💪"
---

En nuestra carpeta de scripts, podemos crear un archivo llamado `deploy.js`, donde podemos pegar una copia de nuestro script de prueba y sacar cualquier transacción de prueba. Nuestro archivo `deploy.js` debería verse así:

```javascript
const hre = require("hardhat");

const main = async () => {
  const rsvpContractFactory = await hre.ethers.getContractFactory('Web3RSVP');
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

## Implementación en Mumbai Testnet

Necesitaremos probar MATIC en nuestro Coinbase Wallet en la red de Mumbai para implementar nuestro contrato. Obtenga una prueba gratuita de MATIC aquí ingresando la dirección de su *wallet*: https://faucet.polygon.technology/

Antes de implementar nuestro contrato, queremos asegurarnos de haber compilado la última versión. Para hacer esto, podemos ejecutar `npx hardhat compile` en la terminal desde la carpeta del proyecto.

Para implementar, todo lo que tenemos que hacer es ejecutar el script de implementación que acabamos de crear. Podemos agregar un script en nuestro archivo `package.json` para que podamos reutilizar nuestro comando de implementación si alguna vez lo necesitamos nuevamente.


```json
"scripts": {
    "deploy": "npx hardhat run scripts/deploy.js --network mumbai",

```
Si necesitamos cambiar algo en nuestro contrato y volver a implementar, todo lo que tenemos que hacer es ejecutar `npx hardhat compile` y luego `npm run deploy`.

Escritoras: [Sarah Schwartz](https://twitter.com/schwartzswartz),
Editoras: [Kristen](https://twitter.com/cuddleofdeath),
Traductoras: [Dami](https://twitter.com/dakitidami), [Brenda](https://twitter.com/engineerbrenda), Caro Meneses