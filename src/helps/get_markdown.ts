import path from "path";
import { promises as fs } from "fs";
import { useMDXComponents } from "@/mdx-components";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

// Añadir componentes personalizados
const components = useMDXComponents({});

export default async function getMarkdown(fileName: string) {
  try {
    const filePath = getContentPath('dhdhkdvwu72hkdhjdihdj62n7w7w8du');
    console.log(getContentPath('dhdhkdvwu72hkdhjdihdj62n7w7w8du'));

    const source = await fs.readFile(filePath, 'utf-8');

    const { content, frontmatter } = await compileMDX({
      source,
      options: {
        mdxOptions: {
          rehypePlugins: [rehypeHighlight, rehypeSlug],
          remarkPlugins: [remarkGfm],
        },
        parseFrontmatter: true,
      },
      components,
    });

    return {
      content,
      frontmatter,
    };
  } catch (err) {
    console.error(err);
    throw new Error('Error al obtener el contenido markdown');
  }
}

function getContentPath(fileName: string) {
  return path.join(process.cwd(), 'src', 'markdown', `${fileName}.mdx`);
}