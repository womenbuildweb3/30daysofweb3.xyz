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
        <object type="image/svg+xml" data="network.svg" className={styles.networkSVG}/>
        <object type="image/svg+xml" data="woman.svg" className={styles.homeSVG} />
        <div className={styles.yellowCircle}>
          <Image alt="WBW3 Logo" src="/WBW3-logo.png" layout="fill" className={styles.WBW3Logo}/>
       </div>
        <Navbar absolute="true" />
        <header className={styles.homeHeroContainer}>
          <div className={styles.homeHeroText}>
            <h1 className="font-work-sans text-primary font-[600] text-[72px]">
              LEARN.
            </h1>
            <h1 className="font-work-sans mb-4 px-4 pt-4 pb-7 text-primary font-[600] text-[72px]">
              BUILD. EARN.
            </h1>

            <Link href="/contact" passHref>            
              <button className={styles.contactUs}>Contact Us</button>
            </Link>

          </div>
        </header>
      </div>
     
      <main>
        <section className={styles.homeSection}>
          <ul className={styles.goalsContainer}>

            <li className={styles.goalContainer}>
              <div className="font-black font-work-sans p-4 m-4 text-5xl text-primary">1</div>
              <div className="font-black font-work-sans p-4 m-4 text-5xl text-white ">DAO</div>
            </li>
            <li className={styles.goalContainer}>
              <div className="font-black font-work-sans p-4 m-4 text-5xl text-primary">10</div>
              <div className="font-black font-work-sans p-4 m-4 text-5xl text-white">Hackathons</div>

            </li>
            <li className={styles.goalContainer}>
              <div className="font-black font-work-sans p-4 m-4 text-5xl text-primary">100</div>
              <div className="font-black font-work-sans p-4 m-4 text-5xl text-white">Projects</div>
            </li>

            <li className={styles.goalContainer}>
              <div className="font-black font-work-sans p-4 m-4 text-5xl text-primary">1000</div>
              <div className="font-black font-work-sans p-4 m-4 text-5xl text-white">Devs</div>

            </li>
          </ul>
        </section>

        <section className={styles.homeSection}>

          <h2 className="font-black font-work-sans p-4 m-4 text-5xl text-primary">What We Do</h2>

          <ul className={styles.homeSkillsList}>
            <li className="font-black font-work-sans p-4 m-4 text-2xl text-white">Developer Relations</li>
            <li className="font-black font-work-sans p-4 m-4 text-2xl text-white">Smart Contracts</li>
            <li className="font-black font-work-sans p-4 m-4 text-2xl text-white">Frontend Development</li>
            <li className="font-black font-work-sans p-4 m-4 text-2xl text-white">Content Creation</li>
            <li className="font-black font-work-sans p-4 m-4 text-2xl text-white">Hackathons</li>
            <li className="font-black font-work-sans p-4 m-4 text-2xl text-white">Public Goods</li>
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

