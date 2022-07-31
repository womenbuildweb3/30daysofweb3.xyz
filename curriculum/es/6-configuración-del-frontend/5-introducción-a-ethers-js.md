---
title: Conexión a nuestro contrato con Ethers.js
description: Ethers.js es una librería de JavaScript que permite a los developers interactuar fácilmente con el blockchain de Ethereum y su ecosistema.
optional: false
tweet: "Conéctese a un contrato inteligente usando Ethers.js con #30DaysofWeb3 @womenbuildweb3 🌈"
---

## Que es Ethers.js?

**Ethers.js** *es una librería de JavaScript que permite a los developers interactuar fácilmente con el blockchain de Ethereum y su ecosistema*.

Las aplicaciones Ethers Wallet Container viven dentro de un iframe que las separa entre sí y de los datos privados (como *private keys*).

Para operaciones de solo lectura, la aplicación se conecta directamente al blockchain de Ethereum.

Para escribir en blockchain, la dApp pasa mensajes y transacciones al contenedor y renuncia al control de la aplicación. Una vez que el usuario ha aprobado (o rechazado) la transacción, se devuelve el control a la dApp e igualmente se devuelve una copia firmada del mensaje o la transacción.

La librería de Ethers App maneja toda esta interacción por usted.


## Conexión a nuestro contrato

Ya que queremos conectarnos a nuestro contrato en varias páginas diferentes, agregaremos el código para que el frontend de nuestra aplicación se comunique con nuestro *smart contract* en el folder llamado `utils`.

Dentro de `utils`, crea los dos archivos siguientes:

- Nuestro primer archivo se llamará `connectContract.js`.
- Para nuestro segundo archivo, lo llamaremos `Web3RSVP.json`.

`Web3RSVP.json` es el archivo que se encargará de almacenar el contrato ABI para permitir que nuestra interfaz se comunique con nuestro contrato. Abra la carpeta del proyecto para nuestro contrato inteligente, copie el ABI de la carpeta `artefactos/contratos` y péguelo en `Web3RSVP.json`.

En la parte superior de `connectContract.js`, podemos importar ethers y nuestra ABI.

```javascript
import abiJSON from "./Web3RSVP.json";
import { ethers } from "ethers";
```

Debajo de esto podemos crear una función llamada `connectContract`. Asegúrese de exportar la función en la parte inferior del archivo.

Tenemos acceso a la API global de Ethereum, a la que se puede acceder a través del objeto `window` en `window.ethereum`. Necesitamos acceso a este objeto para conectarnos a nuestro *contract*, por lo que envolveremos nuestra lógica en una declaración `try..catch` para que podamos detectar errores fácilmente.

Al final de la función queremos retornar el *contract* para poder llamarlo desde otro componente. Asegúrese de reemplazar "[YOUR_CONTRACT_ADRESS]" con la dirección del contrato para su contrato deployado.

**Nota:** Si no anotó la dirección de su contrato de las lecciones anteriores, puede volver al sitio [Mumbai PolygonScan](https://mumbai.polygonscan.com/) y pegar su dirección de Coinbase Wallet. Allí, debería ver una transacción que dice algo como `Crear: Web3RSVP` o como sea que haya llamado su contrato. Haga clic en ese enlace para ser dirigido a la página. En la parte superior, verá la dirección de su contrato. Cópielo y péguelo dentro del campo correcto de contractAddress const a continuación:

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


Escritoras: [Avni Agrawal](https://twitter.com/AvniAgrawal1802),
Editoras: [Sarah Schwartz](https://twitter.com/schwartzswartz),
Traductoras: [Dami](https://twitter.com/dakitidami), [Brenda](https://twitter.com/engineerbrenda), [Caro Meneses](https://twitter.com/carmedinat)