import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../components/Layout";
import Sponsors from "../components/Sponsors";
import Partners from "../components/Partners";

export default function About({ locale }) {
  const metaTitle = "About us | 30 Days of Web3";
  const metaDescription =
    "Women Build Web3 provides education, oppportunities, and funding to a new wave of web3 builders";
  const metaUrl = "https://www.30daysofweb3.xyz/";

  const sponsors = [
    {
      name: "The Ethereum Foundation",
      imageUrl: "/images/sponsors/ef.svg",
      url: "https://ethereum.foundation/",
    },
    {
      name: "Filecoin/IPFS",
      imageUrl: "/images/sponsors/filecoin.svg",
      url: "https://filecoin.io/",
    },
    {
      name: "The Graph",
      imageUrl: "/images/sponsors/graph.png",
      url: "https://thegraph.com/",
    },
    {
      name: "Infura",
      imageUrl: "/images/sponsors/infura.png",
      url: "https://infura.io/",
    },
    {
      name: "Lens",
      imageUrl: "/images/sponsors/lens.svg",
      url: "https://lens.xyz/",
    },
    {
      name: "Polygon",
      imageUrl: "/images/sponsors/polygon.svg",
      url: "https://polygon.technology/",
    },
    {
      name: "Radicle",
      imageUrl: "/images/sponsors/radicle.svg",
      url: "https://radicle.xyz/",
    },
    {
      name: "Vercel",
      imageUrl: "/images/sponsors/vercel.svg",
      url: "https://vercel.com/",
    },
  ];

  return (
    <Layout locale={locale}>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={metaUrl} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={`${metaUrl}images/og-image.png`} />
        <meta property="twitter:url" content={metaUrl} />
        <meta property="twitter:title" content={metaTitle} />
        <meta property="twitter:description" content={metaDescription} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:image"
          content={`${metaUrl}images/twitter-image.png`}
        />
        <meta property="twitter:image:alt" content="30 Days of Web3" />
      </Head>
      <div className="my-16 mx-auto max-w-7xl px-4 sm:my-24 space-y-8 lg:space-y-16">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl">
            {locale !== "es"
              ? "Unlocking the next wave of"
              : "Desbloqueando la siguiente ola de"}{" "}
            <span className="sm:block text-royal-600">
              {locale !== "es" ? "web3 builders" : "desarrolladores web3"}
            </span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-slate-700 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            {locale !== "es"
              ? "Women Build Web3 is empowering the next wave of web3 builders through education, opportunities, and funding."
              : "Women Build Web3 está empoderando a la siguiente ola de desarrollar web3 a través de la educación, las oportunidades y la financiación."}
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a
                href="mailto:info@womenbuildweb3.com"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-royal-600 hover:bg-royal-700 md:py-4 md:text-lg md:px-10"
              >
                {locale !== "es" ? "Sponsor us" : "Patrocínanos"}
              </a>
            </div>
          </div>
        </div>
        <div className="py-12 sm:py-16 mx-auto max-w-2xl text-xl text-slate-700">
          <p className="mb-12">
            {locale !== "es"
              ? "Web3 needs diverse backgrounds, experiences, and perspectives to drive innovation and global adoption, but the ecosystem today is lacking diverse peers, mentors, and role models and is instead rife with hype, scams, and rug pulls. The next million people entering web3 will include more women, non-binary folk, and people representing various ethnic and socioeconomic backgrounds. Women Build Web3 aims to onboard, educate, and retain talented, diverse builders in this space."
              : "Web3 necesita diversas formaciones, experiencias y perspectivas para impulsar la innovación y la adopción global, pero el ecosistema actual carece de diversidad de compañeros, mentores y modelos a seguir, en cambio, está lleno de especulaciones, estafas y estafas. El próximo millón de personas que ingresen a web3 incluirá a más mujeres, personas no binarias y personas que representen diversos orígenes étnicos y socioeconómicos. Women Build Web3 tiene como objetivo incorporar, educar y retener desarrolladores talentosos y diversos en este espacio."}
          </p>
          <p className="mb-4">
            {locale !== "es"
              ? "Our collective is composed of software engineers, designers, content creators, technical writers, managers, and founders with wide-ranging experiences in tech. We span across 8 countries, 16 cities, and 9 timezones and counting. We are united in our passion to decentralize the internet and to bring more diverse perspectives to web3. Our core initiatives are focused on providing:"
              : "Nuestro colectivo está compuesto por ingenieros de software, diseñadores, creadores de contenido, escritores técnicos, managers, y fundadores con experiencias amplias en tecnología. Estamos en 8 paises diferentes, 16 ciudades, y 9 zonas horarias hasta ahora. Estamos unidos en nuestra pasión por descentralizar la internet y brindar más perspectivas diversas a la web3. Nuestras iniciativas principales están enfocadas en proporcionar:"}
          </p>
          <ul className="list-disc space-y-4 pl-8">
            <li>
              {locale !== "es"
                ? "Education, mentorship, and resources focused on software development and blockchain technology."
                : "Educación, tutorías y recursos enfocados en el desarrollo de software y la tecnología blockchain."}
            </li>
            <li>
              {locale !== "es"
                ? "Structured opportunities and predictable outcomes to apply technical knowledge and skills with end-to-end support from onboarding to job placement with collaboration from ecosystem partners."
                : "Oportunidades estructuradas y resultados esperados para aplicar conocimientos técnicos y habilidades con soporte de principio a final  desde la inscripción hasta la colocación laboral con colaboración de socios en el ecosistema."}
            </li>
            <li>
              {locale !== "es"
                ? "Funding for active participation, contributions, and projects."
                : "Financiamiento para la participación activa, contribuciones y proyectos."}
            </li>
          </ul>
        </div>
        <div className="py-12 sm:py-16">
          <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {locale !== "es"
              ? "Thank you to our early supporters"
              : "Gracias a los que nos apoyaron inicialmente"}
          </h2>
          <p className="mt-4 text-center mx-auto max-w-2xl text-xl text-slate-700 mb-8 sm:mb-12">
            {locale !== "es"
              ? "We are grateful for the support from web3 organizations and hundreds of individuals. Together, we are building a more diverse, inclusive, and equitable web3."
              : "Gracias a las organizaciones web3 y a las miles de personas que nos apoyaron. Juntos estamos construyendo una web3 más diversa, inclusiva y equitativa."}
          </p>
          <div>
            <h3 className="text-center text-2xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-3xl mb-8 sm:mb-12">
              {locale !== "es" ? "Our Sponsors" : "Nuestros patrocinadores"}
            </h3>
            <Sponsors sponsors={sponsors} />
          </div>
          <div className="mt-16 sm:mt-20">
            <h3 className="text-center text-2xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-3xl mb-8 sm:mb-12">
              {locale !== "es"
                ? "Partner Communities"
                : "Comunidades asociadas"}
            </h3>
            <Partners />
          </div>
          <p className="mt-8 sm:mt-12 text-center mx-auto max-w-2xl text-xl text-slate-700">
            {locale !== "es"
              ? "& our 180+ Gitcoin grant backers!"
              : "& nuestros 180+ patrocinadores en Gitcoin!"}
          </p>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      locale,
    },
  };
}
