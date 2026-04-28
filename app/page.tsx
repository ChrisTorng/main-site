import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'

export default async function Page() {
  const publishedBlogs = allBlogs.filter(
    (post) => process.env.NODE_ENV !== 'production' || !post.draft
  )
  const sortedPosts = sortPosts(publishedBlogs)
  const posts = allCoreContent(sortedPosts)
  return <Main posts={posts} />
}
