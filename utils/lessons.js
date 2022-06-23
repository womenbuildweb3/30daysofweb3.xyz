// export function getAllLessons() {
//   return lessons;
// }

export function getNextLesson(categoryName, subCategoryName, navigation) {
  let next = "/";
  let categoryIndex = Number(categoryName.split("-")[0]);
  let subCategoryIndex = Number(subCategoryName.split("-")[0]);
  let nextFile = navigation[categoryIndex]?.children[subCategoryIndex + 1];

  if (nextFile) {
    next =
      "/curriculum/" + categoryName + "/" + nextFile.name.replace(/\.md$/, "");
  } else {
    nextFile = navigation[categoryIndex + 1]?.children[0];
    if (nextFile) {
      next =
        "/curriculum/" +
        navigation[categoryIndex + 1].name.replace(/\.md$/, "") +
        "/";
      nextFile.name.replace(/\.md$/, "");
    }
  }

  return next;
}
