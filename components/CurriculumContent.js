import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "github-markdown-css";
import { getNextLesson } from "../utils/lessons";

const CurriculumContent = ({ curricData, id, paths }) => {
  // const next = getNextLesson(id, paths);

  return (
    <div className="bg-white px-4 py-16">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        className="prose prose-blue prose-lg mx-auto"
      >
        {curricData.content}
      </ReactMarkdown>
      {/* <div>
        <Link href={next}>
          <button className="flex justify-center bg-indigo-800 w-full rounded-md p-2">
            Next
          </button>
        </Link>
      </div> */}
    </div>
  );
};

export default CurriculumContent;
