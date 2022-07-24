---
title: Definiendo nuestra estructura de datos
description: Define structs in Solidity to represent events in your full-stack decentralized event platform.
optional: false
tweet: "Write a smart contract in Solidity for a full-stack dapp with #30DaysofWeb3 @womenbuildweb3 ✍️"
---

## Definir un 'Evento'

Comencemos definiendo nuestro _smart contract_ y la información que queremos almacenar _on-chain_: la creación de un nuevo evento por parte de un organizador de eventos y los detalles asociados con ese evento. Guardaremos esto en una estructura. Como un repaso, una estructura es similar a un objeto JS en el sentido de que almacena información relacionada sobre una entidad. En nuestro caso, estamos almacenando información relacionada con la creación de un nuevo evento en nuestro contrato RSVP.

```
contract Web3RSVP {
struct CreateEvent {
       bytes32 eventId;
       string eventDataCID;
       address eventOwner;
       uint256 eventTimestamp;
       uint256 deposit;
       uint256 maxCapacity;
       address[] confirmedRSVPs;
       address[] claimedRSVPs;
       bool paidOut;
   }
}
```

Estas propiedades son las propiedades que tendrá cada evento individual en nuestra plataforma. Todos estos detalles también se almacenarán en el _blockchain_.

En general, es aconsejable ser exigente con los datos que almacena en el _blockchain_ porque es costoso almacenar datos en Ethereum. Debido a esto, notará que no estamos almacenando detalles como el nombre del evento y la descripción del evento directamente en la estructura, sino que estamos almacenando una referencia a un hash de IPFS donde esos detalles se almacenarán fuera de el _blockchain_. Más sobre esto más adelante, pero por ahora solo sepa para qué sirve `eventDataCID`.

### Manejo de múltiples eventos

Debido a que queremos que nuestro contrato pueda manejar la creación de múltiples eventos, **necesitamos un mecanismo para almacenar y buscar fácilmente eventos por algún identificador**, como una identificación única. Esto es lo que usaremos para decirle a nuestro programa a qué evento está respondiendo un usuario, ya que podemos suponer que habrá muchos.

Para hacer esto, podemos crear un `mapping` de solidity que mapee, o defina una relación con, un ID de evento único para la estructura que acabamos de definir que está asociada con ese evento.

Usaremos este mapeo para asegurarnos de que estamos haciendo referencia al evento correcto cuando llamamos funciones en ese evento como confirmar asistencia, confirmar asistentes, etc.

Dentro de nuestro contrato y bajo nuestra estructura, definiremos este mapeo.

```solidity
contract Web3RSVP {
   struct CreateEvent {
       bytes32 eventId;
       string eventDataCID;
       address eventOwner;
       uint256 eventTimestamp;
       uint256 deposit;
       uint256 maxCapacity;
       address[] confirmedRSVPs;
       address[] claimedRSVPs;
       bool paidOut;
   }

mapping(bytes32 => CreateEvent) public idToEvent;

}
```
