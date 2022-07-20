const upperCase = (string) => {
  let capitalizeLetterFunc = match => match.toUpperCase();
  return string.replace(/(^\w{1})|(\s{1}\w{1})/g, capitalizeLetterFunc);
}

export default function pathsToNav(paths, locale) {
  let navigation = []
  let category;
  let count = -1;
  
  paths.forEach((path) => {
    let title = path.subCategory.replace(/\d-/g, '')
    title = title.replace(/-/g, ' ')
    title = upperCase(title)

    let dirTitle = path.category.replace(/\d-/g, '')
    dirTitle = dirTitle.replace(/-/g, ' ')
    dirTitle = upperCase(dirTitle)

    let href;
    if (locale) {
      href = `/${locale}/curriculum/${path.category}/${path.subCategory}`;
    } else {
      href = `/curriculum/${path.category}/${path.subCategory}`;
    }

    if (path.category !== category) {
      count++;
      category = path.category;

      navigation.push({
        name: path.category,
        children: [],
        type: "directory",
        href,
        title: dirTitle
      });

      navigation[count].children.push({
        href,
        name: path.subCategory,
        title,
        type: "file",
      });
    } else {
      navigation[count].children.push({
        href,
        name: path.subCategory,
        title,
        type: "file",
      });
    }
  });
  // console.log("BRAND NEW NAVTIGATION", navigation);

  return navigation
}
