import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

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
  text-decoration: none;
  &:visited,
  &:active {
    color: inherit;
  }
  &:hover {
    color: ${props => props.theme.secondary.yellow};
  }
`

const Header = props => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem'
    }}>
    <StyledHeader>
      <SiteTitle>
        <SiteLink>Scott Spence</SiteLink>
      </SiteTitle>
    </StyledHeader>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem'
      }}>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none'
          }}>
          Scott Spence
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
