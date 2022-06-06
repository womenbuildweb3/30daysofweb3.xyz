import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Image from "next/image";

export default function Navbar({ preferedColorScheme }) {
  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="mx-auto">
            <div className="flex items-center justify-between h-16 ">
              {preferedColorScheme === "light" && (
                <Link href="/">
                  <a className="flex items-center sm:gap-4">
                    <Image
                      className="cursor-pointer"
                      alt="Women Build Web3 Logo"
                      src="/logos/Logo-Fill.png"
                      height="40px"
                      width="40px"
                    />
                    <span className="hidden text-xl cursor-pointer sm:block font-poppins-bold">
                      Women Build Web3
                    </span>
                  </a>
                </Link>
              )}
              {preferedColorScheme === "dark" && (
                <Link href="/">
                  <a className="flex items-center sm:gap-4">
                    <Image
                      className="cursor-pointer"
                      alt="Women Build Web3 Logo"
                      src="/logos/logo-white.png"
                      height="40px"
                      width="40px"
                    />
                    <span className="hidden text-xl cursor-pointer sm:block font-poppins-bold">
                      Women Build Web3
                    </span>
                  </a>
                </Link>
              )}
              <div className="items-center hidden md:flex">
                <Link href="/about">
                  <a className="px-3 py-2 rounded-full lg:text-xl hover:underline hover:decoration-wavy">
                    About
                  </a>
                </Link>
                <Link href="/#30dw3">
                  <a className="px-3 py-2 rounded-full lg:text-xl hover:underline hover:decoration-wavy">
                    30 Days of Web3
                  </a>
                </Link>
                {/* This link below will redirect to the 30dw3 challenge when its available. */}
                <Link href="">
                  <a className="px-3 py-2 rounded-full lg:text-xl hover:underline hover:decoration-wavy">
                    30DW3 Challenge
                  </a>
                </Link>
                <a
                  className="px-3 py-2 rounded-full lg:text-xl hover:underline hover:decoration-wavy"
                  target="_blank"
                  href="https://womenbuildweb3.hashnode.dev/"
                  rel="noopener noreferrer"
                >
                  Blog
                </a>
              </div>
              <div className="items-center hidden md:flex">
                <Link href="/contact">
                  <a className="px-3 py-2 mr-2 font-medium rounded-full lg:text-xl hover:underline hover:decoration-wavy">
                    Contact
                  </a>
                </Link>
                <a
                  className="px-4 py-2 border border-black border-solid rounded-full dark:hover:text-black dark:hover:bg-white hover:text-white hover:bg-black dark:border-white lg:text-xl"
                  target="_blank"
                  href="https://discord.gg/z63rfurXMD"
                  rel="noopener noreferrer"
                >
                  Join us
                </a>
              </div>
              <div className="flex items-center gap-2 md:hidden">
                <a
                  className="grid h-8 px-4 text-sm border border-black border-solid rounded-full sm:text-base place-items-center dark:hover:text-black dark:hover:bg-white hover:text-white hover:bg-black dark:border-white"
                  target="_blank"
                  href="https://discord.gg/z63rfurXMD"
                  rel="noopener noreferrer"
                >
                  Join us
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
                href="/about"
                className="px-3 py-2 text-sm font-medium rounded-md active:bg-black hover:bg-black hover:text-white"
              >
                About
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="https://womenbuildweb3.hashnode.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 text-sm font-medium rounded-md active:bg-black hover:bg-black hover:text-white"
              >
                Blog
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/contact"
                className="px-3 py-2 text-sm font-medium rounded-md active:bg-black hover:bg-black hover:text-white"
              >
                Contact
              </Disclosure.Button>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-700"></div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
