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
                    <span className="hidden sm:block cursor-pointer font-poppins-bold text-xl">
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
                    <span className="hidden sm:block cursor-pointer font-poppins-bold text-xl">
                      Women Build Web3
                    </span>
                  </a>
                </Link>
              )}
              <div className="hidden md:flex items-center">
                <Link href="/about">
                  <a className="px-3 py-2 rounded-full text-xl hover:underline hover:decoration-wavy">
                    About
                  </a>
                </Link>
                <Link href="/#30dw3">
                  <a className="px-3 py-2 rounded-full text-xl hover:underline hover:decoration-wavy">
                    30 Days of Web3
                  </a>
                </Link>
                <a
                  className="px-3 py-2 rounded-full text-xl hover:underline hover:decoration-wavy"
                  target="_blank"
                  href="https://womenbuildweb3.hashnode.dev/"
                  rel="noopener noreferrer"
                >
                  Blog
                </a>
              </div>
              <div className="hidden md:flex items-center">
                <Link href="/contact">
                  <a className="px-3 py-2 mr-2 rounded-full text-xl font-medium hover:underline hover:decoration-wavy">
                    Contact
                  </a>
                </Link>
                <a
                  className="dark:hover:text-black dark:hover:bg-white hover:text-white hover:bg-black border border-black dark:border-white border-solid rounded-full text-xl px-4 py-2"
                  target="_blank"
                  href="https://discord.gg/z63rfurXMD"
                  rel="noopener noreferrer"
                >
                  Join us
                </a>
              </div>
              <div className="flex items-center gap-2 md:hidden">
                <a
                  className="px-4 h-8 grid place-items-center dark:hover:text-black dark:hover:bg-white hover:text-white hover:bg-black border border-black dark:border-white border-solid rounded-full"
                  target="_blank"
                  href="https://discord.gg/z63rfurXMD"
                  rel="noopener noreferrer"
                >
                  Join us
                </a>
                <div className="-mr-2 flex">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="link inline-flex items-center justify-center p-2 rounded-md hover:text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon
                        className="block h-8 w-8 mobile-menu-button"
                        aria-hidden="true"
                      />
                    ) : (
                      <MenuIcon
                        className="block h-8 w-8 mobile-menu-button"
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
                className="active:bg-black px-3 py-2 rounded-md text-sm font-medium hover:bg-black hover:text-white"
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/about"
                className="active:bg-black px-3 py-2 rounded-md text-sm font-medium hover:bg-black hover:text-white"
              >
                About
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="https://womenbuildweb3.hashnode.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="active:bg-black px-3 py-2 rounded-md text-sm font-medium hover:bg-black hover:text-white"
              >
                Blog
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/contact"
                className="active:bg-black px-3 py-2 rounded-md text-sm font-medium hover:bg-black hover:text-white"
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
