// import Languages from "../Languages";
import Logo from "../Logo";
import ListItem from "./ListItem";
import ListGroup from "./ListGroup";
import styles from "../../styles/Home.module.css";
import Link from "next/link"

export default function CurricSideBar({ navigation, locale }) {

  return (
    <div
      className={`hidden sm:flex flex-col flex-grow pb-4 overflow-y-auto border-r border-gray ${styles.sidebarBlur}`}
    >
      <div className="flex items-center flex-shrink-0 px-4 py-5">
        <Logo />
      </div>
      <div className="mt-5 flex-grow flex flex-col">
        <nav className="flex-1 px-2 space-y-1" aria-label="Sidebar">
          {navigation?.map((item, index) =>
            !item.children ? (
              <ListItem item={item} key={index} />
            ) : (
              <ListGroup item={item} index={index} key={index} />
            )
          )}
        </nav>
        {/* <Languages navigation={navigation}/> */}
        {locale && locale === "en" && (
          <div className="flex justify-center border border-blue-600">
          <Link locale="es" href="/es/curriculum/1-introducción/0-bienvenidos">Español</Link>
          </div>
        )}

        {locale && locale === "es" && (
          <div className="flex justify-center border border-blue-600">
          <Link locale="en" href="/curriculum/1-getting-started/0-overview">English</Link>
          </div>
        )}
        
      </div>
    </div>
  );
}
