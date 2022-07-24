// import React, { useEffect, useState } from "react";
import CurricSidebar from "./curriculumSidebar/index";
import styles from "../styles/Home.module.css";

export default function CurricLayout({ children, navigation, locale }) {

  return (
    <div className="relative min-h-screen h-screen max-h-screen overflow-hidden">
      <div className="flex h-full">
        <div
          style={{ backdropFilter: "blur(1px)" }}
          className={`flex flex-col h-full sticky overflow-auto ${styles.sidebarWidth}`}
        >
          <CurricSidebar navigation={navigation} locale={locale} />
        </div>
        <div className="w-full overflow-auto">{children}</div>
      </div>
    </div>
  );
}
