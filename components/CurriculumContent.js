import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "github-markdown-css";

const getNextLesson = (id) => {
  switch (id) {
    case "1-introduction-to-web3":
      return "2-intro-dev-setup";
      break;
    case "2-intro-dev-setup":
      return "3-intro-to-blockchain-development";
      break;
    case "3-intro-to-blockchain-development":
    return "4-wallet-setup";
      break;
    case "4-wallet-setup":
      return "5-intro-to-building"
      break;
    case "5-intro-to-building":
      return "5.1-hello-world-solidity"
      break;
    case "5.1-hello-world-solidity":
      return "6-dapp-requirements"
      break;
    case "6-dapp-requirements":
      return "glossary"
      break;
      return 
    default:
      return "1-introduction-to-web3";
  }
};

const CurriculumContent = ({ curricData, id }) => {
  const next = getNextLesson(id);
  return (
    <main>
      <div className="py-6 ml-80">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
          {/* <Navbar preferedColorScheme={preferedColorScheme} /> */}
          <h1 className="text-2xl font-semibold text-white">
            {curricData.data.title}
          </h1>
        </div>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
          {curricData.data.description}
          <div className="py-4">
            <div className="border-4 border-gray-200 rounded-lg min-h-96">
              <div className="px-5 py-5 markdown-body">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {curricData.content}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Link href={next}>
            <button className="flex justify-center bg-indigo-800 w-full rounded-md p-2">
              Next Lesson
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default CurriculumContent;
