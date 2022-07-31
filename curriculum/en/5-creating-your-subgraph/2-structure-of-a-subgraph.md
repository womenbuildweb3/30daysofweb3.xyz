---
title: Structure of a Subgraph
description: Check out the scaffold subgraph that you will use to create your subgraph.
optional: false
tweet: "Create and deploy a subgraph on @graphprotocol with #30DaysofWeb3 @womenbuildweb3 👾"
---

You should now have a new folder with this structure:

```
subgraph-name
└───abis
│   │  {Name}.json
└───generated
│   └───{Name}
│       │   {Name}.ts
│   │   schema.ts
│   networks.json
│   package.json
│   schema.graphql
└───src
│  │   {Name}.ts
│   subgraph.yaml
│   tsconfig.json
│   yarn.lock
```

Make sure to run `yarn` or `npm install` to install the dependencies. If you are using git, add a `.gitignore` file to ignore the `node_modules` folder.

We will also add `@protofire/subgraph-toolkit` as a dependency. Run `yarn add @protofire/subgraph-toolkit` or `npm install @protofire/subgraph-toolkit` to add this package.

The initial setup should have already grabbed the contract ABI for you. If you don’t see it in the abis folder, you can find the abi in your hardhat project in the artifacts folder. It will be called `[YourContractName].json`.

The three main files in the subgraph project folder we will be changing are the `subgraph.yaml`, `schema.graphql`, and `src/{Name}.ts` files.

## Need Help? 
If you need help, check to see if your question has already been asked in **#section-5-help**. If you don't see it in there, post a question with any details that would make it easy for a team member to help you. We'll answer most frequently asked questions in live office hours, so keep an eye out in #announcements for those!

---

Writers: [Sarah Schwartz](https://twitter.com/schwartzswartz),
Editors: [Kristen](https://twitter.com/cuddleofdeath), [Briseida Montiel](https://twitter.com/brizism), [Cami](https://twitter.com/camiinthisthang)