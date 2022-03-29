import Navbar from "../components/Navbar";
// import { Popover, Transition } from "@headlessui/react";
// import { MailIcon, MenuIcon, PhoneIcon, XIcon } from "@heroicons/react/outline";
import styles from "../styles/Home.module.css";
import { SparklesIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { useEffect } from "react";
import Head from "next/head";
import Footer from "../components/Footer";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log("firstName", firstName);
    console.log("email", email);
    console.log("subject", subject);
    console.log("message", message);
  }, [firstName, email, subject, message]);

  function handleCheckout(e) {
    e.preventDefault();
    console.log("this function is being called");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = { firstName, email, subject, message };
    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (response.status !== 200) {
        console.log("something went wrong");
        //set an error banner here
      } else {
        resetForm();
        console.log("form submitted successfully !!!");
        //set a success banner here
      }
      //check response, if success is false, dont take them to success page
    } catch (error) {
      console.log("there was an error submitting", error);
    }
  };

  const resetForm = () => {
    setFirstName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact | Women Build Web3</title>
        <meta
          name="description"
          content="Contact WBW3. Providing education, oppportunities, and funding to a new wave of web3 builders"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main>
        <header>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Get in touch
          </h1>
          <p className=" mt-6 text-xl text-white max-w-3xl">
            Want to hire us? We do all things Web3.
          </p>

          <ul className="text-gray-200 mt-6 text-xl max-w-3xl">
            <div className="flex flex-row">
              <SparklesIcon className="h-5 w-5 text-indigo-400 mt-1"></SparklesIcon>
              <li className="pl-2">Developer Relations</li>
            </div>
            <div className="flex flex-row">
              <SparklesIcon className="h-5 w-5 text-indigo-400 mt-1"></SparklesIcon>
              <li className="pl-2">Engineering</li>
            </div>
            <div className="flex flex-row">
              <SparklesIcon className="h-5 w-5 text-indigo-400 mt-1"></SparklesIcon>
              <li className="pl-2">Design</li>
            </div>
          </ul>
        </header>

          <form
            action="#"
            method="POST"
            onSubmit={(e) => handleSubmit(e)}
            className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
          >
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-medium"
              >
                Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                  className="bg-zinc-300 py-3 px-4 block w-full shadow-sm focus:ring-indigo-400 focus:border-indigo-400 border-warm-gray-300 rounded-md"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-400 border-indigo-400 border-warm-gray-300 rounded-md bg-zinc-300"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="subject"
                className="block text-sm font-medium"
              >
                Subject
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className="bg-zinc-300 py-3 px-4 block w-full shadow-sm focus:ring-indigo-400 border-indigo-400 border-warm-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="flex justify-between">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium"
                >
                  Message
                </label>
                <span id="message-max" className="text-sm">
                  Max. 500 characters
                </span>
              </div>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className="bg-zinc-300 py-3 px-4 block w-full shadow-sm focus:ring-indigo-400 border-indigo-400 border border-warm-gray-300 rounded-md"
                  aria-describedby="message-max"
                />
              </div>
            </div>
            <div className="sm:col-span-2 sm:flex sm:justify-end">
              <button
                type="submit"
                // onClick={() => handleCheckout}
                className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto"
              >
                Submit
              </button>
            </div>
          </form>
      </main>
      <Footer/>
    </div>
  );
}
