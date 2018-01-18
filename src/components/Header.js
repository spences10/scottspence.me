import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const StyledHeader = styled.div`
  margin: 0 auto;
  background-color: ${props => props.theme.secondary.purple};
`

const StyledH1 = styled.h1`
  margin: 0;
`

const Header = props => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem'
    }}>
    <StyledHeader>
      <StyledH1>Scott Spence</StyledH1>
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
