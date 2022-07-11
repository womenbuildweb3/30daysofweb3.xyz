# Gm world - Solidity Intro

## Writing a Smart Contract

To get started with smart contract development, you have to be well-versed with what makes up an object oriented programming language (OOP). The language used in this tutorial is **Solidity** (_the language used to build Ethereum smart contracts_) and deploy on multiple chains such as Binance Smart chain, Polygon or Avalanche.

In this section, you will learn smart contract development with Solidity programming language by working on a sample project. You will also learn how to connect the various components of Solidity (variables, types, and functions) to build a complete DApp.

## What we are building from

The prerequisite for this type of tutorial _usually_ requires that you already have a grasp on the building blocks of the Solidity language. However, you don't need to worry about that, because I will break every piece of the code for your ease of understanding.

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

Using [Remix](https://remix.ethereum.org/#optimize=false&runs=200&evmVersion=null&version=soljson-v0.8.7+commit.e28d00a7.js), an online IDE, create a simple smart contract which adds two numbers together and then returns the value. You should define two functions inside your smart contract: one to do the computation based on two numbers passed in by the user, and one to return the value of that computation. Write one getter and one setter.

Input: 4, 7
Output: 11

Begin with creating a new file on Remix, it is recommended to create in the contracts folder.

![](https://i.imgur.com/oC3frJT.png)

**Hint:**

- Don't forget to include the license, solidity version (pragma) and start with the keyword contract.

```solidity
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract contractName{

}
```

- Define your computation variable (uint256) outside of the functions so that both functions have access to it.

```solidity
  uint256 sum;
```

- Remember to write your setter function so the user can pass in two numbers.

```solidity
function setNumbers(uint256 x, uint256 y) public {
      sum = x+y;
}
```

- Remember your getter function as well that returns the computation of the two numbers.

```solidity
function getSum() public view returns (uint256){
    return sum;
}
```

Compile, deploy and test out your contract!
