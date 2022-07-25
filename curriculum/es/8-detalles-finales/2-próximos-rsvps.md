---
title: Próximos RSVP
description: Let users view upcoming events they RSVP'ed to on your full-stack decentralized event platform.
optional: false
tweet: "#30DaysofWeb3 @womenbuildweb3 🎫"
---

En la carpeta `pages/my-rsvps`, tenemos dos páginas en las que queremos mostrar los eventos pasados y próximos del usuario a los que confirmaron su asistencia.

Puede abrir esta página en http://localhost:3000/my-rsvps/upcoming, o puede navegar allí desde la página de inicio conectando su billetera y haciendo clic en la dirección de su billetera en la esquina superior derecha para abrir un menú desplegable.

En el archivo `upcoming.js`, podemos importar `useState`, `useAccount` y `ConnectButton` para que el usuario pueda conectar su billetera. También podemos importar `gql` y `useQuery` para poder obtener detalles sobre el evento de nuestro subgraph. Finalmente, podemos importar el componente `EventCard`.


```javascript
import { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import EventCard from "../../components/EventCard";
```

Antes de nuestra función `MyUpcomingRSVPs`, podemos definir nuestra consulta gql, la cual obtendrá todos los RSVPs de la cuenta del usuario.

```javascript
const MY_UPCOMING_RSVPS = gql`
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
Para mostrar únicamente los RSVPs de los próximos eventos, podemos filtrar los eventos retornados a través de la consulta  `eventTimestamp`.

También queremos permitir que el usuario conecte su billetera tal como lo hicimos en nuestras otras páginas con el gancho `ConnectButton` y `useAccount`.

Podemos obtener la dirección de la billetera del usuario desde el gancho `useAccount` y pasarla a nuestra consulta. Para asegurarnos de que nuestro subgraph pueda coincidir con la dirección correctamente, debemos transformar la dirección a minúsculas.

Una vez que tengamos los resultados de nuestra consulta, podemos pasarlos a nuestro componente `EventCard`.

```javascript
export default function MyUpcomingRSVPs() {
  const { data: account } = useAccount();

  const id = account ? account.address.toLowerCase() : "";
  const [currentTimestamp, setEventTimestamp] = useState(new Date().getTime());
  const { loading, error, data } = useQuery(MY_UPCOMING_RSVPS, {
    variables: { id },
  });

  if (loading)
    return (
      <Dashboard page="rsvps" isUpcoming={true}>
        <p>Loading...</p>
      </Dashboard>
    );
  if (error)
    return (
      <Dashboard page="rsvps" isUpcoming={true}>
        <p>`Error! ${error.message}`</p>
      </Dashboard>
    );

  return (
    <Dashboard page="rsvps" isUpcoming={true}>
      {account ? (
        <div>
          {data && !data.account && <p>No upcoming RSVPs found</p>}
          {data && data.account && (
            <ul
              role="list"
              className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
            >
              {data.account.rsvps.map(function (rsvp) {
                if (rsvp.event.eventTimestamp > currentTimestamp) {
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

Escritoras: [Sarah Schwartz](https://twitter.com/schwartzswartz),
Traductoras: [Dami](https://twitter.com/dakitidami), [Brenda](https://twitter.com/engineerbrenda), Caro Meneses