import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
      <Footer/>
    </div>
  );
}

