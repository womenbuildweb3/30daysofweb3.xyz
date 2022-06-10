/* This example requires Tailwind CSS v2.0+ */
import Image from "next/image";
const sponsors = [
  { name: "the graph protocol", imageURL: "/images/graph.png" },
];
export default function Sponsors() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
          Built with Support From
        </p>
        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
          <div className="col-span-1 flex justify-center bg-gray-50 p-8">
            <div className="relative w-full h-24">
              <Image
                src="/images/graph.png"
                objectFit="contain"
                layout="fill"
                alt="The Graph logo"
              />
            </div>
          </div>
          <div className="col-span-1 flex justify-center bg-gray-50 p-8">
            <div className="relative w-full h-24">
              <Image
                src="/images/ef.svg"
                layout="fill"
                objectFit="contain"
                alt="Ethereum Foundation"
              />
            </div>
          </div>
          <div className="col-span-1 flex justify-center bg-gray-50 p-8">
            <div className="relative w-full h-24">
              <Image
                src="/images/infura.png"
                layout="fill"
                objectFit="contain"
                alt="Infura"
              />
            </div>
          </div>
          <div className="col-span-1 flex justify-center bg-gray-50 p-8">
            <div className="relative w-full h-24">
              <Image
                src="/images/polygon.png"
                layout="fill"
                objectFit="contain"
                alt="Polygon"
              />
            </div>
          </div>
          <div className="col-span-1 flex justify-center bg-gray-50 p-8">
            <div className="relative w-full h-24">
              <Image
                src="/images/radicle.png"
                layout="fill"
                objectFit="contain"
                alt="Radicle"
              />
            </div>
          </div>
          <div className="col-span-1 flex justify-center bg-gray-50 p-8">
            <div className="relative w-full h-24">
              <Image
                src="/images/ipfs.png"
                layout="fill"
                objectFit="contain"
                alt="IPFS"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
