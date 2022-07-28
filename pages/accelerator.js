import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../components/Layout";
import Sponsors from "../components/Sponsors";
import Partners from "../components/Partners";

export default function Accelerator({ locale }) {
  const metaTitle = "Accelerator | 30 Days of Web3";
  const metaDescription =
    "Women Build Web3 provides education, oppportunities, and funding to a new wave of web3 builders";
  const metaUrl = "https://www.30daysofweb3.xyz/";

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
              ? "WBW3 Presents:"
              : "WBW3 Presenta:"}{" "}
            <span className="sm:block text-royal-600">BUIDL Accelerator</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-slate-700 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            {locale !== "es" 
              ? "Deploying $130K to indie projects led by women and non-binary engineering teams."
              : "Desplegando $130K para proyectos independientes liderados por mujeres y equipos de ingeniería no binarios."}
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a
                href="mailto:info@womenbuildweb3.com"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-royal-600 hover:bg-royal-700 md:py-4 md:text-lg md:px-10"
              >
                {locale !== "es"
                ? "Sponsor us"
                : "Patrocinanos"}
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-2xl text-xl text-slate-700">
          <p>
            {locale !== "es"
            ? "Buidl Accelerator tiene como objetivo apoyar proyectos donde el 51% o más del equipo técnico son mujeres y personas no binarias. Este acelerador sin ataduras proporcionará fondos a partir de $ 5K y hasta $ 30K por equipo, distribuidos a medida que cumplan con los hitos autodefinidos. Nuestro objetivo es ayudar a los equipos a despegar y poner dinero en sus bolsillos para los gastos de la vida, para que puedan concentrarse en el envío. Este acelerador de 3 meses está abierto a equipos y proyectos que no hayan recaudado fondos de capital de riesgo significativos. Los proyectos pueden ser nuevos o existentes. Hay dos formas de aplicar:"
            : "The Buidl Accelerator aims to support projects where 51% or more of the technical team are women and non-binary people. This no-strings-attached accelerator will provide funding starting at $5K, and up to $30K per team, distributed as they meet self-defined milestones. Our goal is to help teams get off the ground, and put money in their pockets for life&apos;s expenses, so they can focus on shipping. This 3-month accelerator is open to teams and projects that have not raised significant VC funding. Projects can be new or existing. There are two ways to apply:"}
            <p className="py-4">
              {locale !== "es"
              ? "1. Complete 30 Days of Web3 - Building Fullstack Dapps"
              : "1. Completa 30 días de Web3: Construyendo Fullstack Dapps"}{" "}
            </p>
            <p>
              {locale !== "es"
              ? "2. Show us an open-source project your team has worked on."
              : "2. Muéstrenos un proyecto de código abierto en el que haya trabajado su equipo."}{" "}
            </p>
          </p>
        </div>
        <div className="py-12 sm:py-16">
          <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {locale !== "es"
            ? "Big thank you to our sponsors"
            : "Muchas gracias a nuestros patrocinadores"}
          </h2>
          <p className="mt-4 text-center mx-auto max-w-2xl text-xl text-slate-700 mb-8 sm:mb-12">
            {locale !== "es"
            ? "Nuestra tesorería está financiada por el trabajo realizado por nuestra DAO durante los últimos meses. Mantenernos fieles a nuestra misión de apoyar a las mujeres e ingenieras no binarias más talentosas del espacio, desplegar este capital en equipos talentosos es uno de los pilares principales de nuestra organización."
            : "Our treasury is funded by work done by the DAO over the last few months. Staying true to our mission of supporting the most talented women and non-binary engineers in the space, deploying this capital to talented teams is one of the core pillars of our org."}
          </p>
          <Sponsors />
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
