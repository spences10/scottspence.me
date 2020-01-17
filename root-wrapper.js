import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  A,
  H1,
  H2,
  H3,
  Hr,
  Li,
  P,
  Small,
  Ul,
} from './src/components/page-elements';
import { theme } from './src/theme/global-style';

const components = {
  h1: props => <H1 {...props} />,
  h2: props => <H2 {...props} />,
  h3: props => <H3 {...props} />,
  hr: props => <Hr {...props} />,
  li: props => <Li {...props} />,
  p: props => <P {...props} />,
  'p.a': props => <A {...props} />,
  small: props => <Small {...props} />,
  ul: props => <Ul {...props} />,
};

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <MDXProvider components={components}>{element}</MDXProvider>
  </ThemeProvider>
);
