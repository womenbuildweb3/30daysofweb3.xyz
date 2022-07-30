---
title: Construyendo sobre Ethereum
description: Learn about client server architecture in web2 and open, composable backends in web3.
optional: false
tweet: "Understand composability in web3 with #30DaysofWeb3 @womenbuildweb3 🔗"
---

## Arquitectura Cliente Servidor

Para comprender completamente la diferencia fundamental entre web2 y web3, debe comprender la arquitectura tradicional del servidor del cliente para comprender el concepto de backends abiertos y componibles.

Lea la publicación [aquí](https://www.freecodecamp.org/news/http-request-methods-explained/).

**Las dos cosas que debes aprender de esta publicación:**

- La relación y diferencia entre una aplicación cliente y una aplicación servidor
- Qué es una solicitud de API y comprensión del protocolo http

### Why We Use A Client-Server Architecture

Let’s say you were building a weather web app, for example. The weather app that your user is going to interact with is the client application – it has buttons, a search bar, and displays data like city name, current temperature, AQI, and so on.

This weather app wouldn’t have every city and its weather information coded directly into it. This would make the app bloated and slow, would take forever to research and manually add to a database, and would be a headache to update every single day.

Instead, the app can access weather data by city using the Weather web API. Your app would gather your user’s location and then make a request to the server saying, “Hey, send me the weather information for this specific city.”

Depending on what you are trying to achieve, you would use the various request methods that are available. The server sends back a response containing the weather information and a few other things, depending on how the API is written. It may also send back things like a timestamp, the region this city is located in, and more.

Your client application communicated with a server application running somewhere, whose only job is to listen continuously for a request to that address. When it receives a request, it works to fulfill that request either by reading from a database, another API, local file, or a programmatic calculation based on data you pass in.

### How This Translates to Blockchain Development

Instead of having a server application, blockchain developers have this idea of open and composable backends, AKA smart contracts. You'll create a smart contract which handles the logic for the creation of a new event, RSVP'ing to a new event, etc. Your client application will be in charge of aggregating and displaying all of the events that were created, show a dashboard to your user indicating past and upcoming events, etc.

Read the full post on client-server architecture, APIs, and HTTP request methods in [this article](https://www.freecodecamp.org/news/http-request-methods-explained/).

---

Escritoras: [Cami](https://twitter.com/camiinthisthang),
Editoras: [Deborah Emeni](https://twitter.com/_emeni_deborah), [Christina Mills](https://twitter.com/bombayonchain),
Traductoras: [Dami](https://twitter.com/dakitidami), [Brenda](https://twitter.com/engineerbrenda), [Caro Meneses](https://twitter.com/carmedinat)
