import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components'

import Header from '../components/Header.js'
import { theme } from '../theme/globalStyle'

const PageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  /* hd = header, ma = main, ft = footer */
  grid-template-areas:
    'hd hd hd hd hd hd hd hd hd hd hd hd'
    'ma ma ma ma ma ma ma ma ma ma ma ma'
    'ft ft ft ft ft ft ft ft ft ft ft ft';
`

const Main = styled.div`
  grid-area: ma;
  margin-top: 4.625rem;
`

const TemplateWrapper = ({ children, data }) => (
  <ThemeProvider theme={theme}>
    <PageContainer>
      <Helmet
        title="Scott Spence - portfolio"
        meta={[
          // Google / Search Engine Tags
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
          },
          // facebook
          { name: 'og:url', content: 'https://scottspence.me' },
          { name: 'og:type', content: 'website' },
          { name: 'og:title', content: 'Scott Spence - portfolio' },
          {
            name: 'og:description',
            content:
              'Portfolio site of Scott Spence - aspiring web developer'
          },
          {
            name: 'og:image',
            content:
              'https://pbs.twimg.com/profile_images/697901266945646592/05jKr58e_400x400.jpg'
          },
          // twitter
          { name: 'twitter:card', content: 'summary_large_image' },
          {
            name: 'twitter:title',
            content: 'Scott Spence - portfolio'
          },
          {
            name: 'twitter:description',
            content:
              'Portfolio site of Scott Spence - aspiring web developer'
          },
          {
            name: 'twitter:image',
            content:
              'https://pbs.twimg.com/profile_images/697901266945646592/05jKr58e_400x400.jpg'
          }
        ]}
      />
      <Header navItems={data.site.siteMetadata.pages} />

      <Main>{children()}</Main>
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
