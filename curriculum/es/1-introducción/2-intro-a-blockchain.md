# Introducción a Blockchain

### Transacciones en Blockchain

El primer paso en una transacción en el blockchain comienza generalmente cuando un usuario solicita una transacción. Cualquier operación de 'escritura' en el blockchain es una transacción. Esto incluye: implementar un smart contract en el blockchain, comprar un NFT, comprar un nombre ENS, etc.

Las transacciones son solicitudes para que su acción sea validada y agregada al blockchain. Para ejecutar con éxito una transacción en el Blockchain, generalmente se requiere de un *gas fee* (una comisión de transacción en el blockchain).

Cuando hay mucho tráfico y hay una alta demanda de transacciones en la red, los *gas fees* aumentan porque el espacio en blockchain es limitado y, por lo tanto, los mineros pueden exigir comisiones más altas para seleccionar las transacciones que deseen priorizar. Piense en esto como Uber: si se encuentra en un aeropuerto con un grupo de varias personas que requieren el mismo servicio, los precios y los tiempos de espera aumentan.


Todos los usuarios deben pagar *gas fees* para realizar una función en blockchain. El monto de la comisión de *gas fee* requerida para pagar varía según el blockchain que se esté utilizando, así como otros factores como, por ejemplo, el alto tráfico. Según [Gemini](https://www.gemini.com/cryptopedia/what-are-gas-fees-gwei-gas-fees-eth-ether-transaction-fee), el monto de estas comisiones de transacción puede variar entre menos de 0.0001 USD hasta más de 100 USD.

Una vez que se ha solicitado la transacción, esta se autentica y se agrega a un bloque (que representa la transacción en el blockchain). Cada uno de estos bloques tiene una capacidad máxima de almacenamiento, de modo que una vez que se alcanza esa capacidad, los bloques se cierran y se alinean con el bloque llenado anteriormente. Asimismo, estos bloques contienen información como firmas digitales, *timestamps* y cualquier otra información importante. El bloque se envía al conjunto de *nodos* de la red (participantes en blockchain).

Luego de ello, los nodos validan la transacción y después reciben una recompensa (generalmente, la recompensa será la criptomoneda principal del blockchain escogido) por participar en el proceso de validación. Luego, el bloque se agrega oficialmente al blockchain existente. Por último, el blockchain recibe una actualización en toda la red y se refleja oficialmente la transacción realizada. La transacción ahora está completa. Si desea obtener mayor información sobre cómo funcionan las transacciones, recomendamos consultar este útil artículo de [Euromoney Learning](https://www.euromoney.com/learning/blockchain-explained/how-transactions-get-into-the-blockchain).

Ahora que hemos aprendido un poco sobre cómo funcionan las transacciones en blockchain, ¡pasaremos a los *smart contracts*!