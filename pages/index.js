import { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Speakers from "../components/Speakers";
import Sponsors from "../components/Sponsors";

export default function Home() {
  return (
    <div>
      <Head>
        <title>30 Days of Web3</title>
        <meta
          name="description"
          content="Providing education, oppportunities, and funding to a new wave of web3 builders"
        />
      </Head>
      <Navbar />
      <div className="my-16 mx-auto max-w-7xl px-4 sm:my-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Get up to speed with</span>{" "}
            <span className="block text-indigo-600 xl:inline">
              web3 development
            </span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Through our 30 Days of Web3 curriculum, you will ship a full-stack
            dApp leveraging must-know web3 tools, protocols, and frameworks.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a
                href="https://forms.gle/XHDy3Yvasqocavas9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                Register
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href="https://discord.gg/z63rfurXMD"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
              >
                Join our Discord
              </a>
            </div>
          </div>
        </div>
        <div className="space-y-8 py-16 md:py-24">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <span className="text-base text-gray-500 font-semibold tracking-wide uppercase">
                  Education
                </span>
                <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Learn by doing
                </h2>
                <p className="mt-4 text-lg leading-6 text-gray-500">
                  Whether you&apos;re a curious hacker or an experienced
                  engineer, our curriculum is for anyone who wants to ship a
                  full-stack decentralized app. Learn at your own pace and in
                  your own time, and join live workshops run by The curriculum
                  is asynchronous, self-paced and has live workshops from top
                  developers in web3. Get an understanding of the web3 tech
                  stack, learn the principles of building on Ethereum, and
                  create an architectural reference to build out your own ideas.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
                <div className="lg:self-center">
                  <span className="text-base text-gray-500 font-semibold tracking-wide uppercase">
                    Accelerator
                  </span>
                  <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    Build your own ideas
                  </h2>
                  <p className="mt-4 text-lg leading-6 text-gray-500">
                    Women and non-binary developers who successfully complete
                    the curriculum will be invited to join{" "}
                    <a
                      href="https://womenbuildweb3.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      our DAO
                    </a>{" "}
                    and take part in a 3-month{" "}
                    <span className="font-medium text-gray-900">
                      BUIDL Accelerator
                    </span>{" "}
                    where members can request funding to work on web3 projects.
                    Get paid to level up your skills, build with ambitious
                    peers, and ship dope apps to get the attention of every web3
                    company hungry for talent.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
                <div className="lg:self-center">
                  <span className="text-base text-gray-500 font-semibold tracking-wide uppercase">
                    Opportunities
                  </span>
                  <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    Expand your network
                  </h2>
                  <p className="mt-4 text-lg leading-6 text-gray-500">
                    Connect with sponsors and partner organizations looking for
                    engineers, dev rels, etc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Speakers />
        <Sponsors />
      </div>
      <Footer />
    </div>
  );
}
