import { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Image from "next/image";
import Speakers from "../components/Speakers";
import Sponsors from "../components/Sponsors";
import Link from "next/link";
import Countdown from "../components/Countdown";
import BlobAnimation from "../components/BlobAnimation";

//todo: add cool animation to right side of column at the top of the page
//todo: add a countdown timer that counts down to 6/27 and tell people to follow us on Twitter for updates
//todo: beautify the sponsors and workshop sections with design help, probably reformat the sponsor logos to look more uniform?
// todo: The countdown timer component currently uses the user's timezone when calculating how much time left until June 27th. Although this is functional, the countdown timer could be improved further to use a specific timezone.

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
        <title>30 Days of Web3</title>
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
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <section className="mt-24 mb-40 sm:mt-12">
            <div className="mt-6 lg:mt-0 relative flex flex-col lg:flex-row lg:gap-12 items-center lg:justify-items-left min-h-[60vh]">
              <div className="w-full md:w-1/2">
                <h1 className="flex flex-col mt-12 text-3xl leading-tight text-center lg:mt-0 lg:text-left font-poppins-bold md:text-4xl lg:text-5xl xl:text-8xl">
                  The Ultimate Guide to Build Web3
                </h1>
                <p className="max-w-xl mx-auto my-8 leading-relaxed lg:max-w-md lg:mx-0 md:text-xl lg:text-2xl md:leading-relaxed">
                  A full-stack, project-based curriculum created by developers
                  to help you{" "}
                  <strong className="font-poppins-bold">start building.</strong>{" "}
                </p>

                <div className="pt-10">
                  {/* This link will need to redirect to the challenge page once we're ready. */}
                  <a
                    className=" px-4 py-2 border border-black border-solid rounded-full dark:hover:text-black dark:hover:bg-white hover:text-white hover:bg-black dark:border-white lg:text-xl"
                    href="https://forms.gle/XHDy3Yvasqocavas9"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Register now
                  </a>
                </div>
              </div>
            </div>
          </section>

          <div>
            <hr className="my-8 border-t border-black border-solid dark:border-white" />

            <h3 className="mb-4 text-xl md:text-2xl font-poppins-bold">
              Phase 1: &#128218; 30 Days of Web3
            </h3>
            <p className="text-base leading-relaxed md:text-lg lg:text-xl md:leading-relaxed lg:leading-relaxed">
              Whether you&apos;re a senior web2 engineer or a budding
              web3-native developer, this course will walk you through shipping
              a full-stack dapp using top web3 protocols. This course is
              asynchronous, self-paced and has live workshops from top
              developers in web3. Get an understanding of the web3 tech
              stack,learn the principles of building on Ethereum, and create an
              architectural reference to build out your own ideas.
            </p>
            <hr className="my-8 border-t border-black border-solid dark:border-white" />
            <h3 className="mb-4 text-xl md:text-2xl font-poppins-bold">
              Phase 2: &#128736; BUIDL Accelerator
            </h3>
            <p className="text-base leading-relaxed md:text-lg lg:text-xl md:leading-relaxed lg:leading-relaxed">
              Women and non-binary developers who successfully complete phase 1
              will be invited to join the DAO and take part in a 3-month
              accelerator where members can request funding to work on public
              goods. Get paid to work on your skills and create a dope dapp to
              get the attention of every web3 company hiring 👀
            </p>
            <hr className="my-8 border-t border-black border-solid dark:border-white" />
            <h3 className="mb-4 text-xl md:text-2xl font-poppins-bold">
              Phase 3: &#127793; Job Placement
            </h3>
            <p className="text-base leading-relaxed md:text-lg lg:text-xl md:leading-relaxed lg:leading-relaxed">
              Connect with sponsors and partner organizations looking for
              engineers, dev rels, etc.
            </p>
          </div>
          {/* </section> */}

          <section className="flex flex-col-reverse items-center max-w-5xl gap-8 m-auto mt-20 md:flex-row">
            {/* <div className="mx-auto md:mx-0 md:w-1/2">
          <ol className="list-disc last:pb-0">
            <li className="m-3 text-base xl:text-lg">
              Day 1: Welcome & Environment Set up
            </li>
            <div className="w-20 h-6 border-l border-black border-dashed dark:border-white" />
            <li className="m-3 text-base xl:text-lg">
              Day 2: Nader Dabit - Developing on Ethereum
            </li>
            <div className="w-20 h-6 border-l border-black border-dashed dark:border-white" />
            <li className="m-3 text-base xl:text-lg">
              Day 3: Write your smart contract
            </li>
            <div className="w-20 h-12 border-l border-black border-dashed dark:border-white" />
            <li className="m-3 text-base xl:text-lg">
              Day 6: Patrick Collins - Chainlink VRF
            </li>
            <div className="w-20 h-6 border-l border-black border-dashed dark:border-white" />
            <li className="m-3 text-base xl:text-lg">
              Day 8: Workshop with Infura
            </li>
            <div className="w-20 h-6 border-l border-black border-dashed dark:border-white" />
            <li className="m-3 text-base xl:text-lg">
              Day 8: Rahat - Deploying on Polygon
            </li>
            <div className="w-20 h-6 border-l border-black border-dashed dark:border-white" />
            <li className="m-3 text-base xl:text-lg">
              Day 10: Testing and deploying smart contract
            </li>
            <div className="w-20 h-6 border-l border-black border-dashed dark:border-white" />
            <li className="m-3 text-base xl:text-lg">
              Day 8: Camila Ramos - Building Subgraphs
            </li>
            <div className="w-20 h-6 border-l border-black border-dashed dark:border-white" />
            <li className="m-3 text-base xl:text-lg">
              Day 9: Building your subgraph
            </li>
            <div className="w-20 h-12 border-l border-black border-dashed dark:border-white" />
            <li className="m-3 text-base xl:text-lg">
              Day 10: Lee Rob - Frontend with Next.js
            </li>
            <div className="w-20 h-10 border-l border-black border-dashed dark:border-white" />
            <li className="m-3 text-base xl:text-lg">
              Day 13: Build Your Front-end
            </li>
            <div className="w-20 h-10 border-l border-black border-dashed dark:border-white" />
            <li className="m-3 text-base xl:text-lg">
              Day 14: Ally Haire and Dawn Kelly - Off-chain storage
            </li>
            <div className="w-20 h-10 border-l border-black border-dashed dark:border-white" />
            <li className="m-3 text-base xl:text-lg">
              Day 20: Dev Freestyle 
            </li>
            <div className="w-20 h-10 border-l border-black border-dashed dark:border-white" />
            <li className="m-3 text-base xl:text-lg">
              Day 23: Austin Griffith - What's Next?
            </li>
            <div className="w-20 h-10 border-l border-black border-dashed dark:border-white" />
            <li className="m-3 text-base xl:text-lg">
              Day 27: Demo 
            </li>
            <div className="w-20 h-8 border-l border-black border-dashed dark:border-white" />
            <li className="m-3 text-base xl:text-lg">Day 30: Closing Ceremony </li>
          </ol>
        </div> */}
            <div className="mx-auto md:mx-0 md:w-1/2">
              <ol className="list-disc last:pb-0">
                <li className="m-3 text-base xl:text-lg">
                  Smart Contract Development
                </li>
                <div className="w-20 h-6 border-l border-black border-dashed dark:border-white" />
                <li className="m-3 text-base xl:text-lg">
                  Smart Contract Utilities
                </li>
                <div className="w-20 h-6 border-l border-black border-dashed dark:border-white" />
                <li className="m-3 text-base xl:text-lg">L2s and Sidechains</li>
                <div className="w-20 h-6 border-l border-black border-dashed dark:border-white" />
                <li className="m-3 text-base xl:text-lg">Indexing and Query</li>
                <div className="w-20 h-6 border-l border-black border-dashed dark:border-white" />
                <li className="m-3 text-base xl:text-lg">Off-chain storage</li>
                <div className="w-20 h-6 border-l border-black border-dashed dark:border-white" />
                <li className="m-3 text-base xl:text-lg">Client application</li>
              </ol>
            </div>
            <div className="mb-8 md:w-1/2 md:mb-0">
              <h2 className="mb-6 text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-poppins-bold xl:mb-8">
                Full-stack dapps
              </h2>
              <p className="mb-8 text-base leading-normal leading-relaxed xl:mb-10 md:text-lg lg:text-xl md:leading-relaxed lg:leading-relaxed">
                Get up to speed on blockchain development and start shipping
                projects through our{" "}
                <strong className="font-poppins-semi-bold">
                  30 Days of Web3
                </strong>{" "}
                curriculum. After 30 days, you will have deployed fullstack
                decentralized apps and learned to use essential web3 tools,
                protocols, and frameworks.
              </p>
              <a
                className="px-4 py-2 text-base border border-black border-solid rounded-full dark:hover:text-black dark:hover:bg-white hover:text-white hover:bg-black dark:border-white md:text-lg lg:text-xl"
                target="_blank"
                href="https://discord.gg/z63rfurXMD"
                rel="noopener noreferrer"
              >
                Join Discord
              </a>
            </div>
          </section>
          <div>
            <h3 className="text-center py-8 my-8 mt-8 mb-4 text-xl md:text-2xl font-poppins-bold">
              <Countdown /> until the challenge kicks off!
            </h3>
          </div>
          <section className="mt-20">
            <h1 className="mb-6 text-3xl sm:text-3xl md:text-4xl xl:text-5xl font-poppins-semi-bold xl:mb-8">
              With Workshops From
            </h1>
            <Speakers></Speakers>
          </section>
          <section className="mt-20">
            <Sponsors></Sponsors>
          </section>
          <Footer preferedColorScheme={preferedColorScheme} />
        </div>
      </div>
    </Layout>
  );
}
