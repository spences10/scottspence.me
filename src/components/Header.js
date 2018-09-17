import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const HeaderWrapper = styled.header`
  grid-area: h;
  color: white;
  background: rebeccapurple;
  margin-bottom: 1.45rem;
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>
  </HeaderWrapper>
)

export default Header
