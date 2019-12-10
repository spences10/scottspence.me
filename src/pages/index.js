import React from 'react';
import Helmet from 'react-helmet';
import SEO from 'react-seo-component';
import styled from 'styled-components';
import About from '../../copy/about';
import Now from '../../copy/now';
import Portfolio from '../../copy/portfolio';
import Uses from '../../copy/uses';
import { Footer } from '../components/footer';
import { LandingPage } from '../components/landing-page';
import Layout from '../components/layout';
import { MugFace } from '../components/mug-face';
import { NavItems } from '../components/nav-items';
import { H1 } from '../components/page-elements';
import { AnalyticsProvider } from '../contexts/fathom-event-tracking';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

const Wrapper = styled.div``;

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
    <>
      <AnalyticsProvider>
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
            <Helmet
              title={`Homepage time!`}
              titleTemplate={`%s | ${title}`}
            />
            <LandingPage>
              <div style={{ textAlign: 'center' }}>
                <H1>
                  Hello World!
                  <span role="img" aria-label="waving hand emoji">
                    👋
                  </span>
                </H1>
              </div>
              <MugFace />
              <NavItems />
            </LandingPage>
            <PageWrapper id={`about`}>
              <About />
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
        <Footer />
      </AnalyticsProvider>
    </>
  );
};
