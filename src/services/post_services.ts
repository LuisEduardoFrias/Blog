import { api_router_post } from 'hp/api_router'
import { useTanStackQuery } from '@tanstack/react-query';

export default function PostServices() {
  return {
    getPost
  }
}

function getPost(paginationValue: number) {
  const path = api_router_post.get(paginationValue);
  
  const { data, isLoading, error } = useTanStackQuery(['getPost', paginationValue], 
  () => fetch(path).then(res => res.json()));
  
  return { data, isLoading, error };
}