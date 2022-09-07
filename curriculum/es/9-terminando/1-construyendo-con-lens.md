---
title: Construyendo con Lens
description: Crear una dapp simple nativa-web3 ustilizando el Protocolo Lens.
tweet: "Crea una dapp simple nativa-web3 ustilizando @LensProtocol con #30DaysofWeb3 @womenbuildweb3 🌱"
---

Para este tutorial, vamos a trabajar con la **API Lens**, una API GraphQL que nos permite interactuar rápidamente con el gráfico social Lens sin tener que preocuparnos sobre escribir demasiado código en Solidity o tener que indexar, realizar queries o validaciones de datos.

## Setup

Antes de comenzar, haga un fork y un clon de nuestro starter repo: https://github.com/womenbuildweb3/lens-api-starter.

Podrá encontrar instrucciones sobre cómo hacer un fork y clonar un repo aquí: https://www.30daysofweb3.xyz/en/curriculum/3-writing-your-smart-contract/1-dev-setup.

Después de que haya clonado el repo, abra este proyecto en su IDE y luego instale todas las dependencias corriendo este comando en su terminal:

```bash
npm install
# or
yarn install
```

Luego, arranque el servidor de desarrollo:

```bash
npm run dev
# or
yarn dev
```

## Obtenga Perfiles Recomendados

En el directorio raíz de su proyecto, cree un archivo llamado `api.js`.

Copie y pegue (copy + paste) la siguiente variable:

```jsx
export const recommendedProfiles = `
  query RecommendedProfiles {
    recommendedProfiles {
      id
      name
      bio
      attributes {
        displayType
        traitType
        key
        value
      }
      followNftAddress
      metadata
      isDefault
      picture {
        ... on NftImage {
          contractAddress
          tokenId
          uri
          verified
        }
        ... on MediaSet {
          original {
            url
            mimeType
          }
        }
        __typename
      }
      handle
      coverPicture {
        ... on NftImage {
          contractAddress
          tokenId
          uri
          verified
        }
        ... on MediaSet {
          original {
            url
            mimeType
          }
        }
        __typename
      }
      ownedBy
      dispatcher {
        address
        canUseRelay
      }
      stats {
        totalFollowers
        totalFollowing
        totalPosts
        totalComments
        totalMirrors
        totalPublications
        totalCollects
      }
      followModule {
        ... on FeeFollowModuleSettings {
          type
          amount {
            asset {
              symbol
              name
              decimals
              address
            }
            value
          }
          recipient
        }
        ... on ProfileFollowModuleSettings {
        type
        }
        ... on RevertFollowModuleSettings {
        type
        }
      }
    }
  }
`;
```

Este query va a devolver algunos perfiles populares.

Configuremos nuestro cliente urql así podemos llamar a nuestro query. Al principio del archivo, agregue:

```jsx
import { createClient } from 'urql';

const APIURL = "https://api-mumbai.lens.dev";

export const client = new createClient({
  url: APIURL,
});

```

Luego, en nuestro directorio raíz, busque la carpeta con las páginas y vaya a su archivo `index.js`. Debería verse así:


```jsx
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { client, recommendedProfiles } from "../api";

export default function Home() {

  useEffect(() => {
    fetchProfiles();
  }, []);

  async function fetchProfiles() {
    try {
      const response = await client.query(recommendedProfiles).toPromise();
      console.log({ response });
    } catch (err) {
      console.log(err);
    }
  }

  return (
   <div></div>
  );
}

```

En su terminal, corra `npm run dev` para ejecutar su proyecto localmente y luego visite http://localhost:3000 en su browser. Abra la consola de su browser para ver la data que obtuvimos de nuestro query recommendedProfiles. Debería verse parecido a lo que sigue:

![Screenshot of developer console showing a response object with data for lens profiles](https://i.imgur.com/CopLR6x.png)

No se preocupe si muchos de estos resultados tienen campos en blanco.

Ahora que hemos confirmado que nuestro query funciona, despleguemos los perfiles. Haga update de su componente Home para que se vea así: 


```jsx
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { client, recommendedProfiles } from "../api";
import Layout from "../components/Layout";
import Head from "next/head";
import HeroSection from "../components/HeroSection";

export default function Home() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetchProfiles();
  }, []);

  async function fetchProfiles() {
    try {
      const response = await client.query(recommendedProfiles).toPromise();
      console.log({ response });
      setProfiles(response.data.recommendedProfiles);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Layout>
      <Head>
        <title>Lensbook</title>
      </Head>
      <HeroSection />
      <div className="my-16 space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 md:grid-cols-3 md:gap-x-8 lg:grid-cols-4">
        {profiles.map((profile) => (
          <Link href={`/profile/${profile.id}`} key={profile.id}>
            <a className="flex flex-col items-center">
              {profile.picture &&
              profile.picture.original &&
              profile.picture.original.url.includes("lens.infura-ipfs.io") ? (
                <div className="relative w-60 h-60 bg-emerald-900 rounded">
                  <Image
                    src={profile.picture.original.url}
                    layout="fill"
                    objectFit="cover"
                    alt={profile.handle}
                    className="rounded"
                  />
                </div>
              ) : (
                <div className="bg-emerald-900 w-60 h-60 rounded" />
              )}
              <div className="mt-4 text-lg leading-6 font-medium text-center space-y-1">
                <h3>{profile.name}</h3>
                <p className="text-emerald-600">{profile.handle}</p>
              </div>
              <div className="text-gray-600 mt-2 grid grid-cols-2 gap-x-2 text-sm sm:text-base text-center">
                <p>
                  <span className="text-gray-900 font-medium">
                    {profile.stats.totalFollowers}
                  </span>{" "}
                  Followers
                </p>
                <p>
                  <span className="text-gray-900 font-medium">
                    {profile.stats.totalFollowing}
                  </span>{" "}
                  Following
                </p>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </Layout>
  );
}
```

Su página web debería ahora mostrar una lista de perfiles populares Lens.

## Ver un Perfil

Ahora, podemos crear una página que muestre los detalles de cualquier perfil que seleccionemos con un click. Para hacer esto, podemos usar ruteo dinámico. Cree una nueva carpeta dentro de la carpeta de páginas (pages) que se llame `profile`. Dentro de esta carpeta, cree un nuevo archivo llamado `[id].js` y agregue el código que sigue: 

```jsx
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Head from "next/head";
import Image from "next/image";

export default function Profile() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      ID: {id}
    </div>
  );
}
```
Ahora, si hace click en cualquier perfil en su página, debería ver el id de ese usuario en la página de perfil. 

Queremos mostrar más detalles del usuario aquí, por lo que necesitaremos armar un query que vaya a buscar esos datos. 

En nuestro archivo `api.js`, podemos agregar un nuevo query llamado getProfileById. Hemos copiado este query del Lens docs aquí: https://docs.lens.xyz/docs/get-profile

```jsx
export const getProfileById = `
  query Profile($id: ProfileId!) {
    profile(request: { profileId: $id }) {
      id
      name
      bio
      attributes {
        displayType
        traitType
        key
        value
      }
      followNftAddress
      metadata
      isDefault
      picture {
        ... on NftImage {
          contractAddress
          tokenId
          uri
          verified
        }
        ... on MediaSet {
          original {
            url
            mimeType
          }
        }
        __typename
      }
      handle
      coverPicture {
        ... on NftImage {
          contractAddress
          tokenId
          uri
          verified
        }
        ... on MediaSet {
          original {
            url
            mimeType
          }
        }
        __typename
      }
      ownedBy
      dispatcher {
        address
        canUseRelay
      }
      stats {
        totalFollowers
        totalFollowing
        totalPosts
        totalComments
        totalMirrors
        totalPublications
        totalCollects
      }
      followModule {
        ... on FeeFollowModuleSettings {
          type
          amount {
            asset {
              symbol
              name
              decimals
              address
            }
            value
          }
          recipient
        }
        ... on ProfileFollowModuleSettings {
          type
        }
        ... on RevertFollowModuleSettings {
          type
        }
      }
    }
  }
`;
```

Nuevamnete en nuestro archivo `/pages/profile/[id].js`, podemos importar nuestro cliente y query del principio del archivo, como también `useState` y `useEffect`.

```jsx
import { useState, useEffect } from "react";
import { client, getProfileById } from "../../api";
```

Dentro de su función `Profile`, cree una función asíncrona llamada `fetchProfile`, donde podemos ir a buscar nuestra data. Podemos usar `useEffect` para ejecutar esta función si la variable `id` no es nula (null). Asegúrese de agregar el `id` al vector de dependencia.

```jsx
useEffect(() => {
  if (id) {
    fetchProfile();
  }
}, [id]);
 
async function fetchProfile() {
      
}
```

En la función fetchProfile, podemos usar una sentencia de try…catch para capturar cualquier error que pudiéramos encontrar al buscar esa data del perfil.

```jsx
async function fetchProfile(){
  try {
    const response = await client.query(getProfileById, { id }).toPromise();
    console.log("PROFILE:", response);
  } catch(error) {
    console.log("ERROR:", error);
  }
}
```

Ahora, debería poder ver la data del perfil que esté logoneado a la consola. 

Luego, en lugar de solamente hacer log de la data, se la puede salvar al estado. Arriba en la función `Profile`, use el `useState` hook to declare the variables `profile` and `setProfile`:

```jsx
const [profile, setProfile] = useState()
```

Ahora puede usar `setProfile` para guardar la data del perfil de su respuesta. Para testearlo, trate de renderizar la "handle" del perfil (profile handle) si la variable de perfil no es nula.

```jsx
async function fetchProfile(){
  try {
    const response = await client.query(getProfileById, { id }).toPromise();
    console.log("PROFILE:", response);
    setProfile(response.data.profile);
  } catch(error) {
    console.log("ERROR:", error);
  }
}

return (
    <div>
        {profile && <div>{profile.handle}</div>}
    </div>
)
```

Ahora, puede actualizar la UI de la página de perfil para desplegar más información de perfil. Hemos agregado algo de estilos aquí para que pueda hacer que su página se vea más bonita. 


```jsx
return (
  <Layout>
    <Head>
      <title>{profile ? profile.handle : "Lensbook"}</title>
    </Head>
    <div className="my-12">
      {profile && (
        <div className="flex flex-wrap md:flex-nowrap items-start w-full">
          <div className="w-full md:w-auto mb-4 md:mr-8">
            {profile.picture &&
            profile.picture.original &&
            profile.picture.original.url.includes("lens.infura-ipfs.io") ? (
              <div className="relative w-60 h-60 bg-emerald-900 rounded mx-auto">
                <Image
                  src={profile.picture.original.url}
                  layout="fill"
                  objectFit="cover"
                  alt={profile.handle}
                  className="rounded"
                />
              </div>
            ) : (
              <div className="bg-emerald-900 w-60 h-60 rounded mx-auto" />
            )}
          </div>
          <div className="grow-1 w-full">
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl sm:tracking-tight mb-1">
                {profile.name}
              </h1>
              <h2 className="text-xl font-bold text-emerald-500 sm:text-2xl sm:tracking-tight mb-2">
                {profile.handle}
              </h2>
              <div className="flex flex-wrap gap-x-2 text-gray-600 text-sm sm:text-base mb-4 justify-center md:justify-start">
                <p>
                  <span className="text-gray-900 font-medium">
                    {profile.stats.totalFollowers}
                  </span>{" "}
                  Followers
                </p>
                <p>
                  <span className="text-gray-900 font-medium">
                    {profile.stats.totalFollowing}
                  </span>{" "}
                  Following
                </p>
              </div>
              <p className="mb-4">{profile.bio}</p>
              {/* Add connect and follow buttons here */}
            </div>
            {/* Add publications here */}
          </div>
        </div>
      )}
    </div>
  </Layout>
)
```

Luego, queremos poder mostrar todas las publicaciones creadas por este usuario. Del documento de Lens, “Publications come in three primary types: posts, comments, and mirrors. Posts are the base object, with mirror and comment providing additional functionality.” Si están familiarizados con Twitter, piensen en posts como tweets y mirrors (espejos) como retweets. Las publicaciones serían como la sección de "Tweets & Replies" del perfil de un usuario de Twitter. 

Regresando a nuestro archivo `api.js`, podemos agregar este nuevo query para buscar las publicaciones de un cierto usuario. Aquí lo llamamos `getPublicationsById`. Nota: hemos copiado este query del documento Lens de aquí: https://docs.lens.xyz/docs/get-publications. Este es un query bastante largo, y probablemente no quiera usar toda esta data. Recomendamos remover cualquier campo que, finalmente, no utilice. 

```jsx
export const getPublicationsById = `
  query Publications ($id: ProfileId!) {
    publications(request: {
      profileId: $id,
      publicationTypes: [POST, COMMENT, MIRROR],
      limit: 10
    }) {
      items {
        __typename
        ... on Post {
          ...PostFields
        }
        ... on Comment {
          ...CommentFields
        }
        ... on Mirror {
          ...MirrorFields
        }
      }
      pageInfo {
        prev
        next
        totalCount
      }
    }
  }

  fragment MediaFields on Media {
    url
    mimeType
  }

  fragment ProfileFields on Profile {
    id
    name
    bio
    attributes {
      displayType
      traitType
      key
      value
    }
    isFollowedByMe
    isFollowing(who: null)
    followNftAddress
    metadata
    isDefault
    handle
    picture {
      ... on NftImage {
        contractAddress
        tokenId
        uri
        verified
      }
      ... on MediaSet {
        original {
          ...MediaFields
        }
      }
    }
    coverPicture {
      ... on NftImage {
        contractAddress
        tokenId
        uri
        verified
      }
      ... on MediaSet {
        original {
          ...MediaFields
        }
      }
    }
    ownedBy
    dispatcher {
      address
    }
    stats {
      totalFollowers
      totalFollowing
      totalPosts
      totalComments
      totalMirrors
      totalPublications
      totalCollects
    }
    followModule {
      ... on FeeFollowModuleSettings {
        type
        amount {
          asset {
            name
            symbol
            decimals
            address
          }
          value
        }
        recipient
      }
      ... on ProfileFollowModuleSettings {
      type
      }
      ... on RevertFollowModuleSettings {
      type
      }
    }
  }

  fragment PublicationStatsFields on PublicationStats {
    totalAmountOfMirrors
    totalAmountOfCollects
    totalAmountOfComments
  }

  fragment MetadataOutputFields on MetadataOutput {
    name
    description
    content
    media {
      original {
        ...MediaFields
      }
    }
    attributes {
      displayType
      traitType
      value
    }
  }

  fragment Erc20Fields on Erc20 {
    name
    symbol
    decimals
    address
  }

  fragment CollectModuleFields on CollectModule {
    __typename
    ... on FreeCollectModuleSettings {
        type
        followerOnly
        contractAddress
    }
    ... on FeeCollectModuleSettings {
      type
      amount {
        asset {
          ...Erc20Fields
        }
        value
      }
      recipient
      referralFee
    }
    ... on LimitedFeeCollectModuleSettings {
      type
      collectLimit
      amount {
        asset {
          ...Erc20Fields
        }
        value
      }
      recipient
      referralFee
    }
    ... on LimitedTimedFeeCollectModuleSettings {
      type
      collectLimit
      amount {
        asset {
          ...Erc20Fields
        }
        value
      }
      recipient
      referralFee
      endTimestamp
    }
    ... on RevertCollectModuleSettings {
      type
    }
    ... on TimedFeeCollectModuleSettings {
      type
      amount {
        asset {
          ...Erc20Fields
        }
        value
      }
      recipient
      referralFee
      endTimestamp
    }
  }

  fragment PostFields on Post {
    id
    profile {
      ...ProfileFields
    }
    stats {
      ...PublicationStatsFields
    }
    metadata {
      ...MetadataOutputFields
    }
    createdAt
    collectModule {
      ...CollectModuleFields
    }
    referenceModule {
      ... on FollowOnlyReferenceModuleSettings {
        type
      }
    }
    appId
    hidden
    reaction(request: null)
    mirrors(by: null)
    hasCollectedByMe
  }

  fragment MirrorBaseFields on Mirror {
    id
    profile {
      ...ProfileFields
    }
    stats {
      ...PublicationStatsFields
    }
    metadata {
      ...MetadataOutputFields
    }
    createdAt
    collectModule {
      ...CollectModuleFields
    }
    referenceModule {
      ... on FollowOnlyReferenceModuleSettings {
        type
      }
    }
    appId
    hidden
    reaction(request: null)
    hasCollectedByMe
  }

  fragment MirrorFields on Mirror {
    ...MirrorBaseFields
    mirrorOf {
    ... on Post {
        ...PostFields         
    }
    ... on Comment {
        ...CommentFields         
    }
    }
  }

  fragment CommentBaseFields on Comment {
    id
    profile {
      ...ProfileFields
    }
    stats {
      ...PublicationStatsFields
    }
    metadata {
      ...MetadataOutputFields
    }
    createdAt
    collectModule {
      ...CollectModuleFields
    }
    referenceModule {
      ... on FollowOnlyReferenceModuleSettings {
        type
      }
    }
    appId
    hidden
    reaction(request: null)
    mirrors(by: null)
    hasCollectedByMe
  }

  fragment CommentFields on Comment {
    ...CommentBaseFields
    mainPost {
      ... on Post {
        ...PostFields
      }
      ... on Mirror {
        ...MirrorBaseFields
        mirrorOf {
          ... on Post {
            ...PostFields         
          }
          ... on Comment {
            ...CommentMirrorOfFields       
          }
        }
      }
    }
  }

  fragment CommentMirrorOfFields on Comment {
    ...CommentBaseFields
    mainPost {
      ... on Post {
        ...PostFields
      }
      ... on Mirror {
        ...MirrorBaseFields
      }
    }
  }
`;
```

Ahora, en `pages/profile/[id].js`, puede ya actualizar el import del principio para incluir esta función.

```jsx
import { client, getProfileById, getPublicationsById } from "../../api"
```

También agregará una función para mantener el seguimiento de nuestras publicaciones. En resumen, lo llamaremos pubs y lo apuntaremos a un array vacío con `useState`.

```jsx
const [pubs, setPubs] = useState([])
```

Ahora, puede buscar las publicaciones en su función fetchProfile:

```jsx
async function fetchProfile() {
  try {
    const response = await client.query(getProfileById, { id }).toPromise();
    console.log("PROFILE:", response);
    setProfile(response.data.profile);

    const publications = await client.query(getPublicationsById, { id }).toPromise();
    console.log("PUBS!", publications);
    setPubs(publications.data.publications.items);
  } catch (error) {
    console.log("ERROR:", error);
  }
}
```

Siguiendo, puede mapear las publicaciones para mostrar una lista de cada una:

```jsx
{/* Add publications here */}
{pubs.length > 0 && (
  <div className="border-t-2 border-gray-100 my-8 py-8 flex flex-col space-y-8">
    {pubs.map((p, index) => (
      <div key={p.id}>
        <p className="font-bold">{p.__typename}</p>
        <p>{p.metadata.content}</p>
        <p>{p.metadata.name}</p>
      </div>
    ))}
  </div>
)}

```

## Setear Su Wallet (Billetera)

Antes de continuar, queremos asegurarnos de que tenemos una billetera (wallet) que se puede conectar a la testnet de Polygon y que tiene algo de Matic, para poder interactuar con los contratos inteligentes (smart contracts) de Lens. 

Si aún no ha seteado su wallet, visite nuestro tutorial aquí: https://www.30daysofweb3.xyz/en/curriculum/1-getting-started/5-set-up-your-wallet

También necesitará tener test MATIC en su wallet. Puede pedir test MATIC en el faucel de polygon mumbai aquí: https://faucet.polygon.technology/.

## ✋ Necesita Ayuda?

Si necesita ayuda, chequee si encuentra su pregunta respondida en **#section-9-help**. Si no la ve allí, haga una pregunta con los detalles que puedan ser útiles para que alguien de nuestro equipo lo pueda ayudar.  

## Seguir a Usuarios (Follow)

Queremos agregar un botón de follow para que los usuarios puedan seguir a un perfil que les guste. Para seguir un perfil utilizando el Protocolo Lens, un usuario va a necesitar interactuar con el contrato inteligente de Lens.

Puede encontrar todas las direcciones de los contratos Lens desplegados aquí:
https://docs.lens.xyz/docs/deployed-contract-addresses.

Para este tutorial, vamos a interactuar con los contratos LensHub desplegados en la Testnet de Mumbai.

En el archivo `pages/profile/[id].js`, agregue una variable llamada `CONTRACT_ADDRESS` y setéela con el valor de la dirección del contrato Lens.

```jsx
const CONTRACT_ADDRESS = "0x60Ae865ee4C725cd04353b5AAb364553f56ceF82"
```

Luego, en el directorio raíz de su proyecto, cree un archivo llamado `abi.json`.

Abra este [link](https://mumbai.polygonscan.com/address/0x8C1f82e8AAD9399f52DcF224b77f33d5c1719241#code), y desplácese para abajo adonde diga “Contract ABI”.

![Contract ABI](https://i.imgur.com/AbxpwRh.png)

Haga copy y paste del ABI al archivo `abi.json`. 

En las `pages/profile/[id].js`, importe el ABI.

```jsx
import ABI from "../../abi.json";
```

Antes de que agreguemos el botón de follow, necesitaremos que el usuario conecte su wallet.

Primero, cree una nueva variable de estado para referenciar la wallet conectada.

```jsx
const [accounts, setAccounts] = useState(null);
```

Segundo, agregue esta función, connectWallet, después de `fetchProfile`:

```jsx
async function connectWallet() {
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  console.log("accounts: ", accounts);
  setAccounts(accounts);
}

```

Luego, en su UI, agregue un botón de Connect Wallet que invoque a la función `connectWallet` al cliquear.

```jsx
{/* Add connect and follow buttons here */}
                
<button
  onClick={connectWallet}
  type="button"
  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-emerald-700 bg-emerald-100 hover:bg-emerald-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
>
  Connect Wallet
</button>
                
```

Guarde su archivo y luego confirme que puede conectar su wallet cliqueando el botón de Connect Wallet y viendo el vector de la cuenta (array) en su consola.

Ahora que el usuario puede conectar su wallet, podemos soportar la funcionalidad de follow.

Importe Ethers arriba en el archivo.

```jsx
import { ethers } from 'ethers'
```

Si recuerda de un punto anterior en el currículum, ethers.js es una librería de JavaScript que permite a los desarrolladores interactuar con Ethereum.

Luego, agregue esta función `followUser` después de `connectWallet`.

```jsx
async function followUser() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);

  try {
    const tx = await contract.follow([id], [0x0]);
    await tx.wait();
    console.log("Followed user successfully");
  } catch (err) {
    console.log("Failed to follow user due to", err);
  }
}
```

Veamos esta función en detalle, línea por línea.

Primero, creamos un proveedor que nos permita conectarnos a la red de Ethereum a través de la wallet del usuario.

```jsx
const provider = new ethers.providers.Web3Provider(window.ethereum);
```

Luego, tomamos a quien firma en el proveedor, que será utilizado para firmar y enviar transacciones.

```jsx
const signer = provider.getSigner();
```

Luego, creamos un contrato objeto para poder interactuar con el contrato inteligente de LensHub.

```jsx
const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
```

Luego, vamos a llamar a una función que nos permite seguir a usuarios. Podemos encontrar vía browser las funciones definidas en el contrato inteligente LensHub en https://docs.lens.xyz/docs/functions.

Saltemos a follow() en https://docs.lens.xyz/docs/functions#follow.

La función follow() toma los profileIds como parámetro. profileIds es un array (vector) de IDs de los perfiles que usted quiera seguir. Dado un array (vector) de profile IDs, la función follow() va a mintear un NFT de "follow" para cada profile ID.

Regresando a la función followUser, noten que llamamos a la función follow() del contrato y lueog pasamos el id de la página del perfil en la que estamos en este momento.

```jsx
const tx = await contract.follow([id], [0x0]);
```

Luego esperamos a que se complete la transacción.

```jsx
await tx.wait();
```

Hacemos wrap de todo en un bloque `try..catch` por si acaso la transacción fallara. 

Ahora que entendemos cómo funciona la función followUser, agregamos un botón de Follow que llama a followUser al hacer click debajo de la información de perfil. Actualice su código como sigue:

```jsx
{/* Add connect and follow buttons here */}
{accounts ? (
  <button
    onClick={followUser}
    type="button"
    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
  >
    Follow {profile.handle}
  </button>
) : (
  <button
    onClick={connectWallet}
    type="button"
    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-emerald-700 bg-emerald-100 hover:bg-emerald-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
  >
    Connect Wallet
  </button>
)}

```

Aquí, chequeamos si hemos conectado nuestro wallet. Si está conectada, mostraremos el botón de Follow.

Salven su archivo actualizado, conecten su wallet, y luego hagan click en Follow. Confirmen que realmente están siguiendo a este perfil, chequeando en la consola.

## En Resumen

Las redes sociales son sólo una aplicación de un gráfico social, y ahora con Lens, tendrán las herramientas para construir aplicaciones que reflejen las relaciones importantes que tenemos en el blockchain.

Para recibir un Lens handle y aplicar a la aceleradora, asegúrese de submitir tanto su proyecto web3rsvp y Lens en el formulario de submisión de proyecto, que puede encontrarse en [fin de curriculum](https://www.30daysofweb3.xyz/en/curriculum/9-wrapping-up/3-finale). Si ya submitió su proyecto web3rsvp, re-visite el formulario y actualice su respuesta.

## 👀 Alpha

La Aceleradora BUIDL empieza pronto. Presentaremos más detalles en los próximos días oficialmente, pero algo de "alpha" mientras tanto:

EMPIECE A CONSTRUIR ALGO. En adición a nuestros grants sin condiciones, premiaremos con **$20K** en grants a los equipos que construyan con Lens. Así que súbanse a nuestro servidor, encuentren un equipo, y a empezar a pensar!

---

Adaptado de [Tutorial Lens API de Nader Dabit](https://www.youtube.com/watch?v=LcxOdWWL8xs&ab_channel=NaderDabit)

Escritoras: [Sarah Schwartz](https://twitter.com/schwartzswartz), [Sarah Z](https://twitter.com/haegeez),
Editoras: [Cami](https://twitter.com/camiinthisthang), Traductoras: [Gabi Sabate](https://twitter.com/gsabate)
