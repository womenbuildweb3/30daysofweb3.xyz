import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Women Build Web3</title>
        <meta name="description" content="Providing education, oppportunities, and funding to a new wave of web3 builders" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main>
          <header className={styles.homeHeroContainer}>
            <h1 className={styles.homeHeroTitle}>
              LEARN.
            </h1>
            <h1 className={styles.homeHeroTitle}>
              BUILD.
            </h1>
            <h1 className={styles.homeHeroTitle}>
              EARN.
            </h1>
          
          <Link href="/contact" passHref>
            <button className={styles.contactButton}>
              Contact Us
            </button>
          </Link>
          <Link href="/blog" passHref>
            <button className={styles.blogButton}>
              Read Our Blog
            </button>
          </Link>
        </header>
        
        <section className={styles.homeSection}>
          <h2>What We Do</h2>
          <ul className={styles.homeSkillsList}>
            <li className={styles.homeSkill}>Developer Relations</li>
            <li className={styles.homeSkill}>Smart Contracts</li>
            <li className={styles.homeSkill}>Frontend Development</li>
            <li className={styles.homeSkill}>Content Creation</li>
            <li className={styles.homeSkill}>Hackathons</li>
            <li className={styles.homeSkill}>Public Goods</li>
          </ul>
        </section>

      </main>
      <Footer/>
    </div>
  );
}

