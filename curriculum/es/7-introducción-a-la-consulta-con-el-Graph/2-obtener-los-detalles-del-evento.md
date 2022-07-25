---
title: Obtener los detalles del evento
description: Fetch event details from your subgraph.
optional: false
tweet: "Query a subgraph for a full-stack dapp with #30DaysofWeb3 @womenbuildweb3 ⛓"
---

Abra el archivo `pages/events/[id].js`, que utiliza el enrutamiento dinámico con Next.js para crear una nueva página para cada evento minteado/acuñado en función del eventID. Aquí es donde podemos mostrar los detalles de un evento particular y los usuarios pueden completar su RSVP.

Primero, necesitaremos importar `gql` al cliente apollo en la parte superior de la página.

```javascript
import { gql } from "@apollo/client";
import client from "../../apollo-client";
```

Podemos usar la función `getServerSideProps` para obtener los datos de nuestro subgraph del servidor. Puede obtener más información sobre esta función y cómo Next.js representa el contenido aquí: https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props (página disponible sólo en inglés)

Podemos obtener el ID del evento desde la URL de la página y pasarla a nuestra consulta para obtener los detalles de dicho evento. Luego podemos retornar los datos que recibimos como propiedades para usar en la página.

```javascript
export async function getServerSideProps(context) {
 const { id } = context.params;
 
 const { data } = await client.query({
   query: gql`
     query Event($id: String!) {
       event(id: $id) {
         id
         eventID
         name
         description
         link
         eventOwner
         eventTimestamp
         maxCapacity
         deposit
         totalRSVPs
         totalConfirmedAttendees
         imageURL
         rsvps {
           id
           attendee {
             id
           }
         }
       }
     }
   `,
   variables: {
     id: id,
   },
 });
 
 return {
   props: {
     event: data.event,
   },
 };
}
```

Ahora podemos importar el evento desde las propiedades en la función Evento.

```javascript
function Event({event}) {
```

Tenga en cuenta que esto se parece mucho a la consulta en nuestro patio de pruebas, pero está anidado dentro de un objeto de consulta llamado Evento, en donde debemos definir el tipo de entrada de la consulta (en este caso es un string).

Ahora podemos acceder al evento desde las propiedades usando la desestructuración. Para asegurarnos de que estamos recibiendo los datos del evento que solicitamos, podemos intentar registrar el `event` en la consola.

```javascript
function Event({ event }) {
    console.log("EVENT:", event)
```

Cree un nuevo evento en la página de creación de eventos y haga clic en el enlace a la página de detalles de su evento una vez realizada la transacción. Es posible que tenga que esperar unos minutos para que esto se lleve a cabo.

Una vez que pueda abrir la página de detalles del evento, debería poder ver los detalles de su evento en la consola.

Ahora podremos usar estos datos para reemplazar los valores estáticos en la página.