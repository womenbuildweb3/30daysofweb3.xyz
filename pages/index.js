import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import TikTok from "../components/TikTok";
import Link from "next/link";
import { SparklesIcon } from "@heroicons/react/outline";
import { SocialIcon } from "react-social-icons";
import ReactPlayer from "react-player";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Women Builders Collective</title>
        <meta name="description" content="Providing education, oppportunities, and funding to a new wave of web3 builders" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main>

          <header className={styles.homeHeroContainer}>
              <h1 className={styles.homeHeroTitle}>
                Women<br/>Builders<br/>Collective
              </h1>
              <p className={styles.homeHeroSubtitle}>
                Unlocking a new wave of builders around the globe by providing education, funding and opportunities.
              </p>
        </header>

        

      </main>
    </div>
  );
}

