---
title: Consultando un subgraph desde nuestra aplicación
description: 
optional: false
tweet: "Query a subgraph for a full-stack dapp with #30DaysofWeb3 @womenbuildweb3 ⛓"
---


Para consultar fácilmente nuestro subgraph desde nuestra aplicación frontend, usaremos el cliente Apollo GraphQL.

En el directorio raíz de nuestra aplicación frontend, podemos agregar un archivo llamado `apollo-client.js` y agregar el código a continuación con la URL del subgraph implementado:

```javascript
import { ApolloClient, InMemoryCache } from "@apollo/client";
 
const client = new ApolloClient({
 uri: "https://api.thegraph.com/subgraphs/name/[YOUR_GITHUB]/[YOUR_SUBGRAPH]",
 cache: new InMemoryCache(),
});
 
export default client;
```
En nuestro archivo `_app.js`, podemos importar el proveedor y el cliente de apollo en la parte superior del archivo, y envolver nuestro componente `Layout` dentro del proveedor de Apollo.

```javascript
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
```


```javascript
<ApolloProvider client={client}>
    <Layout>
        <Component {...pageProps} />
    </Layout>
</ApolloProvider>

```

Ahora podemos acceder fácilmente al cliente apollo en cada una de nuestras páginas donde queramos consultar nuestro subgraph.