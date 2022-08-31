import { ReactElement } from 'react'

export default function About(): ReactElement {
  return (
    <div className='mx-auto max-w-screen-lg px-3 py-6'>
      <div className='flex flex-col items-center md:flex-row md:justify-between md:gap-x-24'>
        <div>
          <h1 className='text-3xl font-bold'>
            Hi there, I'm{' '}
            <span className='bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent'>
              Oscar
            </span>{' '}
            👋
          </h1>
          <p className='mt-6 text-xl leading-9'>
            I'm a web developer from Venezuela, who loves open source and
            videogames, and is currently working at{' '}
            <a
              className='text-cyan-400 hover:underline'
              href='https://enigma.pe/'
              target='_blank'
              rel='noreferrer'
            >
              Enigma
            </a>
            . I mainly code in TypeScript and PHP but in 2020 I fell in love
            with Next.js, React, NodeJS and so many other modern web frameworks.
            I am always learning. Currently I'm teaching myself data structures
            and algorithms in JavaScript, here you will find some of my
            insights.
          </p>
        </div>
      </div>
    </div>
  )
}
