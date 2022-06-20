import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";

export default function Navbar() {
  return (
    <Popover className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 lg:justify-start lg:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <a className="text-xl font-bold text-slate-900">
                30 Days of Web3
              </a>
            </Link>
          </div>
          <div className="-mr-2 -my-2 lg:hidden">
            <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-slate-900 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden lg:flex space-x-10">
            <Link href="/#partners">
              <a className="text-base font-medium text-slate-900 hover:underline hover:decoration-wavy">
                Partners
              </a>
            </Link>
            <Link href="/#faqs">
              <a className="text-base font-medium text-slate-900 hover:underline hover:decoration-wavy">
                FAQ
              </a>
            </Link>
            <Link href="/about">
              <a className="text-base font-medium text-slate-900 hover:underline hover:decoration-wavy">
                About Us
              </a>
            </Link>
          </Popover.Group>
          <div className="hidden lg:flex items-center justify-end lg:flex-1 lg:w-0">
            <a
              href="https://forms.gle/XHDy3Yvasqocavas9"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Register
            </a>
            <a
              href="https://discord.gg/z63rfurXMD"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-blue-600 bg-white hover:bg-slate-50"
            >
              Join our Discord
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-slate-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-slate-900">
                  30 Days of Web3
                </span>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-slate-900 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Link href="/#partners">
                    <a className="-m-3 p-3 flex items-center rounded-md hover:bg-slate-50">
                      <span className="text-base font-medium text-slate-900">
                        Partners
                      </span>
                    </a>
                  </Link>
                  <Link href="/#faqs">
                    <a className="-m-3 p-3 flex items-center rounded-md hover:bg-slate-50">
                      <span className=" text-base font-medium text-slate-900">
                        FAQ
                      </span>
                    </a>
                  </Link>
                  <Link href="/about">
                    <a className="-m-3 p-3 flex items-center rounded-md hover:bg-slate-50">
                      <span className=" text-base font-medium text-slate-900">
                        About Us
                      </span>
                    </a>
                  </Link>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div>
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                >
                  Register
                </a>
                <p className="mt-6 text-center text-base font-medium text-slate-500">
                  <a href="#" className="text-blue-600 hover:text-blue-500">
                    Join our Discord
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
