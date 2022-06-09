import Image from "next/image";
import Link from "next/link";

export default function Footer({ preferedColorScheme }) {
  return (
    <footer className="pt-32 pb-16">
      <hr className="mb-12 sm:mb-16 border-t border-black dark:border-white border-solid" />
      <div className="grid md:grid-cols-2">
        <div className="mb-8 max-w-sm">
          <h5 className="mb-2 text-2xl font-poppins-bold">Women Build Web3</h5>
          <p className="mb-6 text-base leading-relaxed">
            Subscribe to our newsletter to get our latest news, blog posts,
            events, and more.
          </p>
          <form>
            <input
              type="email"
              className="dark:bg-transparent rounded-md p-4 w-full border border-solid border-black dark:border-white"
              placeholder="Email"
            />
            <button className="relative pr-4 w-full flex justify-end">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative bottom-10"
              >
                <path
                  d="M8 6H18V16M18 6L6 18L18 6Z"
                  stroke={preferedColorScheme === "dark" ? "white" : "black"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>
        </div>

        <div className="grid sm:grid-cols-3">
          <div className="flex mb-8 sm:mb-0 flex-col gap-4">
            <h6 className="font-poppins-bold">Explore</h6>
            <Link href="/">
              <a className="max-w-[160px] hover:decoration-wavy">Home</a>
            </Link>
            <Link href="/about">
              <a className="max-w-[160px] hover:decoration-wavy">About</a>
            </Link>
            <a
              className="max-w-[160px] hover:decoration-wavy"
              target="_blank"
              href="https://womenbuildweb3.hashnode.dev/whitepaper"
              rel="noopener noreferrer"
            >
              Whitepaper
            </a>
          </div>

          <div className="flex mb-8 sm:mb-0 flex-col gap-4">
            <h6 className="font-poppins-bold">Learn {"&"} Build</h6>
            <Link href="/#30dw3">
              <a className="max-w-[160px]  hover:decoration-wavy">
                30 Days of Web3
              </a>
            </Link>
            <a
              className="max-w-[160px]  hover:decoration-wavy"
              target="_blank"
              href="https://womenbuildweb3.hashnode.dev/"
              rel="noopener noreferrer"
            >
              Blog
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <h6 className="font-poppins-bold">Get in Touch</h6>
            <Link href="/contact">
              <a className="max-w-[160px]  hover:decoration-wavy">Contact</a>
            </Link>
            <a
              className="max-w-[160px]  hover:decoration-wavy"
              target="_blank"
              href="https://twitter.com/womenbuildweb3"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              className="max-w-[160px]  hover:decoration-wavy"
              target="_blank"
              href="https://instagram.com/womenbuildweb3"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
