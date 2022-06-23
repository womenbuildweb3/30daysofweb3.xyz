import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "github-markdown-css";
import { getNextLesson } from "../utils/lessons";
import navigation from "../utils/navigation.json";

const CurriculumContent = ({ curricData }) => {
  const router = useRouter();
  const { category, subCategory } = router.query;
  const nextPath = getNextLesson(category, subCategory, navigation);
  console.log(nextPath);
  return (
    <div className="bg-white px-4 py-16">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        className="prose prose-blue prose-lg mx-auto"
      >
        {curricData.content}
      </ReactMarkdown>
      <div className="flex justify-center w-full mt-5">
        <Link href={nextPath}>
          <button className="flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-royal-600 hover:bg-royal-700 md:py-3 md:text-lg md:px-8">
            {nextPath == "/" ? "Finish. Let's Tweet!" : "Next"}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CurriculumContent;
