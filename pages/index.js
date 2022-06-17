import { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Speakers from "../components/Speakers";
import Sponsors from "../components/Sponsors";
import FAQSection from "../components/FAQSection";

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
      <div className="my-16 mx-auto max-w-7xl px-4 sm:my-24 space-y-8 lg:space-y-16">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Get up to speed with{" "}
            <span className="text-indigo-600">web3 development</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Whether you&apos;re a curious hacker or an experienced engineer, 30
            Days of Web3 is for anyone who wants to ship a full-stack
            decentralized app leveraging must-know web3 tools, protocols, and
            frameworks.
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
        <div className="space-y-10 py-12 sm:py-16 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <span className="text-base text-gray-500 font-semibold tracking-wide uppercase">
                  Education
                </span>
                <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Learn by doing
                </h2>
                <p className="mt-4 text-lg leading-6 text-gray-500">
                  Get an understanding of the web3 tech stack, learn the
                  principles of building on Ethereum, and create an
                  architectural reference to build out your own ideas. Go
                  through our curriculum at your own pace and on your own time,
                  and join live workshops led by top developers in web3.
                </p>
              </div>
            </div>
            <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
              <img
                className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                src="https://tailwindui.com/img/component-images/full-width-with-sidebar.jpg"
                alt="App screenshot"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 space-y-10 lg:space-y-0 lg:grid-cols-2 lg:gap-10">
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
                    Women and non-binary devs who complete our curriculum will
                    be invited to join{" "}
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
        <FAQSection />
      </div>
      <Footer />
    </div>
  );
}
