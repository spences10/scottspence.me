import { injectGlobal } from 'styled-components'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans|Roboto|VT323');

  /* body {
    font-family: 'Roboto';
    font-size: 20px
  } */

  body {
    color: purple;
    font-family: Roboto, Arial, sans-serif;
    font-size: 20px;
    line-height: 1.3125;
  }

  a {
    text-decoration: none;
  }

  ul {
    margin: 0 auto;
    
  }

  /* svg {
    fill: currentColor;
    height: 1.25em;
  } */

  @media screen and (min-width: 360px) {
    html {
      font-size: 15px;
    }
  }

  @media screen and (min-width: 600px) {
    html {
      font-size: 16px;
    }
  }
`
