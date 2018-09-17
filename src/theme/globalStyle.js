import { createGlobalStyle, css } from 'styled-components'

export const themes = {
  theme1: {
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
  },
  theme2: {
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
    pink: '#ff52ba',
    blue: '#59eeff'
  },
  theme3: {
    primary: '#1cbcd2',
    primaryAccent: '#69479e',
    branding: '#f16623',
    secondary: '#ffb617',
    background: '#f3eff5',
    foreground: '#88d4d8',
    border: '#055455',
    fontHeader: 'Eczar, sans, sans-serif',
    fontBody: 'Trirong, sans-serif',
    fontDark: '#0d0a0b',
    fontLight: '#454955',
    fontWhite: 'fffff6',
    pink: '#ff73c7',
    blue: '#00e5ff'
  }
}

export const GlobalStyle = createGlobalStyle`
  @import url('
    https://fonts.googleapis.com/css?family=
    Dosis:400,700|
    Poppins:400,700|
    Trirong:400,700|
    Rubik:400,700|
    Nunito:400,700|
    Eczar:400,700|
    Taviraj:400,700
  ');

  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    color: hsla(0, 0%, 0%, 0.8);
  }

  a {
    text-decoration: none;
  }
`

const sizes = {
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
