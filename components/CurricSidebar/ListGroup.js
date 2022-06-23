import { useRouter } from "next/router";
import { Disclosure } from "@headlessui/react";
import ListItem from "./ListItem";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ({ item }) {
  const router = useRouter();
  const { category } = router.query;
  const selected = category === item.name;
  return (
    <>
      <Disclosure
        as="div"
        key={item.name}
        className="space-y-1"
        defaultOpen={selected}
      >
        {({ open }) => (
          <>
            {console.log(selected, open)}
            <Disclosure.Button
              className={classNames(
                selected
                  ? `text-slate-900 font-extrabold`
                  : "text-slate-600 font-medium",
                "group w-full flex items-center pr-2 py-2 text-left text-sm rounded-md hover:bg-slate-100 hover:text-slate-900"
              )}
            >
              <svg
                className={classNames(
                  open ? "text-slate-500 rotate-90" : "text-slate-300",
                  "mr-2 flex-shrink-0 h-5 w-5 transform group-hover:text-slate-400 transition-colors ease-in-out duration-150"
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
                <ListItem item={subItem} />
              ))}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
