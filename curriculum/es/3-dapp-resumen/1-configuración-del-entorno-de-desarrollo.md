---
title: Configuración del entorno de desarrollo
description: Setup your developer environment for building full-stack dapps.
optional: false
tweet: "Ship a full-stack event platform dapp with #30DaysofWeb3 @womenbuildweb3 🎫"
---

## IDE (Entorno de Desarrollo Integrado)

Aunque cualquier IDE puede funcionar, recomendamos el uso de **VSCode**, un IDE gratuito que puede descargar desde [aquí](https://code.visualstudio.com/download)

## Node.js y npm

Necesitará tener instalado Node.js y NPM en su computador.

**Node.js** es un entorno de tiempo de ejecución de JavaScript (de ahí su terminación en .js haciendo alusión al lenguaje JavaScript), lo que permite a los desarrolladores crear aplicaciones de JavaScript de pila completa. **NPM** significa _administrador de paquetes de nodos_ y es la interfaz de línea de comandos para un ecosistema vibrante de paquetes Node.js de open-source. Si desea obtener mayor información sobre NPM, consulte [este artículo.](https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/)

Para verificar si tiene instalado Node.js y npm, puede ejecutar `node -v` y npm `npm -v`.

Para instalar Node.js y npm, recomendamos usar **nvm**, un administrador de versiones de nodos que lo ayuda a administrar varias versiones de Node.js y de npm. Siga la guía de instalación [aquí.](https://github.com/nvm-sh/nvm#installing-and-updating)

Una vez que haya instalado nvm, ejecute lo siguiente para descargar una version estable de Node.js y npm.

```
nvm install --lts
nvm use --lts
```

Confirme su versión de Node.js llamando `nvm current`. Debe estar utilizando Node v16.

Ahora estamos listos para continuar! Estaremos instalando dependencias en nuestra dApp a medida que vayamos contruyéndola, pero con esto ya estamos listos para ir descargando lo demás progresivamente.

## Configuración del proyecto

### Crear un _smart contract_

Durante estos 30 días, trabajaremos para crear un dapp RSVP completo. Piense en ello como un eventbrite nativo de web3, excepto que los asistentes deben depositar ETH para confirmar su asistencia y lo recuperarán cuando se registren en el evento.

¡Empecemos a codear! Hoy escribiremos la mitad del _smart contract_.

**Crea un nuevo proyecto desde tu terminal:**

- Navegue a la carpeta en la que desea crear este proyecto. Si desea crear este proyecto en su escritorio, navegue a ese directorio ejecutando `cd Desktop`.
- Cree una nueva carpeta para que su proyecto viva en `mkdir web3rsvp`
- Ejecute el siguiente comando para inicializar un proyecto npm: `npm init` y despuse siga las instrucciones para instalar
- Luego, ejecute el siguiente comando para instalar hardhat, un entorno de desarrollo para compilar, implementar, probar y depurar su código a Ethereum: `npm install --save-dev hardhat` o `yarn add --dev hardhat`
- Seleccione un proyecto básico, seleccione `y` para todas las indicaciones.
- Ahora abra este proyecto recién creado en su editor de código. Haga esto abriendo el código en VS Code y presionando 'file'> 'open'> busque la carpeta que acaba de crear.

---

En la carpeta `contracts`, diríjase a su archivo `Greeter.sol`.

Elimine todo en este archivo excepto las dos primeras líneas, más el comentario en la parte superior.

Este es el aspecto que debería tener su archivo:

```
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
```
