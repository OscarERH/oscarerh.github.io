import Layout from 'components/Layout'
import PostList from 'components/PostList'
import About from 'components/About'
import { ReactElement } from 'react'

export default function Home(): ReactElement {
  return (
    <Layout title='OscarERH'>
      <About />
      <PostList />
    </Layout>
  )
}
