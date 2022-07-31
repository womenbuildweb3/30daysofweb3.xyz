import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../components/Layout";
import Sponsors from "../components/Sponsors";
import Partners from "../components/Partners";

export default function Preview( { locale } ) {	
  const metaTitle = "Preview | 30 Days of Web3";
  const metaDescription =
    "30 Days of Web3 is the ultimate guide to building on Ethereum. Ship a full-stack dapp leveraging must-know web3 tools, protocols, and frameworks.";
  const metaUrl = "https://www.30daysofweb3.xyz";

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
      <div className="my-16 mx-auto max-w-7xl px-4 sm:my-24">
        <h1 className="text-center text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl mb-12">
          {locale !== "es"
            ? "Build a full-stack dapp with"
            : "Construye una dapp full-stack con"}{" "}
          <span className="sm:block text-royal-600">
            {locale !== "es"
              ? "30 Days of Web3"
              : "30 Días de Web3"}
          </span>
        </h1>
        <div className="mx-auto max-w-2xl text-xl text-slate-700">
          <p className="mb-12">
            {locale !== "es"
            ? "Throughout our curriculum, you will be building Web3RSVP, an event platform like Eventbrite that enables users to discover and RSVP to events and create and manage their own events. You will also learn to use must-know web3 tools, protocols, and frameworks. Here's a preview of some topics our curriculum will cover:"
            : "A lo largo de nuestro currículum, construiremos una Web3RSVP, una plataforma de eventos como Eventbrite que permite a los usuarios descubrir y confirmar su asistencia a eventos y crear y administrar sus propios eventos. También aprenderás a utilizar herramientas, protocolos y frameworks imprescindibles de la web3. Aquí hay una vista previa de algunos temas que cubrirá nuestro currículum:"}
          </p>
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <span className="font-bold">
                  {locale !== "es" ? "Getting Started" : "Para Comenzar"}
                  </span>
                <ul className="list-disc space-y-4 pl-8">
                  <li>
                    {locale !== "es" ? "Intro to Web3" : "Introducción a Web3"}
                    </li>
                  <li>
                    {locale !== "es" ? "Intro to Blockchain" : "Introducción a Blockchain"}
                  </li>
                  <li>
                    {locale !== "es" ? "Intro to Smart Contracts" : "Introducción a Smart Contracts"}
                  </li>
                  <li>
                    {locale !== "es" ? "Intro to Wallets" : "Introducción a Billeteras Virtuales"}
                  </li>
                  <li>
                    {locale !== "es" ? "Setup Your Wallet" : "Configura Tu Billetera"}
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <span className="font-bold">
                  {locale !== "es" 
                  ? "Building on Ethereum" 
                  : "Construyendo en Ethereum"}
                </span>
                <ul className="list-disc space-y-4 pl-8">
                  <li>
                    {locale !== "es" ? "Client Server Architecture" : "Arquitectura Cliente Servidor"}
                  </li>
                  <li>
                    {locale !== "es" ? "Intro to Polygon" : "Introducción a Polygon"}
                  </li>
                  <li>
                    {locale !== "es" ? "Intro to Solidity" : "Introducción a Solidity"}
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <span className="font-bold">
                  {locale !== "es" 
                  ? "Writing Your Smart Contract" 
                  : "Escribiendo Tu Smart Contract"}
                </span>
                <ul className="list-disc space-y-4 pl-8">
                  <li>
                    {locale !== "es" ? "Defining Our Data Structure" : "Definición de Nuestra Estructura de Datos"}
                  </li>
                  <li>
                    {locale !== "es" ? "Defining Functions" : "Definición de las Funciones"}
                  </li>
                  <li>
                    {locale !== "es" ? "Custom Solidity Events" : "Eventos de Solidity Personalizados"}
                  </li>
                  <li>
                    {locale !== "es" ? "Writing a Test Script" : "Escribiendo un Script de Prueba"}
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <span className="font-bold">
                  {locale !== "es" ? "Deploying Your Smart Contract" : "Desplegando Tu Smart Contract"}
                </span>
                <ul className="list-disc space-y-4 pl-8">
                  <li>
                    {locale !== "es" ? "Deploying with Infura" : "Despliegue con Infura"}
                  </li>
                  <li>
                    {locale !== "es" ? "Creating a Deploy Script" : "Creación de un Script de Despliegue"}
                  </li>
                  <li>
                    {locale !== "es" ? "Verifying Your Contract" : " Verificando Tu Contrato"}
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <span className="font-bold">
                  {locale !== "es" 
                  ? "Creating Your Subgraph" 
                  : "Creando Tu Subgraph"}
                </span>
                <ul className="list-disc space-y-4 pl-8">
                  <li>
                    {locale !== "es" ? "Intro to The Graph" : "Introducción a The Graph"}
                  </li>
                  <li>
                    {locale !== "es" ? "Structure of a Subgraph" : "Estructura de un Subgraph"}
                  </li>
                  <li>
                    {locale !== "es" ? "Deploying Your Subgraph" : "Desplegando tu Subgraph"}
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <span className="font-bold">
                  {locale !== "es" 
                  ? "Building Your Frontend" 
                  : "Construyendo Tu Frontend"} 
                </span>
                <ul className="list-disc space-y-4 pl-8">
                  <li>
                    {locale !== "es" ? "Intro to RainbowKit" : "Introducción a RainbowKit"} 
                  </li>
                  <li>
                    {locale !== "es" ? "Add Wallet Connection" : "Agregar conexión de Wallet"}
                  </li>
                  <li>
                    {locale !== "es" ? "Intro to Web3.Storage" : "Introducción a Web3.Storage"} 
                  </li>
                  <li>
                    {locale !== "es" ? "Using Decentralized Storage" : "Uso de Almacenamiento Descentralizado"}
                  </li>
                  <li>
                    {locale !== "es" ? "Intro to Ethers.js" : "Introducción a Ethers.js"}   
                  </li>
                  <li>
                    {locale !== "es" ? "Calling Your Contract" : "Llamando a Tu Contrato"}
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <span className="font-bold">
                  {locale !== "es" 
                  ? "Querying The Graph" 
                  : "Consultando a The Graph"}
                </span>
                <ul className="list-disc space-y-4 pl-8">
                  <li>
                    {locale !== "es" ? "The Graph Playground" : "El Patio de Juegos de The Graph"}
                  </li>
                  <li>
                    {locale !== "es" ? "Querying Your Subgraph" : "Consultando tu Subgraph"}
                  </li>
                  <li>
                    {locale !== "es" ? "Fetching Event Details" : "Obteniendo Detalles de Tu Evento"}           
                  </li>
                  <li>
                    {locale !== "es" ? "Displaying Event Details" : "Visualización de Detalles del Evento"} 
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <span className="font-bold">
                  {locale !== "es" 
                  ? "Customize Your Dapp" 
                  : "Personaliza Tu Dapp"}
                </span>
                <ul className="list-disc space-y-4 pl-8">
                  <li>
                    {locale !== "es" ? "Customize Your Dapp" : "Personaliza Tu Dapp"} 
                  </li>
                  <li>
                    {locale !== "es" ? "Social Graphs with Lens Protocol" : "Graphs Sociales con Lens Protocol"} 
                  </li></ul>
              </div>
              <div className="space-y-4">
                <span className="font-bold">
                  {locale !== "es" 
                  ? "Wrapping Up" 
                  : "Conclusión"}
                </span>
                <ul className="list-disc space-y-4 pl-8">
                  <li>
                    {locale !== "es" ? "Intro to Radicle" : "Introducción a Radicle"} 
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className="mt-12">
          {locale !== "es" 
          ? "While our curriculum will be hosted online free for anyone to access, our learning cohort has limited spots. Be sure to register to join our Discord server where you'll be able to ask questions, attend live workshops, connect with speakers, earn kudos, participate in prize raffles, and more. Register below to join the first learning cohort in our Discord server." 
          : "Si bien nuestro currículum estará en línea de forma gratuita para que cualquier persona pueda acceder, nuestro grupo de aprendizaje tiene cupos limitados. Asegúrate de registrarte para unirte a nuestro servidor de Discord donde podrás hacer preguntas, asistir a talleres en vivo, conectarte con nuestros oradores, ganar kudos, participar en sorteos de premios y más. Regístrate a continuación para unirte al primer grupo de aprendizaje en nuestro servidor de Discord."}  
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a
                href="https://forms.gle/XHDy3Yvasqocavas9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-royal-600 hover:bg-royal-700 md:py-4 md:text-lg md:px-10"
              >
                {locale !== "es" ? "Register" : "Registrarse"}
              </a>
            </div>
          </div>
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