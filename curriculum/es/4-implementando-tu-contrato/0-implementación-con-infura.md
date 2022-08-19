---
title: Implementación con Infura
description: Learn about Infura, a web3 infrastructure provider that helps developers to build apps on Ethereum without having to manage their own blockchain nodes.
optional: false
tweet: "Learn how @infura_io supports dapps built on Ethereum with #30DaysofWeb3 @womenbuildweb3 💪"
---

![Deploying With Infura](https://user-images.githubusercontent.com/15064710/180662065-a61d5bcb-a3fb-4b31-9b9a-37d1754095cf.png)

## ¿Qué es Infura?

Infura es una empresa que proporciona herramientas de infraestructura web3 que permiten a los desarrolladores desarrollar en un _blockchain_. Infura proporciona los nodos que son el punto de entrada en el _blockchain_ y le permiten ejecutar transacciones. Sin un proveedor de nodos como Infura, un desarrollador tendría que ejecutar su propio nodo para comunicarse con el _blockchain_, lo que puede ser costoso, difícil y lento.

## Cómo encaja Infura en tu proyecto

Una vez que implementamos nuestro _smart contract_, necesitamos que pueda comunicarse con el _blockchain_ para ejecutar transacciones (crear un nuevo evento, confirmar la asistencia a un evento existente, etc.). Debido a que no queremos ejecutar nuestro propio nodo, usaremos la infraestructura de nodos de Infura para brindarnos la funcionalidad de interactuar con el _blockchain_.

## Actualice la configuración del hardhat e instale dotenv

También necesitamos actualizar nuestro archivo `hardhat.config.js` con información sobre la red en la que implementaremos, un URL de proveedor de Infura y la clave privada de nuestro _wallet_. Debido a que esto incluye información confidencial (Recordatorio: _¡NUNCA COMPARTA SU CLAVE PRIVADA CON NADIE!_), almacenaremos la URL de nuestro proveedor y la clave privada en un nuevo archivo .env en el directorio raíz de nuestra carpeta.

En la raíz de su proyecto, cree un archivo llamado ".env".

Luego, instale `dotenv` ejecutando `npm install dotenv`. Dotenv es un módulo que carga variables de entorno desde un archivo .env: le permitirá mantener sus claves privadas seguras mientras las usa en su aplicación y evitará que las envíe a github.

Actualice su archivo `hardhat.config.js` así:

```javascript
require("@nomiclabs/hardhat-waffle");  //un nuevo update de hardhat requiere importar 'hardhat-toolbox'
require("dotenv").config();

module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: process.env.STAGING_INFURA_URL,
      accounts: [`0x${process.env.STAGING_PRIVATE_KEY}`],
      gas: 2100000,
      gasPrice: 8000000000,
    },
  },
};
```

## Configurar Infura con Polygon Mumbai

- Navegue a https://infura.io/ y cree una cuenta.
- Vaya a 'Panel de control' y luego presione 'Crear nuevproyecto.Seleccione 'Ethereum' de la selección desplegable y asigne un nombre a su proyecto.

- En la sección "Claves", haga clic en el menú desplegable para cambiar el punto final a Polygon Mumbai.
  Si está atenuado, deberá seleccionarlo como un complemento. Infura puede solicitar una tarjeta de crédito para proteger el servicio contra el spam de los bots, pero no le cobrará (asegúrese de que el monto total sea $0).

- Copie el nuevo punto final que aparece en Infura después de seleccionar Polygon Mumbai y guárdelo como una variable en su proyecto en el archivo .env que acabamos de crear.

- Luego, obtenga la clave privada de su billetera Coinbase abriendo la extensión y yendo a configuración> mostrar frase de recuperación. Inicie sesión con su contraseña y luego copie su clave privada.

- Regrese a su archivo .env y cree una variable llamada `STAGING_PRIVATE_KEY` y establezca el valor para que sea su clave privada que acaba de copiar. Así es como debería verse ahora su archivo `.env`

```
STAGING_INFURA_URL=https://polygon-mumbai.infura.io/v3/12345678
STAGING_PRIVATE_KEY=1234_YOUR_PRIVATE_KEY_5678
```

---

Escritoras: [Sarah Schwartz](https://twitter.com/schwartzswartz),
Editoras: [Kristen](https://twitter.com/cuddleofdeath),
Traductoras: [Dami](https://twitter.com/dakitidami), [Brenda](https://twitter.com/engineerbrenda), [Caro Meneses](https://twitter.com/carmedinat), [Gabi] (https://twitter.com/gsabate)
