---
title: Implementación en el servicio alojado
description: Deploy your subgraph to The Graph's Hosted Service.
optional: false
tweet: "Create and deploy a subgraph on @graphprotocol with #30DaysofWeb3 @womenbuildweb3 👾"
---

Abra el _subgraph_ que creó en el servicio alojado de The Graph y seleccione el botón "Show commands" debajo de Deploy.

Copie el primer comando que comienza con `graph auth` y reemplace `<ACCESS_TOKEN>` con su token de acceso de su página de subgraph.

```
graph auth --product hosted-service <ACCESS_TOKEN>
```

Ejecutar este comando lo autenticará como el propietario del _subgraph_ para que pueda impulsar los cambios de su código. Pegue y ejecute este comando en su terminal desde la carpeta raíz de su proyecto. Debería ver un mensaje de confirmación en su terminal que dice `"Deploy key set"`.

Ahora podemos implementar nuestro subgraph copiando el segundo comando que comienza con el despliegue del gráfico. Aquí solo tienes que reemplazar `<GITHUB_USER>/<SUBGRAPH NAME>` (puedes encontrar esto en el URL de tu _subgraph_).

```
graph deploy --product hosted-service <GITHUB_USER>/<SUBGRAPH NAME>
```

Ejecute este comando para implementar su subgrafo en el servicio alojado de The Graph.

Una vez que implemente, puede comenzar a consultar de inmediato, sin embargo, los datos no serán verificables hasta que el _subgraph_ haya terminado de indexarse.

## Actualizando tu subgraph

Si realiza cambios en su _smart contract_ y lo vuelve a implementar en una nueva dirección, puede actualizar fácilmente su _subgraph_ para indexar el nuevo contrato.

Puede actualizar la dirección del contrato en el manifiesto (subgraph.yaml) y copiar y pegar el nuevo abi en la carpeta abis. Si realizó algún cambio en el _shcema_ o emitió eventos de su contrato, asegúrese de ejecutar el código de generación de gráficos para generar nuevos tipos.

Cuando esté listo para volver a implementar, puede ejecutar el mismo comando de implementación anterior. Puede ver la versión pendiente alternando la versión en la esquina superior derecha.
