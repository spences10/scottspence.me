import styled, {
  injectGlobal,
  css,
  keyframes
} from 'styled-components'

import { fontFace } from './fonts'

export const theme1 = {
  primary: '#6e27c5',
  primaryAccent: '#eb238e',
  branding: '#f7e018',
  secondary: '#fcdeb6',
  background: '#f9f9fd',
  foreground: '#fefefe',
  border: '#044040',
  fontHeader: 'Dosis, sans-serif',
  fontBody: 'Poppins, sans, sans-serif',
  fontDark: '#34434b',
  fontLight: '#586368',
  fontWhite: '#ffffff',
  pink: '#ff0198',
  blue: '#01c1d6'
}

export const theme2 = {
  primary: '#ff0198',
  primaryAccent: '#eb238e',
  branding: '#01c1d6',
  secondary: '#ffb617',
  background: '#e6e6e6',
  foreground: '#f7f0f0',
  border: '#054545',
  fontHeader: 'Poppins, sans, sans-serif',
  fontBody: 'Dosis, sans-serif',
  fontDark: '#034544',
  fontLight: '#596869',
  fontWhite: '#ffffff',
  pink: '#ff0198',
  blue: '#01c1d6'
}

// green: '#8ac3a9',
// yellow: '#fcdeb6',
// red: '#ff8463',
// pink: '#ff0198', // hollywood cerise
// mySinYellow: '#ffb617', // my sin
// purple: '#6e27c5', // purple heart
// orange: '#ff6600', // blaze orange
// blue: '#01c1d6', // robin's egg blue
// java: '#1cbcd2', // java
// sun: '#fab319', // sun
// affair: '#69479e', // affair
// flamingo: '#f16623', // flamingo
// minsk: '#2e2e86', // minsk
// pomegranate: '#ee362c', // pomegranate
// redviolet: '#eb238e', // red violet
// sushi: '#7cc142', // sushi
// bombay: '#adadaf', // Bombay
// jsYellow: '#f7e018' // JS yellow

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Dosis:400,700|Poppins:400,700');
  /* @import url('https://fonts.googleapis.com/css?family=Nunito:400,700|Poppins:400,700|Trirong:400,700|Rubik:400,700|Eczar:400,700|Taviraj:400,700'); */
  @import url('https://fonts-for-the-font-god.netlify.com/dank-mono.css?family=dm');

  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    color: hsla(0, 0%, 0%, 0.8);
    background-color: ${props => props.theme.background};
  }

  a {
    text-decoration: none;
  }

  /* remove dotted line around links in Firefox */
  a:active, a:focus {
    outline: 0;
    border: none;
    -moz-outline-style: none
  }

  :focus {
    outline:none;
  }

  ::-moz-focus-inner {
    border:0;
  }
`

const sizes = {
  monitor: 1800,
  giant: 1500,
  desktop: 992,
  tablet: 768,
  phone: 376
}

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce(
  (accumulator, label) => {
    // use em in breakpoints to work properly cross-browser and support users
    // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
    const emSize = sizes[label] / 16
    accumulator[label] = (...args) => css`
      @media (max-width: ${emSize}em) {
        ${css(...args)};
      }
    `
    return accumulator
  },
  {}
)

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

export const PageWrapper = styled.div`
  margin: 1rem;
  padding: 1rem;
  font-family: ${props => props.theme.fontBody};
  line-height: 150%;
`

export const StyledLink = styled.a`
  color: ${props => props.theme.primary};
  &:hover {
    animation: halfTone 1s forwards;
    border-radius: 4px;
    padding: 0.2rem;
    background: radial-gradient(
          circle,
          ${({ theme }) => theme.primary} 0.2em,
          transparent 0.25em
        )
        0 0 / 1.25em 1.25em,
      radial-gradient(
          circle,
          ${({ theme }) => theme.primary} 0.2em,
          transparent 0.25em
        )
        6.25em 6.25em / 1.25em 1.25em;
    color: ${({ theme }) => theme.secondary};
  }
  @keyframes halfTone {
    100% {
      background-size: 2.375em 2.375em, 0.1em 0.1em;
    }
  }
`

export const ShinyButton = styled.button`
  margin: 0rem 0rem;
  padding: 0.5rem 1rem;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  background: #fafafa;
  color: ${props => props.theme.primary};
  border: 2px solid ${props => props.theme.primary};
  font-size: 1rem;
  display: inline-block;
  border-radius: 50px;
  transition: all 0.2s ease-in-out;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  &:before {
    content: '';
    background-color: ${props => props.theme.primary};
    height: 100%;
    width: 3em;
    display: block;
    position: absolute;
    top: 0;
    left: -4.5em;
    transform: skewX(-45deg) translateX(0);
    transition: none;
  }
  &:hover {
    /* background-color: #2194e0; */
    color: ${props => props.theme.primary};
    /* border-bottom: 4px solid #1977b5; */
    transform: translateY(1px);
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  }
  &:hover&:before {
    transform: skewX(-45deg) translateX(13.5em);
    transition: all 0.5s ease-in-out;
  }
`
