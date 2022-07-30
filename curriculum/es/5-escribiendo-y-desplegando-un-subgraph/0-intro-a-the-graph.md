---
title: Introducción a *The Graph*
description: Learn about The Graph, a web3 protocol that enables developers to create APIs to query data from the blockchain.
optional: false
tweet: "Learn about @graphprotocol with #30DaysofWeb3 @womenbuildweb3 👾"
---

![Intro to The Graph](https://user-images.githubusercontent.com/15064710/180662082-82426a3c-4a63-40d4-a30b-ce23bae7a38f.png)

The Graph es un protocolo web3 que permite a los desarrolladores crear API de GraphQL para consultar datos de cualquier _smart contract_. Esto hace que sea rápido y fácil crear paneles y sitios web que muestren datos en vivo sobre cómo los usuarios interactúan con su contrato.

Cualquiera puede implementar su propio API, también llamado _subgraph_. Nuestro _subgraph_ nos permitirá conectar nuestro sitio web frontend a nuestro contrato para que podamos obtener fácilmente los datos que necesitamos.

Sin The Graph, los desarrolladores tenían que ejecutar sus propios servidores de indexación para poder consultar los datos de sus _smart contracts_. Esto puede ser costoso de ejecutar y debido a que es un servidor centralizado, podría ser vulnerable al tiempo de inactividad y la censura.

Puede utilizar el servicio alojado de The Graph de forma gratuita con cualquier _blockchain_. Puede encontrar una lista completa [aquí](https://thegraph.com/hosted-service/). También puede usar la red descentralizada de The Graph para los _subgraphs_ que indexan los contratos de la red principal de Ethereum, que cobra una pequeña tarifa por cada consulta. Para este tutorial, utilizaremos el servicio alojado gratuito.

## Instalación CLI

Para comenzar, deberá instalar The Graph CLI:

```
# NPM
$ npm install -g @graphprotocol/graph-cli

# Yarn
$ yarn global add @graphprotocol/graph-cli
```

Puede probar para ver si se instaló correctamente ejecutando:

```
graph —v
```

Para este ejemplo estamos usando la versión 0.30.3.

---

Escritoras: [Sarah Schwartz](https://twitter.com/schwartzswartz),
Editoras: [Kristen](https://twitter.com/cuddleofdeath),
Traductoras: [Dami](https://twitter.com/dakitidami), [Brenda](https://twitter.com/engineerbrenda), [Caro Meneses](https://twitter.com/carmedinat)
