import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components'

import Header from '../components/Header'
import Footer from '../components/Footer'

import {
  ThemeSelectProvider,
  ThemeSelectContext
} from '../components/ThemeSelectContext'

import { media } from '../theme/globalStyle'
import { siteMeta } from '../constants'

const PageContainer = styled.div`
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
      '. . f f f f f f f f . .';
    /* background: goldenrod; */
  `};
  ${media.desktop`
    grid-template-areas:
      'h h h h h h h h h h h h'
      '. . m m m m m m m m . .'
      '. . f f f f f f f f . .';
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

const Main = styled.div`
  grid-area: m;
  font-family: ${props => props.theme.fontBody};
  color: ${props => props.theme.textDark};
`

const TemplateWrapper = ({ children, data }) => (
  <ThemeSelectProvider>
    <ThemeSelectContext.Consumer>
      {({ theme }) => (
        <ThemeProvider theme={theme}>
          <PageContainer>
            <Helmet
              title="Scott Spence - portfolio"
              meta={siteMeta}
            />
            <Header navItems={data.site.siteMetadata.pages} />

            <Main>{children()}</Main>
            <Footer />
          </PageContainer>
        </ThemeProvider>
      )}
    </ThemeSelectContext.Consumer>
  </ThemeSelectProvider>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object
}

export default TemplateWrapper

/* eslint-disable */
export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        pages
      }
    }
  }
`
/* eslint-enable */
