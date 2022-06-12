import { useEffect, useState } from "react";
import Head from "next/head";
import CurricSidebar from "../../components/CurricSideBar";
import CurricLayout from "../../components/CurricLayout";

export default function Introduction() {
  const [preferedColorScheme, setPreferedColorScheme] = useState("light");

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
      <CurricSidebar/>
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