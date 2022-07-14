## Introduction to The Graph

The Graph is a web3 protocol that allows developers to create GraphQL APIs to query data from any smart contract. This makes it fast and easy to create dashboards and websites that show live data about how users are interacting with your contract.

Anyone can deploy their own API, also called a subgraph. Our subgraph will allow us to connect our frontend website to our contract so we can easily fetch the data we need.

Without The Graph, developers had to run their own indexing servers to be able to query their smart contract data. This can be expensive to run, and because it’s a centralized server it could be vulnerable to down-time and censorship.

You can use The Graph’s hosted service for free with any chain. You can find a full list [here](https://thegraph.com/hosted-service/). You can also use The Graph’s decentralized network for subgraphs that index Ethereum mainnet contracts, which charges a small fee for each query. For this tutorial, we will be using the free hosted service.

## CLI Installation

To get started, you will need to install The Graph CLI:

```
# NPM
$ npm install -g @graphprotocol/graph-cli

# Yarn
$ yarn global add @graphprotocol/graph-cli
```

You can test to see if it was installed correctly by running:

```
graph —v
```

For this example we are using version 0.30.3.
