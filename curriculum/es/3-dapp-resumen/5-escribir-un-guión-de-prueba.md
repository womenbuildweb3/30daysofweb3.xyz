---
title: Escribir un guión de prueba
description: Test your Solidity smart contract using the Hardhat.
optional: false
tweet: "Learn to test smart contracts with #30DaysofWeb3 @womenbuildweb3 ✍️"
---

Podemos probar nuestro *smart contract* localmente antes de implementarlo en una red de prueba para asegurarnos de que funciona según lo previsto.

Cree un archivo en la carpeta `scripts` llamado `run.js`. Comenzaremos importando el casco en la parte superior del archivo para poder usarlo más tarde.

Cree una función asíncrona llamada `main` y otra función asíncrona llamada `runMain`, que utilizará una instrucción `try...catch` para ejecutar la función `main`. En la parte inferior del archivo, podemos ejecutar `runMain()`.

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

Dentro de nuestra función *`main`*, podemos usar hardhat para implementar el contrato localmente agregando el siguiente código:

```javascript
const rsvpContractFactory = await hre.ethers.getContractFactory('Web3RSVP');
const rsvpContract = await rsvpContractFactory.deploy();
await rsvpContract.deployed();
console.log("Contract deployed to:", rsvpContract.address);
```

Hardhat nos permite acceder a diferentes *wallets* de prueba dentro de nuestro script para que podamos simular diferentes *wallets* interactuando con nuestro contrato. Para obtener la dirección de nuestro *wallet* del implementador y un par de otras para probar, usamos el método `getSigners`.

```javascript
const [deployer, address1, address2] = await hre.ethers.getSigners();
```

Lo primero que queremos probar es crear un nuevo evento. Antes de que podamos llamar a este método, necesitamos definir los datos del evento que vamos a usar. Puede usar un CID de IPFS que ya creamos.

```javascript
let deposit = hre.ethers.utils.parseEther("1")
let maxCapacity = 3
let timestamp = 1718926200
let eventDataCID = "bafybeibhwfzx6oo5rymsxmkdxpmkfwyvbjrrwcl7cekmbzlupmp5ypkyfi"
```
A continuación, podemos crear un nuevo evento con nuestros datos simulados. Una vez que se realiza la transacción, `txn.wait` devolverá datos sobre la transacción, incluida una matriz de los eventos emitidos que podemos registrar en nuestra consola. Podemos guardar el ID de evento creado para poder usarlo para confirmar su asistencia.

Puede registrar todo el objeto *`wait`* si desea ver todo lo que se devuelve.

```javascript
let txn = await rsvpContract.createNewEvent(timestamp, deposit, maxCapacity, eventDataCID)
let wait = await txn.wait()
console.log("NEW EVENT CREATED:", wait.events[0].event, wait.events[0].args)

let eventID = wait.events[0].args.eventID
console.log("EVENT ID:", eventID)
```

Podemos tener cada cuenta que sacamos de `getSigners` RSVP al evento. Por defecto, hardhat llamará a nuestras funciones de contrato desde la dirección de el *wallet* del implementador. Para llamar a una función de contrato desde otro *wallet*, podemos usar el modificador `.connect(address)`.

Para enviar nuestro depósito, podemos pasar un objeto como último parámetro con el valor establecido en el monto del depósito.

```javascript
txn = await rsvpContract.createNewRSVP(eventID, {value: deposit})
wait = await txn.wait()
console.log("NEW RSVP:", wait.events[0].event, wait.events[0].args)

txn = await rsvpContract.connect(address1).createNewRSVP(eventID, {value: deposit})
wait = await txn.wait()
console.log("NEW RSVP:", wait.events[0].event, wait.events[0].args)

txn = await rsvpContract.connect(address2).createNewRSVP(eventID, {value: deposit})
wait = await txn.wait()
console.log("NEW RSVP:", wait.events[0].event, wait.events[0].args)
```

Podemos confirmar todas las confirmaciones de asistencia con `confirmAllAttendees`. Dado que creamos el evento desde la dirección del implementador, también debemos llamar a esta función desde la dirección del implementador.

```javascript
txn = await rsvpContract.confirmAllAttendees(eventID)
wait = await txn.wait()
wait.events.forEach(event => console.log("CONFIRMED:", event.args.attendeeAddress))
```

Debido a que requerimos que el propietario del evento espere 7 días antes de retirar los depósitos no reclamados, si intentamos llamar a esta función ahora, fallará.

Para evitar esto, *hardhat* nos permite simular el paso del tiempo. Podemos esperar 10 años para asegurarnos de que ha sido suficiente tiempo.

```javascript
// wait 10 years
await hre.network.provider.send("evm_increaseTime", [15778800000000])

txn = await rsvpContract.withdrawUnclaimedDeposits(eventID)
wait = await txn.wait()
console.log("WITHDRAWN:", wait.events[0].event, wait.events[0].args)
```

Para probar fácilmente este script, podemos agregar un acceso directo en nuestro archivo `package.json`.

```json
"scripts": {
    "script": "node scripts/run.js"
```

Ahora podemos ejecutar `npm run script` en nuestra terminal cada vez que queramos probar nuestro contrato.

Continúe y pruebe el script para asegurarse de que su contrato funciona como se esperaba.

Escritoras: [Sarah Schwartz](https://twitter.com/schwartzswartz),
Editoras: [Sarah Z](https://twitter.com/haegeez),
Traductoras: [Dami](https://twitter.com/dakitidami), [Brenda](https://twitter.com/engineerbrenda), Caro Meneses