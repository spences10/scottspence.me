import React from 'react'
import { isIE } from 'react-device-detect'
import SEO from 'react-seo-component'
import styled from 'styled-components'
import About from '../../copy/about'
import Now from '../../copy/now'
import Portfolio from '../../copy/portfolio'
import Uses from '../../copy/uses'
import { BackToTop } from '../components/back-to-top'
import FavIcon from '../components/favicon'
import { Footer } from '../components/footer'
import { LandingPage } from '../components/landing-page'
import { MugFace } from '../components/mug-face'
import { NavItems } from '../components/nav-items'
import { useSiteMetadata } from '../hooks/use-site-metadata'

const Wrapper = styled.div``

export default () => {
  const {
    description,
    imageLink,
    title,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
  } = useSiteMetadata()
  if (isIE)
    return (
      <h1>
        IE is not supported. Please use a modern browser like Firefox
        or Chrome.
      </h1>
    )
  return (
    <>
      <SEO
        title={`Homepage time!`}
        titleTemplate={title}
        description={description}
        image={`${siteUrl}${imageLink}`}
        pathname={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
      />
      <Wrapper>
        <FavIcon />
        <LandingPage>
          <MugFace />
          <NavItems />
        </LandingPage>
        <section id={`back-to-top-intersection`}>
          <About />
          <Portfolio />
          <Now />
          <Uses />
        </section>
      </Wrapper>
      <Footer />
      <BackToTop />
    </>
  )
}
