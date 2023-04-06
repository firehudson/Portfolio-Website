import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { PROJECTS_PATH, projectFilePaths } from 'utils/mdx';
export { Project as default } from './Project';

export function getStaticProps() {
  const allPosts = projectFilePaths.map(filePath => {
    const source = fs.readFileSync(path.join(PROJECTS_PATH, filePath));
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
