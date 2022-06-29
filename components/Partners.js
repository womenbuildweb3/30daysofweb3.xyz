import Image from "next/image";

const partners = [
  {
    name: "Surge",
    imageUrl: "/images/partners/surge_logo.png",
    url: "https://www.surgewomen.io/",
  },
  {
    name: "HER DAO",
    imageUrl: "/images/partners/HER_DAO.svg",
    url: "https://www.herdrop.com/",
  },
  {
    name: "The Phoenix Guild",
    imageUrl: "/images/partners/Phoenix_Guild_logo.png",
    url: "https://twitter.com/phoenixguildhq",
  },
  {
    name: "Platzi",
    imageUrl: "/images/partners/Platzi-_logo.png",
    url: "https://platzi.com/",
  },
  {
    name: "Women in Web3",
    imageUrl: "/images/partners/Women-In-Web3_logo.png",
    url: "https://womeninweb3.com/",
  },
  {
    name: "Cryptoversidad",
    imageUrl: "/images/partners/Cryptoversidad_logo.png",
    url: "https://cryptoversidad.com/",
  },
];

export default function Partners() {
  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-3 md:gap-12">
      {partners.map((partner) => (
        <div key={partner.name} className="col-span-1">
          <a href={partner.url}>
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
