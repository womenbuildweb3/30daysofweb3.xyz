 // url=""
 import Link from "next/link"

export default function Footer() {
    return (
        <footer className="my-32">
            <hr className="mb-16 border-t border-black border-solid"/>
            <div className="grid grid-cols-2">
                <div className="max-w-sm">
                    <div className="mb-4 text-3xl font-poppins-bold">
                        Women Build Web3
                    </div>
                    <p className="mb-4 leading-normal text-xl">
                        Subscribe to our newsletter to get our latest news, blog posts, events, and more.
                    </p>
                    <form>
                        <input type="email" className="rounded-md p-4 w-full border border-solid border-black" placeholder="Email"/>
                        <div className="mr-4 flex justify-end relative bottom-10">
                            <button>X</button>
                        </div>
                    </form>
                </div>

                <div className="grid grid-cols-3">

                    <div className="flex flex-col gap-4">
                        <div className="text-lg font-poppins-bold">
                            Explore
                        </div>
                        <Link href="/" className="text-lg">
                            Home
                        </Link>
                        <Link href="/about" className="text-lg">
                            About
                        </Link>
                        <Link href="/about" className="text-lg">
                            Whitepaper
                        </Link>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="text-lg font-poppins-bold">
                            Learn {'&'} Build
                        </div>
                        <Link href="/" className="text-lg">
                            30 Days of Web3
                        </Link>
                        <Link href="/blog" className="text-lg">
                            Blog
                        </Link>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="text-lg font-poppins-bold">
                            Get in Touch
                        </div>
                        <Link href="/contact" className="text-lg">
                            Contact
                        </Link>
                        <Link href="https://twitter.com/womenbuildweb3" className="text-lg">
                            Twitter
                        </Link>
                        <Link href="https://instagram.com/womenbuildweb3" className="text-lg">
                            Instagram
                        </Link>
                    </div>


                </div>

            </div>
              
        </footer>
    )
}