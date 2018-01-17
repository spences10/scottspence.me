import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import NavSeparator from './NavSeparator'

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  flex: 0 0 auto;
`

const NavLinks = () => (
  <Wrapper>
    <Link to="/">Home</Link>
    <NavSeparator />
    <Link to="/about">About</Link>
    <NavSeparator />
    <Link to="/portfolio">Portfolio</Link>
    <NavSeparator />
    <Link to="/contact">Contact</Link>
  </Wrapper>
)

export default NavLinks
