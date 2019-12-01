import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { H1, H2, H3, P } from './components/page-elements';
import { theme } from './theme/global-style';

const components = {
  h1: props => <H1 {...props} />,
  h2: props => <H2 {...props} />,
  h3: props => <H3 {...props} />,
  p: props => <P {...props} />,
};

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <MDXProvider components={components}>{element}</MDXProvider>
  </ThemeProvider>
);
