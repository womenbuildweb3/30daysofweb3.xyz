---
title: Building on Ethereum
description: Client Server Architecture
optional: false
---

## Client Server Architecture

In order to fully understand the fundamental difference between web2 and web3, you have to understand the traditional client server architecture to understand the concept of open, composable backends.

A client application is the one that a user is actually interacting with, that's displaying the content. A server application is the one that sends the content, or resource, to your client application. A server application is a program that is running somewhere, listening, and waiting for a request.

The main reason for this separation is to secure sensitive information. Your entire client application gets downloaded into the browser, and all of the data can be accessed by anyone accessing your web page.

This architecture helps protect things like your API keys, personal data, and more. Now modern tools like Next.js and Netlify allow developers to run server code in the same app as their client app, without needing a dedicated server application.

### Why We Use A Client-Server Architecture

Let’s say you were building a weather web app, for example. The weather app that your user is going to interact with is the client application – it has buttons, a search bar, and displays data like city name, current temperature, AQI, and so on.

This weather app wouldn’t have every city and its weather information coded directly into it. This would make the app bloated and slow, would take forever to research and manually add to a database, and would be a headache to update every single day.

Instead, the app can access weather data by city using the Weather web API. Your app would gather your user’s location and then make a request to the server saying, “Hey, send me the weather information for this specific city.”

Depending on what you are trying to achieve, you would use the various request methods that are available. The server sends back a response containing the weather information and a few other things, depending on how the API is written. It may also send back things like a timestamp, the region this city is located in, and more.

Your client application communicated with a server application running somewhere, whose only job is to listen continuously for a request to that address. When it receives a request, it works to fulfill that request either by reading from a database, another API, local file, or a programmatic calculation based on data you pass in.

### How This Translates to Blockchain Development

Instead of having a server application, blockchain developers have this idea of open and composable backends, AKA smart contracts. You'll create a smart contract which handles the logic for the creation of a new event, RSVP'ing to a new event, etc. Your client application will be in charge of aggregating and displaying all of the events that were created, show a dashboard to your user indicating past and upcoming events, etc.

Read the full post on client-server architecture, APIs, and HTTP request methods [in this free code camp article](https://www.freecodecamp.org/news/http-request-methods-explained/).
