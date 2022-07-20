---
title: Subgraph Manifest
description: Subgraph Manifest
optional: false
---

The subgraph manifest (subgraph.yaml) is where you can define settings for the subgraph. Most of this will already be filled out for you, but there are a few changes we need to make.

Just above the `dataSources`, we will need to add a `features` section where we can add `ipfsOnEthereumContracts`.

```json
features:
  - ipfsOnEthereumContracts
```

Under `dataSources`, you can see our contract address and abi. We can add another property here called startBlock, which we will set to the block number when this contract was first deployed. Adding a start block reduces the amount of time it takes to index data for your subgraph.

You can find the start block on etherscan. Copy the block number for the first transaction when the contract is created.

The top of our `dataSources` should now look like this:

```json
dataSources:
  - kind: ethereum
    name: Web3RSVP
    network: mumbai
    source:
      address: "0xYOUR_ADDRESS_HERE"
      abi: Web3RSVP
      startBlock: 26(...YOUR_START_BLOCK)
```

We also want to update our `Entity` names. You can delete the generated entities here and replace them with the ones below. We will be creating four entities: `Event`, `Account`, `RSVP`, and `Confirmation`.

```json
    entities:
        - Event
        - Account
        - RSVP
        - Confirmation
```

The `eventHandlers` section is where we can tell the subgraph how to connect each of our mappings to different event triggers. This should already be filled out for you. Each time an event that is defined here is emitted from our contract, the corresponding mapping function set as the handler will run.
