import path from "path";
import { readdir } from "fs/promises";
import dynamic from 'next/dynamic'

/*

export default async function getPosts(start: number = 0, end: number = 10) {
  if (start > end) {
    throw new Error('El valor inicial no puede ser mayor que el final.');
  }

  const slugs = (
    await readdir('./src/app/(posts)', { withFileTypes: true })
  ).filter((dirent) => dirent.isDirectory());

  const posts = await Promise.all(
    slugs
      .map(async ({ name }) => {
        const mdx = await import(`../app/(posts)/${name}/page.mdx`);
        return { slug: name, metadata: mdx.metadata };
      })
  );

  const totalPosts = slugs.length;
  const previous = start > 0;
  const next = end < totalPosts - 1;

  posts.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate));

  return {
    posts,
    previous,
    next,
  };

*/

export default async function getPosts(start: number = 0, end: number = 10) {
  if (start > end) {
    throw new Error('El valor inicial no puede ser mayor que el final.');
  }

  const slugs = (
    await readdir('./src/app/posts/(posts)', { withFileTypes: true })
  ).filter((dirent) => dirent.isDirectory());

  const posts = await Promise.all(
    slugs.map(async ({ name }) => {
      const mdx = await import(`../app/posts/(posts)/${name}/page.mdx`);
      return { slug: name, metadata: mdx.metadata };
    }).slice(start, end + 1)
  );

  const totalPosts = slugs.length;
  const previous = start > 0;
  const next = end < totalPosts - 1;

  posts.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate));

  return {
    posts,
    previous,
    next,
  };
}
