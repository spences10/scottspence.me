import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { PageWrapper, StyledLink } from '../theme/globalStyle'

const FaqHeader = styled.h1``

const Intro = styled.span`
  margin: 0rem;
  padding: 0rem;
`

const FaqList = styled.ul`
  margin: 0.5rem 0rem;
  padding: 0.5rem 0rem;
`

const FaqListHeader = styled.span`
  font-weight: 700;
  margin: 0rem 0rem;
  padding: 0rem 0rem;
`

const FaqDetail = styled.p`
  margin: 1rem 0rem;
  padding: 0rem 0rem;
`

const FaqListItem = styled.li`
  margin: 1rem 1.5rem;
  padding: 0rem;
`

const FaqPage = () => (
  <PageWrapper>
    <FaqHeader>For recruiters - FAQ</FaqHeader>
    <Intro>
      Hi there 👋 thanks for taking an interest in me and my profile,
      I know I&#39;m nothing more than a keyword match right now, so I
      have gone to the effort of putting this information here for
      you.
    </Intro>
    <FaqList>
      <FaqListHeader>What&#39;s my ideal role?</FaqListHeader>
      <FaqListItem>
        Working in an agile environment using best practices for
        development.
      </FaqListItem>
      <FaqListItem>
        There has to be a good percentage of pair programming.
      </FaqListItem>
      <FaqListItem>
        Working in a team where there is an emphasis on technical
        development.
      </FaqListItem>
      <FaqListItem>
        <b>If you really want to grab my attention,</b> tell me how
        you collaborate, how you keep quality high, how you contribute
        back to the community, and how you help your team continue to
        learn and grow.
      </FaqListItem>
      <FaqListItem>
        Work life balance is a big deal for me I really <b>don not</b>{' '}
        want to go over a 42.5 hour working week.
      </FaqListItem>
    </FaqList>
    <FaqList>
      <FaqListHeader>What&#39;s your preferred stack?</FaqListHeader>
      <FaqListItem>
        Really enjoying using the JAMStack right now, <b>Gatsby</b>{' '}
        (which uses <b>React</b> and <b>GraphQL</b>).
      </FaqListItem>
      <FaqListItem>
        For styling I have taken to using styled-components 💅, take a
        look at the used by section on their{' '}
        <StyledLink
          target="_blank"
          rel="noopener"
          href={'https://www.styled-components.com/'}>
          site.
        </StyledLink>
      </FaqListItem>
      <FaqListItem>
        For CMS I&#39;d like the opportunity to work with GraphCMS
        and/or Contentful.
      </FaqListItem>
      <FaqListItem>
        For back-end I prefer <b>node</b> which is where the all of my
        experience is.
      </FaqListItem>
    </FaqList>
    <FaqList>
      <FaqListHeader>Salary?</FaqListHeader>
      <FaqListItem>
        Right now, for me, it&#39;s more about learning and
        progressing with the technology than it&#39;s about salary.
      </FaqListItem>
      <FaqListItem>
        If you don&#39;t want to give me a exact number then a range
        would be fine, but really the previous point covers it 😊.
      </FaqListItem>
    </FaqList>
    <FaqList>
      <FaqListHeader>Are you willing to relocate?</FaqListHeader>
      <FaqListItem>nop!</FaqListItem>
      <FaqListItem>
        I&#39;ll consider fully remote with minimal travel, two weeks{' '}
        <b>at most</b> per year.
      </FaqListItem>
    </FaqList>
    <FaqList>
      <FaqListHeader>
        What are your location preferences?
      </FaqListHeader>
      <FaqListItem>
        I live ~30 minute train ride from London Victoria/Blackfriars
        and prefer to avoid travelling by tube if possible.
      </FaqListItem>
      <FaqListItem>
        Based in Swanley, Kent I&#39;ll consider places very close to
        Sevenoaks and Bromley.
      </FaqListItem>
    </FaqList>
    <FaqList>
      <FaqListHeader>
        Your skills look like a great match for this position we have.
        Can we setup a phone call to chat?
      </FaqListHeader>
      <FaqDetail>
        I prefer to avoid phone calls for a number of reasons:
      </FaqDetail>
      <FaqListItem>
        I&#39;m on a{' '}
        <StyledLink
          target="_blank"
          rel="noopener"
          href={'http://www.paulgraham.com/makersschedule.html'}>
          maker&#39;s schedule
        </StyledLink>
        , which means interruptions are surprisingly disruptive to my
        flow.
      </FaqListItem>
      <FaqListItem>
        I&#39;ve already tried to answer some of the most basic
        questions on this site, and I&#39;ve probably phrased them
        more clearly here than I will on the phone.
      </FaqListItem>
      <FaqListItem>
        This question is asked frequently enough that my default
        answer has to be, if not &quot;no,&quot; at least &quot;read
        this first.&quot;
      </FaqListItem>
      <FaqListItem>
        Contact me by email. That&#39;s my preferred means of
        communication. If we are still interested in things after a
        few email exchanges, perhaps then a phone call can be
        arranged.
      </FaqListItem>
    </FaqList>
  </PageWrapper>
)

export default FaqPage
