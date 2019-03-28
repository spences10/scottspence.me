import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled, { keyframes } from 'styled-components'
import { media } from '../theme/globalStyle'
import useSiteMetadata from './siteMetadata'

/*
 * https://css-tricks.com/snippets/css/shake-css-keyframe-animation/
 */
export const animateShake = keyframes`
  10%, 90% {
    transform: translate3d(-3px, 0, 0) rotate(8deg);
  }
  
  20%, 80% {
    transform: translate3d(5px, 0, 0);
  }
  30%, 50%, 70% {
    transform: translate3d(-5px, 0, 0) rotate(-8deg);
  }
  40%, 60% {
    transform: translate3d(5px, 0, 0);
  }
`

const BannerWrapper = styled.div`
  height: auto;
`

const Name = styled.h1`
  margin-top: 5rem;
  font-size: 4.5rem;
  padding: 5rem 0rem;
  display: flex;
  flex-wrap: wrap;
  text-transform: uppercase;
  font-weight: 700;
  align-items: center;
  transition: font-size 250ms ease-in-out, padding 150ms ease-in;
  background-color: ${props => props.theme.branding};
  color: ${props => props.theme.fontDark};
  width: auto;
  user-select: text;
  text-shadow: 8px 8px 3px rgba(0, 0, 0, 0.1);
  font-family: ${props => props.theme.fontHeader};
  .wf-active & {
    font-family: ${props => props.theme.fontHeader};
  }
  ${media.giant`
    margin-top: 5rem;
    font-size: 4.5rem;
    padding: 5rem 0rem;
  `};
  ${media.desktop`
    margin-top: 5rem;
    font-size: 4.5rem;
    padding: 5rem 0rem;
  `};
  ${media.tablet`
    margin-top: 3rem;
    font-size: 2.5rem;
    padding: 2.5rem 0rem;
  `};
  ${media.phone`
    margin-top: 2rem;
    font-size: 2.5rem;
    padding: 2.5rem 0rem;
  `};
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

const Banner = () => {
  const { firstName, lastName } = useSiteMetadata()
  return (
    <BannerWrapper>
      <Name>
        <StyledLink to="/">
          <First>
            {firstName.split('').map((letter, index) => (
              <Letter key={`${letter}-${index}`}>{letter}</Letter>
            ))}
          </First>
          <Last>
            {lastName.split('').map((letter, index) => (
              <Letter key={`${letter}-${index}`}>{letter}</Letter>
            ))}
          </Last>
        </StyledLink>
      </Name>
    </BannerWrapper>
  )
}

Banner.propTypes = {
  first: PropTypes.string,
  last: PropTypes.string
}

export default Banner
