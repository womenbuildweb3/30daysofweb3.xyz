import Image from "next/image";

const sponsors = [
  {
    name: "The Ethereum Foundation",
    imageUrl: "/images/sponsors/ef.svg",
    url: "https://ethereum.foundation/",
  },
  {
    name: "Filecoin/IPFS",
    imageUrl: "/images/sponsors/filecoin.svg",
    url: "https://filecoin.io/",
  },
  {
    name: "The Graph",
    imageUrl: "/images/sponsors/graph.png",
    url: "https://thegraph.com/",
  },
  {
    name: "Infura",
    imageUrl: "/images/sponsors/infura.png",
    url: "https://infura.io/",
  },
  {
    name: "Polygon",
    imageUrl: "/images/sponsors/polygon.svg",
    url: "https://polygon.technology/",
  },
  {
    name: "Radicle",
    imageUrl: "/images/sponsors/radicle.svg",
    url: "https://radicle.xyz/",
  },
];

export default function Sponsors() {
  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-3 md:gap-12">
      {sponsors.map((sponsor) => (
        <div key={sponsor.name} className="col-span-1">
          <a target="_blank" rel="noopener noreferrer" href={sponsor.url}>
            <div className="relative w-full h-16 cursor-pointer">
              <Image
                src={sponsor.imageUrl}
                alt={sponsor.name}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}
