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
    red: '#ff8463'
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
    margin: 0;
    color: hsla(0, 0%, 0%, 0.8);
    font-family: Roboto, georgia, serif;
    font-weight: normal;
    word-wrap: break-word;
  }

`
