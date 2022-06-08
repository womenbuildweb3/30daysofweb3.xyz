import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "curriculum");

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
    let file = fileName.replace(/\.md$/, "");
    // file = file.replace(/\d-/g, "");

    return {
      params: {
        id: file
      },
    };
  });
}