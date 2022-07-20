# La configuración de The Graph

A continuación, vamos a crear un *subgraph* en el servicio alojado donde podemos implementar nuestro código. Vaya a thegraph.com y seleccione el Servicio alojado en el menú desplegable Productos donde puede iniciar sesión con su cuenta de Github.

Vaya a la pestaña *"My Dashboard"* y haga clic en el botón *"Add a Subgraph"*.

Complete los campos obligatorios como desee y haga clic en el botón *"Create subgraph"* en la parte inferior.
Nota: puede editar esta información más tarde haciendo clic en el ícono de lápiz en su página de *subgraph*.

Navegue a su escritorio en su terminal (o donde quiera guardar su *subgraph*) y pegue el siguiente comando en su terminal. Asegúrese de reemplazar el nombre de usuario de *subgraph* y Github con el suyo propio. (Sugerencia: puede encontrar esto al final de el URL de su *subgraph*)

```
graph init --product hosted-service <GITHUB_USER>/<SUBGRAPH NAME>
```

Ahora se le solicitarán varias opciones para su *subgraph*.

Para el protocolo, elegiremos ethereum. Puede cambiar los nombres de sus *subgraphs* y directorios si lo desea, o simplemente puede presionar *enter*.

Para la red, *elegiremos mumbai*.

Para la dirección del contrato, ingrese la dirección del contrato que implementó.

Para el nombre del contrato, usaremos Web3RSVP.
Nota: no puede tener espacios ni guiones aquí, o la configuración fallará.