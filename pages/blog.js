// import { gql } from "@apollo/client";
// import client from "../apollo-client";
// import Image from "next/image";
import styles from "../styles/Blog.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import Link from "next/link";
import Head from "next/head";

export default function Blog({ myData }) {
  return (
    <div className={styles.container}>
      <Navbar />
      <Head>
        <title>Blog | Women Build Web3</title>
        <meta
          name="description"
          content="Providing education, oppportunities, and funding to a new wave of web3 builders"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
            <header>
              <h1>
                Blog
              </h1>
              <p className={styles.description}>
                Learn about web3 from our members.
              </p>
            </header>

            <section className={styles.blogPostsContainer}>
              <div className={styles.blogPostCard}>
                <Link href="/blog">
                  <h3 className={styles.blogPostTitle + " link"}>
                    Blog Post Title
                  </h3>
                </Link>
                <p className={styles.blogPostDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
          </div>
          
          <div className={styles.blogPostCard}>
                <Link href="/blog">
                  <h3 className={styles.blogPostTitle + " link"}>
                    Blog Post Title
                  </h3>
                </Link>
                <p className={styles.blogPostDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              {/* {myData.publication.posts.map((post, key) => (
            <div key={post.slug} className="link flex flex-col text-gray-500">
                <Link href="https://camiinthisthang.hashnode.dev/">
              <h1 className="w-full mb-2 text-lg font-medium text-gray-200 md:text-xl dark:text-gray-100 select-none">
                {post.title}
              </h1>
              </Link>
              <p className="text-gray-400 pb-4">{post.brief}</p>
            </div>
          ))} */}
          </section>
      </main>
      <Footer/>
    </div>
  );
}
// export async function getStaticProps() {
//   const { data } = await client.query({
//     query: gql`

//     `,
//   });
//   return {
//     props: {
//       myData: data.user,
//     },
//   };
// }
