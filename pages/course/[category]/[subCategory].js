import { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import CurricLayout from "../../../components/CurricLayout";
import Sidebar from "../../../components/Sidebar";
import CurriculumContent from "../../../components/CurriculumContent";
import getCurricContent from "../../../utils/curriculum";
import getCoursePaths from "../../../utils/getCoursePaths";
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
    <>
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
      <CurricLayout navigation={navigationTree?.children}>
        {curricData && (
          <CurriculumContent curricData={curricData} id={id} paths={paths} />
        )}
      </CurricLayout>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getCoursePaths();
  return {
    paths: paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const category = params.category;
  const subCategory = params.subCategory;
  console.log(category);
  const curricData = getCurricContent(category, subCategory);
  const paths = getCoursePaths();
  const navigationTree = getCourseNavigationTree();
  return {
    props: {
      curricData,
      paths,
      navigationTree,
    },
  };
}
