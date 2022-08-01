---
title: Construyendo sobre Ethereum
description: Learn about client server architecture in web2 and open, composable backends in web3.
optional: false
tweet: "Understand composability in web3 with #30DaysofWeb3 @womenbuildweb3 🔗"
---

## Arquitectura Cliente Servidor

Para comprender completamente la diferencia fundamental entre web2 y web3, debemos comprender la arquitectura tradicional del servidor y del cliente para entender el concepto de backends abiertos y componibles.

Una aplicación de cliente es aquella con la que el usuario realmente interactúa, donde se muestra el contenido. Una aplicación de servidor es la que envía el contenido o recurso a la aplicación del cliente. Una aplicación de servidor es un programa que se ejecuta en algún lugar, esperando una solicitud.

El principal motivo de esta separación es proteger la información confidencial. Toda la aplicación de cliente se descarga en el navegador, y cualquiera que acceda a la página web puede acceder a todos los datos.

Esta arquitectura ayuda a proteger cosas como sus _API keys_, datos personales y más. Ahora, las herramientas modernas como Next.js y Netlify permiten a los desarrolladores ejecutar el código del servidor en la misma aplicación del cliente, sin necesidad de una aplicación aparte.

### ¿Por qué usamos una arquitectura cliente-servidor?

Digamos, por ejemplo, que estamos creando una aplicación web meteorológica. La aplicación meteorológica con la que el usuario va a interactuar es la aplicación cliente: tiene botones, una barra de búsqueda y muestra datos como el nombre de la ciudad, la temperatura actual, el AQI, etc.

Esta aplicación meteorológica no tendría todas las ciudades y su información meteorológica codificada directamente en ella. Esto haría que la aplicación se hinchara y fuera lenta, llevaría una eternidad investigar y agregar manualmente a una base de datos, y sería un dolor de cabeza para actualizar todos los días.

En su lugar, la aplicación puede acceder a los datos meteorológicos por ciudad utilizando la API web de Weather. Su aplicación recopilaría la ubicación de su usuario y luego haría una solicitud al servidor diciendo: "Oye, envíame la información meteorológica para esta ciudad específica".

Dependiendo de lo que intentemos obtener, usaríamos los diversos métodos de solicitud disponibles. El servidor devuelve una respuesta que contiene la información meteorológica y algunas otras cosas, dependiendo de cómo esté escrita la API. También puede enviar cosas como una marca de tiempo (timestamp), la región en la que se encuentra esta ciudad y más.

Su aplicación de cliente se comunicó con una aplicación de servidor que se ejecuta en algún lugar, cuyo único trabajo es escuchar continuamente una solicitud para determinada dirección. Cuando el servidor recibe una solicitud, esta se ejecuta por medio de la lectura de una base de datos, otra API, un archivo local o un cálculo programático basado en los datos que le pasaste.

### ¿Cómo se traduce esto en el desarrollo de Blockchain?

En lugar de tener una aplicación de servidor, los desarrolladores de blockchain tienen esta idea de backends abiertos y componibles, también conocidos como contratos inteligentes o _smart contracts_. Crearemos un contrato inteligente que maneje la lógica para crear un nuevo evento, para confirmar nuestra asistencia a un nuevo evento, etc. Nuestra aplicación cliente estará a cargo de agregar y mostrar todos los eventos que se crearon, un panel de control para que el usuario pueda ver eventos pasados ​​y los próximos eventos que vienen, etc.

Lea la publicación completa sobre la arquitectura cliente-servidor, las API y los métodos de solicitud HTTP en [este artículo] (https://www.freecodecamp.org/news/http-request-methods-explained/).

---

Escritoras: [Cami](https://twitter.com/camiinthisthang),
Editoras: [Deborah Emeni](https://twitter.com/_emeni_deborah), [Christina Mills](https://twitter.com/bombayonchain),
Traductoras: [Dami](https://twitter.com/dakitidami), [Brenda](https://twitter.com/engineerbrenda), [Caro Meneses](https://twitter.com/carmedinat)
