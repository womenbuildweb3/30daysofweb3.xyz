# Estructura de un subgraph
Ahora debería tener una nueva carpeta con esta estructura:
```json
subgraph-name
└───abis
│   │  {Name}.json
└───generated
│   └───{Name}
│       │   {Name}.ts
│   │   schema.ts
│   networks.json
│   package.json
│   schema.graphql
└───src
│  │   {Name}.ts
│   subgraph.yaml
│   tsconfig.json
│   yarn.lock
```
Asegúrate de ejecutar `yarn` o `npm install` para instalar las dependencias. Si está utilizando git, agregue un archivo .gitignore para ignorar la carpeta `node_modules`.

También agregaremos `@protofire/subgraph-toolkit` como una dependencia. Ejecute `yarn add @protofire/subgraph-toolkit` o `npm install @protofire/subgraph-toolkit` para agregar este paquete.

La configuración inicial ya debería haber tomado el contrato ABI para usted. Si no lo ve en la carpeta abis, puede encontrar el abi en su proyecto de *hardhat* en la carpeta de artefactos. Se llamará `[YourContractName].json`.

Los tres archivos principales en la carpeta del proyecto *subgraph* que cambiaremos son los archivos `subgraph.yaml`, `schema.graphql` y `[YourContractName].ts`.



