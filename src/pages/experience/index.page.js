import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { WORK_PATH, workFilePaths } from 'utils/mdx';
export { Experience as default } from './Experience';

export function getStaticProps() {
  const allPosts = workFilePaths.map(filePath => {
    const source = fs.readFileSync(path.join(WORK_PATH, filePath));
    const { data, content } = matter(source);
    return {
      ...data,
      slug: filePath.replace(/\.mdx?$/, ''),
    };
  });

  const featured = allPosts.find(post => post.featured) || null;

  const posts = allPosts
    .filter(post => post.slug !== featured?.slug)
    .sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    })
    .reverse();

  return {
    props: { posts, featured },
  };
}
