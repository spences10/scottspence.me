import React from 'react'
// import { FaFire } from 'react-icons/lib/fa'
import styled from 'styled-components'

const Body = styled.div`
  height: 100vh;
  background: pink;
  border 2px solid pink;
`

const StyledH1 = styled.h1`
  height: 100vh;
  background: pink;
  border 2px solid pink;
`

class About extends React.Component {
  render() {
    return (
      <Body>
        <StyledH1>About</StyledH1>
        <div className="about-start">
          Here you can view the various projects I have made using a range of
          frameworks and libraries whilst continuing my full stack developer
          certification with freeCodeCamp()
        </div>
        <div className="">This page was made with React</div>
      </Body>
    )
  }
}

export default About
