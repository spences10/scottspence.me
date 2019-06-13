import PropTypes from 'prop-types'
import React from 'react'
import Helmet from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components'
import {
  ThemeSelectContext,
  ThemeSelectProvider
} from '../contexts/ThemeSelectContext'
import { useSiteMetadata } from '../hooks/useSiteMetadata'
// import { Dump } from '../util/helpers'
import { GlobalStyle, media } from '../theme/globalStyle'
import Footer from './footer'
import Header from './header'

const AppStyles = styled.div`
  background-color: ${({ theme }) => theme.background};
  background-image: url("${props => props.background}");
  background-attachment: fixed;
  font-family: ${({ theme }) => theme.fontBody};

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    'h h h h h h h h h h h h'
    '. . . m m m m m m . . .'
    'f f f f f f f f f f f f';
  ${media.giant`
    grid-template-areas:
      'h h h h h h h h h h h h'
      '. . m m m m m m m m . .'
      'f f f f f f f f f f f f';
    /* background: goldenrod; */
  `};
  ${media.desktop`
    grid-template-areas:
      'h h h h h h h h h h h h'
      '. m m m m m m m m m m .'
      'f f f f f f f f f f f f';
    /* background: dodgerblue; */
  `};
  ${media.tablet`
    grid-template-columns: repeat(9, 1fr);
    grid-template-areas:
      'h h h h h h h h h'
      '. m m m m m m m .'
      'f f f f f f f f f';
    /* background: mediumseagreen; */
  `};
  ${media.phone`
    grid-template-columns: repeat(9, 1fr);
    grid-template-areas:
      'h h h h h h h h h'
      'm m m m m m m m m'
      'f f f f f f f f f';
    /* background: palevioletred; */
  `};
`

const Wrapper = styled.div`
  grid-area: m;
`

const Layout = ({ children }) => {
  const { title } = useSiteMetadata()
  return (
    <ThemeSelectProvider>
      <ThemeSelectContext.Consumer>
        {({ theme }) => (
          <ThemeProvider theme={theme}>
            <AppStyles>
              <GlobalStyle />
              <Helmet>
                <html lang="en-GB" />
              </Helmet>
              <Header siteTitle={title} />
              <Wrapper>{children}</Wrapper>
              <Footer />
            </AppStyles>
          </ThemeProvider>
        )}
      </ThemeSelectContext.Consumer>
    </ThemeSelectProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
