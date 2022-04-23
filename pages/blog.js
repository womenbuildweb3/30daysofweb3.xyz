// import { gql } from "@apollo/client";
// import client from "../apollo-client";
// import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import Link from "next/link";
import Head from "next/head";

export default function Blog({ myData }) {
  return (
    <div className="mt-4 mx-16">
      <Navbar />
      <Head>
        <title>Blog | Women Build Web3</title>
        <meta
          name="description"
          content="Providing education, oppportunities, and funding to a new wave of web3 builders"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Footer/>
    </div>
  );
}
// export async function getStaticProps() {
//   const { data } = await client.query({
//     query: gql`

//     `,
//   });
//   return {
//     props: {
//       myData: data.user,
//     },
//   };
// }
