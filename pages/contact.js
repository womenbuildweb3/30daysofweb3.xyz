import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Head from "next/head";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [discordHandle, setDiscordHandle] = useState("");
  const [twitterHandle, setTwitterHandle] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
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
              name: "Social Handle",
              value: twitterHandle ? twitterHandle : "-",
            },
            {
              name: "Subject",
              value: subject,
            },
            {
              name: "Message",
              value: message,
            },
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
        console.log("form submitted successfully !!!");
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

      <main className="md:grid md:grid-cols-2 md:gap-8 md:mx-auto md:max-w-4xl">
        <header className="mb-8">
          <h1 className="mt-8 mb-4 font-poppins-bold text-3xl sm:text-5xl">
            Get in touch
          </h1>
          <p className="mb-4">
            For curious developers, we are opening up memberships once we build
            a solid foundation for our organization. In the meantime, say hi!
          </p>
          <p className="mb-4">
            For interested partners, we are looking to form long-term
            relationships with web3 organizations. Contact us for our
            sponsorship package.
          </p>
          <p className="mb-4">
            For prospective hirers, we focus on engineering, developer
            relations, and design in web3. Reach out to tap into our talent
            network.
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
              name="subject"
              id="subject"
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
              className="bg-transparent dark:border-white px-4 mt-4 mb-8 w-full max-w-s h-16 border border-black border-solid rounded-lg"
              required
              aria-required="true"
            />
            <label className="font-poppins-semi-bold" htmlFor="message">
              Message*
            </label>
            <textarea
              id="message"
              name="message"
              maxLength="500"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              className="placeholder:text-zinc-900 dark:placeholder:text-zinc-300 bg-transparent dark:border-white px-4 pt-4 mt-4 mb-8 w-full max-w-s h-72 border border-black border-solid rounded-lg"
              aria-describedby="message-max"
              placeholder="Kindly tell us a bit about yourself and your reason for contact"
              required
              aria-required="true"
            />
            <div className="flex justify-end">
              <button
                type="submit"
                className="cursor-pointer dark:hover:text-black dark:hover:bg-white hover:text-white hover:bg-black border border-black dark:border-white border-solid rounded-full text-xs sm:text-xl px-4 py-3"
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
        )}
      </main>
      <Footer preferedColorScheme={preferedColorScheme} />
    </Layout>
  );
}
