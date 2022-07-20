import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../components/Layout";
import Sponsors from "../components/Sponsors";
import Partners from "../components/Partners";

export default function About() {
  const metaTitle = "About us | 30 Days of Web3";
  const metaDescription =
    "Women Build Web3 provides education, oppportunities, and funding to a new wave of web3 builders";
  const metaUrl = "https://www.30daysofweb3.xyz/";

  return (
    <Layout>
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
            Unlocking the next wave of{" "}
            <span className="sm:block text-royal-600">web3 builders</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-slate-700 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Women Build Web3 is empowering the next wave of web3 builders
            through education, opportunities, and funding.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a
                href="mailto:info@womenbuildweb3.com"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-royal-600 hover:bg-royal-700 md:py-4 md:text-lg md:px-10"
              >
                Sponsor us
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
        <div className="py-12 sm:py-16 mx-auto max-w-2xl text-xl text-slate-700">
          <p className="mb-12">
            Web3 needs diverse backgrounds, experiences, and perspectives to
            drive innovation and global adoption, but the ecosystem today is
            lacking diverse peers, mentors, and role models and is instead rife
            with hype, scams, and rug pulls. The next million people entering
            web3 will include more women, non-binary folk, and people
            representing various ethnic and socioeconomic backgrounds. Women
            Build Web3 aims to onboard, educate, and retain talented, diverse
            builders in this space.
          </p>
          <p className="mb-4">
            Our collective is composed of software engineers, designers, content
            creators, technical writers, managers, and founders with
            wide-ranging experiences in tech. We span across 8 countries, 16
            cities, and 9 timezones and counting. We are united in our passion
            to decentralize the internet and to bring more diverse perspectives
            to web3. Our core initiatives are focused on providing:
          </p>
          <ul className="list-disc space-y-4 pl-8">
            <li>
              Education, mentorship, and resources focused on software
              development and blockchain technology.
            </li>
            <li>
              Structured opportunities and predictable outcomes to apply
              technical knowledge and skills with end-to-end support from
              onboarding to job placement with collaboration from ecosystem
              partners.
            </li>
            <li>
              Funding for active participation, contributions, and projects.
            </li>
          </ul>
        </div>
        <div className="py-12 sm:py-16">
          <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Thank you to our early supporters
          </h2>
          <p className="mt-4 text-center mx-auto max-w-2xl text-xl text-slate-700 mb-8 sm:mb-12">
            We are grateful for the support from web3 organizations and hundreds
            of individuals. Together, we are building a more diverse, inclusive,
            and equitable web3.
          </p>
          <Sponsors />
          <div className="mt-8 sm:mt-12">
            <Partners />
          </div>
          <p className="mt-8 sm:mt-12 text-center mx-auto max-w-2xl text-xl text-slate-700">
            & our 180+ Gitcoin grant backers!
          </p>
        </div>
      </div>
    </Layout>
  );
}
