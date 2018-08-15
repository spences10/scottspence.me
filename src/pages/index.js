import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import {
  PageWrapper,
  animateShake,
  media
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
  background-color: ${props => props.theme.branding};
  color: ${props => props.theme.textDark};
  width: auto;
  user-select: text;
  text-shadow: 8px 8px 3px rgba(0, 0, 0, 0.1);
  font-family: ${props => props.theme.fontHeader};
  .wf-active & {
    font-family: ${props => props.theme.fontHeader};
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

class IndexPage extends React.Component {
  render() {
    return (
      <PageWrapper>
        <Name className="name">
          <StyledLink to="/">
            <First>
              {'Scott'.split('').map((letter, index) => (
                <Letter key={`${letter}-${index}`}>{letter}</Letter>
              ))}
            </First>
            <Last>
              {'Spence'.split('').map((letter, index) => (
                <Letter key={`${letter}-${index}`}>{letter}</Letter>
              ))}
            </Last>
          </StyledLink>
        </Name>
        <Hi>Hi people 👋</Hi>
        <p>Welcome to my personal portfolio site.</p>
        <p>Built with Gatsby and Styled Components 💅</p>
      </PageWrapper>
    )
  }
}

export default IndexPage
