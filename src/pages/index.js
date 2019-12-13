import Dump from '@wesbos/dump';
import React from 'react';
import Helmet from 'react-helmet';
import SEO from 'react-seo-component';
import styled from 'styled-components';
import About from '../../copy/about';
import Now from '../../copy/now';
import Portfolio from '../../copy/portfolio';
import Uses from '../../copy/uses';
import { BackToTop } from '../components/back-to-top';
import { Footer } from '../components/footer';
import { GitHubContributions } from '../components/gh-contributions';
import { LandingPage } from '../components/landing-page';
import Layout from '../components/layout';
import { MugFace } from '../components/mug-face';
import { NavItems } from '../components/nav-items';
import { AnalyticsProvider } from '../contexts/fathom-event-tracking';
import { useGitHubContributions } from '../hooks/useGitHubContributions';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import { contributions } from '../services/data-massage';

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
  const { weeks } = useGitHubContributions();
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
            <GitHubContributions />
            <Dump data={contributions(weeks)} />
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
