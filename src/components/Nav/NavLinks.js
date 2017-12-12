import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  flex: 0 0 auto;
`

const NavLinks = () => (
  <Wrapper>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/portfolio">Portfolio</Link>
    <Link to="/contact">Contact</Link>
  </Wrapper>
)

export default NavLinks
