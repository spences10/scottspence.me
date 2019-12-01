import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { media } from '../theme/sizes'

const Background = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  justify-items: end;
  align-items: end;
  height: ${props => `${props.size}rem`};
  width: ${props => `${props.size}rem`};
  background: ${props => props.theme.branding};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  ${media.phone`
    margin: 1rem;
    padding: 1rem;
  `};
`

const Text = styled.span`
  margin: 0.745rem;
  padding: 0.745rem;
  grid-column-start: 3;
  grid-row-start: 3;
  font-family: ${props => props.theme.fontHeader};
  font-weight: 700;
  color: ${props => props.theme.fontDark};
  font-size: ${props => `${props.size / 2}rem`};
  ${media.phone`
    margin: 0.3rem;
    padding: 0.3rem;
  `};
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
