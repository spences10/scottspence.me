import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { media } from '../theme/globalStyle'
import Icon from './Icon'
import { ICONS } from '../theme/themeConstants'
import { PageWrapper } from '../theme/globalStyle'

const IconWrapper = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(12 1fr);
  grid-template-rows: 100px 400px 100px;
  grid-template-areas:
    '. . . . . . . . . . . .'
    '. . g g t t e e l l . .'
    '. . . . . . . . . . . .';
  ${media.giant`
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: 100px 400px 100px;
  grid-template-areas:
      '. . . . . . . . . .'
      '. g g t t e e l l .'
      '. . . . . . . . . .';
    /* background: goldenrod; */
  `};
  ${media.desktop`
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: 90px 300px 90px;
  grid-template-areas:
      '. . . . . . . . . .'
      '. . . g t e l . . .'
      '. . . . . . . . . .';
    /* background: dodgerblue; */
  `};
  ${media.tablet`
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: 50px 200px 50px;
  grid-template-areas:
      '. . . . . . . . . .'
      '. . . g t e l . . .'
      '. . . . . . . . . .';
    /* background: mediumseagreen; */
  `};
  ${media.phone`
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 20px 100px 20px;
  grid-template-areas:
      '. . . . . .'
      '. g t e l .'
      '. . . . . .';
    /* background: palevioletred; */
  `};
`

const StyledIcon = styled.div`
  color: ${({ theme }) => theme.primary.light};
  grid-area: ${props => props.area};
  /* top right bottom left */
  margin: 0rem 0.5rem 0rem 0.5rem;
  padding: 0rem 0.5rem 0rem 0.5rem;
  font-size: 2rem;
  font-weight: bold;
`

const IconLink = styled.a`
  color: inherit;
  &:visited,
  &:active {
    color: inherit;
  }
  &:hover {
    color: ${({ theme }) => theme.secondary.red};
  }
`

const ContactPage = () => (
  <PageWrapper>
    <h1>Get in touch</h1>
    <IconWrapper>
      <StyledIcon area={'g'}>
        <IconLink
          target="_blank"
          rel="noopener"
          href="https://github.com/spences10">
          <Icon icon={ICONS.GITHUB} size={40} color="#453463" />
        </IconLink>
      </StyledIcon>
      <StyledIcon area={'t'}>
        <IconLink
          target="_blank"
          rel="noopener"
          href="https://twitter.com/ScottDevTweets">
          <Icon
            viewbox="0 0 32 32"
            size={40}
            color="#453463"
            icon={ICONS.TWITTER}
          />
        </IconLink>
      </StyledIcon>
      <StyledIcon area={'e'}>
        <IconLink
          target="_blank"
          rel="noopener"
          href="mailto:spences10apps@gmail.com?subject=Hi Scott 👋">
          <Icon
            viewbox="0 0 32 32"
            size={40}
            color="#453463"
            icon={ICONS.EMAIL}
          />
        </IconLink>
      </StyledIcon>
      <StyledIcon area={'l'}>
        <IconLink
          target="_blank"
          rel="noopener"
          href="https://www.linkedin.com/in/linkedinscottspence/">
          <Icon
            viewbox="0 0 32 32"
            size={40}
            color="#453463"
            icon={ICONS.LINKEDIN}
          />
        </IconLink>
      </StyledIcon>
    </IconWrapper>
    <p>
      <Link to="/">Go home</Link>
    </p>
  </PageWrapper>
)

export default ContactPage
