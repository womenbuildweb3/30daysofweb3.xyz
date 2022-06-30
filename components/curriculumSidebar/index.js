import { useEffect, useState } from "react";
import Languages from "../Languages";
import Logo from "../Logo";
import ListItem from "./ListItem";
import ListGroup from "./ListGroup";
import styles from "../../styles/Home.module.css";

export default function CurricSideBar({ navigation }) {
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
    <div
      className={`flex flex-col flex-grow pb-4 overflow-y-auto border-r border-gray ${styles.sidebarBlur}`}
    >
      <div className="flex items-center flex-shrink-0 px-4 py-5">
        <Logo preferedColorScheme={preferedColorScheme} />
      </div>
      <div className="mt-5 flex-grow flex flex-col">
        <nav className="flex-1 px-2 space-y-1" aria-label="Sidebar">
          {navigation?.map((item, index) =>
            !item.children ? (
              <ListItem item={item} key={index} />
            ) : (
              <ListGroup item={item} key={index} />
            )
          )}
        </nav>
        <Languages />
      </div>
    </div>
  );
}
