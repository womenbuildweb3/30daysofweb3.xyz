import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "github-markdown-css";
import { getNextLesson } from "../utils/lessons"

const CurriculumContent = ({ curricData, id, paths}) => {
  const next = getNextLesson(id, paths);
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
