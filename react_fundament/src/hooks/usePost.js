import {useMemo} from "react";

const useSortedPost = (posts, select) => {
  const sortedPosts = useMemo(() => {
    if (select && posts.length) {
      return [...posts].sort((a,b) => a[select].localeCompare(b[select]))
    } else {
      return posts;
    }
  },[select, posts])

  return sortedPosts;
}

export const usePosts = (posts, select, search) => {
  const sortedPost = useSortedPost(posts, select)
  return sortedPost.filter(item => item.title.toUpperCase().includes(search.toUpperCase()))
}
