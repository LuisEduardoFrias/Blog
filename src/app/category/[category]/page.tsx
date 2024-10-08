import { categories, type Category } from '@/categories';
import { Posts } from '@/components/posts';
import { getPostsByCategory } from '@/posts';
import { notFound } from 'next/navigation';

export default async function Category({
  params,
}: {
  params: { category: Category };
}) {
  const { category } = params;

  // 404 if the category does not exist
  if (categories.indexOf(category) == -1) notFound();

  const posts = await getPostsByCategory({ category });

  return (
    <main>
      <h1>Category: {category}</h1>
      <Posts posts={posts} />
    </main>
  );
}

export function generateStaticParams() {
  return categories.map((category) => ({
    category,
  }));
}