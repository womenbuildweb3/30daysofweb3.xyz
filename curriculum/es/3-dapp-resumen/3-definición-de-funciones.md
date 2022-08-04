---
title: Definición de funciones
description: Define functions in Solidity to handle events in your full-stack decentralized event platform.
optional: false
tweet: "Write a smart contract in Solidity for a full-stack dapp with #30DaysofWeb3 @womenbuildweb3 ✍️"
---

## Crear un nuevo evento

A continuación, escribiremos la función que se llamará cuando un usuario cree un nuevo evento en nuestra interfaz. Este es uno de nuestros métodos de establecimiento: una función que se ejecuta y establece el valor en función de la información que el usuario pasó.

**Un recordatorio de lo que esta función debería poder manejar:**

- Una identificación única
- Una referencia a quién creó el evento (una dirección de billetera del creador)
- La hora del evento, para que sepamos cuándo deberían estar disponibles los reembolsos.
- La capacidad máxima de asistentes para ese evento
- El monto del depósito para ese evento.
- Mantenga un registro de aquellos que confirmaron su asistencia
- Realizar un seguimiento de los usuarios que se registran en el evento

Después de agregar esa función en nuestro mapeo, así es como debería verse su _smart contract_ hasta ahora:

```solidity
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


    // this creates a new CreateEvent struct and adds it to the idToEvent mapping
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
}
```

Explicación línea por línea de lo que acabamos de hacer:

Definimos la función `createNewEvent` y definimos los parámetros que la función debe aceptar. Estas son las configuraciones específicas para un evento que obtendremos de la persona que realmente crea el evento en la interfaz. Estas cosas son el _eventTimestamp_ AKA cuando comenzará el evento, el depósito requerido para confirmar su asistencia a este evento, la capacidad máxima de este evento y una referencia al hash ipfs que contiene información como el nombre y la descripción del evento.

```solidity
function createNewEvent(
    uint256 eventTimestamp,
    uint256 deposit,
    uint256 maxCapacity,
    string calldata eventDataCID
)
```

Configuramos la visibilidad de la función como externa, ya que tiene un alto rendimiento y ahorra _gas_.

`external {`

En el cuerpo de la función, creamos una ID única para el evento al **combinar** algunos valores.

Permitimos que el usuario ingrese su propio ID único, pero esto puede generar **colisiones**. Las colisiones son un problema a tener en cuenta al crear tablas hash o asignaciones. Las colisiones ocurren cuando el mismo hash (ID único) hace referencia a dos o más elementos.

Por ejemplo, si dos usuarios crearon un evento al mismo tiempo, es posible que ambos obtengan el mismo identificador o que, sin saberlo, elijan el mismo ID de evento que otra persona. Esto podría causar problemas más adelante cuando intentemos buscar elementos por su identificador de evento único.

Para combatir esto, generamos un ID único creando un hash pasando todos los argumentos pasados a la llamada de función. La combinación de todos los argumentos y la función hash disminuiría enormemente la probabilidad de una colisión.

```solidity
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
```

Inicializamos las dos matrices que usaremos para rastrear RSVP y asistentes. Sabemos que necesitamos definir estas dos matrices porque en nuestra estructura, CreateEvent, definimos que habrá dos matrices que se usarán para rastrear las direcciones de los usuarios que confirmaron su asistencia y la dirección de los usuarios que realmente llegan y se registran en el evento AKA están confirmados.

```
address[] memory confirmedRSVPs;
address[] memory claimedRSVPs;
```

Ahora que tenemos una ID único, podemos crear una nueva entrada en nuestro mapeo. Puede pensar en esto como agregar un nuevo evento a nuestro directorio de eventos administrados por este _smart contract_.

El _`key`_ es el ID del evento y el _`value`_ es una estructura o objeto con las siguientes propiedades que tomamos de los argumentos de la función pasados por el usuario en el front-end (eventName, eventTimestamp, deposit, maxCapacity), algunos generamos nosotros mismos o recopilamos del lado del _smart contract_ (eventID, eventOwner, confirmRSVPS, ClaimRSVPs). Finalmente, configuramos el _boolean paidOut_ en falso porque en el momento de la creación del evento, no ha habido pagos a los rsvp'ers (todavía no hay ninguno) o al propietario del evento todavía.

```solidity
idToEvent[eventId] = CreateEvent(
    eventId,
    eventName,
    msg.sender,
    eventTimestamp,
    deposit,
    maxCapacity,
    confirmedRSVPs,
    claimedRSVPs,
    false
);
```

### Confirmar asistencia al evento

A continuación, escribiremos la función que se llama cuando un usuario encuentra un evento y confirma su asistencia en el front-end.

**Recordatorio de los requisitos para que una función permita a los usuarios confirmar su asistencia a un evento:**

- Pase una identificación de evento única a la que el usuario desea confirmar su asistencia
- Asegurarse de que el valor de su depósito sea suficiente para el requisito de depósito de ese evento
- Asegúrese de que el evento aún no haya comenzado según la marca de tiempo del evento: las personas no deberían poder confirmar su asistencia después de que el evento haya comenzado
- Asegúrese de que el evento esté por debajo de la capacidad máxima
- Agregue esta función a su contrato, justo debajo de la función createNewEvent.

Así es como se verá su función createNewRSVP:

```solidity
function createNewRSVP(bytes32 eventId) external payable {
    // look up event from our mapping
    CreateEvent storage myEvent = idToEvent[eventId];

    // transfer deposit to our contract / require that they send in enough ETH to cover the deposit requirement of this specific event
    require(msg.value == myEvent.deposit, "NOT ENOUGH");

    // require that the event hasn't already happened (<eventTimestamp)
    require(block.timestamp <= myEvent.eventTimestamp, "ALREADY HAPPENED");

    // make sure event is under max capacity
    require(
        myEvent.confirmedRSVPs.length < myEvent.maxCapacity,
        "This event has reached capacity"
    );

    // require that msg.sender isn't already in myEvent.confirmedRSVPs AKA hasn't already RSVP'd
    for (uint8 i = 0; i < myEvent.confirmedRSVPs.length; i++) {
        require(myEvent.confirmedRSVPs[i] != msg.sender, "ALREADY CONFIRMED");
    }

    myEvent.confirmedRSVPs.push(payable(msg.sender));
}
```

### Registro de asistentes

Parte de nuestra aplicación requiere que los usuarios paguen un depósito que recuperan cuando llegan al evento. Escribiremos la función que registra a los asistentes y devuelve su depósito.

```solidity
function confirmAttendee(bytes32 eventId, address attendee) public {
    // look up event from our struct using the eventId
    CreateEvent storage myEvent = idToEvent[eventId];

    // require that msg.sender is the owner of the event - only the host should be able to check people in
    require(msg.sender == myEvent.eventOwner, "NOT AUTHORIZED");

    // require that attendee trying to check in actually RSVP'd
    address rsvpConfirm;

    for (uint8 i = 0; i < myEvent.confirmedRSVPs.length; i++) {
        if (myEvent.confirmedRSVPs[i] == attendee){
            rsvpConfirm = myEvent.confirmedRSVPs[i];
        }
    }

    require(rsvpConfirm == attendee, "NO RSVP TO CONFIRM");


    // require that attendee is NOT already in the claimedRSVPs list AKA make sure they haven't already checked in
    for (uint8 i = 0; i < myEvent.claimedRSVPs.length; i++) {
        require(myEvent.claimedRSVPs[i] != attendee, "ALREADY CLAIMED");
    }

    // require that deposits are not already claimed by the event owner
    require(myEvent.paidOut == false, "ALREADY PAID OUT");

    // add the attendee to the claimedRSVPs list
    myEvent.claimedRSVPs.push(attendee);

    // sending eth back to the staker `https://solidity-by-example.org/sending-ether`
    (bool sent,) = attendee.call{value: myEvent.deposit}("");

    // if this fails, remove the user from the array of claimed RSVP's
    if (!sent) {
        myEvent.claimedRSVPs.pop();
    }

    require(sent, "Failed to send Ether");
}
```

### Confirmar todo el grupo

Como organizador de eventos, es posible que desee poder confirmar a todos los asistentes a la vez, en lugar de procesarlos uno por uno.

Escribamos una función para confirmar cada persona que tiene RSVP para un evento específico:

```solidity
function confirmGroup(bytes32 eventId, address[] calldata attendees) external {
    // look up event from our struct with the eventId
    CreateEvent memory myEvent = idToEvent[eventId];

    // make sure you require that msg.sender is the owner of the event
    require(msg.sender == myEvent.eventOwner, "NOT AUTHORIZED");

    // confirm each attendee in the rsvp array
    for (uint8 i = 0; i < attendees.length; i++) {
        confirmAttendee(eventId, attendees[i]);
    }
}
```

### Enviar depósitos no reclamados al organizador del evento

Finalmente, necesitamos escribir una función que retire los depósitos de las personas que no se presentaron al evento y los envíe al organizador del evento:

```solidity
function withdrawUnclaimedDeposits(bytes32 eventId) external {
    // look up event
    CreateEvent memory myEvent = idToEvent[eventId];

    // check that the paidOut boolean still equals false AKA the money hasn't already been paid out
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
    if (!sent) {
        myEvent.paidOut = false;
    }

    require(sent, "Failed to send Ether");
}
```

---

Escritoras: [Cami](https://twitter.com/camiinthisthang),
Traductoras: [Dami](https://twitter.com/dakitidami), [Brenda](https://twitter.com/engineerbrenda), [Caro Meneses](https://twitter.com/carmedinat)
