import React from "react";
import CurricSidebar from "./CurricSideBar";
import styles from "../styles/Home.module.css";

const CurricLayout = ({ children, navigation }) => {
  return (
    <div className="relative min-h-screen h-screen max-h-screen overflow-hidden">
      <div className="flex h-full">
        <div
          style={{ backdropFilter: "blur(1px)" }}
          className={`flex flex-col h-full sticky overflow-auto ${styles.sidebarWidth}`}
        >
          <CurricSidebar navigation={navigation} />
          <div
            className={`${styles.gradientBG} ${
              styles.sidebarWidth
            } ${"light:hidden hidden sm:block fixed top-0 -z-10 bg-cover bg-no-repeat w-full max-w-full h-screen blur-xl "}`}
          />
          <div
            className={`${styles.gradientBG} ${
              styles.sidebarWidth
            } ${"light:hidden block sm:hidden fixed top-0 -z-10 bg-cover bg-no-repeat w-full max-w-full h-screen blur-xl"}`}
          />
          <div
            className={`${styles.gradientBG} ${
              styles.sidebarWidth
            } ${"light:hidden fixed top-0 -z-10 bg-cover bg-no-repeat w-full max-w-full h-screen blur-xl "}`}
          />
        </div>

        <div className="w-full overflow-auto">{children}</div>
      </div>
    </div>
  );
};

export default CurricLayout;
