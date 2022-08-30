import { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'OscarERH' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <div>
      <div className='mx-auto max-w-screen-lg px-3 py-6'>
        <div className='flex flex-col gap-y-3 sm:flex-row sm:items-center sm:justify-between'>
          <Link href='/'>
            <a>
              <div className='flex items-center bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-xl font-bold text-transparent'>
                OscarERH's Blog
              </div>
            </a>
          </Link>
          <nav>
            <ul className='flex gap-x-3 font-medium text-gray-200'>
              <li className='hover:text-white'>
                <Link href='/posts'>
                  <a>Blog</a>
                </Link>
              </li>
              <li className='hover:text-white'>
                <a
                  href='https://github.com/OscarERH/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  GitHub
                </a>
              </li>
              <li className='hover:text-white'>
                <a
                  href='https://twitter.com/OscarERH'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Twitter
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {children}
    </div>
  </div>
)

export default Layout
