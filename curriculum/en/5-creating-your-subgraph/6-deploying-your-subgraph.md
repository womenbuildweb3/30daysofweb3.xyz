---
title: Deploying to the Hosted Service
description: Deploy your subgraph to The Graph's Hosted Service.
optional: false
tweet: "Create and deploy a subgraph on @graphprotocol with #30DaysofWeb3 @womenbuildweb3 👾"
---

Open up the subgraph you created on The Graph's Hosted Service, and select the “Show commands” button under Deploy.

Copy the first command that starts with graph auth, and replace the `<ACCESS_TOKEN>` with your access token from your subgraph page.

```
graph auth --product hosted-service <ACCESS_TOKEN>
```

Running this command will authenticate you as the subgraph owner so that you are able to push your code changes. Paste and run this command in your terminal from your project root folder. You should see a confirmation message in your terminal that says "Deploy key set".

Now we can deploy our subgraph by copying the second command that starts with graph deploy. Here you just have to replace `<GITHUB_USER>/<SUBGRAPH NAME>` (you can find this in the url for your subgraph).

```
graph deploy --product hosted-service <GITHUB_USER>/<SUBGRAPH NAME>
```

Run this command to deploy your subgraph to The Graph’s hosted service.

Once you deploy you can start querying right away, however the data won’t be verifiably accurate until the subgraph has finished indexing.

### Updating your subgraph

If you make changes to your smart contract and re-deploy to a new address, you can easily update your subgraph to index the new contract.

You can update the contract address in the manifest (subgraph.yaml), and copy and paste the new abi in the abis folder. If you made any changes to the schema or emitted events from your contract, make sure to run graph codegen to generate new types.

When you’re ready to re-deploy, you can run the same deploy command above. You can view the pending version by toggling the version in the upper right corner.

---

Writers: [Sarah Schwartz](https://twitter.com/schwartzswartz)
