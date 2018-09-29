import React from 'react'
import styled from 'styled-components'
import { Link, StaticQuery, graphql } from 'gatsby'

import ThemeSelect from '../components/themeSelect'
import { StyledHyperLink as SHL } from '../components/shared'

import { media } from '../theme/globalStyle'
import { PATTERNS } from '../theme/themeConstants'

import graphCms from '../images/graphCms.svg'
// import { Dump } from '../utils/helpers'

const FooterWrapper = styled.footer`
  z-index: 1;
  bottom: 0;
  /* width: 100%; */
  /* position: fixed; sticky */
  /* height: 20rem; */
  margin-top: 2rem;
  grid-area: f;
  display: grid;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.fontDark};
  background-color: ${props => props.theme.primary};
  background-image: url("${PATTERNS.TOPOGRAPHY}");
  box-shadow: rgba(0, 0, 0, 0.1) 0px -5px 5px 0px;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    '. . . l s . . . . . . .'
    '. . . . . . t . . . . .'
    '. . . . . . g g g . . .';
  ${media.giant`
    grid-template-areas:
      '. . l . s . . . . . . .'
      '. . . . . . . t . . . .'
      '. . . . . . . g g g . .';
      /* background: goldenrod; */
  `};
  ${media.desktop`
    grid-template-areas:
      '. l . s . . . . . . . .'
      '. . . . . . t . . . . .'
      '. . . . . . g g g g g .';
    /* background: dodgerblue; */
  `};
  ${media.tablet`
    /* height: 30rem; */
    grid-template-columns: repeat(9, 1fr);
    grid-template-areas:
        '. l . s . . . . .'
        '. t . . . . . . .'
        '. g g g g . . . .';
    /* background: mediumseagreen; */
  `};
  ${media.phone`
    grid-template-columns: repeat(9, 1fr);
    grid-template-areas:
        'l . s . . . . . .'
        't . . . . . . . .'
        'g g g g . . . . .';
    background: palevioletred;
  `};
`

const LinksList = styled.ul`
  grid-area: ${props => props.area};
  margin: 0.5rem 0rem;
  padding: 0.5rem 0rem;
  ${media.phone`
    margin: 0.5rem ;
    padding: 0.5rem;
  `};
`

const LinksListTitle = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  font-family: ${props => props.theme.fontHeader};
  color: ${props => props.theme.fontLight};
`

const ListLink = styled.li`
  list-style-type: none;
  font-family: ${props => props.theme.fontBody};
  color: ${props => props.theme.fontDark};
  &:visited,
  &:active {
    color: inherit;
  }
  &:hover {
    color: ${({ theme }) => theme.primaryAccent};
    background: ${({ theme }) => theme.primary};
    border-radius: 4px;
    transition: color 0.2s ease-out, background 0.2s ease-in;
  }
`

const StyledHyperLink = styled(SHL)`
  font-family: ${props => props.theme.fontBody};
  color: ${props => props.theme.fontDark};
`

const StyledLink = styled(Link)`
  font-family: ${props => props.theme.fontBody};
  color: ${props => props.theme.fontDark};
  &:visited,
  &:active {
    color: inherit;
  }
  &:hover {
    color: ${({ theme }) => theme.primaryAccent};
    background: ${({ theme }) => theme.primary};
    border-radius: 4px;
    transition: color 0.2s ease-out, background 0.2s ease-in;
  }
  text-transform: capitalize;
`

const ImageWrapper = styled.div`
  margin: 0.5rem 0rem;
  padding: 0.5rem 0rem;
  grid-area: ${props => props.area};
  ${media.phone`
    margin: 0.5rem ;
    padding: 0.5rem;
  `};
`

const Footer = ({ data }) => {
  const pages = data.site.siteMetadata.pages
  const contact = data.site.siteMetadata.contact
  return (
    <FooterWrapper>
      <ThemeSelect />
      {/* <Dump data={data} pages={pages} /> */}
      <LinksList area={'l'}>
        <LinksListTitle>Links</LinksListTitle>
        {pages.map((page, index) => (
          <StyledLink key={index} to={page}>
            <ListLink>{page}</ListLink>
          </StyledLink>
        ))}
      </LinksList>
      <LinksList area={'s'}>
        <LinksListTitle>Social</LinksListTitle>
        {contact.map((details, index) => (
          <StyledHyperLink
            key={index}
            href={details.link}
            target="_blank"
            rel="noopener">
            <ListLink>{details.name}</ListLink>
          </StyledHyperLink>
        ))}
      </LinksList>
      <ImageWrapper area={'g'}>
        <img src={graphCms} className="App-logo" alt="logo" />
      </ImageWrapper>
    </FooterWrapper>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query FooterData {
        site {
          siteMetadata {
            pages
            contact {
              name
              link
            }
          }
        }
      }
    `}
    render={data => <Footer data={data} {...props} />}
  />
)
