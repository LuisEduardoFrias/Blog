import { type ComponentPropsWithoutRef } from 'react';
import User from 'svg/user';
import { colorByCategories } from '@/categories.ts';

type HProps = {
  title: string,
  publishDate: string,
  categories: string[],
  userName: string,
  userImage: string,
  mainImage: string,
}

export function Header({ metadata }: HProps) {

  const { title, publishDate, categories, userName, userImage, mainImage } = metadata;

  return (
    <div className="flex flex-col w-full gap-6 items-center">
      <div className="flex gap-4">
        {categories?.map((category, index: number) =>
          <h3 key={index} className='font-sans' style={{ color: Reflect.get(colorByCategories, category) }} >{category}</h3>)}
      </div>

      <h1 className="font-bold w-full font-sans notwrap ms:text-ms text-center md:text-md lg:text-lg xl:text-xl mb-1">
        {title}
      </h1>

      <div className="flex items-center justify-center gap-3">
        {userImage ?
          <img
            className="w-10 h-10 border-2 rounded-full"
            src={userImage}
            alt="Image of user"
          />
          :
          <User size={({ width: 48, height: 48 })} />
        }
        <div className="text-sm flex flex-col justify-start gap-3 items-center text-lg">
          <h2 className="whitespace-nowrap leading-none">{userName}</h2>
          <span className="whitespace-nowrap leading-none">{publishDate}</span>
        </div>
      </div>
      <img className="w-full" src={mainImage} alt="Image of post" />
    </div>
  )
} 0