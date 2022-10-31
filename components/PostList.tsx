import { format } from 'date-fns'
import { Post } from 'interfaces'
import Image from 'next/image'
import Link from 'next/link'
import { ReactElement } from 'react'

type Props = {
  posts: Post[]
}
export default function PostList({ posts }: Props): ReactElement {
  return (
    <div className='mx-auto max-w-screen-lg px-3 py-6'>
      <div className='mb-6 text-2xl font-bold'>
        <div className='flex items-baseline justify-between'>
          <div>
            Recent{' '}
            <span className='bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent'>
              Posts
            </span>
          </div>
          <div className='text-sm'>
            <Link href='/blog'>
              <a>View all Posts →</a>
            </Link>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
        {posts.map((p) => {
          return (
            <Link href={`/blog/${p.slug}`} key={p.slug}>
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
  )
}
