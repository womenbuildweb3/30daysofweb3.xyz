import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";

export default function Navbar() {
  return (
    <Disclosure as="nav" className="nav-bar">
      {({ open }) => (
        <>
          <div className="mx-auto md:px-6">
            <div className="flex items-center justify-between h-16 ">
            <Link href="/" passHref>
              <div className="cursor-pointer font-poppins-bold text-xl">Women Build Web3</div>
              </Link>
              <div className="hidden md:block md:ml-6">
                <div className="flex">
                  <Link href="/about" passHref>
                    <p className="cursor-pointer px-3 py-2 rounded-full text-xl">
                      About
                    </p>
                  </Link>
                  <Link href="/" passHref>
                    <p className="cursor-pointer px-3 py-2 rounded-full text-xl">
                      30 Days of Web3
                    </p>
                  </Link>

                  <Link href="/blog" passHref>
                    <p className="cursor-pointer px-3 py-2 rounded-full text-xl">
                      Blog
                    </p>
                  </Link>
                </div>
              </div>
                <div className="hidden md:block md:ml-6">
                <div className="flex">
                  <Link href="/contact" passHref>
                    <p className="cursor-pointer px-3 py-2 rounded-full text-xl font-medium">
                      Contact
                    </p>
                  </Link>

                  <Link href="/contact" passHref>
                    <a className="cursor-pointer active:bg-black border border-black border-solid rounded-full text-xl px-3 py-2 hover:bg-black hover:text-white">
                      Join us
                    </a>
                  </Link>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="link inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon
                      className="block h-6 w-6 mobile-menu-button"
                      aria-hidden="true"
                    />
                  ) : (
                    <MenuIcon
                      className="block h-6 w-6 mobile-menu-button"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Disclosure.Button
                as="a"
                href="/"
                className="cursor-pointer active:bg-black px-3 py-2 rounded-md text-sm font-medium hover:bg-black hover:text-white"
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/about"
                className="cursor-pointer active:bg-black px-3 py-2 rounded-md text-sm font-medium hover:bg-black hover:text-white"
              >
                About
              </Disclosure.Button>
              <Disclosure.Button
                href="/blog"
                as="a"
                className="cursor-pointer active:bg-black px-3 py-2 rounded-md text-sm font-medium hover:bg-black hover:text-white"
              >
                Blog
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/contact"
                className="cursor-pointer active:bg-black px-3 py-2 rounded-md text-sm font-medium hover:bg-black hover:text-white"
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
