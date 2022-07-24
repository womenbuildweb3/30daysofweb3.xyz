---
title: Storing data with Web3.Storage
description: Get started with Web3.Storage, an easy-to-use API that lets developers use decentralized storage.
optional: false
---

## What is Web3.Storage?

**Web3.Storage** is _an easy-to-use API that enables users to store and retrieve data_ from **Filecoin**, _a decentralized storage network built upon IPFS that allows anyone to buy and sell unused storage space_. **IPFS** (InterPlanetary File System) is _a peer-to-peer distributed file-sharing system for storing and sharing content like data, files, websites, and applications._

Since storing data on the blockchain can be both expensive and slow, we'll use [Web3.Storage](https://web3.storage/) to upload data we don't need on-chain to Filecoin. Web3.Storage will provide us with a unique hash, i.e., a string of characters, that references our data, and storing this hash is much cheaper and faster than storing larger amounts of data (e.g., an image file) on the blockchain.

## Getting started with Web3.Storage

Visit https://web3.storage/login/ to create an account and then follow this short guide https://web3.storage/docs/how-tos/generate-api-token/ to create your API token. Once you have generated your API token, go to your `.env.local` file and update `WEB3STORAGE_TOKEN` with your Web3.Storage API token.
