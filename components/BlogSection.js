import Link from "next/link";

export default function BlogSection() {
  return (
    <section className="mb-44">
      <div className="mb-16 flex flex-col flex-center max-w-2xl mx-auto">
        <h2 className="mb-8 text-center text-2xl sm:text-5xl font-poppins-bold">
          Building in public
        </h2>
        <p className="text-center text-base sm:text-lg mb-4">
          We are documenting our unique journies, sharing our knowledge and
          resources, and creating educational web3 content. Follow our blog to
          stay tuned to our ventures.
        </p>
        <Link href="/blog" passHref>
          <a className="mx-auto cursor-pointer dark:hover:text-black dark:hover:bg-white hover:text-white hover:bg-black border border-black dark:border-white border-solid rounded-full text-xs sm:text-lg px-4 py-3">
            View our blog
          </a>
        </Link>
      </div>
      <div className="flex flex-col sm:flex-row gap-8">
        <div>
          <Link href="/blog" passHref>
            <div className="cursor-pointer mt-4 w-full h-44 bg-slate-500 rounded-md"></div>
          </Link>
          <Link href="/blog" passHref>
            <h3 className="cursor-pointer leading-normal text-base sm:text-2xl font-poppins-bold">
              Guide to Using the Coinbase API
            </h3>
          </Link>
          <Link href="/blog" passHref>
            <div className="mt-4 flex items-end gap-2">
              <div className="cursor-pointer w-10 h-10 bg-slate-500 rounded-full"></div>
              <div className="cursor-pointer text-base sm:text-xl">
                Author Name
              </div>
            </div>
          </Link>
        </div>

        <div>
          <Link href="/blog" passHref>
            <div className="cursor-pointer mt-4 w-full h-44 bg-slate-500 rounded-md"></div>
          </Link>
          <Link href="/blog" passHref>
            <h3 className="cursor-pointer leading-normal text-base sm:text-2xl font-poppins-bold">
              Guide to Using the Coinbase API
            </h3>
          </Link>
          <Link href="/blog" passHref>
            <div className="mt-4 flex items-end gap-2">
              <div className="cursor-pointer w-10 h-10 bg-slate-500 rounded-full"></div>
              <div className="cursor-pointer text-base sm:text-xl">
                Author Name
              </div>
            </div>
          </Link>
        </div>

        <div>
          <Link href="/blog" passHref>
            <div className="cursor-pointer mt-4 w-full h-44 bg-slate-500 rounded-md"></div>
          </Link>
          <Link href="/blog" passHref>
            <h3 className="cursor-pointer leading-normal text-base sm:text-2xl font-poppins-bold">
              Guide to Using the Coinbase API
            </h3>
          </Link>
          <Link href="/blog" passHref>
            <div className="mt-4 flex items-end gap-2">
              <div className="cursor-pointer w-10 h-10 bg-slate-500 rounded-full"></div>
              <div className="cursor-pointer text-base sm:text-xl">
                Author Name
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
