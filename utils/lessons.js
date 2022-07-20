export function getNextLesson(categoryName, subCategoryName, navigation) {
  let next = "/";
  let categoryIndex = Number(categoryName.split("-")[0])-1;
  let subCategoryIndex = Number(subCategoryName.split("-")[0]);
  let nextFile = navigation[categoryIndex]?.children[subCategoryIndex + 1];

  if (nextFile) {
    next = nextFile.href
  } else {
    nextFile = navigation[categoryIndex + 1]?.children[0];
    if (nextFile) {
      return nextFile.href
    }
  }

  return next;
}
