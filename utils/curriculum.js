import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'curriculum');

export default function getCurricContent(fileName) {
    // Read markdown file as string
    const fullPath = path.join(postsDirectory, `${fileName}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const curriculum = {
        data: matterResult.data,
        content: matterResult.content
    }

    return curriculum
   
}