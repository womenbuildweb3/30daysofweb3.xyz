import { useEffect, useState } from "react";
import Head from "next/head";
import Speakers from "../components/Speakers";
import Sponsors from "../components/Sponsors";
import Partners from "../components/Partners";
import FAQSection from "../components/FAQSection";
import Layout from "../components/Layout";
import Image from "next/image";
// import Counter from "../components/Countdown";

export default function Home({locale}) {
  const metaTitle = "30 Days of Web3";
  const metaDescription =
    "Ship a full-stack decentralized app leveraging must-know web3 tools, protocols, and frameworks";
  const metaUrl = "https://www.30daysofweb3.xyz";

  console.log("LOCALE", locale)

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
            {locale === "en" ? "The Ultimate Guide" : "La guía fundamental"}
            {" "}
            <span className="sm:block text-royal-600">
              {locale === "en" ? "to Building Fullstack Dapps" : "para construir Fullstack Dapps"}
            </span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-slate-700 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          {locale === "en" ? `Whether you&apos;re a curious hacker or an experienced engineer, 30
            Days of Web3 is project-based curriculum created by developers to
            teach you how to build full-stack dapps.` : `No importa si eres un hacker curioso o un ingeniero experimentado, 30 Days of Web3 es un curriculum basado en proyectos creado por desarrolladores para enseñarte cómo crear full-stack dapps.
            `}
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a
                href="https://forms.gle/XHDy3Yvasqocavas9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-royal-600 hover:bg-royal-700 md:py-4 md:text-lg md:px-10"
              >
                {locale === "en" ? " Register" : "Registrarse" }
              </a>
            </div>
            {/* <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href="https://discord.gg/z63rfurXMD"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-royal-600 bg-white hover:bg-slate-50 md:py-4 md:text-lg md:px-10"
              >
                Join our Discord
              </a>
            </div> */}
          </div>
        </div>
        <div className="space-y-10 py-12 sm:py-16 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <span className="text-base text-royal-600 font-semibold tracking-wide uppercase">
                {locale === "en" ? "Education" : "Educaión"}
                </span>
                <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                  
                  {locale === "en" ? "Learn by doing" : "Aprende haciendo"}
                </h2>
                <p className="mt-4 text-lg leading-6 text-slate-700">
                {locale === "en" ? `You&apos;ll leverage must-know web3 tools, protocols, and
                  frameworks to build your stack and create an architectural
                  reference to build any dapp. Go through our curriculum at your
                  own pace, and join live workshops led by top developers in
                  web3.` : `Potencia tus habilidades con las más conocidas herramientas, protocolos y frameworks en web3 para construir tu stack y crear una arquitectura referencial para cualquier dapp. Sigue nuestro currículum a tu propio ritmo y únete a nuestros workshops en vivo dirigidos por los mejores desarrolladores en web3.`}
                  
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
                  {locale === "en" ? "Accelerator" : "Acelerador"}
                  </span>
                  <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                    {locale === "en" ? "Build Accelerator" : "Build Acelerador"}
                  </h2>
                  <p className="mt-4 text-lg leading-6 text-slate-700">
                  {locale === "en" ? `Women and non-binary devs who complete our curriculum will
                    be invited to join`: `Mujeres y personas no binarias que completen nuestro curriculum serán invitadas a unirse a`}
                    {" "}
                    <a
                      href="https://womenbuildweb3.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      {locale === "en" ? "our DAO" : "nuestra DAO"}
                    </a>{" "}
                    {locale === "en" ? "and take part in a 3-month" : "y ser parte 3 meses de nuestro"}
                    {" "}
                    <span className="font-medium text-slate-900">
                    {locale === "en" ? "BUIDL Accelerator" : "BUIDL Accelerator"}
                    </span>{" "}
                    {locale === "en" ? `where teams can request funding to work on web3 projects.
                    Get paid while you build out an MVP with a team of talented
                    peers, and build up your reputation in the space to get the
                    attention of every web3 company hungry for top talent.` : `donde los equipos podrán solicitar fondos para trabajar en proyectos web3. Recibe pagos mientras construyes un proyecto MVP junto con un equipo talentoso y construyan su reputación en el espacio web3 para llamar la atención de todas las empresas web3 hambrientas por los mejores talentos.`}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 xl:py-20 xl:px-20">
                <div className="lg:self-center">
                  <span className="text-base text-royal-600 font-semibold tracking-wide uppercase">
                  {locale === "en" ? "Opportunities" : "Oportunidades"}
                  </span>
                  <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                  {locale === "en" ? "Expand your network" : "Expande tu red de contactos"}
                  </h2>
                  <p className="mt-4 text-lg leading-6 text-slate-700">
                  {locale === "en" ? `Connect with our sponsors and partner organizations looking
                    to hire engineers, dev rels, and more. We&apos;re
                    collaborating with web3 ecosystem leaders like The Ethereum
                    Foundation, Filecoin/IPFS, The Graph, Infura, Polygon,
                    Radicle, and more to connect you to awesome poeple and
                    opportunities.` : `Conecte con nuestros sponsors y organizadores asociados que buscan contratar ingenieros, dev rels y más. Estamos colaborando con líderes en el ecosistema web3 como The Ethereum Foundation, Filecoin/IPFS, The Graph, Infura, Polygon, Radicle y más. Para conectarte con personas y oportunidades increíbles.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Speakers locale={locale}/>
        <div
          id="sponsors"
          className="text-center py-12 sm:py-16 sm:px-6 lg:px-8"
        >
          <h2 className="text-3xl font-extrabold sm:text-4xl mb-8 sm:mb-12">
          {locale === "en" ? "Our Sponsors" : "Creado con el apoyo de"}
          </h2>
          <Sponsors />
        </div>
        <div
          id="partners"
          className="text-center py-12 sm:py-16 sm:px-6 lg:px-8"
        >
          <h2 className="text-3xl font-extrabold sm:text-4xl mb-8 sm:mb-12">
          {locale === "en" ? "Partner Communities" : "Explora las comunidades asociadas"}
          </h2>
          <Partners />
        </div>
        <FAQSection locale={locale}/>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ locale }) {

  return {
    props: {
      locale
    },
  };
}