import Image from "next/image";

const sponsors = [
  {
    name: "The Ethereum Foundation",
    imageUrl: "/images/sponsors/ef.svg",
  },
  {
    name: "Filecoin/IPFS",
    imageUrl: "/images/sponsors/filecoin.svg",
  },
  {
    name: "The Graph",
    imageUrl: "/images/sponsors/graph.png",
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
];

export default function Sponsors() {
  return (
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
  );
}
