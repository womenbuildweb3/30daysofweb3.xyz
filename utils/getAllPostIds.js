import navigationTree from "./navigation.json";

export default function getAllPostIds() {
  let returnGeneratedPaths = (tree) => {
    let paths = [];
    let generatePaths = (parentTree) => {
      parentTree.map((subTree, index) => {
        if (subTree.type == "directory") {
          paths.push({
            params: {
              category: subTree.name,
              subCategory: "overview",
            },
          });
          if (subTree?.children) {
            generatePaths(subTree.children, paths);
          }
        } else {
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
