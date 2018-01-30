import styled, { injectGlobal, css } from 'styled-components'

export const theme = {
  text: '#333',
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
    yellow: '#ffb617', // my sin
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
    bombay: '#adadaf' // Bombay
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

export const PageContainer = styled.div`
  margin: 1rem;
  padding: 1rem;
  grid-area: m;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-template-areas: '. . m m m m m m m m . .';

  ${media.giant`
    grid-template-areas:
      '. . m m m m m m m m . .';
    background: goldenrod;
  `};
  ${media.desktop`
    grid-template-areas:
      '. . m m m m m m m m . .';
    background: dodgerblue;
  `};
  ${media.tablet`
    grid-template-columns: repeat(9, 1fr);
    grid-template-areas:
      '. m m m m m m m .';
    background: mediumseagreen;
  `};
  ${media.phone`
    grid-template-columns: repeat(9, 1fr);
    grid-template-areas:
      'm m m m m m m m m';
    background: palevioletred;
  `};
`
