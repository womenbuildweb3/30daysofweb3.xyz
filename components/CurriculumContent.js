import { useRouter } from "next/router";
// import Navbar from "./Navbar";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getNextLesson } from "../utils/lessons";
import navigation from "../utils/navigation.json";
import TweetButton from "./TweetButton";
import CodeBlock from "./codeblock";

const CurriculumContent = ({ curricData }) => {
  const router = useRouter();
  const { category, subCategory } = router.query;
  const nextPath = getNextLesson(category, subCategory, navigation);
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
        {nextPath !== "/" && <Link href={nextPath}>
          <button className="flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-royal-600 hover:bg-royal-700 md:py-3 md:text-lg md:px-8">
            Next
          </button>
        </Link>}

        {curricData.data.tweet && <TweetButton copy={curricData.data.tweet}/>}
      </div>
    </div>
  );
};

export default CurriculumContent;
