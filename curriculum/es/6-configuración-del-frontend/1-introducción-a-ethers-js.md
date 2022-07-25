---
title: Introducción a Ethers.js
description: Ethers.js es una librería de JavaScript que permite a los developers interactuar fácilmente con el blockchain de Ethereum y su ecosistema.
optional: false
tweet: "#30DaysofWeb3 @womenbuildweb3 🌈"
---


**Ethers.js** *es una librería de JavaScript que permite a los developers interactuar fácilmente con el blockchain de Ethereum y su ecosistema*.

Las aplicaciones Ethers Wallet Container viven dentro de un iframe que las separa entre sí y de los datos privados (como *private keys*).

Para operaciones de solo lectura, la aplicación se conecta directamente al blockchain de Ethereum.

Para escribir en blockchain, la dApp pasa mensajes y transacciones al contenedor y renuncia al control de la aplicación. Una vez que el usuario ha aprobado (o rechazado) la transacción, se devuelve el control a la dApp e igualmente se devuelve una copia firmada del mensaje o la transacción.

La librería de Ethers App maneja toda esta interacción por usted.