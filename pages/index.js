import { useEffect, useState } from "react";
import Head from "next/head";
import Speakers from "../components/Speakers";
import Sponsors from "../components/Sponsors";
import Partners from "../components/Partners";
import FAQSection from "../components/FAQSection";
import Layout from "../components/Layout";
import Image from "next/image";
// import Counter from "../components/Countdown";

export default function Home({ locale }) {
  const metaTitle = "30 Days of Web3";
  const metaDescription =
    "30 Days of Web3 is the ultimate guide to building on Ethereum. Ship a full-stack dapp leveraging must-know web3 tools, protocols, and frameworks.";
  const metaUrl = "https://www.30daysofweb3.xyz";

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
        <meta property="og:image" content={`${metaUrl}/images/og-image.png`} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@womenbuildweb3" />
        <meta property="twitter:url" content={metaUrl} />
        <meta property="twitter:title" content={metaTitle} />
        <meta property="twitter:description" content={metaDescription} />
        <meta
          property="twitter:image"
          content={`${metaUrl}/images/twitter-image.png`}
        />
        <meta property="twitter:image:alt" content="30 Days of Web3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="my-16 mx-auto max-w-7xl px-4 sm:my-24 space-y-8 lg:space-y-16">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl">
            {locale !== "es"
              ? "The Ultimate Guide to"
              : "La guía fundamental para"}{" "}
            <span className="sm:block text-royal-600">
              {locale !== "es"
                ? "Building Fullstack Dapps"
                : "construir Dapps Fullstack"}
            </span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-slate-700 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            {locale !== "es"
              ? `Whether you're a curious hacker or an experienced engineer, 30
            Days of Web3 is project-based curriculum created by developers to
            teach you how to build full-stack dapps.`
              : `No importa si eres un hacker con curiosidad o un ingeniero con experiencia, 30 Días de Web3 es un currículum basado en proyectos creado por desarrolladores para enseñarte cómo crear dapps full-stack.
            `}
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a
                href="https://forms.gle/SdwSP3BzsnVcXtjP9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-royal-600 hover:bg-royal-700 md:py-4 md:text-lg md:px-10"
              >
                {locale !== "es" ? " Register" : "Registrarse"}
              </a>
            </div>
          </div>
        </div>
        <div className="space-y-10 py-12 sm:py-16 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <span className="text-base text-royal-600 font-semibold tracking-wide uppercase">
                  {locale !== "es" ? "Education" : "Educación"}
                </span>
                <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                  {locale !== "es" ? "Learn by doing" : "Aprende haciendo"}
                </h2>
                <p className="mt-4 text-lg leading-6 text-slate-700">
                  {locale !== "es"
                    ? `You'll leverage must-know web3 tools, protocols, and
                  frameworks to build your stack and create an architectural
                  reference to build any dapp. Go through our curriculum at your
                  own pace, and join live workshops led by top developers in
                  web3.`
                    : `Potencia tus habilidades con las más conocidas herramientas, protocolos y frameworks en web3 para construir tu stack y crear una arquitectura que te sirva de referencia para cualquier dapp. Sigue nuestro currículum a tu propio ritmo y únete a nuestros workshops en vivo dirigidos por los mejores desarrolladores de la web3.`}
                </p>
              </div>
            </div>
            <div className="relative -mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
              <Image
                src="/images/web3rsvp.png"
                alt="web3rsvp app preview"
                layout="fill"
                objectFit="cover"
                className="shadow-lg transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 space-y-10 lg:space-y-0 lg:grid-cols-2 lg:gap-10">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 xl:py-20 xl:px-20">
                <div className="lg:self-center">
                  <span className="text-base text-royal-600 font-semibold tracking-wide uppercase">
                    {locale !== "es" ? "Accelerator" : "Acelerador"}
                  </span>
                  <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                    {locale !== "es"
                      ? "Build Accelerator"
                      : "Build Accelerator"}
                  </h2>
                  <p className="mt-4 text-lg leading-6 text-slate-700">
                    {locale !== "es"
                      ? `Women and non-binary devs who complete our curriculum will
                    be invited to join`
                      : `Mujeres y personas no binarias que completen nuestro curriculum serán invitadas a unirse a`}{" "}
                    <a
                      href="https://womenbuildweb3.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      {locale !== "es" ? "our DAO" : "nuestra DAO"}
                    </a>{" "}
                    {locale !== "es"
                      ? "and take part in a 3-month"
                      : "y ser parte 3 meses de nuestro"}{" "}
                    <span className="font-medium text-slate-900">
                      {locale !== "es"
                        ? "BUIDL Accelerator"
                        : "BUIDL Accelerator"}
                    </span>{" "}
                    {locale !== "es"
                      ? `where teams can request funding to work on web3 projects.
                    Get paid while you build out an MVP with a team of talented
                    peers, and build up your reputation in the space to get the
                    attention of every web3 company hungry for top talent.`
                      : `donde los equipos podrán solicitar fondos para trabajar en proyectos web3. Recibe pagos mientras construyes un proyecto MVP junto con un equipo talentoso y construyan su reputación en el espacio web3 para llamar la atención de todas las empresas web3 hambrientas por los mejores talentos.`}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 xl:py-20 xl:px-20">
                <div className="lg:self-center">
                  <span className="text-base text-royal-600 font-semibold tracking-wide uppercase">
                    {locale !== "es" ? "Opportunities" : "Oportunidades"}
                  </span>
                  <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                    {locale !== "es"
                      ? "Expand your network"
                      : "Expande tu red de contactos"}
                  </h2>
                  <p className="mt-4 text-lg leading-6 text-slate-700">
                    {locale !== "es"
                      ? `Connect with our sponsors and partner organizations looking
                    to hire engineers, dev rels, and more. We're
                    collaborating with web3 ecosystem leaders like The Ethereum
                    Foundation, Filecoin/IPFS, The Graph, Infura, Polygon,
                    Radicle, and more to connect you to awesome poeple and
                    opportunities.`
                      : `Conecta con nuestros patrocinadores y organizadores asociados que buscan contratar ingenieros, dev rels y más. Estamos colaborando con líderes en el ecosistema web3 como The Ethereum Foundation, Filecoin/IPFS, The Graph, Infura, Polygon, Radicle y más. Para conectarte con personas y oportunidades increíbles.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Speakers locale={locale} />
        <div
          id="sponsors"
          className="text-center py-12 sm:py-16 sm:px-6 lg:px-8"
        >
          <h2 className="text-3xl font-extrabold sm:text-4xl mb-8 sm:mb-12">
            {locale !== "es" ? "Our Sponsors" : "Creado con el apoyo de"}
          </h2>
          <Sponsors sponsors={sponsors} />
        </div>
        <div
          id="partners"
          className="text-center py-12 sm:py-16 sm:px-6 lg:px-8"
        >
          <h2 className="text-3xl font-extrabold sm:text-4xl mb-8 sm:mb-12">
            {locale !== "es"
              ? "Partner Communities"
              : "Explora las comunidades asociadas"}
          </h2>
          <Partners />
        </div>
        <FAQSection locale={locale} />
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
