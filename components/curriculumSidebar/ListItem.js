import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ListItem({ item }) {
  const router = useRouter();
  const selected = item.href.indexOf(router.asPath) > -1;

  return (
    <>
      <a
        href={item.href}
        className={classNames(
          selected
            ? `${styles.sidebarActiveLesson} text-slate-900 bg-gradient-to-l from-sky-100 to-pink-100 font-extrabold`
            : "text-slate-600 font-medium",
          "group w-full flex items-center pl-10 pr-2 py-2 text-sm rounded-md hover:bg-slate-100 hover:text-slate-900"
        )}
      >
        {item.title}
      </a>
    </>
  );
}
