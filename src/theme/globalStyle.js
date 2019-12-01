import { createGlobalStyle } from 'styled-components'

export const theme = {
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

const fonts = () => {
  const list = [
    'Dosis:400,700|',
    'Poppins:400,700|',
    'Trirong:400,700|',
    'Rubik:400,700|',
    'Nunito:400,700|',
    'Eczar:400,700|',
    'Taviraj:400,700|'
  ]
  return list.join('')
}

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=${fonts}');
  
  body {
    margin: 0;
    color: hsla(0, 0%, 0%, 0.8);
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }
`
