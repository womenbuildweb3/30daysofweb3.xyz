import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function getCurricContent(folderName = null, fileName) {
  try {
    const postsDirectory = path.join(process.cwd(), "curriculum", folderName);

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, `${fileName}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const curriculum = {
      data: matterResult.data,
      content: matterResult.content,
    };

    return curriculum;
  } catch (err) {
    return null;
  }
}
