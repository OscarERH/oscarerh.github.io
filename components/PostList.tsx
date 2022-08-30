import { ReactElement } from 'react'

export default function PostList(): ReactElement {
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
            <a href='/posts'>View all Posts →</a>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
        <a
          className='hover:translate-y-1'
          href='/sixth-post'
        >
          <div className='overflow-hidden rounded-md bg-slate-800'>
            <div className='aspect-w-3 aspect-h-2'>
              <img
                className='h-full w-full object-cover object-center'
                src='https://i.imgur.com/71MbO9v.jpeg'
                alt='Image post'
                loading='lazy'
              />
            </div>
            <div className='px-3 pt-4 pb-6 text-center'>
              <h2 className='text-xl font-semibold'>Typography example</h2>
              <div className='mt-1 text-xs text-gray-400'>Feb 6, 2020</div>
              <div className='mt-2 text-sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                vero esse non molestias eos excepturi.
              </div>
            </div>
          </div>
        </a>
        <a
          className='hover:translate-y-1'
          href='/fifth-post'
        >
          <div className='overflow-hidden rounded-md bg-slate-800'>
            <div className='aspect-w-3 aspect-h-2'>
              <img
                className='h-full w-full object-cover object-center'
                src='https://i.imgur.com/71MbO9v.jpeg'
                alt='Image post 2'
                loading='lazy'
              />
            </div>
            <div className='px-3 pt-4 pb-6 text-center'>
              <h2 className='text-xl font-semibold'>
                5th Lorem ipsum dolor sit
              </h2>
              <div className='mt-1 text-xs text-gray-400'>Feb 5, 2020</div>
              <div className='mt-2 text-sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                vero esse non molestias eos excepturi.
              </div>
            </div>
          </div>
        </a>
        <a
          className='hover:translate-y-1'
          href='/forth-post'
        >
          <div className='overflow-hidden rounded-md bg-slate-800'>
            <div className='aspect-w-3 aspect-h-2'>
              <img
                className='h-full w-full object-cover object-center'
                src='https://i.imgur.com/71MbO9v.jpeg'
                alt='Image post 3'
                loading='lazy'
              />
            </div>
            <div className='px-3 pt-4 pb-6 text-center'>
              <h2 className='text-xl font-semibold'>
                4th Lorem ipsum dolor sit
              </h2>
              <div className='mt-1 text-xs text-gray-400'>Feb 4, 2020</div>
              <div className='mt-2 text-sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                vero esse non molestias eos excepturi.
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}
