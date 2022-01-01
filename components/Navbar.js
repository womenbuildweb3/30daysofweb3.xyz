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
    <Disclosure as="nav" className="bg-black">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ml-24">
            <div className="flex items-center justify-between h-16 ">
              <div className="flex items-center">
                <div className="hidden sm:block sm:ml-6">
                  <div onClick={updateSelected} className="flex space-x-4">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <Link href="/">
                    <p className="active:bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700" >
                      Home
                    </p>
                    </Link>
                    <Link href="/about">
                    <p
                      className="text-gray-300 hover:bg-gray-700 active:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium "
                    >
                      About
                    </p>
                    </Link>
                    <Link href="/blog">
                    <p
                      className="text-gray-300 hover:bg-gray-700  active:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium "
                    >
                      Blog
                    </p>
                    </Link>
                    <Link href="/contact">
                    <p
                      className="text-gray-300 hover:bg-gray-700  active:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium "
                    >
                      Contact
                    </p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <Disclosure.Button
                as="a"
                href="/"
                className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/about"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </Disclosure.Button>
                <Disclosure.Button
                href="/blog"
                as="a"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Blog
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/contact"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact
              </Disclosure.Button>
              {/* <Disclosure.Button
                as="a"
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Calendar
              </Disclosure.Button> */}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-700">
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
