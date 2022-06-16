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
// import getCoursePaths from "../../../utils/getCoursePaths";
import getCourseNavigationTree from "../../../utils/getCourseNavigationTree";

export default function Course({ curricData, id, paths, navigationTree }) {
  const [preferedColorScheme, setPreferedColorScheme] = useState("light");
  console.log(navigationTree, paths);

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
      <CurricSidebar curricData={curricData} id={id} paths={paths} />
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
    paths: paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const category = params.category;
  console.log(category);
  const curricData = getCurricContent(category, "0-overview");
  const paths = getAllPostIds();
  const navigationTree = getCourseNavigationTree();
  return {
    redirect: {
      permanent: false,
      destination: `${category}/0-overview`,
    },
    props: {
      curricData,
      paths,
      navigationTree,
    },
  };
}
