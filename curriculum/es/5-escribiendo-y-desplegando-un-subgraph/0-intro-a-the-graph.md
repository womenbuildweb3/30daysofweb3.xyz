# Introducción a *The Graph*
The Graph es un protocolo web3 que permite a los desarrolladores crear API de GraphQL para consultar datos de cualquier *smart contract*. Esto hace que sea rápido y fácil crear paneles y sitios web que muestren datos en vivo sobre cómo los usuarios interactúan con su contrato.

Cualquiera puede implementar su propio API, también llamado *subgraph*. Nuestro *subgraph* nos permitirá conectar nuestro sitio web frontend a nuestro contrato para que podamos obtener fácilmente los datos que necesitamos.

Sin The Graph, los desarrolladores tenían que ejecutar sus propios servidores de indexación para poder consultar los datos de sus *smart contracts*. Esto puede ser costoso de ejecutar y debido a que es un servidor centralizado, podría ser vulnerable al tiempo de inactividad y la censura.

Puede utilizar el servicio alojado de The Graph de forma gratuita con cualquier *blockchain*. Puede encontrar una lista completa [aquí](https://thegraph.com/hosted-service/). También puede usar la red descentralizada de The Graph para los *subgraphs* que indexan los contratos de la red principal de Ethereum, que cobra una pequeña tarifa por cada consulta. Para este tutorial, utilizaremos el servicio alojado gratuito.

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
````

Para este ejemplo estamos usando la versión 0.30.3.
