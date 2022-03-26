/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { useState } from 'react' 
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [active, setActive] = useState("");

  function updateSelected(e){
    console.log("this is the target: ", e.target.value);
  }
  return (
    <Disclosure as="nav" className="nav-bar">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ml-24">
            <div className="flex items-center justify-between h-16 ">
              <div className="flex items-center">
                <div className="hidden sm:block sm:ml-6">
                  <div onClick={updateSelected} className="flex">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <Link href="/">
                    <p className="link nav-link" >
                      Home
                    </p>
                    </Link>
                    <Link href="/about">
                    <p
                      className="link nav-link"
                    >
                      About
                    </p>
                    </Link>
                    <Link href="/blog">
                    <p
                      className="link nav-link"
                    >
                      Blog
                    </p>
                    </Link>
                    <Link href="/contact">
                    <p
                      className="link nav-link"
                    >
                      Contact
                    </p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="link inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Disclosure.Button
                as="a"
                href="/"
                className="link nav-link nav-link-mobile"
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/about"
                className="link nav-link nav-link-mobile"
              >
                About
              </Disclosure.Button>
                <Disclosure.Button
                href="/blog"
                as="a"
                className="link nav-link nav-link-mobile"
              >
                Blog
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/contact"
                className="link nav-link nav-link-mobile"
              >
                Contact
              </Disclosure.Button>

            </div>
            <div className="pt-4 pb-3 border-t border-gray-700">
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
