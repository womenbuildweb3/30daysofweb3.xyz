import fs from 'fs';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'curriculum');

export default function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory);
  
    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]
    return fileNames.map((fileName) => {
      return {
        params: {
          id: fileName.replace(/\.md$/, ''),
        },
      };
    });
  }


// const navigation = [
//   {
//     name: "The Curriculum",
//     ref: "get-started",
//     icon: SolidSparkles,
//     current: true,
//   },
//   {
//     name: "Lesson 1 - Introduction to Web3",
//     ref: "introduction-to-web3",
//     icon: SparklesIcon,
//     current: false,
//   },
//   {
//     name: "Lesson 2 - Introduction to Blockchain",
//     ref: "introduction-to-blockchain",
//     icon: SparklesIcon,
//     current: false,
//   },
//   {
//     name: "Lesson 3 - Introduction to Solidity",
//     ref: "introduction-to-solidity",
//     icon: SparklesIcon,
//     current: false,
//   },
//   {
//     name: "Lesson 4 - Introduction to IPFS",
//     href: "introduction-to-ipfs",
//     icon: SparklesIcon,
//     current: false,
//   },
//   {
//     name: "Lesson 5 - Introduction to Polygon",
//     href: "",
//     icon: SparklesIcon,
//     current: false,
//   },
//   {
//     name: "Lesson 6 - Introduction to The Graph",
//     href: "#",
//     icon: SparklesIcon,
//     current: false,
//   },
//   {
//     name: "Lesson 7 - Front End Tooling w/ ethers.js",
//     href: "#",
//     icon: SparklesIcon,
//     current: false,
//   },
//   {
//     name: "Lesson 8 - Introduction to Infura & RPCs",
//     href: "#",
//     icon: SparklesIcon,
//     current: false,
//   },
//   {
//     name: "The end: Closing Thoughts",
//     href: "#",
//     icon: SparklesIcon,
//     current: false,
//   },
// ];