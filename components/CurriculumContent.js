import { useRouter } from "next/router";
// import Navbar from "./Navbar";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getNextLesson } from "../utils/lessons";
import TweetButton from "./TweetButton";
import CodeBlock from "./CodeBlock";

const CurriculumContent = ({ curricData, navigation }) => {
  const router = useRouter();
  const { category, subCategory } = router.query;
  const nextPath = getNextLesson(category, subCategory, navigation);
  console.log("NAVIGATION", navigation)
  console.log("NEXT", nextPath)
  return (
    <div className="bg-white px-4 py-16">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        className="prose prose-blue prose-lg mx-auto"
        components={CodeBlock}
      >
        {curricData.content}
      </ReactMarkdown>

      <div className="flex justify-center w-full mt-5">
        {nextPath !== "/" && (
          <a href={nextPath}>
            <button className="flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-royal-600 hover:bg-royal-700 md:py-3 md:text-lg md:px-8">
              Next
            </button>
          </a>
        )}

        {curricData.data.tweet && <TweetButton copy={curricData.data.tweet} />}
      </div>
    </div>
  );
};

export default CurriculumContent;
