//
import React from 'react'
import Link from 'next/link'
import User from 'svg/user'
import { type Post } from '@/posts';
import { post } from 'itf/post'
import { colorByCategories } from '@/categories';

type PCProps = {
  slug: string,
  mainImage: string,
  categories: string[],
  title: string,
  userImage: string,
  userName: string,
  publishDate: string,
}

export default function PostCard({ post }: PCPost) {
  const { slug, mainImage, categories, title, userImage, userName, publishDate } = post;

  return (
    <div className="max-w-sm overflow-hidden lg:m-9 mb-6 active:border-2 hover:border-2 hover:p-2 active:p-2 rounded-lg">
      <Link href={`posts/${slug}`}>

        <img className="w-full rounded-lg" src={mainImage} alt="Imagen principal" />

        <div>
          <div className="flex space-x-2 mb-4">
            {categories?.map((category: string, index: number) =>
              <span key={index} style={{ color: Reflect.get(colorByCategories, category) }} className="inline-block px-3 py-1 text-sm font-semibold mr-2" >
                {category}
              </span>
            )}
          </div>
          <span className="font-bold ms:text-ms md:text-md lg:text-lg xl:text-xl mb-1">{title}</span>
        </div>

        <div className="flex items-center gap-3">
          {userImage ? <img className="w-10 h-10 rounded-full" src={userImage} alt="Usuario" /> : <User size={({ width: 48, height: 48 })} />}
          <div className="text-sm flex gap-3 items-center text-lg">
            <span className="whitespace-nowrap leading-none">{userName}</span>
            <span className="text-6xl">{"·"}</span>
            <span className="whitespace-nowrap leading-none">{publishDate}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}