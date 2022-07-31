---
title: Querying your subgraph
description: Setup Apollo GraphQL client to query your subgraph.
optional: false
tweet: "Query a subgraph for a full-stack dapp with #30DaysofWeb3 @womenbuildweb3 ⛓"
---

To easily query our subgraph from our frontend application, we will use the Apollo GraphQL client.

In the root directory of our frontend app, we can add a file called `apollo-client.js` and add the code below with your deployed subgraph url:

```javascript
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/[YOUR_GITHUB]/[YOUR_SUBGRAPH]",
  cache: new InMemoryCache(),
});

export default client;
```

In our `_app.js` file, we can import the apollo provider and client at the top of the file, and wrap our `Layout` component inside the Apollo Provider.

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

If you run into any errors while wrapping the Layout component with the ApolloProvider, here's the full `MyApp` function for reference:

```javascript
export default function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <ApolloProvider client={client}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
```

Now we can easily access the apollo client in each of our pages where we want to query our subgraph!

## Need Help? 
If you need help, check to see if your question has already been asked in **#section-7-help**. If you don't see it in there, post a question with any details that would make it easy for a team member to help you. We'll answer most frequently asked questions in live office hours, so keep an eye out in #announcements for those!

---

Writers: [Sarah Schwartz](https://twitter.com/schwartzswartz),
Editors: [Sarah Z](https://twitter.com/haegeez)
