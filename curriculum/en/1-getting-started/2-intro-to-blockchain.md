---
title: Intro to Blockchain
description: Learn about what blockchain technology is and how transactions are executed on the blockchain.
optional: true
optionalMsg: If you're familiar with web3 fundamentals and already have your own crypto wallet, feel free to jump ahead to the next section!
optionalNextPath: /en/curriculum/2-building-on-ethereum/0-client-server-architecture
tweet: "Learn about blockchains and transactions with #30DaysofWeb3 @womenbuildweb3 🌐"
---

![Intro to Blockchain](https://user-images.githubusercontent.com/15064710/180661895-aa374dae-299a-46f0-a3d6-de8f7796936c.png)

## What is blockchain?

The **blockchain** is an _expanding system that records information in a manner that makes it hard or almost impossible to hack the system_. Information gets recorded in **blocks**, which are like _little lists of records_.

There are currently at least [1000 blockchains with at least four types of blockchain networks](https://earthweb.com/how-many-blockchains-are-there/#:~:text=Currently%2C%20there%20are%20at%20least,platforms%20provided%20in%20this%20industry.). Each block contains a **hash** (a long string of characters representing a specific piece of data) of the previous block as well as other useful information such as a timestamp and transaction data. This process forms a chain of data, otherwise known as **blockchain**.

Blockchain technology is very versatile and can be used in a variety of ways. It is used for securing personal information, artist royalties, Non-fungible tokens, real estate, and [more](https://www.fool.com/investing/stock-market/market-sectors/financials/blockchain-stocks/blockchain-applications/). It can also aid in voting processes, ensuring that no one is able to vote more than once or tamper with the votes in any way.

## How do blockchain transactions work?

The first step in a blockchain transaction usually starts with a user requesting a transaction. Any 'write' operation to the blockchain is a transaction. This includes everything from deploying a smart contract onto the chain, purchasing an NFT, purchasing an ENS name, etc.

Transactions are requests for your action to be validated and added to the chain. In order to successfully execute a transaction on the Blockchain, a **gas fee** (_a transaction fee on the blockchain_) is typically required.

When there is a lot of traffic and there is high demand for the network, the gas fees go up because block space is limited, and therefore miners can demand higher fees in order to prioritize which transactions they want to process. This of it like Uber Surge Pricing: if you're at an airport with a bunch of people getting Ubers, the prices go up and the wait times go up.

**Gas fees** are _something that all users must pay in order to perform a function on the blockchain_. The amount of gas required to pay varies depending on which blockchain you’re using, as well as other factors like high traffic. According to [Gemini](https://www.gemini.com/cryptopedia/what-are-gas-fees-gwei-gas-fees-eth-ether-transaction-fee), the amount of these transaction fees can vary from less than 0.0001 USD to over 100 USD.

Once the transaction has been requested, it gets authenticated and added to a **block** (_which represents a set of transactions across the blockchain_). These blocks each have a maximum storage capacity so that once the capacity is reached, the blocks are closed and linked to the previously filled block. Also, these blocks contain information like digital signatures, a timestamp, and any other important information. The block is sent out to the entirety of the network’s **nodes** (_participants on the blockchain_).

After, nodes validate the transaction and then receive a reward (usually, the reward will be that blockchain’s main cryptocurrency) for participating in the validation process. Then, the block gets officially added to the existing blockchain. Afterward, the blockchain receives an update across the entire network and officially reflects that transaction. The transaction is now complete. If you’d like to read more in-depth about how transactions work, we recommend checking out this helpful article from [Euromoney Learning](https://www.euromoney.com/learning/blockchain-explained/how-transactions-get-into-the-blockchain).

Now that we have learned a bit about how blockchain transactions work, we will be taking a look at smart contracts next!

Writers: [Kristen](https://twitter.com/CuddleofDeath),
Editors: [Deborah Emeni](https://twitter.com/_emeni_deborah)
