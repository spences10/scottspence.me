import PropTypes from 'prop-types'
import React from 'react'
import Helmet from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components'
import { useSiteMetadata } from '../hooks/useSiteMetadata'
// import { Dump } from '../util/helpers'
import { GlobalStyle, themes } from '../theme/globalStyle'
import { Footer } from './footer'
import { Header } from './header'

const AppStyles = styled.div`
  position: relative;
  font-family: ${({ theme }) => theme.p};
`

const Wrapper = styled.div`
  max-width: 570px;
  margin: 0 auto;
`

const Layout = ({ children }) => {
  const { title } = useSiteMetadata()
  return (
    <ThemeProvider theme={themes.theme1}>
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
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
