import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Head from "next/head";
import Link from "next/link";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [discordHandle, setDiscordHandle] = useState("");
  const [twitterHandle, setTwitterHandle] = useState("");
  const [walletAddress, setWalletAddress] = useState("")
  const [submitted, setSubmitted] = useState(false);
  const [preferedColorScheme, setPreferedColorScheme] = useState("light");

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setPreferedColorScheme("dark");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      content: "",
      embeds: [
        {
          title: "New Form Submission",
          description: "Please be careful opening links",
          color: null,
          fields: [
            {
              name: "Name",
              value: firstName,
            },
            {
              name: "Email",
              value: email ? email : "-",
            },
            {
              name: "Discord Handle",
              value: discordHandle ? discordHandle : "-",
            },
            {
              name: "Twitter Handle",
              value: twitterHandle ? twitterHandle : "-",
            },
            {
              name: "Wallet address (to recieve proof of knowledge tokens)",
              value: walletAddress ? walletAddress : "-"
            }

          ],
        },
      ],
    };

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (response.status !== 200) {
        alert("Oops! Something went wrong. Please refresh and try again.");
      } else {
        // console.log("form submitted successfully !!!");
        setSubmitted(true);
      }
      // check response, if success is false, dont take them to success page
    } catch (error) {
      alert(
        `Oops! Something went wrong. Please refresh and try again. Error ${error}`
      );
    }
  };

  return (
    <Layout>
      <Head>
        <title>Contact | Women Build Web3</title>
        <meta
          name="description"
          content="Contact WBW3. Providing education, oppportunities, and funding to a new wave of web3 builders"
        />
        {preferedColorScheme === "light" && (
          <link rel="icon" href="/favicon.ico" />
        )}
        {preferedColorScheme === "dark" && (
          <link rel="icon" href="/favicon-white.ico" />
        )}
      </Head>
      <Navbar preferedColorScheme={preferedColorScheme} />

      <main className="md:grid md:grid-cols-2 md:gap-12 md:mx-auto md:max-w-5xl">
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdo5HfpvWsZcG2vFuVIAULm57tXgqQQixpi9bN0EhuSnbKQSg/viewform?embedded=true" width="900" height="1525" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        {/* <header className="mb-8">
          <h1 className="mt-8 mb-4 font-poppins-bold text-3xl sm:text-5xl">
            Get in touch
          </h1>
          <p className="mb-4">
            Register for 30 Days of Web3! We have lots of goodies and prizes available for builders as they progress through the curriculum.
          </p>
          <p className="mb-4">
            This challenge is open to all skill levels and is meant to be a foundational course to help developers build out an architectural reference for building a dapp.
            For more questions, check out our <Link href="/faq"><a> FAQ section </a></Link>
          </p>
        </header>

        {!submitted && (
          <form
            action="#"
            method="POST"
            onSubmit={(e) => handleSubmit(e)}
            className="sm:mt-8"
          >
            <label className="font-poppins-semi-bold" htmlFor="first-name">
              Name (or nickname)*
            </label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              className="bg-transparent dark:border-white px-4 mt-4 mb-8 w-full max-w-s h-16 border border-black border-solid rounded-lg"
              required
              aria-required="true"
            />

            <label className="font-poppins-semi-bold" htmlFor="discordHandle">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="bg-transparent dark:border-white px-4 mt-4 mb-8 w-full max-w-s h-16 border border-black border-solid rounded-lg"
            />

            <label className="font-poppins-semi-bold" htmlFor="discordHandle">
              Discord Handle
            </label>
            <input
              id="discordHandle"
              name="discordHandle"
              type="text"
              onChange={(e) => setDiscordHandle(e.target.value)}
              value={discordHandle}
              className="bg-transparent dark:border-white px-4 mt-4 mb-8 w-full max-w-s h-16 border border-black border-solid rounded-lg"
            />

            <label className="font-poppins-semi-bold" htmlFor="twitterHandle">
              Social Handle (e.g., Twitter, Github, etc)
            </label>
            <input
              id="twitterHandle"
              name="twitterHandle"
              type="text"
              onChange={(e) => setTwitterHandle(e.target.value)}
              value={twitterHandle}
              className="bg-transparent dark:border-white px-4 mt-4 mb-8 w-full max-w-s h-16 border border-black border-solid rounded-lg"
            />

            <label className="font-poppins-semi-bold" htmlFor="subject">
              Subject*
            </label>
            <input
              type="text"
              name="wallet"
              id="wallet"
              onChange={(e) => setWalletAddress(e.target.value)}
              value={walletAddress}
              className="bg-transparent dark:border-white px-4 mt-4 mb-8 w-full max-w-s h-16 border border-black border-solid rounded-lg"
              required
              aria-required="true"
            />
            <div className="flex justify-end">
              <button
                type="submit"
                className="cursor-pointer dark:hover:text-black dark:hover:bg-white hover:text-white hover:bg-black border border-black dark:border-white border-solid rounded-full text-base md:text-lg lg:text-xl px-4 py-2"
              >
                Submit
              </button>
            </div>
          </form>
        )}

        {submitted && (
          <div className="mt-20 text-center">
            Your message was succesflly sent! We will do our best to get back to
            you soon.
          </div>
        )} */}
      </main>
      <Footer preferedColorScheme={preferedColorScheme} />
    </Layout>
  );
}
