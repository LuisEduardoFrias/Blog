import path from "path";
import { readdir } from "fs/promises";
import dynamic from 'next/dynamic'

interface Post {
  slug: string;
  title: string;
  publishDate: string;
  categories: Category[];
  mainImage: string,
  userName: string,
  userImage: string,
}

export async function getPosts(): Promise<Post[]> {
  // Retrieve slugs from post routes
  const slugs = (
    await readdir('./src/app/posts/(posts)', { withFileTypes: true })
  ).filter((dirent) => dirent.isDirectory());

  // Retrieve metadata from MDX files
  const posts = await Promise.all(
    slugs.map(async ({ name }) => {
      const { metadata } = await import(`./app/posts/(posts)/${name}/page.mdx`);
      return { slug: name, ...metadata };
    })
  );

  // Sort posts from newest to oldest
  posts.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate));

  return posts;
}

export async function getPostsByCategory({
  category,
}: {
  category: Category;
}): Promise<Post[]> {
  const allPosts = await getPosts();

  // Filter posts by specified category
  const posts = allPosts.filter(
    (post) => post.categories.indexOf(category) !== -1
  );

  return posts;
}

export async function getPaginatedPosts({
  page,
  limit,
}: {
  page: number;
  limit: number;
}): Promise<{ posts: Post[]; total: number }> {
  const allPosts = await getPosts();

  // Get a subset of posts pased on page and limit
  const paginatedPosts = allPosts.slice((page - 1) * limit, page * limit);

  return {
    posts: paginatedPosts,
    total: allPosts.length,
  };
}