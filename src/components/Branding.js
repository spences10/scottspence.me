import React from 'react'
import styled from 'styled-components'

const Background = styled.div`
  height: ${props => props.size || '150px'};
  width: ${props => props.size || '150px'};
  background: ${props => props.theme.secondary.jsYellow};
  position: relative;
`

const Text = styled.h1`
  margin: 1rem 0.1rem 1rem 1rem;
  padding: 1rem 0.5rem 1rem 1rem;
  font-family: Roboto black;
  color: ${props => props.text};
  font-size: 85px;
  position: absolute;
  bottom: 0;
  right: 0;
`

const Branding = () => (
  <Background>
    <Text>SS</Text>
  </Background>
)

export default Branding
