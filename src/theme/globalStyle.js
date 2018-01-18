import { injectGlobal } from 'styled-components'

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
  @import url('https://fonts.googleapis.com/css?family=Open+Sans|Roboto|VT323');

  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    font-size: 16px;
    margin: 0;
    color: hsla(0, 0%, 0%, 0.8);
    font-family: Roboto, georgia, serif;
    font-weight: normal;
    word-wrap: break-word;
  }

  h1 {
    font-family: Open Sans;
  }

`
