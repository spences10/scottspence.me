import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'

import PageNav from './PageNav'

const StyledHeader = styled.div`
  margin: 0 auto;
  padding: 1rem;
  background-color: ${props => props.theme.secondary.purple};
`

const SiteTitle = styled.h1`
  margin: 0;
  padding: 0;
  color: ${props => props.theme.white};
`

const SiteLink = styled(Link)`
  color: inherit;
  &:visited,
  &:active {
    color: inherit;
  }
  &:hover {
    color: ${props => props.theme.secondary.yellow};
  }
`

const Header = () => (
  <StyledHeader>
    <SiteTitle>
      <SiteLink to="/">Scott Spence</SiteLink>
    </SiteTitle>
    <PageNav />
  </StyledHeader>
)

Header.propTypes = {
  navItems: PropTypes.array.isRequired
}

export default Header
