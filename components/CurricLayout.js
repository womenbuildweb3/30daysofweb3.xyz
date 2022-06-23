import React, { useEffect, useState } from "react";
import Head from "next/head";
import CurricSidebar from "./curriculumSidebar/index";
import styles from "../styles/Home.module.css";
import navigation from "../utils/navigation.json";

export default function CurricLayout({ children }) {
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
      <div className="relative min-h-screen h-screen max-h-screen overflow-hidden">
        <div className="flex h-full">
          <div
            style={{ backdropFilter: "blur(1px)" }}
            className={`flex flex-col h-full sticky overflow-auto ${styles.sidebarWidth}`}
          >
            <CurricSidebar navigation={navigation} />
          </div>
          <div className="w-full overflow-auto">{children}</div>
        </div>
      </div>
    </>
  );
}
