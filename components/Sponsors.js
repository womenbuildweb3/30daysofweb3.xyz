import Image from "next/image";

const sponsors = [
  {
    name: "The Graph",
    imageUrl: "/images/sponsors/graph.png",
  },
  {
    name: "Ethereum Foundation",
    imageUrl: "/images/sponsors/ef.svg",
  },
  {
    name: "Infura",
    imageUrl: "/images/sponsors/infura.png",
  },
  {
    name: "Polygon",
    imageUrl: "/images/sponsors/polygon.svg",
  },
  {
    name: "Radicle",
    imageUrl: "/images/sponsors/radicle.svg",
  },
  {
    name: "IPFS",
    imageUrl: "/images/sponsors/ipfs.png",
  },
];

export default function Sponsors() {
  return (
    <div className="py-12 text-center sm:px-6 lg:px-8 lg:py-24">
      <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-8 sm:mb-12">
        Built with support from
      </h2>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 md:gap-12">
        {sponsors.map((sponsor) => (
          <div key={sponsor.name} className="col-span-1">
            <div className="relative w-full h-16">
              <Image
                src={sponsor.imageUrl}
                alt={sponsor.name}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
