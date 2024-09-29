//post.ts
import { Category } from '../categories';

interface Post {
  slug: string;
  title: string;
  publishDate: string;
  categories: Category[];
  mainImage: string;
  userName: string;
  userImage: string;
}