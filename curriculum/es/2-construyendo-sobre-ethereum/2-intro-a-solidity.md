---
title: Introducción a Solidity
description: Learn Solidity hands-on by writing, deploying, and testing your own simple smart contract in Remix.
optional: false
tweet: "Write a simple smart contract in Solidity on @EthereumRemix with #30DaysofWeb3 @womenbuildweb3 🔗"
---

![Intro to Solidity](https://user-images.githubusercontent.com/15064710/180662387-02cf75b9-daf4-4a2d-ab07-0cf781453ce2.png)

## Escribir un _smart contract_

Para comenzar con el desarrollo de _smart contracts_, debe estar bien versado en lo que constituye un lenguaje de programación orientado a objetos (OOP). Como Binance Smart chain, Polygon, o, Avalanche.

**Objetivo del tutorial:**
Lo guiaré sobre cómo convertirse en un desarrollador de _smart contracts_ leyendo el código del proyecto ya existente. La mayoría de las veces, pasa por tutoriales que lo guían sobre los componentes del lenguaje de programación _Solidity_, como variables, tipos y funciones.
*Puede seguir el tutorial sin saber cómo conectar diferentes partes de un *smart contract* para hacer un DAPP completo.*

Incluso se vuelve más emocionante darse cuenta de que puede leer, comprender y también implementar código de proyectos DAPP existentes.

## De lo que estamos construyendo

El requisito previo para este tipo de tutorial es que ya tenga una comprensión de los componentes básicos del lenguaje _solidity_, pero no debe preocuparse, dividiré cada parte del código para facilitar su comprensión.

Comenzaremos con fragmentos de código básicos para proyectos más avanzados en este programa. Para este tutorial, comenzaremos con un proyecto para principiantes. Nuestro primer proyecto es un DApp para almacenar y recuperar datos del _blockchain_.

```solidity
SPDX-License-Identifier: GPL-3.0
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

La primera línea le dice que el código fuente tiene licencia GPL-3.0

La segunda línea "pragma solidity" es donde especificamos la versión de solidity en la que está escrito nuestro _smart contract_. Hacemos esto para asegurarnos de usar el compilador correcto.

Un contrato en _solidity_ es similar a la clase en los lenguajes de programación orientados a objetos. Es una colección de código compuesta por un constructor, variables y funciones. En este ejemplo, '_Pets_' es el nombre del contrato. En nuestro contrato tenemos una variable de estado de tipo _string_ que es público y le dio el nombre de 'myPet'.

Definimos dos funciones, a veces llamadas 'getters' y 'setters' en programación. La primera función, _setPetName_, establece el estado o valor de el variable _myPet_. La segunda función, 'getPetName' recupera el valor guardado en el variable _myPet_. La gran mayoría de las funciones que alguna vez escribirá serán setter o getter.

### Anatomía de una función

```solidity
function functionName(unit x, uint y) public view returns (uint){
    // function body here
}
```

Cada función debe comenzar con la palabra clave `function`, seguida de su nombre `functionName`. Lo que se coloca dentro de los corchetes (parámetros) son las entradas o los valores que pasará a su función. `public view returns` indica la visibilidad de la función. En este caso, define que puede ser accesible a los demás contratos, denotados por la palabra clave `public`. La función promete no modificar el estado de el _blockchain_, indicado por la palabra `view`. Finalmente, `returns` define que la función devolverá un valor y también define el tipo de datos de esa salida.

## Hazlo tu mismo

Usando [Remix](https://remix.ethereum.org/#optimize=false&runs=200&evmVersion=null&version=soljson-v0.8.7+commit.e28d00a7.js), un IDE en línea, cree un _smart contract_ simple para agregar dos números y devolver el valor. Debe definir dos funciones dentro de su _smart contract_: una para realizar el cálculo en función de dos números pasados por el usuario y otra para devolver el valor de ese cálculo. Escribe un _getter_ y un* setter*.

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

---

Escritoras: [Cami](https://twitter.com/camiinthisthang), [Fatma](https://twitter.com/fatima39_fatima),
Editoras: [Busayo](https://twitter.com/AmoweO), [Sarah Schwartz](https://twitter.com/schwartzswartz), [Deborah Emeni](https://twitter.com/_emeni_deborah),
Traductoras: [Dami](https://twitter.com/dakitidami), [Brenda](https://twitter.com/engineerbrenda), [Caro Meneses](https://twitter.com/carmedinat)
