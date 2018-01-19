import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { media } from '../theme/globalStyle'

const PageContainer = styled.div`
  grid-area: m;
  display: grid;
  grid-template-rows: auto;
  grid-template-areas: '. . m m m m m m m m . .';
  display: grid;

  ${media.giant`
    grid-template-areas:
      '. . m m m m m m m m . .';
    background: goldenrod;
  `};
  ${media.desktop`
    grid-template-areas:
      '. . m m m m m m m m . .';
    background: dodgerblue;
  `};
  ${media.tablet`
  grid-template-columns: repeat(9, 1fr);
  grid-template-areas:
      '. m m m m m m m .';
    background: mediumseagreen;
  `};
  ${media.phone`
  grid-template-columns: repeat(9, 1fr);
  grid-template-areas:
      'm m m m m m m m m';
    background: palevioletred;
  `};
`
const IndexPage = () => (
  <PageContainer>
    <div>
      <h1>Hi people 👋</h1>
      <p>Welcome to my new Gatsby portfolio site.</p>
      <p>watch this space whilst I develop this. 👍</p>
      <Link to="/about/">Go to about page</Link>
    </div>
  </PageContainer>
)

export default IndexPage
