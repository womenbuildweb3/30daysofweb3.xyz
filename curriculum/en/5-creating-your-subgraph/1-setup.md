---
title: The Graph Setup
description: Setup your subgraph on the hosted service.
optional: false
tweet: "Create and deploy a subgraph on @graphprotocol with #30DaysofWeb3 @womenbuildweb3 👾"
---

Next we are going to create a subgraph on the hosted service where we can deploy our code. Go to [thegraph.com](https://thegraph.com/) and select the Hosted Service in the Products menu dropdown. You will need to sign in with your Github account.

Navigate to the “My Dashboard” tab, and click the “Add a Subgraph” button.

Fill out the required fields however you want, and click the “Create subgraph” button at the bottom.
Note: you can edit this information later by clicking the pencil icon on your subgraph page.

Navigate to wherever you want to save your subgraph in your terminal and paste the command below. Make sure to replace the Github User and Subgraph Name with your own. (Hint: you can find this at the end of the url of your subgraph)

```
graph init --product hosted-service <GITHUB_USER>/<SUBGRAPH NAME>
```

You will now be prompted with several options for your subgraph.

For the protocol, we will choose Ethereum. You can change the subgraph and directory names if you want, or you can just hit enter.

For the network, _we will choose Mumbai_.

For the contract address, enter the contract address you deployed.

For the contract name, we will use Web3RSVP.

**Note**: you can’t have any spaces or dashes here, or the setup will fail.

After this, it will ask you if you'd like to add another contract. Make sure that this is set to **false** and press enter.

---

Writers: [Sarah Schwartz](https://twitter.com/schwartzswartz),
Editors: [Kristen](https://twitter.com/cuddleofdeath)
