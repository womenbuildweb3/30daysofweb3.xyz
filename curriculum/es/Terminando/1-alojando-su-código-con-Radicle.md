---
title: Alojando su código con Radicle
description: Learn how to host your code on Radicle, a decentralized code collaboration network.
optional: true
optionalMsg: Opcional
optionalNextPath: /es/curriculum/9-terminando/1-finale
tweet: "Host code for a full-stack dapp on @radicle with #30DaysofWeb3 @womenbuildweb3 💻"
---

Ahora que hemos terminado nuestra aplicación, podemos cargar nuestro código en Radicle para mantenerlo seguro. Radicle es una red peer-to-peer para almacenar repositorios git diseñados para estar libres de censura. Puede usar Radicle de manera gratuita de manera similar a como usaría GitHub o cualquier otro sitio de alojamiento de repositorio basado en git.

El principal beneficio de usar Radicle es que es un protocolo descentralizado en lugar de una plataforma centralizada. Esto significa que no puede haber un único punto de falla que resulte en la pérdida o censura de su contenido.

Esta sección es opcional, así que no se preocupe si tiene algún problema. Si realmente le emociona y le interesa Radicle y necesita ayuda con esta sección, ¡contáctenos en discord!

## Instalación de la línea de comando (CLI) Radicle

Puede encontrar la documentación oficial que enseña cómo instalar Radicle CLI a continuación:

https://docs.radicle.xyz/primeros pasos
https://github.com/radicle-dev/radicle-cli

### Instalación CLI para Mac

Antes de instalar Radicle CLI, necesitaremos instalar algunas dependencias. Primero, instalaremos Rust and Cargo ejecutando los siguientes comandos en orden:

```
curl https://sh.rustup.rs -sSf | sh
```

```
source $HOME/.cargo/env
```

A continuación descargaremos cmake aquí: https://cmake.org/download/

Instale la aplicación y muévala a la carpeta de Aplicaciones, ábrala y seleccione Herramientas → Cómo instalar para uso de línea de comandos en la barra de herramientas.

![Captura de pantalla de cómo instalar para usar la línea de comandos en la barra de herramientas](https://i.imgur.com/GDLGFv7.png)

Elija una de las opciones en la ventana emergente para instalar cmake para la línea de comandos. Si no está seguro de cuál usar, use el siguiente comando:

```
sudo "/Applications/CMake.app/Contents/bin/cmake-gui" --install
```

Ahora puede ejecutar el siguiente comando para finalmente instalar Radicle CLI. Esto puede tardar unos minutos.

```
cargo install --force --locked --git https://seed.alt-clients.radicle.xyz/radicle-cli.git radicle-cli
```

Ejecute `rad` para probar si la instalación fue exitosa. En caso afirmativo, deberá ver la información a continuación:

![Comandos `rad` comunes](https://i.imgur.com/A9wZqqq.png)

## Creación de un repositorio Radicle

Para crear un nuevo repositorio, abra la carpeta de su proyecto en su terminal y ejecute `rad auth` para crear la cuenta de usuario. Ingrese un nombre de usuario y contraseña, y la interfaz generará su Radicle Peer ID (ID de dispositivo) y URN personal (ID de usuario). También es posible obtener esta información más tarde ejecutando `rad self` en su terminal.

**Nota:** _Actualmente no hay forma de recuperar una frase de contraseña perdida u olvidada, ¡así que guárdela de forma segura!_

A continuación, puede ejecutar `rad init` e ingresar un nombre y una descripción para el repositorio. Esto debería generar un ID de proyecto. Es posible obtener este ID nuevamente ejecutando `rad.`.

Ahora puede enviar el repositorio a Radicle ejecutando `rad push`. La primera vez que envíe su código, se le pedirá que seleccione un nodo. Puede seleccionar cualquier opción.

¡Ahora su código está alojado en Radicle! 🎉Aquí debe poder ver en dónde puede visualizar su código alojado.

No se preocupe por almacenar esto, ya que siempre puede ejecutar `rad ls` para ver una lista de todos los repositorios que ha enviado a Radicle.

Si ve un error en su navegador que menciona su red, inicie sesión en su Coinbase Wallet o Metamask y cambie la red a la Mainnet de Ethereum.

### Hacer cambios

Puede agregar cambios con `git add` y `git commit` tal como lo haría con cualquier repositorio de git. Simplemente ejecute `rad push` para enviar sus commits a Radicle.

### Clonación

Si quiere compartir su código con otras personas que también tienen instalada la interfaz Radicle, podrán ejecutar `rad clone` más el URN del proyecto y el nodo inicial desde el cual deseean clonarlo.

```
rad clone rad:git:hnrkknc6ntqasrnej6ous5krdw464etyo3i7y --seed pine.radicle.garden
```

---

Escritoras: [Sarah Schwartz](https://twitter.com/schwartzswartz),
Traductoras: [Dami](https://twitter.com/dakitidami), [Brenda](https://twitter.com/engineerbrenda), [Caro Meneses](https://twitter.com/carmedinat)
