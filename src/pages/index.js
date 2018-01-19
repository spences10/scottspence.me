import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { media } from '../theme/globalStyle'

import { PageContainer } from '../theme/globalStyle'

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
