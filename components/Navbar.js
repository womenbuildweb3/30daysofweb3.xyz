import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";

export default function Navbar({ preferedColorScheme }) {
  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="mx-auto">
            <div className="flex items-center justify-between h-16 ">
              <Logo preferedColorScheme={preferedColorScheme} />
              <div className="items-center hidden md:flex">
                <Link href="/about">
                  <a className="px-3 py-2 rounded-full lg:text-xl hover:decoration-wavy">
                    About
                  </a>
                </Link>
                <Link href="/faq">
                  <a className="px-3 py-2 rounded-full lg:text-xl hover:decoration-wavy">
                    FAQ
                  </a>
                </Link>
                <Link href="/course">
                  <a className="px-3 py-2 rounded-full lg:text-xl hover:decoration-wavy">
                    Course
                  </a>
                </Link>
                {/* This link below will redirect to the 30dw3 challenge when its available. */}
                {/* <Link href="">
                  <a className="px-3 py-2 rounded-full lg:text-xl  hover:decoration-wavy">
                    30DW3 Challenge
                  </a>
                </Link> */}
              </div>
              <div className="items-center hidden md:flex">
                <a
                  className="px-3 py-2 mr-2 font-medium rounded-full lg:text-xl hover:underline hover:decoration-wavy"
                  href="https://forms.gle/XHDy3Yvasqocavas9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register
                </a>

                <a
                  className="px-4 py-2 border border-black border-solid rounded-full dark:hover:text-black dark:hover:bg-white hover:text-white hover:bg-black dark:border-white lg:text-xl"
                  target="_blank"
                  href="https://discord.gg/z63rfurXMD"
                  rel="noopener noreferrer"
                >
                  Join our Discord
                </a>
              </div>
              <div className="flex items-center gap-2 md:hidden">
                <a
                  className="grid h-8 px-4 text-sm border border-black border-solid rounded-full sm:text-base place-items-center dark:hover:text-black dark:hover:bg-white hover:text-white hover:bg-black dark:border-white"
                  target="_blank"
                  href="https://discord.gg/z63rfurXMD"
                  rel="noopener noreferrer"
                >
                  Join our Discord
                </a>
                <div className="flex -mr-2">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md link hover:text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon
                        className="block w-8 h-8 mobile-menu-button"
                        aria-hidden="true"
                      />
                    ) : (
                      <MenuIcon
                        className="block w-8 h-8 mobile-menu-button"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Disclosure.Button
                as="a"
                href="/"
                className="px-3 py-2 text-sm font-medium rounded-md active:bg-black hover:bg-black hover:text-white"
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="https://forms.gle/XHDy3Yvasqocavas9"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 text-sm font-medium rounded-md active:bg-black hover:bg-black hover:text-white"
              >
                Register
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/about"
                className="px-3 py-2 text-sm font-medium rounded-md active:bg-black hover:bg-black hover:text-white"
              >
                About
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/faq"
                className="px-3 py-2 text-sm font-medium rounded-md active:bg-black hover:bg-black hover:text-white"
              >
                FAQ
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/course"
                className="px-3 py-2 text-sm font-medium rounded-md active:bg-black hover:bg-black hover:text-white"
              >
                Course
              </Disclosure.Button>
            </div>
            <div className="pt-4 pb-3 border-t border-white-100"></div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
