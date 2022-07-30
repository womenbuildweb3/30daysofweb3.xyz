import Image from "next/image";

export default function Sponsors({ sponsors }) {
  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-3 md:gap-12">
      {sponsors.map((sponsor) => (
        <div key={sponsor.name} className="col-span-1">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`${sponsor.url}?ref=30daysofweb3`}
          >
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
