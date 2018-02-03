import styled, {
  injectGlobal,
  css,
  keyframes
} from 'styled-components'

export const theme = {
  text: '#272727',
  white: '#fff',
  primary: {
    dark: '#453463',
    light: '#755f9f'
  },
  secondary: {
    green: '#8ac3a9',
    yellow: '#fcdeb6',
    red: '#ff8463',
    pink: '#ff0198', // hollywood cerise
    mySinYellow: '#ffb617', // my sin
    purple: '#6e27c5', // purple heart
    orange: '#ff6600', // blaze orange
    blue: '#01c1d6', // robin's egg blue
    java: '#1cbcd2', // java
    sun: '#fab319', // sun
    affair: '#69479e', // affair
    flamingo: '#f16623', // flamingo
    minsk: '#2e2e86', // minsk
    pomegranate: '#ee362c', // pomegranate
    redviolet: '#eb238e', // red violet
    sushi: '#7cc142', // sushi
    bombay: '#adadaf', // Bombay
    jsYellow: '#f7e018' // JS yellow
  },
  shades: {
    dark: 'rgba(69, 52, 99, 0.5)',
    offWhite: 'rgb(244, 254, 254)'
  }
}

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans|Roboto|Titillium+Web');

  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    color: hsla(0, 0%, 0%, 0.8);
    font-family: Roboto, georgia, serif;
    word-wrap: break-word;
    background-color: #fafafa;
  }

  h1 {
    font-family: Open Sans;
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
  giant: 1170,
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
  font-family: 'Titillium Web' bold;
  line-height: 150%;
`

export const StyledLink = styled.a`
  color: ${props => props.theme.secondary.purple};
  &:hover {
    animation: halftone 1s forwards;
    border-radius: 4px;
    padding: 0.2rem;
    background: radial-gradient(
          circle,
          ${({ theme }) => theme.secondary.purple} 0.2em,
          transparent 0.25em
        )
        0 0 / 1.25em 1.25em,
      radial-gradient(
          circle,
          ${({ theme }) => theme.secondary.purple} 0.2em,
          transparent 0.25em
        )
        6.25em 6.25em / 1.25em 1.25em;
    color: ${({ theme }) => theme.secondary.red};
  }
  @keyframes halftone {
    100% {
      background-size: 2.375em 2.375em, 0.1em 0.1em;
    }
  }
`
