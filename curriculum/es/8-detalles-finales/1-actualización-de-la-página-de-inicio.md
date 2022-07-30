---
title: Actualización de la página de inicio
description: Let users discover events on the homepage of your full-stack decentralized event platform.
optional: false
tweet: "#30DaysofWeb3 @womenbuildweb3 🎫"
---

En nuestro archivo `index.js`, queremos poder mostrar todos los próximos eventos en los que la gente puede confirmar su asistencia. En la parte superior del archivo podemos importar `gql` y `useQuery` desde el cliente apollo. También necesitaremos importar `useState` y nuestro componente `EventCard`.

```javascript
import { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import EventCard from "../components/EventCard";
```

Podemos definir nuestra consulta sobre la función `Inicio` de la siguiente manera:

```javascript
const UPCOMING_EVENTS = gql`
  query Events($currentTimestamp: String) {
    events(where: { eventTimestamp_gt: $currentTimestamp }) {
      id
      name
      eventTimestamp
      imageURL
    }
  }
`;
```

Esta consulta retornará el ID, el nombre, la marca de tiempo del evento y la URL de la imagen para cada evento que aún no ha ocurrido.

Ahora, en nuestra función `Inicio`, podemos obtener la marca de tiempo actual y cargar la consulta con el cliente apollo. Una vez obtengamos la lista de eventos, podemos mapearlos para generar una lista de tarjetas de eventos.

```javascript
export default function Home() {
  const [currentTimestamp, setEventTimestamp] = useState(
    new Date().getTime().toString()
  );
  const { loading, error, data } = useQuery(UPCOMING_EVENTS, {
    variables: { currentTimestamp },
  });

  if (loading)
    return (
      <Landing>
        <p>Loading...</p>
      </Landing>
    );
  if (error)
    return (
      <Landing>
        <p>`Error! ${error.message}`</p>
      </Landing>
    );

  return (
    <Landing>
      <ul
        role="list"
        className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
      >
        {data &&
          data.events.map((event) => (
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
    </Landing>
  );
}
```

¡Ahora en la página de inicio debemos poder ver una lista de los eventos que hemos creado!

---

Escritoras: [Sarah Schwartz](https://twitter.com/schwartzswartz),
Traductoras: [Dami](https://twitter.com/dakitidami), [Brenda](https://twitter.com/engineerbrenda), [Caro Meneses](https://twitter.com/carmedinat)
