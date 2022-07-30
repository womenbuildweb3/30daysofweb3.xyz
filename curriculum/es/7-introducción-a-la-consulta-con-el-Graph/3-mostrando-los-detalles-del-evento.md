---
title: Mostrando los detalles del evento
description: Display the event details you fetched from your subgraph.
optional: false
tweet: "Query a subgraph for a full-stack dapp with #30DaysofWeb3 @womenbuildweb3 ⛓"
---

En la sección `Head`, podemos cambiar "name" en la etiqueta `<title>` y en el contenido `meta` a `{event.name}`

```javascript
<Head>
  <title> {event.name} | web3rsvp</title>
  <meta name="description" content={event.name} />
  <link rel="icon" href="/favicon.ico" />
</Head>
```

Podemos usar una función de la carpeta utils para dar formato a la marca de tiempo.

```javascript
import formatTimestamp from "../../utils/formatTimestamp";
```

Y reemplazar el texto que dice "hora" con la hora formateada.

```javascript
<h6 className="mb-2">{formatTimestamp(event.eventTimestamp)}</h6>
```

También podemos reemplazar los otros detalles del evento. Entonces `nombre` se puede cambiar a `{event.name}`, y `description` se puede cambiar a `{event.description}`.

Podemos cambiar `# asistencia` para mostrar el total de RSVPs y maxCapacity con `{event.totalRSVPs}/{event.maxCapacity} attending`.

Para mostrar la imagen del evento, necesitaremos importar el componente `Imagen` desde `siguiente/imagen` en la parte superior del archivo.

```javascript
import Image from "next/image";
```

Ahora podemos agregar la imagen por encima de la descripción del evento. Solo mostraremos la imagen si imageURL no es nulo.

```javascript
<div className="mb-8 w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
  {event.imageURL && (
    <Image src={event.imageURL} alt="event image" layout="fill" />
  )}
</div>
<p>{event.description}</p>
```

Después de `Hosted by{" "}`, dentro de la etiqueta `<a>` podemos agregar la dirección del propietario del evento con `{event.eventOwner}`. Luego, podremos vincular la dirección al explorador de testnet usando nuestra variable `NEXT_PUBLIC_TESTNET_EXPLORER_URL`.

```javascript
<span className="truncate">
  Hosted by{" "}
  <a
    className="text-indigo-800 truncate hover:underline"
    href={`${process.env.NEXT_PUBLIC_TESTNET_EXPLORER_URL}address/${event.eventOwner}`}
    target="_blank"
    rel="noreferrer"
  >
    {event.eventOwner}
  </a>
</span>
```

¡Ahora debe poder ver todos los detalles del evento!

---

Escritoras: [Sarah Schwartz](https://twitter.com/schwartzswartz),
Editoras: [Sarah Z](https://twitter.com/haegeez),
Traductoras: [Dami](https://twitter.com/dakitidami), [Brenda](https://twitter.com/engineerbrenda), [Caro Meneses](https://twitter.com/carmedinat)
