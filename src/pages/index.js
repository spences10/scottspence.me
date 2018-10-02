import React from 'react'
// import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import Banner from '../components/banner'
import SEO from '../components/seo'

// import { Dump } from '../util/helpers'
import { media } from '../theme/globalStyle'

const EmojiWrapper = styled.span.attrs({
  role: 'img'
})``

const Hi = styled.h1`
  margin-top: 5rem;
  ${media.giant`
    margin-top: 5rem;
  `};
  ${media.desktop`
    margin-top: 5rem;
  `};
  ${media.tablet`
    margin-top: 3rem;
  `};
  ${media.phone`
    margin-top: 2rem;
  `};
`

const IndexPage = data => (
  <Layout>
    <Banner />
    <SEO title={"It's me!"} />
    <Hi>Hi people!</Hi>
    {/* <Dump data={data} /> */}
    <p>Welcome to my personal portfolio site.</p>
    <p>
      Built with Gatsby and Styled Components
      {/* eslint-disable-next-line */}
      <EmojiWrapper aria-label="nail polish">💅</EmojiWrapper>
    </p>
  </Layout>
)

export default IndexPage
