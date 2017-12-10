import React from 'react'
import { Grid } from 'grid-styled'
import styled from 'styled-components'

import Person from './Person'

import { StyledH1 } from '../theme/globalStyle'

const Image = styled.img`
  width: 100%;
`

export const Home = () => (
  <div>
    <StyledH1>Hi</StyledH1>
    <Image src={require('../images/city_skyline.jpeg')} alt="city_skyline" />
    <Grid p={2} width={[1, 1 / 2, 1 / 4]}>
      <Person />
    </Grid>
  </div>
)

export default Home
