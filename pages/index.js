import { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

export default function Home() {
  const [preferedColorScheme, setPreferedColorScheme] = useState("light");

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setPreferedColorScheme("dark");
    }
  }, []);

  return (
    <Layout>
      <Head>
        <title>Women Build Web3</title>
        <meta
          name="description"
          content="Providing education, oppportunities, and funding to a new wave of web3 builders"
        />
        {preferedColorScheme === "light" && (
          <link rel="icon" href="/favicon.ico" />
        )}
        {preferedColorScheme === "dark" && (
          <link rel="icon" href="/favicon-white.ico" />
        )}
      </Head>

      <Navbar preferedColorScheme={preferedColorScheme} />

      <section className="mt-24 sm:mt-12 mb-40">
        <div className="flex mb-4">
          <div className="w-full md:w-1/2">
            <h1 className="font-poppins-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight">
             Accelerator for women-led engineering projects
            </h1>
          </div>
        </div>
        <div className="flex justify-start md:justify-end">
          <div className="w-full sm:w-8/12 md:w-1/2 flex">
            <div className="block max-w-xl">
              <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl leading-normal xl:leading-normal mb-6 md:mb-8">
                Unlocking the next wave of web3 builders through education,
                opportunities, and funding.
              </p>
              <a
                className="dark:hover:text-black dark:hover:bg-white hover:text-white hover:bg-black border border-black dark:border-white border-solid rounded-full text-base md:text-lg lg:text-xl px-4 py-2"
                target="_blank"
                href="https://discord.gg/z63rfurXMD"
                rel="noopener noreferrer"
              >
                Join us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-44 grid md:grid-cols-2 gap-16">
        <div>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed md:leading-relaxed lg:leading-relaxed mb-6 md:mb-8">
            <strong className="font-poppins-semi-bold">Women Build Web3</strong>{" "}
            is a global collective of women and non-binary developers learning
            and building in web3. We help developers unlock their potential by
            providing education, opportunities, and funding and connecting them
            with a network of peers.
          </p>
          <a
            className="dark:hover:text-black dark:hover:bg-white hover:text-white hover:bg-black border border-black dark:border-white border-solid rounded-full text-base md:text-lg lg:text-xl px-4 py-2"
            target="_blank"
            href="https://discord.gg/z63rfurXMD"
            rel="noopener noreferrer"
          >
            Join us
          </a>
        </div>

        <div>
          <h2 className="mt-8 sm:mt-0 text-xl md:text-2xl font-poppins-bold">
            Our Core Intiatives
          </h2>
          <hr className="my-8 border-t border-black dark:border-white border-solid" />
          <h3 className="mb-4 text-xl md:text-2xl font-poppins-bold">
            &#128218; Education
          </h3>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed md:leading-relaxed lg:leading-relaxed">
            Education, mentorship, and resources focused on software development
            and blockchain technology
          </p>
          <hr className="my-8 border-t border-black dark:border-white border-solid" />
          <h3 className="mb-4 text-xl md:text-2xl font-poppins-bold">
            &#128736; Opportunities
          </h3>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed md:leading-relaxed lg:leading-relaxed">
            Structured opportunities with predictable outcomes and end-to-end
            support from onboarding to job placement in collaboration with web3
            ecosystem partners
          </p>
          <hr className="my-8 border-t border-black dark:border-white border-solid" />
          <h3 className="mb-4 text-xl md:text-2xl font-poppins-bold">
            &#127793; Funding
          </h3>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed md:leading-relaxed lg:leading-relaxed">
            Funding for active participation, contributions, and projects
          </p>
        </div>
      </section>

      <section className="max-w-5xl flex flex-col-reverse items-center md:flex-row m-auto gap-8">
        <div className="mx-auto md:mx-0 md:w-1/2">
          <ol className="list-disc last:pb-0">
            <li className="m-3 text-base xl:text-lg">
              Day 1: Intro to building in web3 - tooling overview
            </li>
            <div className="h-6 w-20 border-l border-black dark:border-white border-dashed" />
            <li className="m-3 text-base xl:text-lg">
              Day 2: Workshop with Austin Griffith
            </li>
            <div className="h-6 w-20 border-l border-black dark:border-white border-dashed" />
            <li className="m-3 text-base xl:text-lg">
              Day 3: Writing an Ethereum smart contract
            </li>
            <div className="h-6 w-20 border-l border-black dark:border-white border-dashed" />
            <li className="m-3 text-base xl:text-lg">
              Day 5: Workshop with Nader Dabit
            </li>
            <div className="h-6 w-20 border-l border-black dark:border-white border-dashed" />
            <li className="m-3 text-base xl:text-lg">
              Day 5: Building a subgraph
            </li>
            <div className="h-12 w-20 border-l border-black dark:border-white border-dashed" />
            <li className="m-3 text-base xl:text-lg">
              Day 8: Workshop with Patrick Collins
            </li>
            <div className="h-12 w-20 border-l border-black dark:border-white border-dashed" />
            <li className="m-3 text-base xl:text-lg">
              Day 9: Develop your front-end with Ethers.js
            </li>
            <div className="h-10 w-20 border-l border-black dark:border-white border-dashed" />
            <li className="m-3 text-base xl:text-lg">
              Day 13: Workshop with Ally Haire and Dawn Kelly
            </li>
            <div className="h-10 w-20 border-l border-black dark:border-white border-dashed" />
            <li className="m-3 text-base xl:text-lg">
              Day 14: OFf-chain storage
            </li>
            <div className="h-10 w-20 border-l border-black dark:border-white border-dashed" />
            <li className="m-3 text-base xl:text-lg">
              Day 18: Workshop with Rahat
            </li>
            <div className="h-10 w-20 border-l border-black dark:border-white border-dashed" />
            <li className="m-3 text-base xl:text-lg">
              Day 19: Deploy to Polygon
            </li>
            <div className="h-10 w-20 border-l border-black dark:border-white border-dashed" />
            <li className="m-3 text-base xl:text-lg">
              Day 20: Final touches and improvements 
            </li>
            <div className="h-10 w-20 border-l border-black dark:border-white border-dashed" />
            <li className="m-3 text-base xl:text-lg">
              Day 23: Workshop with Nader Dabit 
            </li>
            <div className="h-10 w-20 border-l border-black dark:border-white border-dashed" />
            <li className="m-3 text-base xl:text-lg">
              Day 24: Demo 
            </li>
            <div className="h-10 w-20 border-l border-black dark:border-white border-dashed" />
            <li className="m-3 text-base xl:text-lg">
              Day 30: Closing ceremony
            </li>
            <div className="h-8 w-20 border-l border-black dark:border-white border-dashed" />
            <li className="m-3 text-base xl:text-lg">Day 30: Demo Day</li>
          </ol>
        </div>
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-poppins-bold mb-6 xl:mb-8">
            Ramp up in 30 days
          </h2>
          <p className="mb-8 xl:mb-10 leading-normal text-base md:text-lg lg:text-xl leading-relaxed md:leading-relaxed lg:leading-relaxed">
            Get up to speed on blockchain development and start shipping
            projects through our{" "}
            <strong className="font-poppins-semi-bold">30 Days of Web3</strong>{" "}
            curriculum. After 30 days, you will have deployed fullstack
            decentralized apps and learned to use essential web3 tools,
            protocols, and frameworks.
          </p>
          <a
            className="dark:hover:text-black dark:hover:bg-white hover:text-white hover:bg-black border border-black dark:border-white border-solid rounded-full text-base md:text-lg lg:text-xl px-4 py-2"
            target="_blank"
            href="https://discord.gg/z63rfurXMD"
            rel="noopener noreferrer"
          >
            Coming Soon
          </a>
        </div>
      </section>
      <Footer preferedColorScheme={preferedColorScheme} />
    </Layout>
  );
}
