import * as React from 'react'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout pageTitle="Eric Echelle">
      <p>Portfolio site, built on AWS Infrastructure.</p>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage