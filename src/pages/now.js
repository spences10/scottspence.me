import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { PageWrapper } from '../theme/globalStyle'

const NowPage = () => (
  <PageWrapper>
    <p>now things</p>
    <Link to="/">Go home</Link>
  </PageWrapper>
)

export default NowPage
