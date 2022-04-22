 // url=""
 import Link from "next/link"

export default function Footer() {
    return (
        <footer className="my-32">
            <hr className="mb-16 border-t border-black border-solid"/>
            <div className="grid sm:grid-cols-2">
                <div className="max-w-sm">
                    <div className="mb-4 text-2xl sm:text-3xl font-poppins-bold">
                        Women Build Web3
                    </div>
                    <p className="mb-4 leading-normal text-base sm:text-xl">
                        Subscribe to our newsletter to get our latest news, blog posts, events, and more.
                    </p>
                    <form>
                        <input type="email" className="rounded-md p-4 w-full border border-solid border-black" placeholder="Email"/>
                        <div className="mr-4 flex justify-end relative bottom-10">
                            <button>X</button>
                        </div>
                    </form>
                </div>

                <div className="grid sm:grid-cols-3">

                    <div className="flex mb-8 sm:mb-0 flex-col gap-4">
                        <div className="font-poppins-bold">
                            Explore
                        </div>
                        <Link href="/">
                            Home
                        </Link>
                        <Link href="/about">
                            About
                        </Link>
                        <a target="_blank" href="https://womenbuildweb3.hashnode.dev/whitepaper" rel="noopener noreferrer">
                            Whitepaper
                        </a>
                    </div>

                    <div className="flex mb-8 sm:mb-0 flex-col gap-4">
                        <div className="font-poppins-bold">
                            Learn {'&'} Build
                        </div>
                        <Link href="/" className="">
                            30 Days of Web3
                        </Link>
                        <Link href="/blog" className="">
                            Blog
                        </Link>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="font-poppins-bold">
                            Get in Touch
                        </div>
                        <Link href="/contact">
                            Contact
                        </Link>
                        <a target="_blank" href="https://twitter.com/womenbuildweb3" rel="noopener noreferrer">
                            Twitter
                        </a>
                        <a target="_blank" href="https://instagram.com/womenbuildweb3" rel="noopener noreferrer">
                            Instagram
                        </a>
                    </div>


                </div>

            </div>
              
        </footer>
    )
}