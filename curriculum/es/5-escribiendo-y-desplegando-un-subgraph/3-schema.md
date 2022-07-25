---
title: Schema
description: Define the GraphQL schema that models the data you will query from your subgraph.
optional: false
tweet: "Create and deploy a subgraph on @graphprotocol with #30DaysofWeb3 @womenbuildweb3 👾"
---

# Schema

Aquí es donde definiremos el _schema_ (schema.graphql) para nuestras consultas GraphQL. Idealmente, queremos modelar estos datos para que coincidan con los datos que necesitamos para nuestra interfaz.

**Según las maquetas de nuestro sitio web, podemos ver que necesitamos poder:**

- buscar eventos por título, descripción
- filtrar eventos por fecha y/o rango de fechas
- obtener los eventos alojados del usuario actual por fecha (próximos frente a pasados)
- obtener los eventos confirmados del usuario actual por fecha (próximos frente a pasados)
- ordenar eventos por la mayor cantidad de rsvps
- ordenar eventos por fecha
- comprobar si el usuario actual ha confirmado su asistencia al evento
- comprobar si el usuario actual ha asistido al evento
- obtener detalles del evento

Podemos eliminar la entidad de ejemplo en el archivo de el _schema_. Así es como debería verse nuestro archivo de _schema_:

```javascript
type Event @entity {
  id: ID!
  eventID: Bytes!
  name: String
  description: String
  link: String
  imageURL: String
  eventOwner: Bytes!
  eventTimestamp: BigInt!
  maxCapacity: BigInt!
  deposit: BigInt!
  paidOut: Boolean!
  totalRSVPs: BigInt!
  totalConfirmedAttendees: BigInt!
  rsvps: [RSVP!] @derivedFrom(field: "event")
  confirmedAttendees: [Confirmation!] @derivedFrom(field: "event")
}

type Account @entity {
  id: ID!
  totalRSVPs: BigInt!
  totalAttendedEvents: BigInt!
  rsvps: [RSVP!] @derivedFrom(field: "attendee")
  attendedEvents: [Confirmation!] @derivedFrom(field: "attendee")
}

type RSVP @entity {
  id: ID!
  attendee: Account!
  event: Event!
}

type Confirmation @entity {
  id: ID!
  attendee: Account!
  event: Event!
}

```

Analicemos lo que está sucediendo aquí.

Tenemos 4 entidades: `Event`, `Account`, `RSVP` y `Confirmation`. Cada entidad debe definirse con la etiqueta `@entity`. Puedes pensar en una entidad como un objeto. Es una "cosa" que tiene claves y valores, y cada clave es un campo de _schema_ que se puede consultar por su valor.

Cada entidad también tiene un campo ID para una identificación única y algunos campos para información sobre esa entidad que queremos poder consultar. Cada campo tiene un tipo, y si es requerido tiene un “!” (el valor no puede ser nulo). Los campos de _event name_, _description_, _link_, y, _imageURL_ no son obligatorios, lo que significa que pueden devolver un valor _`null`_.

En las entidades _`Event`_ y _`Account`_ para los campos rsvps y asistentes confirmados, usamos una palabra clave especial `@derivedFrom`, también llamada búsqueda inversa, que nos permite hacer referencia a datos de otra entidad. Veamos los rsvps como ejemplo:

```javascript
rsvps: [RSVP!] @derivedFrom(field: "event")
```

Una forma de pensar en lo que está sucediendo aquí es que cada vez que alguien crea un nuevo RSVP, esa instancia de RSVP se agrega a esta matriz si la identificación del evento del campo _"event"_ en la entidad de RSVP coincide con la identificación de este evento. Por ejemplo, se crea un nuevo RSVP:

```javascript
RSVP {
id: 20
attendee: 300
event: 5000
}
```

Este RSVP es para un evento con la identificación 5000. El evento con la identificación correspondiente tendrá este RSVP agregado a la matriz rsvps.

```javascript
Event {
    id: 5000
	rsvps: [ {id: 20, attendee: 300, event: 5000} ]
}
```

Cada nuevo RSVP para este evento también se agregará aquí. Al usar búsquedas inversas como esta, podemos consultar fácilmente todas las confirmaciones de asistencia y confirmaciones para cualquier evento o cuenta.
