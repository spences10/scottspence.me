import React from 'react';
import SEO from 'react-seo-component';
import styled from 'styled-components';
import About from '../../copy/about';
import Now from '../../copy/now';
import Uses from '../../copy/uses';
import Layout from '../components/layout';
import { StyledHyperLink as SHL } from '../components/shared';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

const EmojiWrapper = styled.span.attrs({
  role: 'img',
})``;

const StyledHyperLink = styled(SHL)`
  font-family: ${props => props.theme.fontBody};
  color: ${props => props.theme.fontDark};
`;

export default () => {
  const {
    description,
    imageLink,
    title,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
  } = useSiteMetadata();
  return (
    <Layout>
      <SEO
        title={title}
        description={description}
        image={`${siteUrl}${imageLink}`}
        pathname={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
      />
      <About />
      <Now />
      <Uses />
      {/* <Dump data={data} /> */}
      <p>Welcome to my personal portfolio site.</p>
      <p>
        Built with{' '}
        <StyledHyperLink
          href={'https://www.gatsbyjs.com/'}
          target="_blank"
          rel="noopener"
        >
          Gatsby
        </StyledHyperLink>{' '}
        and{' '}
        <StyledHyperLink
          href={'https://www.styled-components.com/'}
          target="_blank"
          rel="noopener"
        >
          styled components
        </StyledHyperLink>
        {/* eslint-disable-next-line */}
        <EmojiWrapper aria-label="nail polish">💅</EmojiWrapper>
      </p>
    </Layout>
  );
};
