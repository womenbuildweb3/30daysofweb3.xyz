import { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Footer from "../../../components/Footer";
import Layout from "../../../components/Layout";
import CurricSidebar from "../../../components/CurricSideBar";
import CurricLayout from "../../../components/CurricLayout";
import getCurricContent from "../../../utils/curriculum";
import getAllPostIds from "../../../utils/getAllPostIds";

export default function Course({ curricData, paths: pathValues }) {
  const [preferedColorScheme, setPreferedColorScheme] = useState("light");
  console.log(pathValues);

  const { paths } = pathValues;

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setPreferedColorScheme("dark");
    }
  }, []);

  return (
    <CurricLayout>
      <CurricSidebar curricData={curricData} paths={paths} />
      <Head>
        <title>30 Days of Web3 | Curriculum </title>
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
    </CurricLayout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths: paths.paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const category = params.category;
  const subCategory = params.subCategory;
  const curricData = getCurricContent(category, subCategory);
  const paths = getAllPostIds();
  return {
    props: {
      curricData,
      paths,
    },
  };
}
