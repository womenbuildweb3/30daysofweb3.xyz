import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import Head from "next/head";
import Companies from "../components/Companies";


export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About | Women Builders Collective</title>
        <meta name="description" content="Providing education, oppportunities, and funding to a new wave of web3 builders" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="">
        <h1 className="lt-pink-text">
          About
        </h1>
        <p className="">
          Who we are
        </p>
      </main>
    </div>
  );
}
