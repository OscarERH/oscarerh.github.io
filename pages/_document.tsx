import { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link'

export default function Document() {
  return (
    <Html>
      <Head />
      <body className='bg-slate-900 text-gray-100 min-h-screen'>
        <Main />
        <NextScript />
        <footer className='mx-auto max-w-screen-lg px-3 py-6 mt-auto sticky top-[100vh]'>
          <div className='border-t border-gray-600 pt-5'>
            <div className='text-sm text-gray-200'>
              Built with ♥ by{' '}
              <Link href='/'>
                <a className='text-cyan-400 hover:underline'>OscarERH</a>
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </Html>
  )
}
