import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { StyledHyperLink as SHL } from '../components/shared'
import { useSiteMetadata } from '../hooks/useSiteMetadata'
import { media } from '../theme/sizes'

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

export default () => {
  const { description, imageLink, title } = useSiteMetadata()
  return (
    <Layout>
      <SEO
        title={title}
        description={description || 'nothin’'}
        image={imageLink}
      />
      <Hi>
        Hi people!
        <span role="img" aria-label="waving hand">
          👋
        </span>
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
}
