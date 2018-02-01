import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const PageWrapper = styled.div`
  margin: 1rem;
  padding: 1rem;
  font-family: 'Titillium Web' bold;
  line-height: 150%;
`

const AboutPage = () => (
  <PageWrapper>
    <h1>Hi from the about page</h1>
    <p>Currently page 2</p>

    <p>Hi I&#39;m Scott,</p>

    <p>
      A little bit about me, I have been a VBA developer since 2007
      working for companies such as Barclays and Deloitte. For the
      past ~18 months now I have been learning web development
      (JavaScript) and all the technologies and languages used
      therein.
    </p>
    <p>
      I&#39;m looking for a job, I&#39;m sure that learning in a
      commercial environment will accelerate my learning and knowledge
      as it did when I started out as a VBA developer. Ideally,
      I&#39;m looking for a role as a junior-mid full-stack developer,
      but I&#39;m equally open to front or back as well.
    </p>
    <p>
      If you&#39;d like to have a chat I&#39;ll be more than happy to
      have a 10-15minute call with you if you would like to know more
      about me.
    </p>
    <p>All the best.</p>

    <Link to="/">Go back to the homepage</Link>
  </PageWrapper>
)

export default AboutPage
