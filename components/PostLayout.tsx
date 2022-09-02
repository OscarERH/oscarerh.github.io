import { ReactElement, ReactNode } from 'react'
import Layout from './Layout'
type Props = {
  children?: ReactNode
  title?: string
}

export default function PostLayout({ children, title }: Props): ReactElement {
  return (
    <Layout title={title ? `${title} | OscarERH` : 'OscarERH'}>
      <div className='prose prose-invert lg:prose-xl sm:mx-auto mx-3'>
        {children}
      </div>
    </Layout>
  )
}
