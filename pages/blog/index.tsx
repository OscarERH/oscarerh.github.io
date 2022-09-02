import Layout from 'components/Layout'
import { format } from 'date-fns'
import fs from 'fs'
import glob from 'glob-promise'
import matter from 'gray-matter'
import { Post } from 'interfaces'
import Image from 'next/image'
import Link from 'next/link'
import path from 'path'

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

  const sortedPosts = posts.sort((a, b) => b.date - a.date)

  const parsedDatePosts = sortedPosts.map((post) => {
    return {
      ...post,
      date: format(post.date, 'MM/dd/yyyy')
    }
  })
  return { props: { posts: parsedDatePosts } }
}

type Props = {
  posts: Post[]
}
const Blog = ({ posts }: Props) => {
  return (
    <Layout title='OscarERH | Blog'>
      <div className='mx-auto max-w-screen-lg px-3 py-6'>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
          {posts.map((p, i) => {
            return (
              <Link href={`/blog/${p.slug}`} key={i}>
                <a className='hover:translate-y-1'>
                  <div className='overflow-hidden rounded-md bg-slate-800'>
                    <div className='aspect-w-3 aspect-h-2'>
                      <Image
                        alt={`${p.slug} cover`}
                        src={p.cover}
                        width='500'
                        height='500'
                        className='h-full w-full object-cover object-center'
                        loading='lazy'
                      />
                    </div>
                    <div className='px-3 pt-4 pb-6 text-center'>
                      <h2 className='text-2xl font-semibold'>{p.title}</h2>
                      <div className='mt-1 text-sm text-gray-400'>
                        {format(new Date(p.date), 'MMMM dd yyyy')}
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Blog
