import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import Banner from '../components/banner'
import SEO from '../components/seo'
import { StyledHyperLink as SHL } from '../components/shared'

// import { Dump } from '../util/helpers'
import { media } from '../theme/globalStyle'

const EmojiWrapper = styled.span.attrs({
  role: 'img'
})``

const StyledHyperLink = styled(SHL)`
  font-family: ${props => props.theme.fontBody};
  color: ${props => props.theme.fontDark};
`

const Hi = styled.span`
  font-size: 2rem;
  font-weight: 900;
  color: ${props => props.theme.fontDark};
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
    <SEO
      title={"It's me!"}
      description={data.site.siteMetadata.description || 'nothin’'}
      image={data.site.siteMetadata.imageLink}
    />
    <Hi>
      Hi people!
      <EmojiWrapper aria-label="waving hand">👋</EmojiWrapper>
    </Hi>
    {/* <Dump data={data} /> */}
    <p>Welcome to my personal portfolio site.</p>
    <p>
      Built with{' '}
      <StyledHyperLink
        href={'https://www.gatsbyjs.com/'}
        target="_blank"
        rel="noopener">
        Gatsby
      </StyledHyperLink>{' '}
      and{' '}
      <StyledHyperLink
        href={'https://www.styled-components.com/'}
        target="_blank"
        rel="noopener">
        styled components
      </StyledHyperLink>
      {/* eslint-disable-next-line */}
      <EmojiWrapper aria-label="nail polish">💅</EmojiWrapper>
    </p>
  </Layout>
)

export default props => (
  <StaticQuery
    query={graphql`
      query IndexQuery {
        site {
          siteMetadata {
            title
            description
            imageLink
          }
        }
      }
    `}
    render={data => <IndexPage data={data} {...props} />}
  />
)
