---
title: Intro to Blockchain
description: Intro to Blockchain
optional: true
---

## Blockchain Transactions

The first step in a blockchain transaction usually starts with a user requesting a transaction. Any 'write' operation to the blockchain is a transaction. This includes everything from deploying a smart contract onto the chain, purchasing an NFT, purchasing an ENS name, etc.

Transactions are requests for your action to be validated and added to the chain. In order to successfully execute a transaction on the Blockchain, a gas fee (a transaction fee on the blockchain) is typically required.

When there is a lot of traffic and there is high demand for the network, the gas fees go up because block space is limited, and therefore miners can demand higher fees in order to prioritize which transactions they want to process. This of it like Uber Surge Pricing: if you're at an airport with a bunch of people getting Ubers, the prices go up and the wait times go up.

**Gas fees** are _something that all users must pay in order to perform a function on the blockchain_. The amount of gas required to pay varies depending on which blockchain you’re using, as well as other factors like high traffic. According to [Gemini](https://www.gemini.com/cryptopedia/what-are-gas-fees-gwei-gas-fees-eth-ether-transaction-fee), the amount of these transaction fees can vary from less than 0.0001 USD to over 100 USD.

Once the transaction has been requested, it gets authenticated and added to a **block** (_which represents a set of transactions across the blockchain_). These blocks each have a maximum storage capacity so that once the capacity is reached, the blocks are closed and linked to the previously filled block. Also, these blocks contain information like digital signatures, a timestamp, and any other important information. The block is sent out to the entirety of the network’s _nodes_ (participants on the blockchain).

After, nodes validate the transaction and then receive a reward (usually, the reward will be that blockchain’s main cryptocurrency) for participating in the validation process. Then, the block gets officially added to the existing blockchain. Afterward, the blockchain receives an update across the entire network and officially reflects that transaction. The transaction is now complete. If you’d like to read more in-depth about how transactions work, we recommend checking out this helpful article from [Euromoney Learning](https://www.euromoney.com/learning/blockchain-explained/how-transactions-get-into-the-blockchain).

Now that we have learned a bit about how blockchain transactions work, we will be taking a look at smart contracts next!
