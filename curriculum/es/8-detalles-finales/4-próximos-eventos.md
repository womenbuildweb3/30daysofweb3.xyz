---
title: Próximos Eventos
description: Let users view upcoming events they created on your full-stack decentralized event platform.
optional: false
tweet: "#30DaysofWeb3 @womenbuildweb3 🎫"
---

Puede encontrar la página de próximos eventos en la carpeta `pages/my-events` y en http://localhost:3000/my-events/upcoming

En la parte superior del archivo, podemos importar nuevamente nuestras utilidades de ayuda.

```javascript
import { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import EventCard from "../../components/EventCard";
```

Para los próximos eventos creados por el usuario, queremos asegurarnos de que solo estamos recuperando los eventos futuros en donde `eventOwner` es igual a la dirección de la billetera del usuario.

Podemos hacerlo combinando estas dos condiciones con la palabra clave `where` y el modificador `_gt`.

```javascript
const MY_UPCOMING_EVENTS = gql`
  query Events($eventOwner: String, $currentTimestamp: String) {
    events(
      where: { eventOwner: $eventOwner, eventTimestamp_gt: $currentTimestamp }
    ) {
      id
      eventID
      name
      description
      eventTimestamp
      maxCapacity
      totalRSVPs
      imageURL
    }
  }
`;

```

A continuación, podemos configurar el resultado de nuestra consulta y conectar el botón de la billetera tal como lo hemos hecho en otras páginas y mapear nuestros resultados para mostrar las tarjetas de eventos.

```javascript
export default function MyUpcomingEvents() {
  const { data: account } = useAccount();

  const eventOwner = account ? account.address.toLowerCase() : "";
  const [currentTimestamp, setEventTimestamp] = useState(
    new Date().getTime().toString()
  );
  const { loading, error, data } = useQuery(MY_UPCOMING_EVENTS, {
    variables: { eventOwner, currentTimestamp },
  });

  if (loading)
    return (
      <Dashboard page="events" isUpcoming={true}>
        <p>Loading...</p>
      </Dashboard>
    );
  if (error)
    return (
      <Dashboard page="events" isUpcoming={true}>
        <p>`Error! ${error.message}`</p>
      </Dashboard>
    );

  return (
    <Dashboard page="events" isUpcoming={true}>
      {account ? (
        <div>
          {data && data.events.length == 0 && <p>No upcoming events found</p>}
          {data && data.events.length > 0 && (
            <ul
              role="list"
              className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
            >
              {data.events.map((event) => (
                <li key={event.id}>
                  <EventCard
                    id={event.id}
                    name={event.name}
                    eventTimestamp={event.eventTimestamp}
                    imageURL={event.imageURL}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center py-8">
          <p className="mb-4">Please connect your wallet to view your events</p>
          <ConnectButton />
        </div>
      )}
    </Dashboard>
  );
}
```

Escritoras: [Sarah Schwartz](https://twitter.com/schwartzswartz),
Traductoras: [Dami](https://twitter.com/dakitidami), [Brenda](https://twitter.com/engineerbrenda), Caro Meneses