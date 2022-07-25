---
title: Finalización de la página Crear evento
description: 
optional: false
tweet: "#30DaysofWeb3 @womenbuildweb3 💥"
---

En la parte superior de la página `create-event`, importe el `connectButton` de rainbowkit, `useAccount` de wagmi y el componente `Alert`.

```javascript
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import Alert from "../components/Alert";
```

En la parte superior de `CreateEvent`, justo debajo de `export default function CreateEvent() {` configuramos nuestra variable `account` con `useAccount`:

```javascript
const { data: account } = useAccount();
```

También podemos configurar variables `state` para realizar un seguimiento de nuestros mensajes de alerta, con el fin de que nuestros usuarios puedan ver si su evento se creó con éxito o no. Agregue las siguientes líneas justo debajo de la línea `useAccount ` que aparece arriba:

```javascript
const [success, setSuccess] = useState(null);
const [message, setMessage] = useState(null);
const [loading, setLoading] = useState(null);
const [eventID, setEventID] = useState(null);
```

En nuestra función `createEvent`, justo antes de ejecutar el registro en la consola del "Minting..." y el hash de la transacción, podemos establecer el estado de `loading` como verdadero. Una vez que la transacción se ha realizado exitosamente, podemos establecer nuestra variable exitosa como verdadera, establecer "cargando" como falso y configurar nuestro mensaje de confirmación exitosa.

```javascript
setLoading(true);
console.log("Minting...", txn.hash);
console.log("Minted -- ", txn.hash);
let wait = await txn.wait();
setEventID(wait.events[0].args[0]);
setSuccess(true);
setLoading(false);
setMessage("Your event has been created successfully.");
```

Si detectamos un error, podemos configurar el mensaje para mostrar el error.

```javascript
setSuccess(false);
setMessage(`There was an error creating your event: ${error.message}`);
setLoading(false);
```
Así es como su función `createEvent` debe verse ahora:

```javascript
const createEvent = async (cid) => {
    try {
      const memoryContract = connectContract();

      if (memoryContract) {
        let eventDateAndTime = new Date(`${eventDate} ${eventTime}`);
        let eventTimestamp = eventDateAndTime.getTime();
        let eventDataCID = cid;

        const txn = await memoryContract.createNewMemory(
          eventDataCID,
          eventTimestamp,
          sPublic,
          friends,
          { gasLimit: 900000 }
        );
        setLoading(true);
        console.log("Minting...", txn.hash);
        await txn.wait();
        console.log("Minted -- ", txn.hash);
        let wait = await txn.wait();
        setEventID(wait.events[0].args[0]);
        setSuccess(true);
        setLoading(false);
        setMessage("Your event has been created successfully.");
      } else {
        console.log("Error getting contract.");
      }
    } catch (error) {
      console.log(error);
      setSuccess(false);
      setMessage(`There was an error creating your event: ${error.message}`);
      setLoading(false);
    }
  };
```


Ahora podemos configurar el componente `Alert` para que se muestre en función del  de la operación y del estado de carga. Podemos agregar esto dentro de la `sección`.

```javascript
{loading && (
  <Alert
    alertType={"loading"}
    alertBody={"Please wait"}
    triggerAlert={true}
    color={"white"}
  />
)}
{success && (
  <Alert
    alertType={"success"}
    alertBody={message}
    triggerAlert={true}
    color={"palegreen"}
  />
)}
{success === false && (
  <Alert
    alertType={"failed"}
    alertBody={message}
    triggerAlert={true}
    color={"palevioletred"}
  />
)}
```

También podemos empaquetar nuestro formulario y encabezado en una declaración condicional para que no se muestre si el usuario crea un evento exitosamente.

```javascript
{!success && (
  <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl mb-4">
    Create your virtual event
  </h1>
)}
```
También podemos ocultar el formulario si el usuario no ha conectado su billetera.

```javascript
{account && !success && (
  <form>
      ...
  </form>
)}
```

Podemos descomentar la sección que le pide al usuario que conecte su billetera, y solo mostrar esto si el usuario aún no ha conectado su billetera.

```javascript
{!account && (
  <section className="flex flex-col items-start py-8">
    <p className="mb-4">Please connect your wallet to create events.</p>
    <ConnectButton />
  </section>
)}
```

Si el evento es creado exitosamente, podemos mostrarle al usuario un mensaje de confirmación y un enlace a la página de su evento. Podemos agregar esto en la parte inferior de la `sección`.

```javascript
{success && eventID && (
  <div>
    Success! Please wait a few minutes, then check out your event page{" "}
    <span className="font-bold">
      <Link href={`/event/${eventID}`}>here</Link>
    </span>
  </div>
)}
```

¡Y eso es todo! Pruebe la página para ver si puede crear correctamente un nuevo evento.

Si encuentra algún error, puede ver una copia completa de esta página aquí: https://github.com/womenbuildweb3/Web3RSVP-frontend/blob/main/pages/create-event.js

Escritoras: [Sarah Schwartz](https://twitter.com/schwartzswartz),
Traductoras: [Dami](https://twitter.com/dakitidami), [Brenda](https://twitter.com/engineerbrenda), Caro Meneses