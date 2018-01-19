import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'

import PageNav from './PageNav'

const StyledHeader = styled.div`
  /* margin: 0 auto; */
  /* padding: 1rem; */
  grid-area: h;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-template-areas: '. tit tit . . . nav nav nav nav nav .';

  background-color: ${props => props.theme.secondary.purple};
`

const SiteTitle = styled.h1`
  grid-area: tit;
  /* margin: 0; */
  /* padding: 0; */
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

const Header = props => (
  <StyledHeader>
    <SiteTitle>
      <SiteLink to="/">Scott Spence</SiteLink>
    </SiteTitle>
    <PageNav nav={props.navItems} />
  </StyledHeader>
)

Header.propTypes = {
  navItems: PropTypes.array.isRequired
}

export default Header
