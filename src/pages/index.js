import React from 'react';
import { isIE } from 'react-device-detect';
import Helmet from 'react-helmet';
import SEO from 'react-seo-component';
import styled from 'styled-components';
import About from '../../copy/about';
import Now from '../../copy/now';
import Portfolio from '../../copy/portfolio';
import Uses from '../../copy/uses';
import { BackToTop } from '../components/back-to-top';
import { Footer } from '../components/footer';
import { LandingPage } from '../components/landing-page';
import Layout from '../components/layout';
import { MugFace } from '../components/mug-face';
import { NavItems } from '../components/nav-items';
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
  if (isIE)
    return (
      <h1>
        IE is not supported. Please use a modern browser like Firefox
        or Chrome.
      </h1>
    );
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
              <MugFace />
              <NavItems />
            </LandingPage>
            <section id={`back-to-top-intersection`}>
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
            </section>
          </Wrapper>
        </Layout>
        <Footer />
        <BackToTop />
      </AnalyticsProvider>
    </>
  );
};
