import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

// import { Dump } from '../util/helpers'

import { media } from '../theme/globalStyle'

const NavMenu = styled.ul`
  grid-area: n;
  display: inline-grid;
  grid-template-columns: repeat(5, auto);
  grid-column-gap: 10px;
  margin: 1.5rem 0.1rem 1.5rem 0.1rem;
  padding: 1.5rem 0.1rem 1.5rem 0.1rem;
  font-family: ${props => props.theme.fontBody};
  font-weight: 700;
  ${media.giant`
    grid-template-columns: repeat(5, auto);
    margin: 1.5rem 0.1rem 1.5rem 0.1rem;
    padding: 1.5rem 0.1rem 1.5rem 0.1rem;
  `};
  ${media.desktop`
    grid-template-columns: repeat(5, auto);
    margin: 1.5rem 0.1rem 1.5rem 0.1rem;
    padding: 1.5rem 0.1rem 1.5rem 0.1rem;
  `};
  ${media.tablet`
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    position: relative;
    list-style-type: none;
    margin: 1rem 1rem 1rem 0.1rem;
    padding: 1rem 1rem 1rem 0.1rem;
    &.responsive > li {
      display: block;
      text-align: left;
      padding: 0.5rem;
      justify-self: end;
      &:first-child {
        padding: 0.8rem 0rem;
      }
    }
  `};
  ${media.phone`
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    position: relative;
    list-style-type: none;
    margin: 1rem 1rem 1rem 0.1rem;
    padding: 1rem 1rem 1rem 0.1rem;
    &.responsive > li {
      display: block;
      text-align: left;
      padding: 0.5rem;
      justify-self: end;
      &:first-child {
        padding: 0.8rem 0rem;
      }
    }
  `};
`

const NavItem = styled.li`
  transition: all 0.3s;
  text-transform: uppercase;
  list-style: none;
  color: ${props => props.theme.fontWhite};
  &:hover {
    letter-spacing: 0.25rem;
    transition: all 0.3s;
  }
  /* padding: 0.5rem; */
`

const NavLink = styled(Link).attrs({
  color: props => props.theme.secondary
})`
  color: inherit;
  &:visited,
  &:active {
    color: inherit;
  }
  &:hover {
    color: ${props => props.color};
  }
  &.activeLink {
    color: ${props => props.theme.secondary};
  }
`

const PageNav = props => {
  const pages = props.data.site.siteMetadata.pages
  return (
    <NavMenu>
      {/* <Dump props={props} pages={pages} /> */}
      {pages.map((item, index) => (
        <NavItem key={index}>
          <NavLink to={`/${item}`} activeClassName="activeLink">
            {item}
          </NavLink>
        </NavItem>
      ))}
    </NavMenu>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query NavItems {
        site {
          siteMetadata {
            pages
          }
        }
      }
    `}
    render={data => <PageNav data={data} {...props} />}
  />
)
