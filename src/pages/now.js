import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const PageWrapper = styled.div`
  margin: 1rem;
  padding: 1rem;
  font-family: 'Titillium Web' bold;
  line-height: 150%;
`

const NowPage = () => (
  <PageWrapper>
    <p>now things</p>
    <Link to="/">Go home</Link>
  </PageWrapper>
)

export default NowPage
