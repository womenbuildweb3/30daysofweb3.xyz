import { useState } from "react";
import Link from "next/link";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { SparklesIcon } from "@heroicons/react/outline";
import CurriculumContent from "./CurriculumContent";
import LessonLinks from "./LessonLinks";
import {getAllLessons} from "../utils/lessons"

const lessons = getAllLessons()

const NavItem = ({value, path}) => {
  let classes;
  // if(id !== value){
    classes = "text-indigo-100 hover:bg-indigo-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md cursor-pointer"
  // } else {
    // classes = "bg-indigo-800 text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md cursor-pointer"
  // }


  return (
    <Link href={"/course/" + path} passHref>
      <div className={classes}>
        <SparklesIcon
          className="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300"
          aria-hidden="true"
        />
        {value}
      </div>
    </Link>
  );
}

const NavList = () => {
  const listItems = lessons.map((path, index) => (
    <NavItem key={path.id} value={path.value} path={path.path} />
  ));
  return <div>{listItems}</div>;
}

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

export default function CurricSidebar({ curricData, id, paths }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
          <div className="flex -ml-20 flex-col flex-grow pt-5 bg-[#000]   overflow-y-auto">
            <div className="mt-5 ml-3 flex-1 flex flex-col">
              <nav className="flex-1 px-2 pb-4 space-y-1">
                <NavList/>
              </nav>
            </div>
          </div>
        </div>

        {curricData && id && 
        <CurriculumContent curricData={curricData} id={id} paths={paths} />
        }
        {!curricData && <div>
          <LessonLinks/>
          </div>}
      </div>
    </>
  );
}
