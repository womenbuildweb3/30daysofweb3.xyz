---
title: Almacenamiento de datos con Web3.Storage
description: Aprenda a cargar datos en una red de almacenamiento descentralizado usando Web3.Storage.
optional: false
tweet: "Use @Web3Storage en una aplicación de full-stach completa con #30DaysofWeb3 @womenbuildweb3 🗂"
---

## ¿Qué es Web3.storage?
**Web3.Storage** es _una API fácil de usar que permite a los usuarios almacenar y recuperar datos_ de **Filecoin**, _una red de almacenamiento descentralizada basada en IPFS que permite que cualquier persona compre y venda espacio de almacenamiento no utilizado_. **IPFS** (Sistema de archivos interplanetarios) es _un sistema de intercambio de archivos distribuido punto a punto para almacenar y compartir contenido como datos, archivos, sitios web y aplicaciones._

Dado que almacenar datos en el blockchain puede ser costoso y lento, usaremos [Web3.Storage](https://web3.storage/) para cargar datos que no necesitamos en la cadena a Filecoin. Web3.Storage nos proporcionará un hash único, es decir, una cadena de caracteres que hace referencia a nuestros datos, y almacenar este hash es mucho más económico y rápido que almacenar grandes cantidades de datos (por ejemplo, un archivo de imagen) en la cadena de bloques.

## Primeros pasos con Web3.Storage

Visite https://web3.storage/login/ para crear una cuenta y luego siga esta breve guía https://web3.storage/docs/how-tos/generate-api-token/ para crear su token API. Una vez que haya generado su token API, vaya a su archivo `.env.local` y actualice `WEB3STORAGE_TOKEN` con su token API Web3.Storage.


Escritoras: [Busayo](https://twitter.com/amoweo),[Sarah Z](https://twitter.com/haegeez), [Sarah Schwartz](https://twitter.com/schwartzswartz),
Traductoras: [Dami](https://twitter.com/dakitidami), [Brenda](https://twitter.com/engineerbrenda), [Caro Meneses](https://twitter.com/carmedinat)