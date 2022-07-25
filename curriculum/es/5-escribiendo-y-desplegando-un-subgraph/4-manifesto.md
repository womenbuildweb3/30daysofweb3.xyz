---
title: Manifiesto de subgraph
description: Define the datasources that your subgraph will index.
optional: false
tweet: "Create and deploy a subgraph on @graphprotocol with #30DaysofWeb3 @womenbuildweb3 👾"
---

El manifiesto del *subgraph* es donde puede definir la configuración del *subgraph*. La mayor parte de esto ya estará completo para usted, pero hay algunos cambios que debemos hacer.

Justo encima de `dataSources`, necesitaremos agregar una sección de `features` donde podamos agregar `ipfsOnEthereumContracts`.

```yaml
features:
  - ipfsOnEthereumContracts
```

En `dataSources`, puede ver nuestra dirección de contrato y abi. Podemos agregar aquí otra propiedad llamada startBlock, que estableceremos en el número de bloque cuando este contrato se implementó por primera vez. Agregar un bloque de inicio reduce la cantidad de tiempo que lleva indexar datos para su subgraph.

Puede encontrar el bloque de inicio en etherscan. Copie el número de bloque para la primera transacción cuando se crea el contrato.

La parte superior de nuestras `dataSources` ahora debería verse así:

```yaml
dataSources:
  - kind: ethereum
    name: Web3RSVP
    network: mumbai
    source:
      address: "0xYOUR_ADDRESS_HERE"
      abi: Web3RSVP
      startBlock: 26(...YOUR_START_BLOCK)
```


También queremos actualizar nuestros nombres de `Entity`. Puede eliminar el generador entidades aquí y reemplácelas con las de abajo. Crearemos cuatro entidades: `Event`, `Account`, `RSVP`, and `Confirmation`.
```yaml
    entities:
        - Event
        - Account
        - RSVP
        - Confirmation
```

La sección `eventHandlers` es donde podemos decirle al *subgraph* cómo conectar cada uno de nuestros mapeos a diferentes disparadores de eventos. Esto ya debería estar completo para usted. Cada vez que un evento que se define aquí se emite desde nuestro contrato, se ejecutará la función de mapeo correspondiente establecida como controlador.

Escritoras: [Sarah Schwartz](https://twitter.com/schwartzswartz),
Traductoras: [Dami](https://twitter.com/dakitidami), [Brenda](https://twitter.com/engineerbrenda), Caro Meneses