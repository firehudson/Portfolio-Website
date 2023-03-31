import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { WORK_PATH, workFilePaths } from 'utils/mdx';
export { Work as default } from './Work';

export function getStaticProps() {
  const allPosts = workFilePaths.map(filePath => {
    const source = fs.readFileSync(path.join(WORK_PATH, filePath));
    const { data, content } = matter(source);
    return {
      ...data,
      slug: filePath.replace(/\.mdx?$/, ''),
    };
  });

  const featured = allPosts.find(post => post.featured);

  const posts = allPosts
    .filter(post => post.slug !== featured.slug)
    .sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    })
    .reverse();

  return {
    props: { posts, featured },
  };
}
