import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import {
  PageWrapper,
  StyledLink,
  ShinyButton as SB
} from '../theme/globalStyle'

const StyledLi = styled.li`
  margin: 1rem;
`

const ShinyButton = SB.extend`
  margin: 2rem 0rem;
`

const AboutPage = () => (
  <PageWrapper>
    <h1>Hello from London</h1>
    <p>Hi I&#39;m Scott Spence 👋</p>
    <h3>Backstory</h3>

    <p>
      A little bit about me, I have been a VBA developer since 2007
      working for companies such as Barclays and Deloitte. For the
      past ~{(
        (new Date() - new Date('2016-11-01')) /
        1000 /
        60 /
        60 /
        24 /
        30
      ).toFixed(0)}{' '}
      months now I have been learning web development (JavaScript) and
      all the technologies and languages used therein.
    </p>
    <p>
      I&#39;m looking for a job, I&#39;m sure that learning in a
      commercial environment will accelerate my learning and knowledge
      as it did when I started out as a VBA developer. Ideally,
      I&#39;m looking for a role as a junior-mid full-stack developer,
      but I&#39;m equally open to front or back as well.
    </p>

    <p>
      I&#39;m an analyst developer in the financial sector working in
      the City of London, I&#39;m marriwed with a beautiful wife and
      daughter.
    </p>
    <h3>Coding history</h3>
    <p>
      I learned to code [VBA] whilst working my first &#39;proper&#39;
      job at Barclays Bank as an assistant to the finance manager of a
      business area, the scripting was to automate credit card
      reconciliation from SAP and for producing monthly reporting
      figures, I was lucky enough to have been spotted by one of the
      development managers on a different team and offered a job as an
      Analyst Developer back in 2007, for the past{' '}
      {new Date().getFullYear() - 2007} years I have mainly worked
      with VBA in Excel, Access, Word and in some cases PowerPoint!
    </p>
    <p>
      The majority of solutions I made at Barclays were workflow
      tools, the tracking of a cheque or payment through a process,
      lots of greenfeild work with the focus on using the tools the
      business had to hand, so, no SQL servers, just the MS Office
      suite, &#34;user needs a database? Ok cool lets set up an MS
      Access db on a file server somewhere&#34; yes!
    </p>
    <p>
      Sectors I have worked in: Finance [Risk, Asset Management],
      Property, Oil &#38; Gas and currently in the Lloyd&#39;s
      insurance market.
    </p>
    <p>Tools of my trade: VBA, SQL some VB.NET and C#</p>

    <h3>My interests</h3>
    <p>
      As I&#39;m devoting nearly every spare hour I have to sitting in
      front of a screen and studying, my main interests are currently:
    </p>

    <StyledLi>JavaScript learning all teh things!</StyledLi>

    <StyledLi>
      React - check the{' '}
      <StyledLink>
        <Link to="/portfolio">portfolio page</Link>{' '}
      </StyledLink>
      for details
    </StyledLi>

    <StyledLi>Node - made several Twitter bots.</StyledLi>

    <StyledLi>GraphQL</StyledLi>

    <p>Things on my &#39;I should learn that list&#39;:</p>

    <StyledLi>WebHooks</StyledLi>

    <StyledLi>
      GitHub integrations, I really want to build a badge-bot!
    </StyledLi>

    <h3>Other interests</h3>
    <p>
      I try to get to the gym three times a week to weight lift, that
      took up quite a bit of my time over the last 3 years or so. I
      have focused on the compound lifts bench, press, squat and my
      favorite,{' '}
      <StyledLink
        target="_blank"
        rel="noopener"
        href={'https://www.youtube.com/watch?v=b8sadCd7Lhc'}>
        deadlift!
      </StyledLink>
    </p>
    <p>
      Before that I used to play tennis three times a week up to a
      county standard, I&#39;d love to have the time to play tennis
      again but between all the above there&#39;s not much time left.
      🙃
    </p>

    <p>
      If there&#39;s anything you want to ask, you can{' '}
      <StyledLink
        target="_blank"
        rel="noopener"
        href={'https://github.com/spences10/ama'}>
        Ask Me Anything
      </StyledLink>
    </p>
    <p>or</p>
    <p>
      If you&#39;d like to have a chat I&#39;ll be more than happy to
      have a{' '}
      <StyledLink
        target="_blank"
        rel="noopener"
        href={'https://calendly.com/spences10apps/5min'}>
        5 minute call
      </StyledLink>{' '}
      with you if you would like to know more about me.
    </p>
    <p>All the best. 👍</p>
    <Link to="/">
      <ShinyButton>homepage</ShinyButton>
    </Link>
  </PageWrapper>
)

export default AboutPage
