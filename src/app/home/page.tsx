'use client'
import { useState, useEffect } from 'react'
import PostServices from 'sv/post_services'
import PostCard from 'cp/post_card'
import getValuesTens from 'hp/get_values_tens'
import Pagination from 'cp/pagination'
import { useSubscribeState } from "subscribe_state"

export default async function Home() {
  const [{ paginatorHp }, dispatch] = useSubscribeState(["paginatorHp"]);
  const [posts, setpost] = useState(null)

  useEffect(() => {
    const { data, isLoading, error } = PostServices.getPost(getValuesTens(paginatorHp))

    dispatch({
      type: 'changePaginationBtn',
      value: {
        nextBtn: data.next,
        previousBtn: data.previous
      }
    })

    setpost(data.posts);
  }, [paginatorHp])

  return (
    <main>
      {
        <ul>
          {
            posts?.map(post =>
              <li key={post.slug}>
                <PostCard post={{ ...post, ...post.metadata }} />
              </li>
            )
          }
        </ul>
      }
<div className='my-10'>
      <Pagination />
</div>
    </main>
  )
}