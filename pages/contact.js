import Navbar from "../components/Navbar";
import styles from "../styles/Contact.module.css";
import { SparklesIcon } from "@heroicons/react/outline";
import { useState } from "react";
import Head from "next/head";
import Footer from "../components/Footer";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [discordHandle, setDiscordHandle] = useState("");
  const [twitterHandle, setTwitterHandle] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      embeds: [
        {
          title: "New Form Submission",
          description: "Please be careful opening links.",
          color: null,
          fields: [
            {
              name: "Name",
              value: firstName
            },
            {
              name: "Discord Handle",
              value: discordHandle
            },
            {
              name: "Social Handle",
              value: twitterHandle
            },
            {
              name: "Subject",
              value: subject
            },
            {
              name: "Message",
              value: message
            }
          ]
        }
      ]
    }
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
      // check response, if success is false, dont take them to success page
    } catch (error) {
      console.log("there was an error submitting", error);
    }
  };

  const resetForm = () => {
    setFirstName("");
    setTwitterHandle("");
    setDiscordHandle("");
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
            className={styles.contactForm}
          >
            <div >
              <label
                htmlFor="first-name"
              >
                Name (or nickname)
              </label>
              <div>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                className={styles.contactFormInput}
                required
                />
              </div>
          </div>
        
          <div>
              <label
                htmlFor="discordHandle"
              >
                Discord Handle
              </label>
              <div>
                <input
                  id="discordHandle"
                  name="discordHandle"
                  type="text"
                  onChange={(e) => setDiscordHandle(e.target.value)}
                value={discordHandle}
                className={styles.contactFormInput}
                required
                />
              </div>
          </div>

          <div>
          <div className={styles.labelContainer}>
              <label
                htmlFor="twitterHandle"
              >
                Social Handle (Twitter, Github, etc.)
              </label>
              <div>(optional)</div>
              </div>
              <div>
                <input
                  id="twitterHandle"
                  name="twitterHandle"
                  type="text"
                  onChange={(e) => setTwitterHandle(e.target.value)}
                value={twitterHandle}
                className={styles.contactFormInput}
                />
              </div>
          </div>

            <div>
              <label
                htmlFor="subject"
              >
                Subject
              </label>
              <div>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  onChange={(e) => setSubject(e.target.value)}
                value={subject}
                className={styles.contactFormInput}
                required
                />
              </div>
            </div>
            <div>
              <div className={styles.labelContainer}>
                <label
                  htmlFor="message"
                >
                  Message
                </label>
              <div className={styles.messageMax}>
                  Max. 500 characters
                </div>
              </div>
              <div>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  onChange={(e) => setMessage(e.target.value)}
                value={message}
                className={styles.contactFormInput}
                aria-describedby="message-max"
                placeholder="Please tell us a little about who you are"
                required
                />
              </div>
            </div>
            <div className={styles.submitButtonContainer}>
              <button
              type="submit"
              className={styles.submitButton}
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
