import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { PATTERNS } from '../theme/themeConstants'
import Branding from './branding'
import PageNav from './pageNav'

const HeaderStyles = styled.div`
  

  /* box-shadow: [horizontal offset] [vertical offset] [blur radius] [color]; */
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
  background-color: ${props => props.theme.primary};
  background-image: url("${PATTERNS.TOPOGRAPHY}");
`

const Wrapper = styled.div`
  max-width: 570px;
  margin: 0 auto;
`

// const SiteTitle = styled.h1`
//   margin: 1rem;
//   padding: 1rem;
//   color: ${props => props.theme.fontWhite};
// `

const SiteLink = styled(Link)`
  margin: 1rem 0rem;
  padding: 1rem 0rem;
  grid-area: t;
  color: inherit;
  &:visited,
  &:active {
    color: inherit;
  }
  &:hover {
    color: ${props => props.theme.secondary};
  }
`

export const Header = () => (
  <HeaderStyles>
    <Wrapper>
      <SiteLink to="/">
        <Branding size={4} />
      </SiteLink>
      <PageNav />
    </Wrapper>
  </HeaderStyles>
)
