// import styles from "../styles/About.module.css";
import Navbar from "../components/Navbar";
// import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import Head from "next/head";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Head>
        <title>About | Women Build Web3</title>
        <meta
          name="description"
          content="Providing education, oppportunities, and funding to a new wave of web3 builders"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <h1>About</h1>
        <p>
          Women Build Web3 (WBW3) is a global collective of women and non-binary
          developers learning about and working in web3. We are frontend,
          backend, and full-stack engineers, designers, content creators, and
          more. Women Build Web3 (WBW3) is a global collective of women and
          non-binary developers learning and building in web3 that was born from
          Developer Dao. We continue to collaborate closely with Developer DAO
          as a sister DAO and work cross-team on all initiatives. Our community
          today is composed of software engineers (frontend, backend,
          full-stack, and blockchain), designers (visual, UX/UI, product),
          content creators, technical writers, product and project managers, and
          founders with wide-ranging experiences in tech and web3. We span 8
          countries, 16 cities, and 9 timezones and counting.
        </p>
        <br />
        <p>
          Our focus is on finding and creating opportunities for women and
          non-binary people to master their craft, advance their careers, and
          shape the web3 ecosystem. We bring together women and nonbinary
          developers in an environment that encourages and supports ambitious,
          sustainable, and accountable learning and growth. We drive personal
          and professional development initiatives such as workshops,
          hackathons, networking events, and study groups and outline
          predictable outcomes for active participation and contribution. We
          help members identify and engage with opportunities to master their
          craft and shape their careers. Ultimately, we are cultivating a global
          talent incubator and network of women and non-binary people who will
          build together at new frontiers of technology.
        </p>
        <br />
        <Link
          href="https://womenbuildweb3.hashnode.dev/whitepaper"
          passHref={true}
        >
          <button className="font-black mx-11 py-3 font-work-sans text-xl px-14 w-100 border border-primary text-primary rounded-lg bg-secondaryText hover:bg-primary hover:text-secondaryText ">
            View WhitePaper
          </button>
        </Link>
      </main>
      <Footer />
    </>
  );
}
