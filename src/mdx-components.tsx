import type { MDXComponents } from 'mdx/types';
import { Heading } from '@/components/heading';
import { Header } from './components/markdown/header';
import { Back } from './components/markdown/back';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Header: Header,
    Back: Back,
    ...components,
  };
}