import fs from "fs";
import path from "path";
import dirTree from "directory-tree";

const postsDirectory = path.join(process.cwd(), "curriculum/");

export default function getAllPostIds() {
  const navigationTree = dirTree(postsDirectory, { attributes: ["type"] });

  let returnGeneratedPaths = (tree) => {
    let paths = [];
    let generatePaths = (parentTree) => {
      parentTree.children.map((subTree, index) => {
        if (subTree.type == "directory") {
          paths.push({
            params: {
              category: subTree.name,
              subCategory: "0-overview",
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
  //       category: 'ssg-ssr',
  //       subCategory: 'blah blah'
  //     }
  //   },
  //   {
  //     params: {
  //       category: 'pre-rendering'
  //     }
  //   }
  // ]
  return paths;
}
