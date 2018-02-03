import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { PageWrapper, media } from '../theme/globalStyle'

const StyledBrand = styled.span`
  margin: 5rem 0rem 5rem 0rem;
  font-family: Roboto black;
  font-size: 5rem;
  color: ${props => props.theme.secondary.java};
  text-shadow: 8px 8px 3px rgba(0, 0, 0, 0.1);
  ${media.giant`
    font-size: 5rem;
    background: goldenrod;
  `};
  ${media.desktop`
    font-size: 4rem;
    background: dodgerblue;
  `};
  ${media.tablet`
    font-size: 2rem;
    background: mediumseagreen;
  `};
  ${media.phone`
    font-size: 2rem;
    background: palevioletred;
  `};
`

const IndexPage = () => (
  <PageWrapper>
    <StyledBrand>S</StyledBrand>
    <StyledBrand>c</StyledBrand>
    <StyledBrand>o</StyledBrand>
    <StyledBrand>t</StyledBrand>
    <StyledBrand>t</StyledBrand>
    <StyledBrand> </StyledBrand>
    <StyledBrand>S</StyledBrand>
    <StyledBrand>p</StyledBrand>
    <StyledBrand>e</StyledBrand>
    <StyledBrand>n</StyledBrand>
    <StyledBrand>c</StyledBrand>
    <StyledBrand>e</StyledBrand>
    <h1>Hi people 👋</h1>
    <p>Welcome to my new Gatsby portfolio site.</p>
    <p>watch this space whilst I develop this. 👍</p>
    <Link to="/about/">Go to about page</Link>
  </PageWrapper>
)

export default IndexPage
