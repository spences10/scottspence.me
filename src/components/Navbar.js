import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Flex } from 'grid-styled'

import styled from 'styled-components'

import logo from '../images/logo.svg'

const StyledLogo = styled.img`
  height: 30px;
`

const List = styled.ul`
  list-style-type: none;
  padding: 1.75rem;
  margin: 0.5rem;
`

const Navbar = () => (
  <nav>
    <List>
      <Flex>
        <Box flex="1 1 auto">
          <Link to="/">Home</Link>
        </Box>
        <Box flex="1 1 auto">
          <Link to="/about">About</Link>
        </Box>
        <Box flex="1 1 auto">
          <Link to="/portfolio">Portfolio</Link>
        </Box>
        <Box flex="1 1 auto">
          <Link to="/contact">Contact</Link>
        </Box>
      </Flex>
    </List>
  </nav>
)

export default Navbar
