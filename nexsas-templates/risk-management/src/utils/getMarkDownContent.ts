import matter from 'gray-matter';
import fs from 'node:fs';

const getMarkDownContent = (folder: string, slug: string) => {
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, 'utf8');
  const matterResult = matter(content);
  return matterResult;
};

export default getMarkDownContent;
