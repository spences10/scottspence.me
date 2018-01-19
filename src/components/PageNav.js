import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'

// import { theme } from '../theme/globalStyle'

const NavMenu = styled.ul`
  grid-area: nav;
  display: inline-grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 10px;
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

const PageNav = ({ nav }) => (
  <NavMenu>
    {nav.map((item, index) => (
      <NavItem key={index}>
        <NavLink to={`/${item}`}>{item}</NavLink>
      </NavItem>
    ))}
  </NavMenu>
)

PageNav.propTypes = {
  nav: PropTypes.array.isRequired
}

export default PageNav
