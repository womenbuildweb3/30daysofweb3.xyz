---
title: Conexión a Nuestro Contrato
description:
optional: false
tweet: "#30DaysofWeb3 @womenbuildweb3 🌈"
---


Ya que queremos conectarnos a nuestro contrato en varias páginas diferentes, agregaremos el código para que el frontend de nuestra aplicación se comunique con nuestro *smart contract* en el folder llamado `utils`.

Dentro de `utils`, cree 2 *files*. El primero que se llame `connectContract.js` y el siguiente, `Web3RSVP.json`.


## Web3RSVP.json

`Web2rSVP.json` es el archivo que manejará el almacenamiento del contrato ABI para que permita al lado frontend conectarse con nuestro contrato.

Abra la carpeta del proyecto para nuestro *smart contract*, copie el ABI de la carpeta `artefacts/contracts` y péguelo en `Web3RSVP.json`.


## connectContract.js

En la parte superior de `connectContract.js`, podemos importar ethers y nuestra ABI.

```javascript
import abiJSON from "./Web3RSVP.json";
import { ethers } from "ethers";
```

Debajo de esto podemos crear una función llamada `connectContract`. Asegúrese de exportar la función en la parte inferior del archivo.

Tenemos acceso a la API global de Ethereum, a la que se puede acceder a través del objeto `window` en `window.ethereum`. Necesitamos acceso a este objeto para conectarnos a nuestro *contract*, por lo que envolveremos nuestra lógica en una declaración `try..catch` para que podamos detectar errores fácilmente.

Al final de la función queremos retornar el *contract* para poder llamarlo desde otro componente. Asegúrese de reemplazar "[YOUR_CONTRACT_ADRESS]" con la dirección del contrato para su contrato deployado.

```javascript
function connectContract() {
    const contractAddress = "0x[YOUR_CONTRACT_ADRESS]";
    const contractABI = abiJSON.abi;
    let rsvpContract;
    try {
        const { ethereum } = window;
  
        if (ethereum.chainId === "0x13881") {
          //checking for eth object in the window, see if they have wallet connected to Polygon Mumbai network
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          rsvpContract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          ); // instantiating new connection to the contract
        } else {
          console.log("Ethereum object doesn't exist!");
        }
      } catch (error) {
        console.log("ERROR:", error);
      }
      return rsvpContract;
  }
  
  export default connectContract;
```

Ahora que podemos conectarnos a nuestro *contract*,en la siguiente sección podemos llamar una función para crear un nuevo evento.

Escritoras: [Avni Agrawal](https://twitter.com/AvniAgrawal1802), [Sarah Schwartz](https://twitter.com/schwartzswartz),
Traductoras: [Dami](https://twitter.com/dakitidami), [Brenda](https://twitter.com/engineerbrenda), Caro Meneses