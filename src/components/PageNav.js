import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'

// import { theme } from '../theme/globalStyle'

const NavMenu = styled.ul`
  padding: 0;
`

const NavItem = styled.li`
  text-transform: uppercase;
  list-style: none;
  color: ${props => props.theme.primary.light};
  padding: 0.5rem;
`

const NavLink = styled(Link).attrs({
  color: props => props.theme.secondary.pink
})`
  color: inherit;
  &:visited, &:active {
     color: inherit;
  }
  &:hover {
    color: ${props => props.color}
`

const PageNav = props => (
  <NavMenu>
    <NavItem dataHeader={props.header}>
      <NavLink to="/about" dataHeader={props.header}>
        about
      </NavLink>
    </NavItem>
    <NavItem dataHeader={props.header}>
      <NavLink to="/portfolio">portfolio</NavLink>
    </NavItem>
  </NavMenu>
)

PageNav.propTypes = {
  header: PropTypes.bool.isRequired,
  nav: PropTypes.array.isRequired
}

export default PageNav
