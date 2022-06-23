import _ from "lodash";

export default function getFileNameCapitals(fileName) {
  let name = fileName.replace(/\.md$/, "");
  name = name.split("-");
  name.shift();
  name = name.join("-");
  return name;
}
