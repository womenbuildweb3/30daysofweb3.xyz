/* This example requires Tailwind CSS v2.0+ */
import { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { useRouter } from "next/router";
import Logo from "./Logo";

import styles from "../styles/Home.module.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ActivateCurrentLesson(navigation) {
  const router = useRouter();
  const { category, subCategory } = router.query;

  let _navigation = navigation.map((_category) => {
    if (category == _category.name.replace(/\.md$/, "")) {
      let currentCategory = _category;
      let children = currentCategory.children.map((_subcategory) =>
        subCategory == _subcategory.name.replace(/\.md$/, "")
          ? { ..._subcategory, current: true }
          : { ..._subcategory, current: false }
      );
      return { ..._category, children, current: true };
    } else {
      return { ..._category, current: false };
    }
  });
  return _navigation;
}

export default function Example({ navigation = [] }) {
  const activatedNavigation = ActivateCurrentLesson(navigation);
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
      className={`flex flex-col flex-grow pb-4 overflow-y-auto ${styles.sidebarBlur}`}
    >
      <div className="flex items-center flex-shrink-0 px-4 py-5">
        <Logo preferedColorScheme={preferedColorScheme} />
      </div>
      <div className="mt-5 flex-grow flex flex-col">
        <nav className="flex-1 px-2 space-y-1" aria-label="Sidebar">
          {activatedNavigation?.map((item) =>
            !item.children ? (
              <div key={item.name}>
                <a
                  href={item.href}
                  className={classNames(
                    item.current
                      ? `${styles.sidebarActiveLesson} text-white-900`
                      : "bg-white text-white-600 hover:bg-gray-50 hover:text-white-900",
                    "group w-full flex items-center pl-7 pr-2 py-2 text-sm font-medium rounded-md"
                  )}
                >
                  {item.title}
                </a>
              </div>
            ) : (
              <Disclosure
                as="div"
                key={item.name}
                className="space-y-1"
                defaultOpen={item.current}
              >
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={classNames(
                        item.current
                          ? `text-white-900 bg-gradient-to-l from-gray-300 to-purple-500 font-extrabold`
                          : "text-white-600 hover:bg-white-50 hover:text-white-900",
                        "group w-full flex items-center pr-2 py-2 text-left text-sm font-medium rounded-md focus:bg-gradient-to-l from-gray-300 to-purple-500"
                      )}
                    >
                      <svg
                        className={classNames(
                          open ? "text-white-500 rotate-90" : "text-white-300",
                          "mr-2 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150"
                        )}
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                      </svg>
                      {item.title}
                    </Disclosure.Button>
                    <Disclosure.Panel className="space-y-1">
                      {item.children.map((subItem) => (
                        <Disclosure.Button
                          key={subItem.name}
                          as="a"
                          href={subItem.href}
                          s
                          className={classNames(
                            subItem.current
                              ? `${styles.sidebarActiveLesson} text-white-900`
                              : "text-white-600 hover:bg-white-50 hover:text-white-900",
                            "group w-full flex items-center pl-10 pr-2 py-2 text-sm font-medium text-white-600 rounded-md hover:text-white-900 hover:bg-white-50"
                          )}
                        >
                          {subItem.title}
                        </Disclosure.Button>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            )
          )}
        </nav>
      </div>
    </div>
  );
}
