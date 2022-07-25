---
title: Confirmaciones de asistencia previos
description: Let users view past events they RSVP'ed to on your full-stack decentralized event platform.
optional: false
tweet: "#30DaysofWeb3 @womenbuildweb3 🎫"
---


Podemos configurar el archivo `past.js` en la carpeta `pages/my-rsvps` casi igual a como lo hicimos para las confirmaciones de asistencia futuras. Primero, necesitaremos importar las utilidades de ayuda.

```javascript
import { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import EventCard from "../../components/EventCard";
```

A continuación, podemos definir nuestra consulta para obtener todas las confirmaciones de asistencia del usuario.

```javascript
const MY_PAST_RSVPS = gql`
  query Account($id: String) {
    account(id: $id) {
      id
      rsvps {
        event {
          id
          name
          eventTimestamp
          imageURL
        }
      }
    }
  }
`;
```

Ahora podemos configurar la función `MyPastRSVPs` tal como lo hicimos para las confirmaciones futuras, pero aquí solo mostraremos eventos pasados verificando si `eventTimestamp` es menor que `currentTimestamp`.

```javascript
export default function MyPastRSVPs() {
  const { data: account } = useAccount();

  const id = account ? account.address.toLowerCase() : "";
  const [currentTimestamp, setEventTimestamp] = useState(new Date().getTime());
  const { loading, error, data } = useQuery(MY_PAST_RSVPS, {
    variables: { id },
  });

  if (loading)
    return (
      <Dashboard page="rsvps" isUpcoming={false}>
        <p>Loading...</p>
      </Dashboard>
    );
  if (error)
    return (
      <Dashboard page="rsvps" isUpcoming={false}>
        <p>`Error! ${error.message}`</p>
      </Dashboard>
    );
  if (data) console.log(data);

  return (
    <Dashboard page="rsvps" isUpcoming={false}>
      {account ? (
        <div>
          {data && !data.account && <p>No past RSVPs found</p>}
          {data && data.account && (
            <ul
              role="list"
              className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
            >
              {data.account.rsvps.map(function (rsvp) {
                if (rsvp.event.eventTimestamp < currentTimestamp) {
                  return (
                    <li key={rsvp.event.id}>
                      <EventCard
                        id={rsvp.event.id}
                        name={rsvp.event.name}
                        eventTimestamp={rsvp.event.eventTimestamp}
                        imageURL={rsvp.event.imageURL}
                      />
                    </li>
                  );
                }
              })}
            </ul>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center py-8">
          <p className="mb-4">Please connect your wallet to view your rsvps</p>
          <ConnectButton />
        </div>
      )}
    </Dashboard>
  );
}
```