import { MailIcon, PhoneIcon } from "@heroicons/react/solid";
import Image from "next/image";

const people = [
  {
    name: "Rahat Chowdhury",
    title: "Polygon",
    imageUrl: "/images/speakers/rahat.jpeg",
    twitterUrl: "https://twitter.com/Rahatcodes",
  },
  {
    name: "Patrick Collins",
    title: "Chainlink",
    imageUrl: "/images/speakers/patrick.jpeg",
    twitterUrl: "https://twitter.com/PatrickAlphaC",
  },
  {
    name: "Austin Griffith",
    title: "The Ethereum Foundation",
    imageUrl: "/images/speakers/austin.jpeg",
    twitterUrl: "https://twitter.com/austingriffith",
  },
  {
    name: "Ally Haire",
    title: "Protocol Labs",
    imageUrl: "/images/speakers/ally.jpeg",
    twitterUrl: "https://twitter.com/DeveloperAlly",
  },
  {
    name: "Dawn Kelly",
    title: "Protocol Labs",
    imageUrl: "/images/speakers/dawn.jpeg",
    twitterUrl: "https://twitter.com/run4pancakes",
  },
  {
    name: "Camila Ramos",
    title: "Edge & Node",
    imageUrl: "/images/speakers/cami.jpeg",
    twitterUrl: "https://twitter.com/camiinthisthang",
  },
  {
    name: "Nader Dabit",
    title: "Edge & Node",
    imageUrl: "/images/speakers/Nader.png",
    twitterUrl: "https://twitter.com/dabit3",
  },
  {
    name: "Lee Robinson",
    title: "Vercel",
    imageUrl: "/images/speakers/lee.jpeg",
    twitterUrl: "https://twitter.com/leeerob",
  },
];

export default function Speakers() {
  return (
    <div id="workshops" className="text-center py-12 sm:py-16 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-16">
        Join workshops led by
      </h2>
      <ul
        role="list"
        className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 md:grid-cols-3 lg:grid-cols-4"
      >
        {people.map((person) => (
          <li key={person.name}>
            <div className="space-y-6">
              <div className="relative mx-auto h-40 w-40 xl:w-56 xl:h-56">
                <Image
                  src={person.imageUrl}
                  alt={person.name}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-full"
                />
              </div>
              <div className="space-y-2">
                <div className="text-lg leading-6 font-medium space-y-1">
                  <h3>{person.name}</h3>
                  <p className="text-indigo-600">{person.title}</p>
                </div>
                <ul role="list" className="flex justify-center space-x-5">
                  <li>
                    <a
                      href={person.twitterUrl}
                      className="text-gray-400 hover:text-gray-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="sr-only">Twitter</span>
                      <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
