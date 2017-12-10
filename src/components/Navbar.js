import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

import logo from '../images/logo.svg'

const StyledLogo = styled.img`
  height: 30px;
`

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const Navbar = () => (
  <nav>
    <List>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </List>
  </nav>
)

export default Navbar
