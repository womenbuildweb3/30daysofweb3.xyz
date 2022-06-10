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
            A community of women and non-binary people unlocking the next wave
            of developers in web3 by providing education, opportunities, and
            funding
          </p>
        </div>

        <div className="grid sm:grid-cols-3">
          <div className="flex mb-8 sm:mb-0 flex-col gap-4">
            <h6 className="font-poppins-bold">30 Days of Web3</h6>
            <Link href="/">
              <a className="max-w-[160px] hover:decoration-wavy">Home</a>
            </Link>
            <Link href="/faq">
              <a className="max-w-[160px] hover:underline hover:decoration-wavy">
                FAQ
              </a>
            </Link>
            <a
              className="max-w-[160px] hover:decoration-wavy"
              target="_blank"
              href="https://discord.gg/z63rfurXMD"
              rel="noopener noreferrer"
            >
              Join Discord
            </a>
          </div>

          <div className="flex mb-8 sm:mb-0 flex-col gap-4">
<<<<<<< HEAD
            <h6 className="font-poppins-bold">WBW3</h6>
            <Link href="/about">
              <a className="max-w-[160px] hover:underline hover:decoration-wavy">
                About us
=======
            <h6 className="font-poppins-bold">Learn {"&"} Build</h6>
            <Link href="/#30dw3">
              <a className="max-w-[160px]  hover:decoration-wavy">
                30 Days of Web3
>>>>>>> main
              </a>
            </Link>
            <a
              className="max-w-[160px]  hover:decoration-wavy"
              target="_blank"
              href="https://womenbuildweb3.hashnode.dev/"
              rel="noopener noreferrer"
            >
              Our blog
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <h6 className="font-poppins-bold">Get in Touch</h6>
<<<<<<< HEAD
            <a
              className="max-w-[160px] hover:underline hover:decoration-wavy"
              href="mailto:info@womenbuildweb3.com"
            >
              Email
            </a>
=======
            <Link href="/contact">
              <a className="max-w-[160px]  hover:decoration-wavy">Contact</a>
            </Link>
>>>>>>> main
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
