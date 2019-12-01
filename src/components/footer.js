import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { StyledHyperLink as SHL } from '../components/shared';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import { media } from '../theme/sizes';
import { PATTERNS } from '../theme/themeConstants';
import graphCms from '/graphCms.svg';

const FooterStyles = styled.footer`
  margin-top: 2rem;
  background: ${({ theme }) => theme.colours.primary[100]};
  color: ${({ theme }) => theme.fontDark};
  background-color: ${props => props.theme.primary};
  background-image: url("${PATTERNS.TOPOGRAPHY}");
  box-shadow: rgba(0, 0, 0, 0.1) 0px -5px 5px 0px;
`;

const Wrapper = styled.div`
  display: flex;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
`;

const LinksList = styled.ul`
  margin: 0.5rem 0rem;
  padding: 0.5rem 0rem;
  ${media.phone`
    margin: 0.5rem ;
    padding: 0.5rem;
  `};
  margin-right: 2.5rem;
`;

const LinksListTitle = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  font-family: ${props => props.theme.fontHeader};
  color: ${props => props.theme.fontWhite};
`;

const ListLink = styled.li`
  list-style-type: none;
  font-family: ${props => props.theme.fontBody};
  color: ${props => props.theme.fontWhite};
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
`;

const StyledHyperLink = styled(SHL)`
  font-family: ${props => props.theme.fontBody};
  color: ${props => props.theme.fontDark};
`;

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
`;

const ImageWrapper = styled.div`
  margin: 0.5rem 0rem;
  padding: 0.5rem 0rem;
  grid-area: ${props => props.area};
  ${media.phone`
    margin: 0.5rem ;
    padding: 0.5rem;
  `};
`;

export const Footer = () => {
  const { contact, pages } = useSiteMetadata();
  return (
    <FooterStyles>
      <Wrapper>
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
              rel="noopener"
            >
              <ListLink>{details.name}</ListLink>
            </StyledHyperLink>
          ))}
        </LinksList>
        <ImageWrapper area={'g'}>
          <img src={graphCms} className="App-logo" alt="logo" />
        </ImageWrapper>
      </Wrapper>
    </FooterStyles>
  );
};
