import React from "react";
import Sidebar from "./Sidebar";
import styles from "../styles/Home.module.css";

const CourseLayout = ({ children }) => {
  return (
    <div className="relative">
      <div className="">
        <Sidebar />
        {children}
      </div>
      <div
        className={`${
          styles.gradientBG
        } ${"light:hidden hidden sm:block fixed top-0 -z-10 bg-cover bg-no-repeat w-screen h-screen blur-xl "}`}
      />
      <div
        className={`${
          styles.gradientBG
        } ${"light:hidden block sm:hidden fixed top-0 -z-10 bg-cover bg-no-repeat w-screen h-screen blur-xl"}`}
      />
      <div
        className={`${
          styles.gradientBG
        } ${"light:hidden fixed top-0 -z-10 bg-cover bg-no-repeat w-screen h-screen blur-xl "}`}
      />
    </div>
  );
};

export default CourseLayout;
