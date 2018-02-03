import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Background = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  justify-items: end;
  align-items: end;
  height: ${props => `${props.size}rem`};
  width: ${props => `${props.size}rem`};
  background: ${props => props.theme.secondary.jsYellow};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
`

const Text = styled.h1`
  margin: 0rem 1rem 0.2rem 1.2rem;
  grid-column-start: 3;
  grid-row-start: 3;
  font-family: Roboto black;
  color: ${props => props.theme.text};
  font-size: ${props => `${props.size / 2}rem`};
`

const Branding = props => (
  <Background size={props.size}>
    <Text size={props.size}>SS</Text>
  </Background>
)

Branding.propTypes = {
  size: PropTypes.number.isRequired
}

export default Branding
