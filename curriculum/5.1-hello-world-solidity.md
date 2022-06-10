---
slug: hello-world
title: Hello World
type: "Hello World"
description: "Hello World"
author: "afoma"
img: https://cuddleofdeath.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1651450696678%2FcnXy8_fi6.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=3840&q=75
date: 01 May 2022
---


![Hello World]()

## Writing a Smart Contract

To get started with smart contract development you have to be well versed with what makes up an object oriented programming language(OOP).The language used in this tutorial is solidity which is the language used to build Ethereum smart contracts and deploy on multiple chains such as Binance Smart chain, Polygon or Avalanche.
Aim of the tutorial:
I am going to guide  you on how to become a smart contract developer by reading already existing project code. Most of the time you go through tutorials that guide you on the components of the solidity programming language, such as variables, types and functions. 
*You can go through the tutorial without knowing how to connect different parts of a smart contract to make a complete DAPP.*


It even gets more exciting to realize you can read, understand and also implement code from existing DAPP projects.
What we are building from
The prerequisite for this type of tutorial is that you already have a grasp of the building blocks of the solidity language, but you don't need to worry I will break every piece of the code for your ease of understanding. 

We will start with basic code snippets to more advanced projects in this program . For this tutorial we will start with one beginner project. Our first project is a DApp for storing and retrieving data from the blockchain.

----image missing here-----

The first line tells you that the source code is licensed under GPL-3.0 The second line "pragma solidity" is where we specify the version of solidity that our smart contract is written on.
A contract in solidity is similar to class in object oriented programming languages. It is a collection of code made up of a constructor, variables, functions. 'Pets' is the contract name. In our contract we have a state variable of type string which is public and gave it a name of 'myPet'.

---image----

The above line of code shows the structure of functions in solidity.Every function must begin with the keyword 'function' followed by its name 'f' ,whatever is placed inside the brackets (parameters) are the inputs ."Public view returns" states the visibility of the function that can it be accessible to the other contracts by it being 'public' and it promises not to modify the state of the blockchain with the use 'view', 'returns' implies that an output will be returned which is specified by its data type.
We also have two functions one store data and another one to retrieve data. Our first function, function setPetName() has an input of type string by the name 'petName' and it is declared public, meaning it is accessible by other contracts.'petName' is equivalent to myPet's value.The second function retrieves and return the value of 'myPet'.Test this contract code on Remix IDE,Read more on how to use Remix.Have fun by tweaking it, Create a smart contract that stores a number and retrieves it.
Hint
- Don't forget to include the license, solidity version(pragma) and start with the keyword contract.
- You'll have a state variable (uint256) to define that it is a number
- You will also have two functions one to store and one to retrieve the number.

