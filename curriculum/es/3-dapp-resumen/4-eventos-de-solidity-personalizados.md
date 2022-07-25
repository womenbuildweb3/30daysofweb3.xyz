---
title: Eventos de *solidity* personalizados
description: Define Solidity events to listen for certain actions on the blockchain.
optional: false
tweet: "Write a smart contract in Solidity for a full-stack dapp with #30DaysofWeb3 @womenbuildweb3 ✍️"
---

## Definir eventos

Recuerde que los eventos de *solidity* son una forma en que nuestro subgrafo *escucha* acciones específicas para permitirnos realizar consultas sobre los datos de nuestro *smart contract*. Tenemos funciones escritas para crear un nuevo evento en nuestra plataforma, confirmar asistencia a un evento, confirmar asistentes individuales, confirmar el grupo de asistentes y enviar fondos no reclamados al propietario del evento. Para que nuestro subgrafo pueda acceder a la información de estas funciones, debemos exponerlas a través de eventos. Escribiremos los siguientes eventos y los *emitiremos* dentro de su función correspondiente:

- *NewEventCreated*: expone datos sobre el nuevo evento, como el propietario, la capacidad máxima, el propietario del evento, el monto del depósito, etc.
- *NewRSVP*: expone datos sobre el usuario que respondió y el evento al que respondió
- *ConfirmedAttendee*: expone datos sobre el usuario que fue confirmado y el evento para el que fueron confirmados
- *DepositsPaid*: expone datos sobre depósitos no reclamados que se envían al organizador del evento

Todos nuestros eventos se indican con la palabra clave *evento*, seguida del nombre personalizado de nuestro evento.

Defina sus eventos en la parte superior de su archivo, dentro de las llaves:
```solidity
event NewEventCreated(
        bytes32 eventID,
        address creatorAddress,
        uint256 eventTimestamp,
        uint256 maxCapacity,
        uint256 deposit,
        string eventDataCID
    );

    event NewRSVP(bytes32 eventID, address attendeeAddress);

    event ConfirmedAttendee(bytes32 eventID, address attendeeAddress);

    event DepositsPaidOut(bytes32 eventID);
```
 
 ### Emitir eventos
 
Ahora que los hemos definido, en realidad tenemos que *emitirlos* en alguna parte. Definir eventos es agregarlos como una herramienta en su cinturón de herramientas, pero emitirlos es real. Aliado sacando esa herramienta y usándola. Cada evento debe emitirse donde tenga sentido, después de que se haya llevado a cabo una acción específica.
 
Para nuestro primer evento, *`newEventCreated`*, deberíamos emitirlo al final de nuestra función *`createNewEvent`*.
 
Para emitir un evento, usamos la palabra clave *emit* y luego pasamos los argumentos, también conocidos como los valores reales que queremos, según los parámetros que definimos.

Emita NewEventCreated en la parte inferior de su función `createNewEvent` de esta manera:
 
 ```solidity
 emit NewEventCreated(
            eventId,
            msg.sender,
            eventTimestamp,
            maxCapacity,
            deposit,
            eventDataCID
        );
 ```
 
`NewRSVP` debería emitirse al final de nuestra función `confirmAttendee` así: `emit NewRSVP(eventId, msg.sender);`
 
`ConfirmedAttendees` debe emitirse al final de nuestra función `confirmAttendee` de esta manera: `emit ConfirmedAttendee(eventId, attendee);`
 
`DepositPaidOut` debería emitirse al final de nuestra función `withdrawUnclaimedDeposits` así: `emit DepositsPaidOut(eventId);``
 
 
 ## ¡Lo hiciste!

¡Ha escrito sus funciones, definido sus estructuras y definido eventos personalizados! Así es como debería verse su código final:

```solidity
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

contract Web3RSVP {

    event NewEventCreated(
        bytes32 eventID,
        address creatorAddress,
        uint256 eventTimestamp,
        uint256 maxCapacity,
        uint256 deposit,
        string eventDataCID
    );

    event NewRSVP(bytes32 eventID, address attendeeAddress);

    event ConfirmedAttendee(bytes32 eventID, address attendeeAddress);

    event DepositsPaidOut(bytes32 eventID);

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

    function createNewEvent(
        uint256 eventTimestamp,
        uint256 deposit,
        uint256 maxCapacity,
        string calldata eventDataCID
    ) external {
        // generate an eventID based on other things passed in to generate a hash
        bytes32 eventId = keccak256(
            abi.encodePacked(
                msg.sender,
                address(this),
                eventTimestamp,
                deposit,
                maxCapacity
            )
        );

        address[] memory confirmedRSVPs; 
        address[] memory claimedRSVPs;
        

        //this creates a new CreateEvent struct and adds it to the idToEvent mapping
        idToEvent[eventId] = CreateEvent(
            eventId,
            eventDataCID,
            msg.sender,
            eventTimestamp,
            deposit,
            maxCapacity,
            confirmedRSVPs,
            claimedRSVPs,
            false
        );

        emit NewEventCreated(
            eventId,
            msg.sender,
            eventTimestamp,
            maxCapacity,
            deposit,
            eventDataCID
        );
    }

    function createNewRSVP(bytes32 eventId) external payable {
        // look up event
        CreateEvent storage myEvent = idToEvent[eventId];

        // transfer deposit to our contract / require that they sent in enough ETH
        require(msg.value == myEvent.deposit, "NOT ENOUGH");

        //require that the event hasn't already happened (<eventTimestamp)
        require(block.timestamp <= myEvent.eventTimestamp, "ALREADY HAPPENED");

        //make sure event is under max capacity
        require(
            myEvent.confirmedRSVPs.length < myEvent.maxCapacity,
            "This event has reached capacity"
        );

        //require that msg.sender isn't already in myEvent.confirmedRSVPs
        for (uint8 i = 0; i < myEvent.confirmedRSVPs.length; i++) {
            require(myEvent.confirmedRSVPs[i] != msg.sender, "ALREADY CONFIRMED");
        }

        myEvent.confirmedRSVPs.push(payable(msg.sender)); 

        emit NewRSVP(eventId, msg.sender);
    }

    function confirmGroup(bytes32 eventId, address[] calldata attendees) external {
        // look up event
        CreateEvent memory myEvent = idToEvent[eventId];

        // make sure you require that msg.sender is the owner of the event
        require(msg.sender == myEvent.eventOwner, "NOT AUTHORIZED");

        //confirm each attendee
        for (uint8 i = 0; i < attendees.length; i++) {
            confirmAttendee(eventId, attendees[i]);
        }
    }

    function confirmAttendee(bytes32 eventId, address attendee) public {
        // look up event
        CreateEvent storage myEvent = idToEvent[eventId];

        // make sure you require that msg.sender is the owner of the event
        require(msg.sender == myEvent.eventOwner, "NOT AUTHORIZED");

        // require that attendee is in myEvent.confirmedRSVPs
        address rsvpConfirm;

        for (uint8 i = 0; i < myEvent.confirmedRSVPs.length; i++) {
            if(myEvent.confirmedRSVPs[i] == attendee){
                rsvpConfirm = myEvent.confirmedRSVPs[i];
            }
        }

        require(rsvpConfirm == attendee, "NO RSVP TO CONFIRM");


        // require that attendee is NOT in the claimedRSVPs list
        for (uint8 i = 0; i < myEvent.claimedRSVPs.length; i++) {
            require(myEvent.claimedRSVPs[i] != attendee, "ALREADY CLAIMED");
        }

        // require that deposits are not already claimed
        require(myEvent.paidOut == false, "ALREADY PAID OUT");

        // add them to the claimedRSVPs list
        myEvent.claimedRSVPs.push(attendee);

        // sending eth back to the staker `https://solidity-by-example.org/sending-ether`
        (bool sent,) = attendee.call{value: myEvent.deposit}("");
     
        //if this fails
        if(!sent){
            myEvent.claimedRSVPs.pop();
        }

        require(sent, "Failed to send Ether");

        emit ConfirmedAttendee(eventId, attendee);
    }

    function withdrawUnclaimedDeposits(bytes32 eventId) external {
        // look up event
        CreateEvent memory myEvent = idToEvent[eventId];

        // check if already paid
        require(!myEvent.paidOut, "ALREADY PAID");

        // check if it's been 7 days past myEvent.eventTimestamp
        require(
            block.timestamp >= (myEvent.eventTimestamp + 7 days),
            "TOO EARLY"
        );

        // only the event owner can withdraw
        require(msg.sender == myEvent.eventOwner, "MUST BE EVENT OWNER");

        // calculate how many people didn't claim by comparing
        uint256 unclaimed = myEvent.confirmedRSVPs.length - myEvent.claimedRSVPs.length;

        uint256 payout = unclaimed * myEvent.deposit;

        // mark as paid before sending to avoid reentrancy attack
        myEvent.paidOut = true;

        // send the payout to the owner
        (bool sent, ) = msg.sender.call{value: payout}("");
        
        // if this fails
        if(!sent){
            myEvent.paidOut == false;
        }

        require(sent, "Failed to send Ether");

        emit DepositsPaidOut(eventId);
    }
}
```

Escritoras: [Cami](https://twitter.com/camiinthisthang),
Traductoras: [Dami](https://twitter.com/dakitidami), [Brenda](https://twitter.com/engineerbrenda), Caro Meneses