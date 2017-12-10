import React from 'react'
import { Grid } from 'grid-styled'
import styled from 'styled-components'

import Person from './Person'

const Image = styled.img`
  width: 100%;
`

export const Home = () => (
  <div>
    <h1>Hi</h1>
    <Image src={require('../images/city_skyline.jpeg')} alt="city_skyline" />
    <Grid p={2} width={[1, 1 / 2, 1 / 4]}>
      <Person />
    </Grid>
  </div>
)

export default Home
