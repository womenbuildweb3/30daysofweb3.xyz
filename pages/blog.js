import { gql } from "@apollo/client";
import client from "../apollo-client";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Link from "next/link";

export default function Blog({ myData }) {
  return (
    // <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-black">
    <div className={styles.container}>
      <Navbar />
      <div className="max-w-3xl mx-auto pt-6 flex flex-col justify-center items-start max-w-5xl border-gray-200 dark:border-gray-700 mx-auto pb-80">
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <h1 className="pb-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold text-3xl md:text-5xl tracking-tight">
          Blog
        </h1>
        <p className="mb-4 text-lg text-gray-400">
          {" "}
          One of my 2022 goals is to put out more written content! You can
          expect blogs on the following topics:{" "}
        </p>
        <div className="flex flex-row space-x-2 mb-8 flex-wrap">
            <div className="">
                <h2 className="font-medium rounded-lg px-2 bg-indigo-500 text-gray-200 mb-4"> Databases </h2>
            </div>
            <div className="">
                <h2 className="font-medium rounded-lg px-2 bg-indigo-500 text-gray-200 mb-4"> NextJS </h2>
            </div>
            <div className="">
                <h2 className="font-medium rounded-lg px-2 bg-indigo-500 text-gray-200 mb-4"> GraphQL </h2>
            </div>
            <div className="">
                <h2 className="font-medium rounded-lg px-2 bg-indigo-500 text-gray-200 mb-4"> Web3 </h2>
            </div>
            <div className="">
                <h2 className="font-medium rounded-lg px-2 bg-indigo-500 text-gray-200 mb-4"> React </h2>
            </div>
            <div className="">
                <h2 className="font-medium rounded-lg px-2 bg-indigo-500 text-gray-200 mb-4"> Javascript </h2>
            </div>
            <div className="">
                <h2 className="font-medium rounded-lg px-2 bg-indigo-500 text-gray-200 mb-4"> Solidity </h2>
            </div>
            <div className="">
                <h2 className="font-medium rounded-lg px-2 bg-indigo-500 text-gray-200 mb-4"> TailwindCSS </h2>
            </div>
            
            <div className="">
                <h2 className="font-semibold rounded-lg px-2 bg-indigo-500 text-gray-200 mb-4"> Career </h2>
            </div>
            

        </div>
        <div className="max-w-3xl mx-auto">
          <h1 className="pb-6 text-white font-bold text-xl md:text-3xl tracking-tight">
            Fresh Off The Press
          </h1>
          {myData.publication.posts.map((post) => (
            <div className="flex flex-col text-gray-500">
                <Link href="https://camiinthisthang.hashnode.dev/">
              <h1 className="w-full mb-2 text-lg font-medium text-gray-900 md:text-xl dark:text-gray-100 select-none">
                {post.title}
              </h1>
              </Link>
              <p className="text-gray-400 pb-4">{post.brief}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query myPosts {
        user(username: "camiinthisthang") {
          photo
          blogHandle
          publication {
            posts(page: 0) {
              title
              brief
              coverImage
              slug
              totalReactions
              author {
                username
              }
              dateAdded
            }
          }
        }
      }
    `,
  });
  console.log("this is posts inside blog!!!", data.user.publication.posts);
  return {
    props: {
      myData: data.user,
    },
  };
}
