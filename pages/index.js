import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Women Build Web3</title>
        <meta name="description" content="Providing education, oppportunities, and funding to a new wave of web3 builders" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.homeSVGContainer}>
        <object type="image/svg+xml" data="woman.svg" className={styles.homeSVG} />
        <div className={styles.yellowCircle}>
          <Image alt="WBW3 Logo" src="/WBW3-logo.png" layout="fill" className={styles.WBW3Logo}/>
       </div>
        <Navbar absolute="true" />
        <header className={styles.homeHeroContainer}>
          <div className={styles.homeHeroText}>
            <h1 className={styles.homeHeroTitle}>
              LEARN.
            </h1>
            <h1 className={styles.homeHeroTitle}>
              BUILD. EARN.
            </h1>
          
          <Link href="/contact" passHref>
            <button className={styles.contactButton}>
              Contact Us
            </button>
          </Link>
          </div>
        </header>
      </div>
     

      <main>
       
        <section className={styles.homeSection}>
          <ul className={styles.goalsContainer}>
            <li style={{marginBottom: "5rem"}}>
              <div className={styles.goalsNumber}>1</div>
              <div className={styles.goalsName}>DAO</div>
            </li>
            <li style={{marginBottom: "5rem"}}>
              <div className={styles.goalsNumber}>10</div>
              <div className={styles.goalsName}>Hackathons</div>
            </li>
            <li>
              <div className={styles.goalsNumber}>100</div>
              <div className={styles.goalsName}>Projects</div>
            </li>
            <li>
              <div className={styles.goalsNumber}>1000</div>
              <div className={styles.goalsName}>Devs</div>
            </li>
          </ul>
        </section>

        <section className={styles.homeSection}>
          <h2 className={styles.homeCallout}>Unlocking the potential of women and non-binary builders in web3</h2>
        </section>

        <section className={styles.homeSection}>
          <h2>#30daysofweb3</h2>
          <div className={styles.homeInfoContainer}>
            <p>Want to participate? Join our 30 days of web3 challenge on Twitter using the #30daysofweb3 hashtag.</p>
            <Link href="/blog" passHref>
              <button className={styles.blogButton}>Read Our Blog</button>
            </Link>
          </div>
        </section>

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

        <section className={styles.homeSection}>
          <h2>Sponsors</h2>
          <div className={styles.sponsorsContainer}>
            <div className={styles.sponsor}></div>
            <div className={styles.sponsor}></div>
            <div className={styles.sponsor}></div>
          </div>
        </section>

        <section className={styles.homeSection}>
          <h2>Work With Us</h2>
          <div className={styles.homeInfoContainer}>
            <p>Hire from a growing team of top women and non-binary developers and engineers passionate about web3.</p>
            <Link href="/contact" passHref>
              <button className={styles.blogButton}>Contact Us</button>
            </Link>
          </div>
        </section>

      </main>
      <Footer/>
    </div>
  );
}

