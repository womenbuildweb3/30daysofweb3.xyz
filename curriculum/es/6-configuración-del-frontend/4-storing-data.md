---
title: Uploading your event data ESPANOL
description: Learn how to upload data to decentralized storage network using Web3.Storage.
optional: false
tweet: "Use @Web3Storage in a full-stack dapp with #30DaysofWeb3 @womenbuildweb3 🗂"
---

Create a new folder in the `pages` folder called `api`, and create a new file inside that folder called `store-event-data.js`.

At the top of the file, we will need to import some helpers from `web3.storage` and the `path` module.

```javascript
import { Web3Storage, File, getFilesFromPath } from "web3.storage";
const { resolve } = require("path");
```

We will need to export a default handler function to handle the incoming requests. Here, we can check if the request is a `POST` request, and return an error if it isn't. Otherwise, we can store the event data.

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

Next, we'll create a new async function called `storeEventData`. This function should try to get the event data from the request body and store the data, and return an error if unsuccessful.
Upon successful storage, we are returning the cid that points to an IPFS directory of the file we just stored.

Inside this function, there are two functions that will be called. The first is an async function `makeFileObjects`. The purpose of this function is to create a json file that includes metadata passed from the `req.body` object. The next function we call is the `storeFiles` function, which will store that json file to Web3.storage.

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

Below our storeEventData function, create a new async function called `makeFileObjects`. This function will create a `Buffer` from the stringified body.

This function will also look up the image from `body.image`. We can use a function from `web3.storage` called `getFilesFromPath` to get the image from our images folder. This will return the image in an array, so we can push our data file to this array so we can upload both the image and the event data at the same time. We'll be using this function to create a new `File` from the `buffer` which we can name `"data.json"`, and then push this to the `files` array.

```javascript
async function makeFileObjects(body) {
  const buffer = Buffer.from(JSON.stringify(body));

  const imageDirectory = resolve(process.cwd(), `public/images/${body.image}`);
  const files = await getFilesFromPath(imageDirectory);

  files.push(new File([buffer], "data.json"));
  return files;
}
```

Now that our files are ready to be uploaded, we want to first create a Web3Storage client object to interact with. We'll write the following function:

```javascript
function makeStorageClient() {
  return new Web3Storage({ token: process.env.WEB3STORAGE_TOKEN });
}
```

Once we have created our Web3Storage client, we can call `put` method on the client to upload our array of files.

```javascript
async function storeFiles(files) {
  const client = makeStorageClient();
  const cid = await client.put(files);
  return cid;
}
```

When our files have been uploaded, `client.put` returns a content identifier (CID). This CID is the unique hash that we will store on-chain and use to retrieve our files.
