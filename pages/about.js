// import styles from "../styles/About.module.css";
import Navbar from "../components/Navbar";
// import { SocialIcon } from "react-social-icons";
// import Link from "next/link";
import Head from "next/head";
import Footer from "../components/Footer";


export default function About() {
  return (
    <>
      <Head>
        <title>About | Women Build Web3</title>
        <meta name="description" content="Providing education, oppportunities, and funding to a new wave of web3 builders" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <h1>About</h1>
        <p>
          Women Build Web3 (WBW3) is a global collective of women and non-binary developers learning about and working in web3.
          We are frontend, backend, and full-stack engineers, designers, content creators, and more.
        </p>
        <br/>
        <p>
          Our focus is on finding and creating opportunities for women and non-binary people to master their craft, advance their careers, and shape the web3 ecosystem.
        </p>
      </main>
      <Footer/>
    </>
  );
}
