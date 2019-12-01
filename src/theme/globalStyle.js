import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const theme = {
  colours: {
    primary: {
      100: '#663399',
    },
    dark: {
      100: '#1e151f',
      200: '#463c47',
      300: '#726773',
    },
    light: {
      100: '#e5d8e6',
      200: '#d4c7d5',
      300: '#a79ba8',
    },
  },
  fonts: {
    header: 'Dosis, sans-serif',
    body: 'Poppins, sans, sans-serif',
  },
  fontSizes: {
    h1: '40px',
    h2: '26px',
    h3: '24px',
    p: '21px',
  },
};

const fonts = () => {
  const list = ['Dosis:400,700|', 'Poppins:400,700|'];
  return list.join('');
};

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=${fonts}');

  ${reset}
  
  /* use for debugging only!! */
  /* * {
    outline: 1px solid red !important;
  } */

  *, *:before, *:after {
    box-sizing: border-box;
  }
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: ${({ theme }) => theme.fonts.body};
    color: ${({ theme }) => theme.colours.dark[100]};
  }
  body {
    font-size: 16px;
    font-weight: 500;
    padding: 0;
    margin: 0;
    line-height: 1.9;
    overflow-x: initial;
    background-color: ${({ theme }) => theme.primary}
  }
`;
