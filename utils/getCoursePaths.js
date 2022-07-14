import path from "path";
import dirTree from "directory-tree";


export default function getCoursePaths(locale) {
  let postsDirectory;
  if(locale){
    postsDirectory = path.join(process.cwd(), `curriculum/${locale}`);
  } else{
    postsDirectory = path.join(process.cwd(), "curriculum/en");
  }
  const navigationTree = dirTree(postsDirectory, { attributes: ["type"] });

  let returnGeneratedPaths = (tree) => {
    let paths = [];
    let generatePaths = (parentTree) => {
      parentTree.children.map((subTree, index) => {
        if (subTree.type == "directory") {
          // paths.push({
          //   category: subTree.name,
          //   subCategory: "0-overview",
          // });
          if (subTree?.children) {
            generatePaths(subTree, paths);
          }
        } else {
          let name = subTree.name.replace(/\.md$/, "");
          paths.push({
            category: parentTree.name,
            subCategory: name,
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
  //       category: 'ssg-ssr',
  //       subCategory: 'blah blah'
  //   },
  //   {
  //       category: 'pre-rendering'
  //   }
  // ]
  return paths;
}
