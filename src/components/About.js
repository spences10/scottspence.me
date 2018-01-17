import React from 'react'
// import { FaFire } from 'react-icons/lib/fa'
import styled from 'styled-components'

import { StyledH1, StyledP } from '../theme/globalStyle'

const Body = styled.div`
  height: 100vh;
  background: pink;
  border 2px solid pink;
`

// const StyledH1 = styled.h1`
//   /* height: 100vh; */
//   background: pink;
//   border 2px solid pink;
// `

// const StyledP = styled.p`
//   color: purple;
// `

class About extends React.Component {
  render() {
    return (
      <Body>
        <StyledH1>About</StyledH1>
        <StyledP>
          Here you can view the various projects I have made using a range of
          frameworks and libraries whilst continuing my full stack developer
          certification with freeCodeCamp()
        </StyledP>
        <StyledP>This page was made with React</StyledP>
      </Body>
    )
  }
}

export default About
