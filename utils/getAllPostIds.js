import fs from "fs";
import path from "path";
import dirTree, { DirectoryTree } from "directory-tree";

console.log("called");
const postsDirectory = path.join(process.cwd(), "curriculum/");

export default function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  const navigationTree = dirTree(postsDirectory, { attributes: ["type"] });

  let returnGeneratedPaths = (tree) => {
    let paths = [];
    let generatePaths = (parentTree) => {
      parentTree.children.map((subTree, index) => {
        if (subTree.type == "directory") {
          paths.push({
            params: {
              category: subTree.name,
              subCategory: "overview",
            },
          });
          if (subTree?.children) {
            generatePaths(subTree, paths);
          }
        } else {
          let categoryName = parentTree.name;
          let name = subTree.name.replace(/\.md$/, "");
          paths.push({
            params: {
              category: parentTree.name,
              subCategory: name,
            },
          });
        }
      });
    };
    generatePaths(tree);
    return paths;
  };

  let paths = returnGeneratedPaths(navigationTree);

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
  return paths;
}
