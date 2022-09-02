import Markdoc from '@markdoc/markdoc'
import PostLayout from 'components/PostLayout'
import { format } from 'date-fns'
import fs from 'fs'
import glob from 'glob-promise'
import matter from 'gray-matter'
import { Post } from 'interfaces'
import { GetStaticPropsContext } from 'next'
import path from 'path'
import React, { ReactNode } from 'react'

const config = {
  nodes: {
    paragraph: {
      render: 'Paragraph'
    }
  }
}

type ComponentProps = {
  children: ReactNode
}

type PageParams = {
  slug: string
}
const components = {
  Paragraph: ({ children }: ComponentProps) => {
    return <p className='leading-relaxed mb-8 text-lg'>{children}</p>
  }
}

const BlogPostPage = (post: Post) => {
  const { content, title, date } = post
  const parsedContent = JSON.parse(content)
  return (
    <PostLayout title={title}>
      <>
        <p className='text-right inset-x-0 text-slate-400 text-xs"'>{date}</p>
        <h1>{title}</h1>
        {Markdoc.renderers.react(parsedContent, React, {
          components
        })}
      </>
    </PostLayout>
  )
}

export const getStaticPaths = async () => {
  const POSTS_DIR = path.join(process.cwd(), 'posts')

  const postPaths = await glob(path.join(POSTS_DIR, '**/*.md'))

  const paths = postPaths.map((postPath) => {
    const slug = path.basename(postPath, path.extname(postPath))
    return { params: { slug } }
  })

  return { paths, fallback: true }
}

export const getStaticProps = async (
  context: GetStaticPropsContext<PageParams>
) => {
  const POSTS_DIR = path.join(process.cwd(), 'posts')

  const slug = context.params?.slug
  const fullPath = path.join(POSTS_DIR, `${slug}.md`)

  const source = fs.readFileSync(fullPath, 'utf-8')
  const matterResult = matter(source)
  const { title, date } = matterResult.data
  const ast = Markdoc.parse(source)
  const content = JSON.stringify(Markdoc.transform(ast, config))

  return {
    props: {
      content,
      title,
      date: format(new Date(date), 'MMMM dd yyyy')
    }
  }
}

export default BlogPostPage
