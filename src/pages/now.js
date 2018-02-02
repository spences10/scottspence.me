import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { PageWrapper } from '../theme/globalStyle'

const NowPage = () => (
  <PageWrapper>
    <h1>What I&#39;m Doing Now</h1>
    <small>February 2018</small>
    <h3>Work</h3>
    <p>
      Currently PM for a GitHub community project{' '}
      <span>
        {' '}
        <code>grad.then()</code>
      </span>{' '}
      working with two other remote developers in Egypt and Serbia.{' '}
      <span>
        {' '}
        <code>grad.then()</code>
      </span>{' '}
      is intended as a resource for post bootcamp graduates to use as
      a resource for finding a full time role.
    </p>
    <h3>Play</h3>
    <p>
      Back to the gym after Christmas break, I&#39;m going to try
      focus more on conditioning and cardio work for a while.
    </p>
    <p>
      <Link to="/">Go home</Link>
    </p>
  </PageWrapper>
)

export default NowPage
