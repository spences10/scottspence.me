import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import {
  PageWrapper,
  animateShake,
  media,
  ShinyButton
} from '../theme/globalStyle'

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

const Name = styled.h1`
  margin: 0rem 0rem;
  display: flex;
  flex-wrap: wrap;
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 700;
  align-items: center;
  transition: font-size 250ms ease-in-out, padding 150ms ease-in;
  background-color: ${props => props.theme.secondary.jsYellow};
  color: ${props => props.theme.text};
  width: auto;
  user-select: text;
  text-shadow: 8px 8px 3px rgba(0, 0, 0, 0.1);
  .wf-active & {
    font-family: Roboto bold, sans-serif;
  }
  @media only screen and (min-width: 375px) {
    font-size: 2.5rem;
    padding: 2.5rem 0rem;
  }
  @media only screen and (min-width: 768px) {
    font-size: 4.5rem;
    padding: 5rem 0rem;
  }
`

const Letter = styled.span`
  display: inline-block;
  position: relative;
  z-index: 3;
  &:hover {
    animation: ${animateShake} 1000ms ease-in-out;
  }
`

const StyledLink = styled(Link)`
  color: inherit;
`

const First = styled.span`
  padding-right: 2vw;
  font-weight: 700;
  white-space: nowrap;
`

const Last = styled.span`
  font-weight: 400;
  white-space: nowrap;
`

const IndexPage = () => (
  <PageWrapper>
    <Name className="name">
      <StyledLink to="/">
        <First>
          {'Scott'
            .split('')
            .map((letter, index) => (
              <Letter key={`${letter}-${index}`}>{letter}</Letter>
            ))}
        </First>
        <Last>
          {'Spence'
            .split('')
            .map((letter, index) => (
              <Letter key={`${letter}-${index}`}>{letter}</Letter>
            ))}
        </Last>
      </StyledLink>
    </Name>
    <Hi>Hi people 👋</Hi>
    <p>Welcome to my personal portfolio site.</p>
    <p>Built with Gatsby and Styled Components 💅</p>

    <Link to="/about/">
      <ShinyButton>about</ShinyButton>
    </Link>
    <Link to="/portfolio/">
      <ShinyButton>portfolio</ShinyButton>
    </Link>
    <Link to="/now/">
      <ShinyButton>now</ShinyButton>
    </Link>
    <Link to="/uses/">
      <ShinyButton>uses</ShinyButton>
    </Link>
    <Link to="/contact/">
      <ShinyButton>contact</ShinyButton>
    </Link>
  </PageWrapper>
)

export default IndexPage
