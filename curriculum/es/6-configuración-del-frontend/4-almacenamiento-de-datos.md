---
title: Subiendo los datos de tu evento
description: Aprenda a cargar datos en una red de almacenamiento descentralizado usando Web3.Storage.
optional: false
tweet: "Use @Web3Storage en un dapp de pila completa con #30DaysofWeb3 @womenbuildweb3 🗂"
---

Cree una nueva carpeta en la carpeta `pages` llamada `api` y cree un nuevo archivo o _file_ dentro llamado `store-event-data.js`.

En la parte superior de nuestro nuevo _file_, necesitaremos importar `web3.storage` y el módulo `path`.

```javascript
import { Web3Storage, File, getFilesFromPath } from "web3.storage";
const { resolve } = require("path");
```

Tendremos que exportar una función _handle_ predeterminada para manejar las solicitudes entrantes. Aquí podemos verificar si la solicitud es un `POST` y devolver un error si no lo es. De lo contrario, podemos almacenar los datos del evento.

```javascript
export default async function handler(req, res) {
  if (req.method === "POST") {
    return await storeEventData(req, res);
  } else {
    return res
      .status(405)
      .json({ message: "Method not allowed", success: false });
  }
}
```

Cree una nueva función asíncrona llamada `storeEventData`. Esta función debe intentar obtener los datos del evento desde el cuerpo de la solicitud y almacenar los datos, o devolver un error si no fue exitoso.
Tras un almacenamiento exitoso, devolveremos el cid que apunta a un directorio IPFS del archivo que acabamos de almacenar.

Dentro de esta función, hay dos funciones que serán llamadas. La primera es una función asíncrona `makeFileObjects`. El propósito de esta función es crear un archivo json que incluya metadatos pasados desde el objeto `req.body`. La siguiente función que llamamos es la función `storeFiles`, que almacenará ese archivo json en Web3.storage.

```javascript
async function storeEventData(req, res) {
  const body = req.body;
  try {
    const files = await makeFileObjects(body);
    const cid = await storeFiles(files);
    return res.status(200).json({ success: true, cid: cid });
  } catch (err) {
    return res
      .status(500)
      .json({ error: "Error creating event", success: false });
  }
}
```

Cree una nueva función asíncrona llamada `makeFileObjects`. Esta función creará un `Buffer` a partir del cuerpo donde se utilizó stringify().

Esta función también buscará la imagen desde `body.image`. Podemos usar una función de `web3.storage` llamada `getFilesFromPath` para obtener la imagen de nuestra carpeta de imágenes. Esto devolverá la imagen en un array, por lo que podemos enviar nuestro _file_ de data a este array para que podamos cargar tanto la imagen como los datos del evento al mismo tiempo. Podemos crear un nuevo `File` desde `buffer` al que podemos llamar `"data.json"`, y enviarlo al array `files`.

```javascript
async function makeFileObjects(body) {
  const buffer = Buffer.from(JSON.stringify(body));

  const imageDirectory = resolve(process.cwd(), `public/images/${body.image}`);
  const files = await getFilesFromPath(imageDirectory);

  files.push(new File([buffer], "data.json"));
  return files;
}
```

En una nueva función asíncrona llamada `storeFiles`, podemos cargar nuestros archivos con el método ya integrado `client.put` y retornar el id del contenido.

En `makeStorageClient` podemos acceder a nuestra _API key_ para Web3.Storage y conectarnos al cliente.

```javascript
function makeStorageClient() {
  return new Web3Storage({ token: process.env.WEB3STORAGE_TOKEN });
}
```

Una vez que hayamos creado nuestro cliente Web3Storage, podemos llamar al método `put` en el cliente para cargar nuestra matriz de archivos.

```javascript
async function storeFiles(files) {
  const client = makeStorageClient();
  const cid = await client.put(files);
  return cid;
}
```

Cuando nuestros archivos han sido cargados, `client.put` devuelve un identificador de contenido (CID). Este CID es el hash único que almacenaremos en el blockchain y usaremos para recuperar nuestros archivos.

---

Escritoras: [Busayo](https://twitter.com/amoweo), [Sarah Z](https://twitter.com/haegeez), [Sarah Schwartz](https://twitter.com/schwartzswartz),
Traductoras: [Dami](https://twitter.com/dakitidami), [Brenda](https://twitter.com/engineerbrenda), [Caro Meneses](https://twitter.com/carmedinat)
