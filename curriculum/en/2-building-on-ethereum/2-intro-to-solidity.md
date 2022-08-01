---
title: Intro to Solidity
description: Learn Solidity hands-on by writing, deploying, and testing your own simple smart contract in Remix.
optional: false
tweet: "Write a simple smart contract in Solidity on @EthereumRemix with #30DaysofWeb3 @womenbuildweb3 🔗"
---

![Intro to Solidity](https://user-images.githubusercontent.com/15064710/180662387-02cf75b9-daf4-4a2d-ab07-0cf781453ce2.png)

## Writing a Smart Contract

The language used in this tutorial is **Solidity** (_the language used to build Ethereum smart contracts_) and this same laguage can be used to deploy smart contracts on multiple chains such as Binance Smart chain, Polygon or Avalanche.

In this section, you will learn smart contract development with Solidity programming language by working on a sample project. You will also learn how to connect the various components of Solidity (variables, types, and functions) to build a complete DApp.

## ✋ Need Help?

If you need help, check to see if your question has already been asked in **#section-2-help**. If you don't see it in there, post a question with any details that would make it easy for a team member to help you. We'll answer most frequently asked questions in live office hours, so keep an eye out in #announcements for those!

## Gm World

We will start with basic code snippets to more advanced projects in this program. For this tutorial, we will start with one beginner project. Our first project is a DApp for storing and retrieving data from the blockchain.

```solidity
// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Pets {
    string public myPet;

    function setPetName(string memory petName) public {
        myPet = petName;

    }
    function getPetName() public view returns(string memory){
        return myPet;
    }
}

```

The first line (with the _SPDX-License-Identifer_) tells you that the source code is licensed under GPL-3.0.

The second line "pragma solidity" is where we specify the version of Solidity that our smart contract is written on. We do this so that we can ensure to use the correct compiler.

A contract in Solidity is similar to class in object oriented programming languages. It is a collection of code made up of a constructor, variables, and functions. In this example, 'Pets' is the contract name. In our contract we have a state variable of type string which is public and gave it a name of 'myPet'.

We defined two functions, sometimes called 'getters' and 'setters' in programming. The first function, setPetName, sets the state, or value, of the variable myPet. The second function, 'getPetName' retrievees the value saved at the variable myPet. The vast majority of the functions you'll ever write will either be a setter or a getter.

### Anatomy of A Function

```solidity
function functionName(unit x, uint y) public view returns (uint){
    // function body here
}
```

Every function must begin with the keyword `function`, followed by its name `functionName`. Whatever is placed inside the brackets (parameters) are the inputs, or the values that you will pass to your function. `Public view returns` states the visibility of the function. In this case, it defines that can it be accessible to the other contracts, denoted by the ketword `public`. The function promises not to modify the state of the blockchain, denoted by the word `view`. Finally, `returns` defines that the function will return a value, and also defines the data type of that output.

## Try It Yourself

Using [Remix](https://remix.ethereum.org/#optimize=false&runs=200&evmVersion=null&version=soljson-v0.8.7+commit.e28d00a7.js), an online IDE, create a simple smart contract which adds two numbers together and then returns the value.

You should define two functions inside your smart contract: one to do the computation based on two numbers passed in by the user, and one to return the value of that computation. We'll write one getter to retreieve the current value of the variable and one setter to add the two numbers and update the value of the variable.

In Remix, create a new file inside the contracts folder, `add.sol`.

![create a file inside the contracts folder](https://user-images.githubusercontent.com/15346823/179375354-bac53920-028d-4463-8998-675d8a8f57b5.png)

Start by adding a license identifier, followed by the version pragma:

```solidity
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;
```

Next, define your contract and inside, define a variable of type uint (unsigned integer) and set it to zero.

```solidity
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract AddNumbers{

uint public sum = 0;
}
```

Next, write the function to add two numbers passed in by the user and a function to return the current value of the sum variable. Here's what your contract should look like:

```solidity
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract AddNums {
uint public sum = 0;

function addNums(uint x, uint y) public {
    sum = x + y;
}

function getSum() public view returns (uint) {
    return sum;
}

}
```

Now we'll compile, deploy, and test our contract. Head over to the 3rd icon from the top and hit `Compile add.sol`

![Compile contract](https://user-images.githubusercontent.com/15346823/179375260-7b7fc34d-19e5-44f1-b549-c78c828c8085.png)

Move to the 4th icon from the top and select the Javascript VM from the dropdown in the `environment` selection. This will give you some fake ether to be able to deploy and test your contract.

![JavascriptVM](https://user-images.githubusercontent.com/15346823/179375210-bc843162-dcf0-4337-a9ed-2ca85a3fde7a.png)

Finally, hit the `Deploy` button to create an instance of your contract that we'll interact with and test that the sum function is working as expected. Afer a few seconds, you'll see a `Deployed Contracts` panel on the bottom left.

![Deploy contract](https://user-images.githubusercontent.com/15346823/179375283-76b327d1-185a-4060-a10b-5cef87545095.png)

Pass in two integers, then hit the addNums button. You'll see a new log indicating the new transaction you just initiated.

![integers](https://user-images.githubusercontent.com/15346823/179375306-905213b2-2b60-4f9d-832d-3cb1a7dd1f43.png)

The addNums function adds the two numbers, but doesn't actually return the new value. In order for us to verify that the function worked, we need to call our getter function. Hit the `getSum` button. You'll notice a new log appears. Expand that log using the down arrow and scroll to the bottom to find a value called `decoded output.`

You'll see we get the right answer - 8! You just wrote your first smart contract :-)

![result](https://user-images.githubusercontent.com/15346823/179375323-dd99fa72-84a3-460f-bcf3-d7d1a977f94d.png)

🎉 Let Twitter know you just wrote your first Solidity smart contract - hit the Share button below and paste the link to your tweet in **#builders-hype** so everyone can clap for you!

---

Writers: [Cami](https://twitter.com/camiinthisthang), [Fatma](https://twitter.com/fatima39_fatima),
Editors: [Busayo](https://twitter.com/AmoweO), [Sarah Schwartz](https://twitter.com/schwartzswartz), [Deborah Emeni](https://twitter.com/_emeni_deborah)
