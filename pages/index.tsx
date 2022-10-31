import About from 'components/About'
import Layout from 'components/Layout'
import PostList from 'components/PostList'
import fs from 'fs'
import glob from 'glob-promise'
import matter from 'gray-matter'
import { Post } from 'interfaces'
import path from 'path'
import { ReactElement } from 'react'

type Props = {
  posts: Post[]
}
export default function Home({ posts }: Props): ReactElement {
  return (
    <Layout title='OscarERH'>
      <About />
      <PostList posts={posts} />
    </Layout>
  )
}

export const getStaticProps = async () => {
  const POSTS_DIR = path.join(process.cwd(), 'posts')
  const postPaths = await glob(path.join(POSTS_DIR, '**/*.md'))
  const posts = postPaths.map((postPath) => {
    const slug = path.basename(postPath, path.extname(postPath))
    const source = fs.readFileSync(postPath, 'utf-8')

    const matterResult = matter(source)
    const { title, date, cover } = matterResult.data

    return {
      title,
      date,
      slug,
      cover
    }
  })

  const sortedPosts = posts.slice(0, 9).sort((a, b) => b.date - a.date)

  return { props: { posts: sortedPosts } }
}
