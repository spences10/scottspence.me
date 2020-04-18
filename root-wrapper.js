import { MDXProvider } from '@mdx-js/react'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import Layout from './src/components/layout'
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
} from './src/components/page-elements'
import { AnalyticsProvider } from './src/contexts/fathom-event-tracking'
import { theme } from './src/theme/global-style'

const components = {
  a: props => <A {...props} />,
  h1: props => <H1 {...props} />,
  h2: props => <H2 {...props} />,
  h3: props => <H3 {...props} />,
  hr: props => <Hr {...props} />,
  li: props => <Li {...props} />,
  p: props => <P {...props} />,
  'p.a': props => <A {...props} />,
  'li.em': props => <P {...props} />,
  small: props => <Small {...props} />,
  ul: props => <Ul {...props} />,
}

export const wrapRootElement = ({ element }) => (
  <AnalyticsProvider>
    <ThemeProvider theme={theme}>
      <MDXProvider components={components}>
        <Layout>{element}</Layout>
      </MDXProvider>
    </ThemeProvider>
  </AnalyticsProvider>
)
