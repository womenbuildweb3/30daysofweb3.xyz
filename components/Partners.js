import Image from "next/image";

const partners = [
  {
    name: "Cryptoversidad",
    imageUrl: "/images/partners/Cryptoversidad_logo.png",
    url: "https://cryptoversidad.com/",
  },
  {
    name: "Developer DAO",
    imageUrl: "/images/partners/developerdao.svg",
    url: "https://www.developerdao.com/",
  },
  {
    name: "Gitcoin",
    imageUrl: "/images/partners/gitcoin.png",
    url: "https://gitcoin.co/",
  },
  {
    name: "HER DAO",
    imageUrl: "/images/partners/HER_DAO.svg",
    url: "https://www.herdrop.com/",
  },
  {
    name: "The Phoenix Guild",
    imageUrl: "/images/partners/Phoenix_Guild_logo.png",
    url: "https://twitter.com/phoenixguildhq/",
  },
  {
    name: "Platzi",
    imageUrl: "/images/partners/Platzi-_logo.png",
    url: "https://platzi.com/",
  },
  {
    name: "SheFi",
    imageUrl: "/images/partners/shefi.png",
    url: "https://www.shefi.org/",
  },
  {
    name: "Surge",
    imageUrl: "/images/partners/surge_logo.png",
    url: "https://www.surgewomen.io/",
  },
  {
    name: "Women in Web3",
    imageUrl: "/images/partners/Women-In-Web3_logo.png",
    url: "https://womeninweb3.com/",
  },
];

export default function Partners() {
  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-3 md:gap-12">
      {partners.map((partner) => (
        <div key={partner.name} className="col-span-1">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`${partner.url}?ref=30daysofweb3`}
          >
            <div className="relative w-full h-32 cursor-pointer">
              <Image
                src={partner.imageUrl}
                alt={partner.name}
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
