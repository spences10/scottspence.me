import React from 'react';
import SEO from 'react-seo-component';
import styled from 'styled-components';
import About from '../../copy/about';
import Now from '../../copy/now';
import Portfolio from '../../copy/portfolio';
import Uses from '../../copy/uses';
import Layout from '../components/layout';
import { MugFace } from '../components/mug-face';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

const Wrapper = styled.div`
  margin: 0 30px;
`;

const PageWrapper = styled.div``;

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
      <Wrapper>
        <MugFace />
        <PageWrapper>
          <About id={`about`} />
        </PageWrapper>
        <PageWrapper id={`portfolio`}>
          <Portfolio />
        </PageWrapper>
        <PageWrapper id={`now`}>
          <Now />
        </PageWrapper>
        <PageWrapper id={`uses`}>
          <Uses />
        </PageWrapper>
      </Wrapper>
    </Layout>
  );
};
