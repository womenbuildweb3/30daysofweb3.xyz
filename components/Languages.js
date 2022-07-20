import { Fragment } from "react";
import setLanguage from "next-translate/setLanguage";
import { useRouter } from "next/router";
import { Menu, Transition } from "@headlessui/react";
import { TranslateIcon } from "@heroicons/react/outline";

import joinClassNames from "../utils/joinClassNames";

const languages = [
  { title: "English", value: "en" },
  { title: "Espanol", value: "es" },
];

export default function Languages({navigation}) {
  const { locale, query } = useRouter();
  // const { category, subCategory } = query
  // console.log("LANGUAGE NAV", navigation)

  // console.log("LANG CAT", category)
  // console.log("LANG SUBCAT", subCategory)
  // let catIndex
  // let subCatIndex
  // if(navigation){
  //   for(let i = 0; i < navigation.length; i++){
  //     if(navigation[i].name == category){
  //       console.log("THIS", navigation[i].name)
  //       catIndex = i;
  //       for(let a = 0; a < navigation[i].children.length; a++){
  //         console.log("SUB CAT", navigation[i].children[a].name)
  //         if(navigation[i].children[a].name == subCategory){
  //           console.log("MATCHES!", navigation[i].children[a].name)
  //           subCatIndex = a
  //           break
  //         }
  //       }
  //       break
  //     }
  //   }
  //   console.log("CAT INDEX", catIndex)
  //   console.log("SUBCAT INDEX", subCatIndex)
  // }

  let activeLanguage = languages.find((lang) => lang.value == locale);


  return (
    <>
      <Menu as="div" className="relative inline-block z-12 text-left">
        <div className="flex justify-center">
          <Menu.Button className="inline-flex items-center  justify-center px-2.5 py-2 rounded-md text-sm w-32 cursor-pointer text-indigo-800 bg-gradient-to-l from-sky-100 to-pink-100 font-extrabold hover:bg-slate-100 hover:text-indigo-900">
            <TranslateIcon className="h-6 w-6" aria-hidden="true" />
            <p className="text-ellipsis overflow-hidden">
              {activeLanguage.title}
            </p>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute bottom-0 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              {languages.map((language, index) => (
                <Menu.Item key={index}>
                  <button
                    className={joinClassNames(
                      activeLanguage.value == language.value
                        ? "bg-indigo-100 text-indigo-900"
                        : "text-indigo-700",
                      "group flex w-full items-center rounded-md px-2 py-2 text-sm"
                    )}
                    onClick={async () => await setLanguage(language.value)}
                  >
                    <p className="text-ellipsis overflow-hidden">
                      {language.title}
                    </p>
                  </button>
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
}
