import Image from "next/image";
import Link from "next/link";

export default function Footer({ preferedColorScheme }) {
  return (
    <footer className="py-32">
      <hr className="mb-16 border-t border-black dark:border-white border-solid" />
      <div className="grid md:grid-cols-2">
        <div className="max-w-sm">
          <div className="mb-4 text-2xl sm:text-3xl font-poppins-bold">
            Women Build Web3
          </div>
          <p className="mb-4 leading-normal text-base sm:text-xl">
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
                  stroke={preferedColorScheme==="dark" ? "white" : "black"}
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
            <div className="font-poppins-bold">Explore</div>
            <Link href="/" passHref>
              <div className="cursor-pointer max-w-[160px]">Home</div>
            </Link>
            <Link href="/about" passHref>
              <div className="cursor-pointer max-w-[160px]">About</div>
            </Link>
            <a
              className="max-w-[160px]"
              target="_blank"
              href="https://womenbuildweb3.hashnode.dev/whitepaper"
              rel="noopener noreferrer"
            >
              Whitepaper
            </a>
          </div>

          <div className="flex mb-8 sm:mb-0 flex-col gap-4">
            <div className="font-poppins-bold">Learn {"&"} Build</div>
            <Link href="/" passHref>
              <div className="cursor-pointer max-w-[160px]">
                30 Days of Web3
              </div>
            </Link>
            <Link href="/blog" passHref>
              <div className="cursor-pointer max-w-[160px]">Blog</div>
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <div className="font-poppins-bold">Get in Touch</div>
            <Link href="/contact" passHref>
              <div className="cursor-pointer max-w-[160px]"> Contact </div>
            </Link>
            <a
              className="max-w-[160px]"
              arget="_blank"
              href="https://twitter.com/womenbuildweb3"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              className="max-w-[160px]"
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
