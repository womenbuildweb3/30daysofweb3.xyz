---
title: Web3 Storage
description: Learn how to upload data to decentralized storage network using Web3.Storage.
optional: false
tweet: "Use @Web3Storage in a full-stack dapp with #30DaysofWeb3 @womenbuildweb3 🗂"
---

## ¿Qué es Web3.storage?

Si está buscando almacenar datos para sus dApps, debe considerar la librería para clientes de Web3.storage que le ofrece Filecoin.

## Filecoin

[Filecoin](https://filecoin.io/) es una solución que aprovecha IPFS para permitir a los usuarios rentar los espacios vacantes que se encuentran en el disco duro.

## IPFS

Entonces, ¿qué es IPFS? El InterPlanetary File System (IPFS) o Sistema de archivos interplanetarios en español, _es un protocolo y una red de persona-a-persona que le permite almacenar y compartir datos en un sistema de archivos distribuido._ Para identificar de forma única cada archivo, IPFS utiliza lo que se denomina _content-addressing_ o almacenamiento-direccionado-de-contenido en español. La librería Web3.storage en pocas palabras permite que su data sea accesible desde IPFS.

Web3.storage está disponible en JavaScript y Go. En esta guía, nos centraremos en la librería de JavaScript. También le mostraremos una implementación de muestra que tenemos en nuestra dApp RSVP para una mejor comprensión de cómo funciona.

Necesitamos una cuenta en Web3.Storage para cargar los datos en la librería porque requiere el uso de una API token. Es gratis y muy fácil de conseguir una. Visite https://web3.storage/login/ para crear una cuenta y luego siga esta breve guía https://web3.storage/docs/how-tos/generate-api-token/ para crear su API token.

En nuestro proyecto, cree un nuevo archivo o _file_ llamado `.env.example` que muestra un ejemplo de cómo configurar su _file_ .env.local. En este _file_ es donde podremos guardar todo lo que sea secreto, como nuestras API _keys_ para que no estén expuestas en la parte del frontend.

Copie y pegue todo de .env.example en su nuevo _file_ .env.local, y reemplace `<Api_Token>` con la API _token_ que obtuvo desde Web3.Storage.

Mientras nos encontramos en este _file_, también podremos reemplazar `<Your Infura project id>` con nuestro ID de proyecto de Infura. Puede encontrarlo yendo al panel de Infura y seleccionando la configuración de su proyecto.

## Cargando los datos de nuestro Evento

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

async function storeFiles(files) {
  const client = makeStorageClient();
  const cid = await client.put(files);
  return cid;
}
```

En el archivo `.env.local`, asegúrese de que WEB3STORAGE_TOKEN esté configurado en su propio token de almacenamiento.

Con esto, podemos cargar con éxito nuestra data usando Web3.storage. La data está disponible inmediatamente para su uso a través de IPFS después de cargarla y se almacenarán con los proveedores de almacenamiento de Filecoin dentro de las 48 horas.

Lo último que debemos hacer antes de que podamos crear el evento en la parte de nuestro frontend es permitir que nuestros usuarios conecten su _wallet_. Agregaremos esta funcionalidad en la próxima lección con Rainbowkit.

---

Escritoras: [Busayo](https://twitter.com/amoweo), [Sarah Z](https://twitter.com/haegeez), [Sarah Schwartz](https://twitter.com/schwartzswartz),
Traductoras: [Dami](https://twitter.com/dakitidami), [Brenda](https://twitter.com/engineerbrenda), [Caro Meneses](https://twitter.com/carmedinat)
