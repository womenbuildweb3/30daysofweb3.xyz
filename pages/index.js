import { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Layout from '../components/Layout'
import Link from "next/link";
import Image from "next/image";

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

        <header className="mt-24 min-w-[300px] sm:mt-8 mb-44 grid gap-4 sm:gap-8">
          <div className="grid font-poppins-bold text-3xl sm:text-6xl leading-tight">
            <div>1 DAO</div>
            <div>10 Hackathons</div>
            <div>100 Projects</div>
            <div>1000 Developers</div>
          </div>
          <div className="flex justify-end">
            <div className="block max-w-xl">
              <p className="leading-normal text-base sm:text-3xl mb-8">
                Unlocking the next wave of web3 builders through education,
                opportunities, and funding.
              </p>
              <Link href="/contact" passHref>
                <a className="cursor-pointer dark:hover:text-black dark:hover:bg-white hover:text-white hover:bg-black border border-black dark:border-white border-solid rounded-full text-xs sm:text-2xl px-4 py-3">
                  Join us
                </a>
              </Link>
            </div>
          </div>
        </header>

        <section className="mb-44 grid sm:grid-cols-2 gap-8">
          <div>
            <p className="leading-normal mb-8 text-base sm:text-2xl">
              <strong className="font-poppins-semi-bold">
                Women Build Web3
              </strong>{" "}
              is a global collective of women and non-binary developers learning
              and building in web3. We help developers unlock their potential by
              providing education, opportunities, and funding and connecting
              them with a network of peers.
            </p>
            <Link href="/contact" passHref>
              <a className="cursor-pointer dark:hover:text-black dark:hover:bg-white hover:text-white hover:bg-black border border-black dark:border-white border-solid rounded-full text-xs sm:text-lg px-4 py-3">
                Join us
              </a>
            </Link>
          </div>

          <div>
            <h3 className="mt-8 sm:mt-0 text-lg sm:text-3xl font-poppins-semi-bold">
              Our Core Intiatives
            </h3>
            <hr className="my-8 border-t border-black dark:border-white border-solid" />
            <h3 className="mb-4 text-xl sm:text-3xl font-poppins-semi-bold">
              &#128218; Education
            </h3>
            <p className="text-base sm:text-2xl">
              Education, mentorship, and resources focused on software
              development and blockchain technology
            </p>
            <hr className="my-8 border-t border-black dark:border-white border-solid" />
            <h3 className="mb-4 text-xl sm:text-3xl font-poppins-semi-bold">
              &#128736; Opportunities
            </h3>
            <p className="text-base sm:text-2xl">
              Structured opportunities with predictable outcomes and end-to-end
              support from onboarding to job placement in collaboration with
              web3 ecosystem partners
            </p>
            <hr className="my-8 border-t border-black dark:border-white border-solid" />
            <h3 className="mb-4 text-xl sm:text-3xl font-poppins-semi-bold">
              &#127793; Funding
            </h3>
            <p className="text-base sm:text-2xl">
              Funding for active participation, contributions, and projects
            </p>
          </div>
        </section>

        <section className="max-w-5xl mb-44 flex flex-col-reverse sm:flex-row m-auto gap-8">
          <div className="mx-auto sm:mx-0 sm:w-1/2">
            <ol className="list-disc last:pb-0">
              <li className="m-3 text-base sm:text-lg">
                Day 1: Blockchain refresher
              </li>
              <div className="h-6 w-20 border-l border-black dark:border-white border-dashed" />
              <li className="m-3 text-base sm:text-lg">
                Day 4: Intro to The Graph
              </li>
              <div className="h-12 w-20 border-l border-black dark:border-white border-dashed" />
              <li className="m-3 text-base sm:text-lg">
                Day 13: Deploying with a L2
              </li>
              <div className="h-10 w-20 border-l border-black dark:border-white border-dashed" />
              <li className="m-3 text-base sm:text-lg">
                Day 22: Integrating Livepeer
              </li>
              <div className="h-8 w-20 border-l border-black dark:border-white border-dashed" />
              <li className="m-3 text-base sm:text-lg">Day 30: Demo Day</li>
            </ol>
          </div>

          <div className="sm:w-1/2">
            <h2 className="text-2xl sm:text-5xl font-poppins-bold mb-8">
              Ramp up in 30 days
            </h2>
            <p className="mb-8 leading-normal text-base sm:text-2xl">
              Get up to speed on blockchain development and start shipping
              projects through our{" "}
              <strong className="font-poppins-semi-bold">
                30 Days of Web3
              </strong>{" "}
              curriculum. After 30 days, you will have deployed fullstack
              decentralized apps and learned to use essential web3 tools,
              protocols, and frameworks.
            </p>
            <Link href="/" passHref>
              <a className="cursor-pointer dark:hover:text-black dark:hover:bg-white hover:text-white hover:bg-black border border-black dark:border-white border-solid rounded-full text-xs sm:text-lg px-4 py-3">
                Learn More
              </a>
            </Link>
          </div>
        </section>

        <section className="mb-44">
          <div className="mb-16 flex flex-col flex-center max-w-2xl mx-auto">
            <h2 className="mb-8 text-center text-2xl sm:text-5xl font-poppins-bold">
              Building in public
            </h2>
            <p className="text-center text-base sm:text-lg mb-4">
              We are documenting our unique journies, sharing our knowledge and
              resources, and creating educational web3 content. Follow our blog
              to stay tuned to our ventures.
            </p>
            <Link href="/blog" passHref>
              <a className="mx-auto cursor-pointer dark:hover:text-black dark:hover:bg-white hover:text-white hover:bg-black border border-black dark:border-white border-solid rounded-full text-xs sm:text-lg px-4 py-3">
                View our blog
              </a>
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row gap-8">
            <div>
              <Link href="/blog" passHref>
                <div className="cursor-pointer mt-4 w-full h-44 bg-slate-500 rounded-md"></div>
              </Link>
              <Link href="/blog" passHref>
                <h3 className="cursor-pointer leading-normal text-base sm:text-2xl font-poppins-bold">
                  Guide to Using the Coinbase API
                </h3>
              </Link>
              <Link href="/blog" passHref>
                <div className="mt-4 flex items-end gap-2">
                  <div className="cursor-pointer w-10 h-10 bg-slate-500 rounded-full"></div>
                  <div className="cursor-pointer text-base sm:text-xl">
                    Author Name
                  </div>
                </div>
              </Link>
            </div>

            <div>
              <Link href="/blog" passHref>
                <div className="cursor-pointer mt-4 w-full h-44 bg-slate-500 rounded-md"></div>
              </Link>
              <Link href="/blog" passHref>
                <h3 className="cursor-pointer leading-normal text-base sm:text-2xl font-poppins-bold">
                  Guide to Using the Coinbase API
                </h3>
              </Link>
              <Link href="/blog" passHref>
                <div className="mt-4 flex items-end gap-2">
                  <div className="cursor-pointer w-10 h-10 bg-slate-500 rounded-full"></div>
                  <div className="cursor-pointer text-base sm:text-xl">
                    Author Name
                  </div>
                </div>
              </Link>
            </div>

            <div>
              <Link href="/blog" passHref>
                <div className="cursor-pointer mt-4 w-full h-44 bg-slate-500 rounded-md"></div>
              </Link>
              <Link href="/blog" passHref>
                <h3 className="cursor-pointer leading-normal text-base sm:text-2xl font-poppins-bold">
                  Guide to Using the Coinbase API
                </h3>
              </Link>
              <Link href="/blog" passHref>
                <div className="mt-4 flex items-end gap-2">
                  <div className="cursor-pointer w-10 h-10 bg-slate-500 rounded-full"></div>
                  <div className="cursor-pointer text-base sm:text-xl">
                    Author Name
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <Footer preferedColorScheme={preferedColorScheme} />
    </Layout>
  );
}
