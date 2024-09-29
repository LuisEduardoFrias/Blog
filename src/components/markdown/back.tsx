import Link from 'next/link'

export function Back() {
  return (
    <div className='h-20 flex items-center justify-center'>
      <Link href='/' >
        <span className='text-blue-600 hover:text-violet-600'>
          ← View all posts
        </span>
      </Link>
    </div>
  )
}