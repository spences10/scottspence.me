import React from 'react'
import { Project } from './Project'
import { Grid } from 'grid-styled'

import faker from 'faker'

import { StyledH1, StyledP } from '../theme/globalStyle'

this.state = {
  projects: [
    {
      id: 1,
      name: faker.commerce.productName(),
      desc: faker.company.catchPhraseDescriptor(),
      github: faker.internet.url(),
      image: 'https://static.pexels.com/photos/695971/pexels-photo-695971.jpeg'
    },
    {
      id: 2,
      name: faker.commerce.productName(),
      desc: faker.company.catchPhraseDescriptor(),
      github: faker.internet.url(),
      image: 'https://static.pexels.com/photos/695973/pexels-photo-695973.jpeg'
    },
    {
      id: 3,
      name: faker.commerce.productName(),
      desc: faker.company.catchPhraseDescriptor(),
      github: faker.internet.url(),
      image: 'https://static.pexels.com/photos/695992/pexels-photo-695992.jpeg'
    },
    {
      id: 4,
      name: faker.commerce.productName(),
      desc: faker.company.catchPhraseDescriptor(),
      github: faker.internet.url(),
      image: 'https://static.pexels.com/photos/695794/pexels-photo-695794.jpeg'
    },
    {
      id: 5,
      name: faker.commerce.productName(),
      desc: faker.company.catchPhraseDescriptor(),
      github: faker.internet.url(),
      image: 'https://static.pexels.com/photos/695799/pexels-photo-695799.jpeg'
    },
    {
      id: 6,
      name: faker.commerce.productName(),
      desc: faker.company.catchPhraseDescriptor(),
      github: faker.internet.url(),
      image: 'https://static.pexels.com/photos/696208/pexels-photo-696208.jpeg'
    }
  ]
}

export const Portfolio = () => (
  <div>
    <StyledH1>Portfolio</StyledH1>
    <StyledP>List of projects here:</StyledP>
    {this.state.projects.map(project => (
      <Grid p={2} width={[1, 1 / 2, 1 / 4]}>
        <Project key={project.id} {...project} />
      </Grid>
    ))}
  </div>
)

export default Portfolio
