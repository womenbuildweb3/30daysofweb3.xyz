/* This example requires Tailwind CSS v2.0+ */
import Image from "next/image"
const sponsors = [
    {name: "the graph protocol", imageURL: "/images/graph.png"}
]
export default function Sponsors() {
    return (
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
            Built with Support From
          </p>
          <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <Image
                className="max-h-12"
                src="/images/graph.png"
                alt="Workcation"
                height={100}
                width={200}
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <Image className="max-h-12" src="/images/ef.png" 
              height={100}
              width={200} 
            alt="Ethereum Foundation" />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <Image className="max-h-12" src="/images/infura.png" height={100}
              width={200}   alt="Tuple" />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <Image className="max-h-12" src="/images/polygon.jpeg" height={150}
              width={200}  alt="Laravel" />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <Image
                className="max-h-12"
                src="/images/radicle.jpeg"
                height={150}
              width={200}
                alt="StaticKit"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <Image
                className="max-h-12"
                height={100}
              width={200}
                src="/images/ipfs.png"
                alt="Statamic"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
  