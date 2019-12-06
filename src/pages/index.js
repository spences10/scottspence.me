import React from 'react';
import SEO from 'react-seo-component';
import styled from 'styled-components';
import About from '../../copy/about';
import Now from '../../copy/now';
import Uses from '../../copy/uses';
import Layout from '../components/layout';
import { MugFace } from '../components/mug-face';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

const Wrapper = styled.div`
  margin: 0 30px;
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
      <Wrapper>
        <MugFace />
        <About />
        <Now />
        <Uses />
      </Wrapper>
    </Layout>
  );
};
