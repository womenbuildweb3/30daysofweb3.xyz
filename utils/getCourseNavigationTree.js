// import fs from "fs";
// import path from "path";
// import dirTree from "directory-tree";
// import _ from "lodash";
// import getFileNameCapitals from "./getTitlefromFileNames";

// const postsDirectory = path.join(process.cwd(), "curriculum/");

// export default function getAllPostIds() {
//   let navigationTree = dirTree(postsDirectory, { attributes: ["type"] });

//   navigationTree?.children?.map((category, index) => {
//     let href = "/curriculum" + "/" + category.name + "/";
//     let categoryName = getFileNameCapitals(category.name);
//     navigationTree.children[index] = {
//       ...navigationTree.children[index],
//       current: false,
//       href: href + "0-overview",
//       title: _.startCase(categoryName),
//     };
//     if (category?.children) {
//       category?.children?.map((subCategory, index1) => {
//         let subCategoryName = getFileNameCapitals(subCategory.name);
//         let subCateroryLink = subCategory.name.replace(/\.md$/, "");
//         navigationTree.children[index].children[index1] = {
//           ...navigationTree.children[index].children[index1],
//           current: false,
//           href: href + subCateroryLink,
//           title: _.startCase(subCategoryName),
//         };
//       });
//     }
//   });

//   return navigationTree;
// }
