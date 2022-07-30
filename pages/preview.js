import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../components/Layout";
import Sponsors from "../components/Sponsors";
import Partners from "../components/Partners";

export default function Preview() {
  const metaTitle = "Preview | 30 Days of Web3";
  const metaDescription =
    "30 Days of Web3 is the ultimate guide to building on Ethereum. Ship a full-stack dapp leveraging must-know web3 tools, protocols, and frameworks.";
  const metaUrl = "https://www.30daysofweb3.xyz";

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
      <div className="my-16 mx-auto max-w-7xl px-4 sm:my-24">
        <h1 className="text-center text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl mb-12">
          Build a full-stack dapp with{" "}
          <span className="sm:block text-royal-600">30 Days of Web3</span>
        </h1>
        <div className="mx-auto max-w-2xl text-xl text-slate-700">
          <p className="mb-12">
            Throughout our curriculum, you will be building Web3RSVP, an event
            platform like Eventbrite that enables users to discover and RSVP to
            events and create and manage their own events. You will also learn
            to use must-know web3 tools, protocols, and frameworks. Here&apos;s
            a preview of some topics our curriculum will cover:
          </p>
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <span className="font-bold">Getting Started</span>
                <ul className="list-disc space-y-4 pl-8">
                  <li>Intro to Web3</li>
                  <li>Intro to Blockchain</li>
                  <li>Intro to Smart Contracts</li>
                  <li>Intro to Wallets</li>
                  <li>Setup Your Wallet</li>
                </ul>
              </div>
              <div className="space-y-4">
                <span className="font-bold">Building on Ethereum</span>
                <ul className="list-disc space-y-4 pl-8">
                  <li>Client Server Architecture</li>
                  <li>Intro to Polygon</li>
                  <li>Intro to Solidity</li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <span className="font-bold">Writing Your Smart Contract</span>
                <ul className="list-disc space-y-4 pl-8">
                  <li>Defining Our Data Structure</li>
                  <li>Defining Functions</li>
                  <li>Custom Solidity Events</li>
                  <li>Writing a Test Script</li>
                </ul>
              </div>
              <div className="space-y-4">
                <span className="font-bold">Deploying Your Smart Contract</span>
                <ul className="list-disc space-y-4 pl-8">
                  <li>Deploying with Infura</li>
                  <li>Creating a Deploy Script</li>
                  <li>Verifying Your Contract</li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <span className="font-bold">Creating Your Subgraph</span>
                <ul className="list-disc space-y-4 pl-8">
                  <li>Intro to The Graph</li>
                  <li>Structure of a Subgraph</li>
                  <li>Deploying Your Subgraph</li>
                </ul>
              </div>
              <div className="space-y-4">
                <span className="font-bold">Building Your Frontend</span>
                <ul className="list-disc space-y-4 pl-8">
                  <li>Intro to RainbowKit</li>
                  <li>Add Wallet Connection</li>
                  <li>Intro to Web3.Storage</li>
                  <li>Using Decentralized Storage</li>
                  <li>Intro to Ethers.js</li>
                  <li>Calling Your Contract</li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <span className="font-bold">Querying The Graph</span>
                <ul className="list-disc space-y-4 pl-8">
                  <li>The Graph Playground</li>
                  <li>Querying Your Subgraph</li>
                  <li>Fetching Event Details</li>
                  <li>Displaying Event Details</li>
                </ul>
              </div>
              <div className="space-y-4">
                <span className="font-bold">Wrapping Up</span>
                <ul className="list-disc space-y-4 pl-8">
                <li>Social Graphs with Lens</li>
                  <li>Host Your Code With Radicle</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="mt-12">
            While our curriculum will be hosted online free for anyone to
            access, our learning cohort has limited spots. Be sure to register
            to join our Discord server where you&apos;ll be able to ask
            questions, attend live workshops, connect with speakers, earn kudos,
            participate in prize raffles, and more. Register below to join the
            first learning cohort in our Discord server.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a
                href="https://forms.gle/XHDy3Yvasqocavas9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-royal-600 hover:bg-royal-700 md:py-4 md:text-lg md:px-10"
              >
                Register
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
