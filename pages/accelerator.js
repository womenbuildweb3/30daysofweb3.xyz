import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../components/Layout";
import Sponsors from "../components/Sponsors";
import Partners from "../components/Partners";

export default function Accelerator() {
  const metaTitle = "Accelerator | 30 Days of Web3";
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
            WBW3 Presents:{" "}
            <span className="sm:block text-royal-600">BUIDL Accelerator</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-slate-700 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Deploying $130K to indie projects led by women and non-binary
            engineering teams.
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
          </div>
        </div>
        <div className="mx-auto max-w-2xl text-xl text-slate-700">
          <p>
            The Buidl Accelerator aims to support projects where 51% or more of
            the technical team are women and non-binary people. This
            no-strings-attached accelerator will provide funding starting at
            $5K, and up to $30K per team, distributed as they meet self-defined
            milestones. Our goal is to help teams get off the ground, and put
            money in their pockets for life&apos;s expenses, so they can focus
            on shipping. This 3-month accelerator is open to teams and projects
            that have not raised significant VC funding. Projects can be new or
            existing. There are two ways to apply:
            <p className="py-4">
              1. Complete 30 Days of Web3 - Building Fullstack Dapps{" "}
            </p>
            <p>2. Show us an open-source project your team has worked on.</p>
          </p>
        </div>
        <div className="py-12 sm:py-16">
          <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Big thank you to our sponsors
          </h2>
          <p className="mt-4 text-center mx-auto max-w-2xl text-xl text-slate-700 mb-8 sm:mb-12">
            Our treasury is funded by work done by the DAO over the last few
            months. Staying true to our mission of supporting the most talented
            women and non-binary engineers in the space, deploying this capital
            to talented teams is one of the core pillars of our org.
          </p>
          <Sponsors />
        </div>
      </div>
    </Layout>
  );
}
