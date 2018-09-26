import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import Banner from '../components/banner'
// import { Dump } from '../util/helpers'

const IndexPage = data => (
  <Layout>
    <Banner />
    <h1>Hi people</h1>
    {/* <Dump data={data} /> */}
    <p>Welcome to my personal portfolio site.</p>
    <p>Built with Gatsby and Styled Components 💅</p>{' '}
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
