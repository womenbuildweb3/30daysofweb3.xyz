# Asignaciones ({contract}.ts)

Puede encontrar el archivo de asignaciones en la carpeta `src`. Las asignaciones usan AssemblyScript, un lenguaje fuertemente tipado basado en Typescript, y actúan como los resolutores en su típico API de GraphQL. Son responsables de la lógica que ocurre entre un evento que se activa desde nuestro *smart contract* y la organización de esos datos en nuestro *schema*.

Este archivo ya tendrá un diseño básico generado para usted. Debería ver una función para cada controlador de eventos definido en nuestro manifiesto de subgraph. Cada función en nuestro mapeo debe exportarse y toma el evento que manejará como un argumento.

Podemos ejecutar `graph codegen` en la terminal para generar tipos de AssemblyScript para nuestras entidades y eventos, y importarlos en la parte superior de nuestro archivo de asignaciones (asegúrese de estar en el directorio raíz de la carpeta de su proyecto y de haber guardado los cambios antes de ejecutar este comando). Con esto, también debería poder ver fácilmente todas las propiedades del objeto de evento en su editor de código.

Si realiza otros cambios en el manifiesto de *schema* o *subgraph*, siempre puede ejecutar `graph codegen` nuevamente para generar nuevos tipos.

Eliminaremos todo en la primera función y reemplazaremos el objeto 'Example Entity' importado en la parte superior con los tipos de entidad que acabamos de generar. Tampoco necesitaremos importar el tipo de contrato Web3RSVP en la segunda línea ya que no necesitaremos hacer ninguna llamada de contrato. También podemos eliminar el tipo BigInt importado en la primera línea y reemplazarlo con los tipos *Address*, *ipfs* y *json*.

El archivo de asignaciones ahora debería verse así:

```
import { Address, ipfs, json } from "@graphprotocol/graph-ts";
import {
  ConfirmedAttendee,
  NewEventCreated,
  NewRSVP,
  DepositsPaidOut,
} from "../generated/Web3RSVP/Web3RSVP";
import { Account, RSVP, Confirmation, Event } from "../generated/schema";
import { integer } from '@protofire/subgraph-toolkit';

export function handleNewEventCreated(event: NewEventCreated): void {}

export function handleNewRSVP(event: NewRSVP): void {}

export function handleConfirmedAttendee(event: ConfirmedAttendee): void {}

export function handleDepositsPaidOut(event: DepositsPaidOut): void {}
```

Podemos comenzar con la función `handleNewEventCreated`. Podemos crear una nueva instancia de una entidad `Event` pasando una identificación única que es una cadena de caracteres hexadecimales.

Así es como se ven nuestros eventos en nuestro contrato:

```
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

Debido a que ya tenemos un `eventID` del evento `NewEventCreated`, podemos usarlo como la identificación única para la entidad `Event`. También queremos asegurarnos de no crear ningún evento duplicado con la misma identificación, por lo que podemos intentar cargar este evento primero y, si no se encuentra, podemos crearlo y guardarlo. (Nota: si olvida usar el método `save` al final de su función, ¡esta información no se guardará! Asegúrese siempre de guardar los cambios realizados en una entidad).

Debido a que el `eventID` emitido por nuestro contrato es del tipo `Bytes32`, podemos usar el método integrado `toHex()` para convertir el id en una cadena hexadecimal que representa los bytes en la matriz.

```
let newEvent = Event.load(event.params.eventID.toHex());
if (newEvent == null) {
  newEvent = new Event(event.params.eventID.toHex());
  newEvent.save();
}
```

Este es un patrón estándar que seguiremos para cada una de nuestras funciones de mapeo. Primero verificaremos si podemos cargar nuestra entidad con una identificación única y crear una nueva instancia solo si ese resultado es *null*.

Lo último que debemos hacer aquí es establecer los valores para cada campo de nuestro *schema*. Podemos acceder a la mayoría de estos datos en el objeto event.params. Para el campo `paidOut`, podemos configurarlo como falso.

```
let newEvent = Event.load(event.params.eventID.toHex());
if (newEvent == null) {
newEvent = new Event(event.params.eventID.toHex());
newEvent.eventID = event.params.eventID;
newEvent.eventOwner = event.params.creatorAddress;
newEvent.eventTimestamp = event.params.eventTimestamp;
newEvent.maxCapacity = event.params.maxCapacity;
newEvent.deposit = event.params.deposit;
newEvent.paidOut = false;
```
Para los campos `totalRSVPs` y `totalConfirmedAttendees`, usaremos el protofire *subgraph* toolkit que agregamos anteriormente. En nuestra función `handleNewEventCreated`, queremos establecer los totales en 0 para comenzar, por lo que podemos usar `integer.ZERO` para establecer estos campos en 0.

```
newEvent.totalRSVPs = integer.ZERO;
newEvent.totalConfirmedAttendees = integer.ZERO;
```
Para los campos `name`, `description`, `link` e `imagePath`, utilizaremos `eventCID` para acceder a los datos almacenados con ipfs (web3.storage). Podemos usar el CID y el nombre del archivo de detalles del evento, `data.json`, para extraer estos datos.

```
let metadata = ipfs.cat(event.params.eventDataCID + "/data.json");

if (metadata) {
      const value = json.fromBytes(metadata).toObject();
      if (value) {
        const name = value.get("name");
        const description = value.get("description");
        const link = value.get("link");
        const imagePath = value.get("image");

        if (name) {
          newEvent.name = name.toString();
        }

        if (description) {
          newEvent.description = description.toString();
        }

        if (link) {
          newEvent.link = link.toString();
        }

        if(imagePath){
          const imageURL =
      "https://ipfs.io/ipfs/" + event.params.eventDataCID + imagePath.toString();
          newEvent.imageURL = imageURL;
        } else {
        // return fallback image if no imagePath
          const fallbackURL = "https://ipfs.io/ipfs/bafybeibssbrlptcefbqfh4vpw2wlmqfj2kgxt3nil4yujxbmdznau3t5wi/event.png";
          newEvent.imageURL = fallbackURL;
        }
      }
    }

    newEvent.save();
```

Nuestra función `handleNewEventCreated` ahora debería verse así:

```
export function handleNewEventCreated(event: NewEventCreated): void {
  let newEvent = Event.load(event.params.eventID.toHex());
  if (newEvent == null) {
    newEvent = new Event(event.params.eventID.toHex());
    newEvent.eventID = event.params.eventID;
    newEvent.eventOwner = event.params.creatorAddress;
    newEvent.eventTimestamp = event.params.eventTimestamp;
    newEvent.maxCapacity = event.params.maxCapacity;
    newEvent.deposit = event.params.deposit;
    newEvent.paidOut = false;
    newEvent.totalRSVPs = integer.ZERO;
    newEvent.totalConfirmedAttendees = integer.ZERO;

    let metadata = ipfs.cat(event.params.eventDataCID + "/data.json");

    if (metadata) {
      const value = json.fromBytes(metadata).toObject()
      if (value) {
        const name = value.get('name')
        const description = value.get('description')
        const link = value.get('link')

        if(name){
          newEvent.name = name.toString()
         }

        if(description){
          newEvent.description = description.toString()
         }
        
        if(link){
          newEvent.link = link.toString()
         }
      }
      
    }

    newEvent.save();
  }
}
```

Para nuestra función `handleNewRSVP`, crearemos una nueva entidad RSVP y una nueva entidad de cuenta (asumiendo que es un nuevo usuario). Para mantener nuestras funciones simples, podemos dividir esto en dos funciones.

```
function getOrCreateAccount(address: Address): Account {
  let account = Account.load(address.toHex());
  if (account == null) {
    account = new Account(address.toHex());
    account.totalRSVPs = integer.ZERO;
    account.totalAttendedEvents = integer.ZERO;
    account.save();
  }
  return account;
}

export function handleNewRSVP(event: NewRSVP): void {
  let newRSVP = RSVP.load(event.transaction.from.toHex());
  let account = getOrCreateAccount(event.params.attendeeAddress);
  let thisEvent = Event.load(event.params.eventID.toHex());
  if (newRSVP == null && thisEvent != null) {
    newRSVP = new RSVP(event.transaction.from.toHex());
    newRSVP.attendee = account.id;
    newRSVP.event = thisEvent.id;
    newRSVP.save();
    account.totalRSVPs = integer.increment(account.totalRSVPs);
    account.save();
  }
}
```
Nuestra función `handleConfirmedAttendee` seguirá el mismo patrón:

```
export function handleConfirmedAttendee(event: ConfirmedAttendee): void {
  let id = event.params.eventID.toHex() + event.params.attendeeAddress.toHex();
  let newConfirmation = Confirmation.load(id);
  let account = getOrCreateAccount(event.params.attendeeAddress);
  let thisEvent = Event.load(event.params.eventID.toHex());
  if (newConfirmation == null && thisEvent != null) {
    newConfirmation = new Confirmation(id);
    newConfirmation.attendee = account.id;
    newConfirmation.event = thisEvent.id;
    newConfirmation.save();

    thisEvent.totalConfirmedAttendees = integer.increment(thisEvent.totalConfirmedAttendees);
    thisEvent.save();

    account.totalAttendedEvents = integer.increment(account.totalAttendedEvents);
    account.save();
  }
}
```

Para nuestra función `handleDepositsPaidOut`, todo lo que tenemos que hacer es cambiar el campo de pago del evento coincidente de falso a verdadero:

```
export function handleDepositsPaidOut(event: DepositsPaidOut): void {
  let thisEvent = Event.load(event.params.eventID.toHex());
  if (thisEvent) {
    thisEvent.paidOut = true;
    thisEvent.save();
  }
}
```

Puede ver una versión final del archivo de asignaciones [aquí.](https://github.com/womenbuildweb3/web3RSVP-subgraph/blob/main/src/mapping.ts)

Finalmente, podemos ejecutar `graph build` en la terminal para construir nuestro subgrafo y asegurarnos de que no tengamos ningún error.