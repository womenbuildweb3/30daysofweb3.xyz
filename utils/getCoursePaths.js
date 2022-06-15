import fs from "fs";
import path from "path";
import dirTree from "directory-tree";

console.log("called");
const postsDirectory = path.join(process.cwd(), "curriculum");

export default function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  const navigationTree = dirTree(postsDirectory);

  console.log("filenames", fileNames);
  try {
    const files = fs.readdir(path);
    for (const file of files) console.log(file);
  } catch (err) {
    console.error(err);
  }

  return {
    paths: fileNames.map((fileName) => {
      console.log(fileName);
      let file = fileName.replace(/\.md$/, "");

      return {
        params: {
          type: file,
          id: file,
        },
      };
    }),
  };
}
