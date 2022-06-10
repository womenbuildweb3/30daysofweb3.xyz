/* This example requires Tailwind CSS v2.0+ */
import { MailIcon, PhoneIcon } from "@heroicons/react/solid";
import Image from "next/image";

const people = [
  {
    name: "Rahat",
    title: "Polygon",
    imageUrl: "/images/rahat.jpeg",
  },
  {
    name: "Patrick Collins",
    title: "Chainlink",
    imageUrl: "/images/Patrick.jpeg",
  },
  {
    name: "Ally Haire",
    title: "Protocol Labs",
    imageUrl: "/images/ally.jpeg",
  },
  {
    name: "Camila Ramos",
    title: "Edge & Node",
    imageUrl: "/images/cami.jpeg",
  },
  {
    name: "Dawn Kelly",
    title: "Protocol Labs",
    imageUrl: "/images/dawn.jpeg",
  },
  {
    name: "Nader Dabit",
    title: "Edge & Node",
    imageUrl: "/images/Nader.png",
  },
  {
    name: "Lee Rob",
    title: "Vercel",
    imageUrl: "/images/lee.jpeg",
  },
  {
    name: "Austin Griffith",
    title: "The Ethereum Foundation",
    imageUrl: "/images/austin.jpeg",
  },
  // More people...
];

export default function Speakers() {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {people.map((person) => (
        <li
          key={person.name}
          className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
        >
          <div className="flex-1 flex flex-col p-8">
            <Image
              className="w-32 h-32 flex-shrink-0 mx-auto rounded-full"
              src={person.imageUrl}
              width="200px"
              height="220px"
              alt=""
            />
            <h3 className="mt-6 text-gray-900 text-sm font-medium">
              {person.name}
            </h3>
            <dl className="mt-1 flex-grow flex flex-col justify-between">
              <dt className="sr-only">Title</dt>
              <dd className="text-gray-500 text-sm">{person.title}</dd>
              <dt className="sr-only">Role</dt>
            </dl>
          </div>
          <div></div>
        </li>
      ))}
    </ul>
  );
}
