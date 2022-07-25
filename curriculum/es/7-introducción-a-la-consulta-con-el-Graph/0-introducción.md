---
title: Introducción a la consulta con el Graph
description: 
optional: false
tweet: "#30DaysofWeb3 @womenbuildweb3 ⛓"
---

# Introducción a la consulta con el Graph

Ahora que hemos creado un evento, debemos poder recuperar la información del evento para mostrarla en la página de detalles del mismo. También necesitamos saber el monto del depósito del evento antes de poder crear un RSVP.

Aquí es donde entra en juego nuestro subgraph. Cuando abrimos nuestro patio de pruebas del subgraph implementado, podemos ver que hay una consulta de ejemplo predeterminada en el contenedor izquierdo.

Si hacemos clic en el botón “reproducir” o “ejecutar”, podemos ver que esta consulta retorna una lista de datos en formato JSON con los mismos campos de nuestra consulta. Puede ver una lista completa de los campos que se pueden consultar para cada entidad haciendo clic en el nombre de la entidad en la sección Esquema a la derecha.

![El patio de pruebas de consulta de servicios alojados de The Graph](https://i.imgur.com/eYDRuF9.png)

También puede copiar y pegar la URL HTTP en una aplicación de prueba de API como Postman o Insomnia si prefiere probarlo de esa manera.

Como se muestra en la consulta de ejemplo, podemos limitar la cantidad de resultados devueltos usando la palabra clave `first`.

```javascript
{
  events(first: 20) {
        id
  	name
  }
}
```

Si queremos buscar una entrada con un valor específico para un campo, podemos hacerlo configurando el valor en los parámetros de consulta. Por ejemplo, si tenemos la identificación de una entidad de evento, podemos buscarla así:

```javascript
{
  event(id: "1234") {
        id
  	name
  }
}
```
Para consultar varias entidades, podemos usar la palabra clave `where`. La palabra clave `where` se establece en un objeto con valores de búsqueda definidos para un determinado campo en la entidad.

Si queremos consultar todos los eventos con un nombre específico, podemos cambiar de evento a eventos y establecer el campo de nombre en nuestro nombre de evento.

```javascript
{
  events(where: { name: "Holiday Party" }) {
    id
    name
  }
}
```

También podemos adjuntar modificadores al final del campo para agregar más restricciones y filtros. Por ejemplo, si queremos encontrar todos los eventos en donde el campo "nombre" no sea nulo, podemos usar la siguiente consulta:

```javascript
{
  events(where: { name_not: null }) {
    id
    name
  }
}
```
Puede ver una lista completa de modificadores aquí: https://thegraph.com/docs/en/developer/graphql-api/#all-filters (página disponible sólo en inglés).

También podemos ordenar nuestros eventos usando la palabra clave orderBy. Para ordenar todos los eventos por `eventTimestamp`, podemos usar la siguiente consulta:

```javascript
{
  events(orderBy: eventTimestamp) {
    id
    name
    eventTimestamp
  }
}
```

Puede encontrar una referencia completa para realizar consultas en los documentos de The Graph aquí: https://thegraph.com/docs/en/developer/graphql-api/ (página disponible sólo en inglés).