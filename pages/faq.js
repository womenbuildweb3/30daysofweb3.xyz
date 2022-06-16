import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Head from "next/head";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

const items = [
  {
    id: 1,
    question: "What is the time commitment for this challenge?",
    answer:
      "This course is fully-online and asynchrnous. You may participate at any pace and time commitment, but it was designed to take no more than 45mins per day.",
  },
  {
    id: 4,
    question: "What will I learn in this course?",
    answer:
      "You'll learn how to build a dapp, end-to-end. You'll write the smart contract, the front end, and everything in between. Check out the home page for a more detailed overview of the content.",
  },
  {
    id: 5,
    question: "Can I participate if I'm a beginner?",
    answer:
      "Yes! This course is less focused on programming specifics and fundamentals, and more focused on helping developers build a mental model and an architectural reference for building a dapp. We will give you the code for all of the sections, and although it will be helpful, it is not required to have deep programming expereince.",
  },
  {
    id: 2,
    question: "How can I get support if I get stuck?",
    answer: "Our team will be available to answer questions via discord",
  },
  {
    id: 3,
    question: "Will the workshops be recorded?",
    answer: "Yes. Workshops will be recorded and posted here for viewing",
  },
  {
    id: 6,
    question: "What comes next?",
    answer:
      "Women and nonbinary people who successfuly complete the challenge and meet a standard of completion will be invited to join the DAO and participate in the second phase of this program. In this phase, builders can request money from our treasury to build *anything*",
  },
  {
    id: 7,
    question: "Can I participate if I'm a man?",
    answer:
      "Yes! 30 Days of Web3 is a public good that is available to anyone, anytime. The content will be open-sourced, allowing any other groups to fork it and customize their curriculum.",
  },
  {
    id: 8,
    question: "Why do I have to give my wallet address?",
    answer:
      "We'll be awarding on-chain, proof of knowlegde tokens and will need your wallet address to send them to you.",
  },
  // More items...
];

export default function Faq() {
  // const [preferedColorScheme, setPreferedColorScheme] = useState("light");

  // useEffect(() => {
  //   if (
  //     window.matchMedia &&
  //     window.matchMedia("(prefers-color-scheme: dark)").matches
  //   ) {
  //     setPreferedColorScheme("dark");
  //   }
  // }, []);

  return (
    <Layout>
      <Head>
        <title>30 Days of Web3</title>
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
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-8">
        <h1 className="text-center text-2xl pt-3 font-poppins-bold">
          30 Days of Web3 - FAQ
        </h1>
        <ul role="list" className="divide-y divide-gray-200">
          {items.map((item) => (
            <li key={item.id} className="py-4">
              <h1 className="pt-6 pb-2 font-poppins-semi-bold">
                {item.question}
              </h1>
              <h2>{item.answer}</h2>
            </li>
          ))}
        </ul>
      </div>
      <Footer></Footer>
    </Layout>
  );
}
