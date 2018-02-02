import React from 'react'
import Link from 'gatsby-link'

import { PageWrapper } from '../theme/globalStyle'

import Branding from '../components/Branding'

const IndexPage = () => (
  <PageWrapper>
    <Branding size={'300px'} />
    <h1>Hi people 👋</h1>
    <p>Welcome to my new Gatsby portfolio site.</p>
    <p>watch this space whilst I develop this. 👍</p>
    <Link to="/about/">Go to about page</Link>
  </PageWrapper>
)

export default IndexPage
