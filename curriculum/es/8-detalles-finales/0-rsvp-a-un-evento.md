---
title: Confirmar asistencia/RSVP a un evento
description: 
optional: false
tweet: "#30DaysofWeb3 @womenbuildweb3 🎫"
---

Queremos que los usuarios también puedan confirmar su asistencia a un evento en la página de detalles del evento.

En el mismo archivo `pages/events/[id].js`, importe nuestras funciones de contrato y billetera en la parte superior:

```javascript
import { useState } from "react";
import { ethers } from "ethers";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import connectContract from "../../utils/connectContract";
import Alert from "../../components/Alert";
```

En la parte superior de la función Evento, podemos agregar algunas variables de estado para realizar un seguimiento de la cuenta de usuario, el estado de la transacción del contrato y la hora actual.

```javascript
const { data: account } = useAccount();
const [success, setSuccess] = useState(null);
const [message, setMessage] = useState(null);
const [loading, setLoading] = useState(null);
const [currentTimestamp, setEventTimestamp] = useState(new Date().getTime());
```

Ahora comprobaremos si el usuario ya ha confirmado su asistencia o no creando una función llamada `checkIfAlreadyRSVPed`. Si aún no lo ha hecho, el usuario verá un botón para confirmar su asistencia. Para averiguar si ya han confirmado su asistencia, podemos recorrer la matriz rsvps del evento y ver si alguna de las direcciones de billetera coincide.

```javascript
function checkIfAlreadyRSVPed() {
    if (account) {
      for (let i = 0; i < event.rsvps.length; i++) {
        const thisAccount = account.address.toLowerCase();
        if (event.rsvps[i].attendee.id.toLowerCase() == thisAccount) {
          return true;
        }
      }
    }
    return false;
}
```

A continuación, podemos crear una función llamada `newRSVP` y llamar al método `createNewRSVP` desde nuestro contrato. Podemos pasar el monto del depósito que recuperamos de nuestro subgraph como el valor de dicha transacción.

```javascript
const newRSVP = async () => {
    try {
      const rsvpContract = connectContract();
      if (rsvpContract) {
        const txn = await rsvpContract.createNewRSVP(event.id, {
          value: event.deposit,
          gasLimit: 300000,
        });
        setLoading(true);
        console.log("Minting...", txn.hash);
        
        await txn.wait();
        console.log("Minted -- ", txn.hash);
        setSuccess(true);
        setLoading(false);
        setMessage("Your RSVP has been created successfully.");
      } else {
        console.log("Error getting contract.");
      }
    } catch (error) {
      setSuccess(false);
      setMessage("Error!");
      setLoading(false);
      console.log(error);
    }
};
```

Tal como en nuestra página `crear evento`, querremos mostrar una alerta basada en el estado de la transacción del contrato del usuario. Podemos agregar esto dentro de la primera sección de la página.

```javascript
<section className="relative py-12">
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

Encima de la sección que muestra el número de RSVPs y la capacidad máxima para dicho evento, podemos agregar un botón para confirmar asistencia/RSVP que sólo mostraremos si el usuario aún no ha confirmado su asistencia. Por el contrario, si ya ha confirmado su asistencia, podemos mostrarle un enlace al evento.

Todo esto está empaquetado en una declaración condicional que también verifica si el usuario ha iniciado sesión. Si aún no ha iniciado sesión, podemos mostrar el botón de conectar la billetera.

Si el evento ya ha pasado, ocultaremos todo lo anterior y le informaremos al usuario que el evento ya pasó.

```javascript
<div className="max-w-xs w-full flex flex-col gap-4 mb-6 lg:mb-0">
    {event.eventTimestamp > currentTimestamp ? (
      account ? (
        checkIfAlreadyRSVPed() ? (
          <>
            <span className="w-full text-center px-6 py-3 text-base font-medium rounded-full text-teal-800 bg-teal-100">
              You have RSVPed! 🙌
            </span>
            <div className="flex item-center">
              <LinkIcon className="w-6 mr-2 text-indigo-800" />
              <a
                className="text-indigo-800 truncate hover:underline"
                href={event.link}
              >
                {event.link}
              </a>
            </div>
          </>
        ) : (
          <button
            type="button"
            className="w-full items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={newRSVP}
          >
            RSVP for {ethers.utils.formatEther(event.deposit)} MATIC
          </button>
        )
      ) : (
        <ConnectButton />
      )
    ) : (
      <span className="w-full text-center px-6 py-3 text-base font-medium rounded-full border-2 border-gray-200">
        Event has ended
      </span>
    )}
    <div className="flex item-center">
```

Y ¡sí! Creación de RSVP realizada! 🎉

Pruebe el botón de confirmación de asistencia/RSVP para asegurarse de que todo funciona. La página del evento puede tardar unos minutos en mostrar que ya ha confirmado su asistencia.