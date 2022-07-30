---
title: La configuración de The Graph
description: Setup your subgraph on the hosted service.
optional: false
tweet: "Create and deploy a subgraph on @graphprotocol with #30DaysofWeb3 @womenbuildweb3 👾"
---

A continuación, vamos a crear un _subgraph_ en el servicio alojado donde podemos implementar nuestro código. Vaya a thegraph.com y seleccione el Servicio alojado en el menú desplegable Productos donde puede iniciar sesión con su cuenta de Github.

Vaya a la pestaña _"My Dashboard"_ y haga clic en el botón _"Add a Subgraph"_.

Complete los campos obligatorios como desee y haga clic en el botón _"Create subgraph"_ en la parte inferior.
Nota: puede editar esta información más tarde haciendo clic en el ícono de lápiz en su página de _subgraph_.

Navegue a su escritorio en su terminal (o donde quiera guardar su _subgraph_) y pegue el siguiente comando en su terminal. Asegúrese de reemplazar el nombre de usuario de _subgraph_ y Github con el suyo propio. (Sugerencia: puede encontrar esto al final de el URL de su _subgraph_)

```
graph init --product hosted-service <GITHUB_USER>/<SUBGRAPH NAME>
```

Ahora se le solicitarán varias opciones para su _subgraph_.

Para el protocolo, elegiremos ethereum. Puede cambiar los nombres de sus _subgraphs_ y directorios si lo desea, o simplemente puede presionar _enter_.

Para la red, _elegiremos mumbai_.

Para la dirección del contrato, ingrese la dirección del contrato que implementó.

Para el nombre del contrato, usaremos Web3RSVP.
Nota: no puede tener espacios ni guiones aquí, o la configuración fallará.

---

Escritoras: [Sarah Schwartz](https://twitter.com/schwartzswartz),
Editoras: [Kristen](https://twitter.com/cuddleofdeath),
Traductoras: [Dami](https://twitter.com/dakitidami), [Brenda](https://twitter.com/engineerbrenda), [Caro Meneses](https://twitter.com/carmedinat)
