import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const theme = {
  colours: {
    primary: {
      100: '#3c60a4',
      200: '#6063ae',
      300: '#8164b3',
      400: '#a064b5',
      500: '#be64b2',
      600: '#d964ab',
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
    header: 'Alatsi, sans-serif',
    body: 'Poppins, sans, sans-serif',
  },
  fontSizes: {
    h1: '40px',
    h2: '26px',
    h3: '24px',
    h4: '21px',
    p: '18px',
    small: '11px',
  },
  maxWidth: '580px',
  breakpoints: {
    sm: '375px',
    md: '576px',
    lg: '1023px',
    xl: '1524px',
  },
};

export const GlobalStyle = createGlobalStyle`
  
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
    font-size: ${({ theme }) => theme.fontSizes.p};
    font-weight: normal;
    padding: 0;
    margin: 0;
    line-height: 1.9;
  }
`;
