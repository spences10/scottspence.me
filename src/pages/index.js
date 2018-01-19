import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const PageContainer = styled.div`
  grid-area: m;
  display: grid;
  grid-template-areas: '. m m m m m m m m m m .';

  display: grid;
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
