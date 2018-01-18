import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components'

import Header from '../components/Header.js'
import { theme } from '../theme/globalStyle'

const PageContainer = styled.div``

const TemplateWrapper = ({ children, data }) => (
  <ThemeProvider theme={theme}>
    <PageContainer>
      <Helmet
        title="Scott Spence - portfolio"
        meta={[
          {
            name: 'description',
            content:
              'Portfolio site of Scott Spence - aspiring web developer'
          },
          {
            name: 'keywords',
            content: 'portfolio, web developer, javascript'
          },
          {
            name: 'image',
            content:
              'https://pbs.twimg.com/profile_images/697901266945646592/05jKr58e_400x400.jpg'
          }
        ]}
      />
      <Header navItems={data.site.siteMetadata.pages} />

      <div>{children()}</div>
    </PageContainer>
  </ThemeProvider>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        pages
      }
    }
  }
`
