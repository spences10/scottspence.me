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
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' }
        ]}
      />
      <Header navItems={data.site.siteMetadata.pages} />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0
        }}>
        {children()}
      </div>
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
