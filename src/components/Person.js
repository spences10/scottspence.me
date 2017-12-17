import React from 'react'
import styled from 'styled-components'

import { StyledH3, StyledP, ColorPalette as CP } from '../theme/globalStyle'
import { ButtonSmall } from '../components/Button'

const Wrapper = styled.div`
  width: 400px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto;
  grid-template-areas: 'img text text';
  background: ${CP.primary.light};
  border-radius: 4px;
`

const CardTitle = StyledH3.extend`
  color: ${CP.white};
  margin: 0.05rem;
  padding: 0rem;
`

const CardText = StyledP.extend`
  color: ${CP.white};
  margin: 0.05rem;
  padding: 0rem;
`

const Text = styled.div`
  grid-area: text;
  padding: 0.5rem;
  margin: 0.5rem;
`

const Image = styled.img`
  grid-area: img;
  justify-self: center;
  margin: 1.3rem 0.5rem 0.5rem 0.5rem;
  border-radius: 90px;
  border: 1px solid #000;
  width: 6.25rem;
  height: 6.25rem;
`

class Person extends React.Component {
  render() {
    return (
      <Wrapper>
        <Image src={this.props.img} />
        <Text>
          <CardTitle>{this.props.title}</CardTitle>
          <CardText>{this.props.text}</CardText>
          <ButtonSmall color={CP.white} border={CP.white}>
            Check Me Out!
          </ButtonSmall>
        </Text>
      </Wrapper>
    )
  }
}

export default Person
