import Head from "next/head";
import { useRouter } from "next/router";
// import Navbar from "./Navbar";
// import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getNextLesson } from "../utils/lessons";
import TweetButton from "./TweetButton";
import CodeBlock from "./CodeBlock";
import { InformationCircleIcon } from "@heroicons/react/solid";

const CurriculumContent = ({ curricData, navigation }) => {
  const router = useRouter();
  const { category, subCategory } = router.query;
  const nextPath = getNextLesson(category, subCategory, navigation);

  // console.log("curricData.data", curricData.data);

  const metaTitle = `${curricData.data.title} | 30 Days of Web3`;
  const metaDescription = curricData.data.description;
  const baseUrl = "https://www.30daysofweb3.xyz";

  return (
    <div className="bg-white px-4 py-16">
      <Head>
        <title>{curricData.data.title}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${baseUrl}${router.asPath}`} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={`${baseUrl}/images/og-image.png`} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@womenbuildweb3" />
        <meta property="twitter:url" content={`${baseUrl}${router.asPath}`} />
        <meta property="twitter:title" content={metaTitle} />
        <meta property="twitter:description" content={metaDescription} />
        <meta
          property="twitter:image"
          content={`${baseUrl}/images/twitter-image.png`}
        />
        <meta property="twitter:image:alt" content="30 Days of Web3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="prose prose-blue prose-lg mx-auto">
        <h1>{curricData.data.title}</h1>

        {curricData.data.optional === true && (
          <div className="not-prose rounded-md bg-blue-50 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <InformationCircleIcon
                  className="h-6 w-6 text-blue-400"
                  aria-hidden="true"
                />
              </div>
              <div className="ml-3 flex-1 md:flex md:justify-between">
                <p className="text-base text-blue-700">
                  {curricData.data.optionalMsg}
                </p>
                <p className="mt-3 text-base md:mt-0 md:ml-6">
                  <a
                    href={curricData.data.optionalNextPath}
                    className="whitespace-nowrap font-medium text-blue-700 hover:text-blue-600"
                  >
                    Jump Ahead <span aria-hidden="true">&rarr;</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        )}

        <ReactMarkdown remarkPlugins={[remarkGfm]} components={CodeBlock}>
          {curricData.content}
        </ReactMarkdown>

        <div className="not-prose flex justify-end mt-10">
          {nextPath !== "/" && (
            <a href={nextPath}>
              <button className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-royal-600 hover:bg-royal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-royal-500">
                Next
              </button>
            </a>
          )}

          {curricData.data.tweet && (
            <TweetButton copy={curricData.data.tweet} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CurriculumContent;
