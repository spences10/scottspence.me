import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { PageWrapper, StyledLink } from '../theme/globalStyle'

const StyledLi = styled.li`
  margin: 1rem;
`

const UsesPage = () => (
  <PageWrapper>
    <h1>Uses</h1>
    <h2>Editor + Terminal</h2>
    <StyledLi>
      Visual Studio Code with Dark+ (default dark) theme
    </StyledLi>
    <StyledLi>
      Zeit&#39;s Hyper, with Hyper Snazzy Theme and fish 🐟 shell ❤️
    </StyledLi>
    <StyledLi>
      <StyledLink
        target="_blank"
        rel="noopener"
        href={'https://larsenwork.com/monoid/'}>
        Monoid
      </StyledLink>{' '}
      font for both text editor and terminal
    </StyledLi>
    <h2>Desk Setup</h2>
    <StyledLi>My computer is an ASUS Transformer Pro T304UA</StyledLi>
    <StyledLi>
      I run two HP HP EliteDisplay E232 58,4 cm (23&#34;) Monitors
      through a Dell 452-BBOO USB 3.0 Ultra HD Triple Video Docking
      Station.
    </StyledLi>
    <h2>Desktop Apps</h2>
    <StyledLi>
      For development I use Windows Subsystem Linux in conjunction
      with Hyper terminal 👌
    </StyledLi>
    <StyledLi>For gif capture I use LICEcap</StyledLi>
    <p>
      <Link to="/">Go home</Link>
    </p>
  </PageWrapper>
)

export default UsesPage
