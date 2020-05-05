import PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
// import Dump from '@wesbos/dump'
import { GlobalStyle } from '../theme/global-style'
import { media } from '../theme/sizes'

const AppStyles = styled.div`
  position: relative;
  max-width: 88vw;
  margin: 0 auto;
  display: block;
  ${media.desktop`
    max-width: 70vw;
  `};
`

const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
`

const Layout = ({ children }) => {
  return (
    <AppStyles>
      <GlobalStyle />
      <Helmet>
        <html lang='en-GB' />
      </Helmet>
      <Wrapper>{children}</Wrapper>
    </AppStyles>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
