import React from 'react'
import styled from 'styled-components'

const img =
  'https://pbs.twimg.com/profile_images/697901266945646592/05jKr58e_400x400.jpg'

const Card = styled.div`
  padding: 1.75rem;
  margin: 0.5rem;
  border-radius: 4px;
  color: white;
  background: purple;
`

const Image = styled.div`
  padding: 1.75rem;
  margin: 0.5rem;
  border-radius: 90px;
  border: 1px solid #000;
  background-image: url(${img});
  background-size: 100px;
  width: 40px;
  height: 40px;
`

export const Person = () => (
  <Card>
    <h1>This is the person</h1>
    <Image />
  </Card>
)

export default Person
