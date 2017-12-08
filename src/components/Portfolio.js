import React from 'react'
import { Project } from './Project'
import { Grid } from 'grid-styled'

import faker from 'faker'

this.state = {
  projects: [
    {
      id: 1,
      name: faker.commerce.productName(),
      desc: faker.company.catchPhraseDescriptor(),
      github: faker.internet.url(),
      image: faker.image.imageUrl()
    },
    {
      id: 2,
      name: faker.commerce.productName(),
      desc: faker.company.catchPhraseDescriptor(),
      github: faker.internet.url(),
      image: faker.image.imageUrl()
    },
    {
      id: 3,
      name: faker.commerce.productName(),
      desc: faker.company.catchPhraseDescriptor(),
      github: faker.internet.url(),
      image: faker.image.imageUrl()
    },
    {
      id: 4,
      name: faker.commerce.productName(),
      desc: faker.company.catchPhraseDescriptor(),
      github: faker.internet.url(),
      image: faker.image.imageUrl()
    },
    {
      id: 5,
      name: faker.commerce.productName(),
      desc: faker.company.catchPhraseDescriptor(),
      github: faker.internet.url(),
      image: faker.image.imageUrl()
    },
    {
      id: 6,
      name: faker.commerce.productName(),
      desc: faker.company.catchPhraseDescriptor(),
      github: faker.internet.url(),
      image: faker.image.imageUrl()
    }
  ]
}

export const Portfolio = () => (
  <div id="portfolio" className="portfolio">
    <h1>Portfolio</h1>
    <p>List of projects here:</p>
    {this.state.projects.map(project => (
      <Grid p={2} width={[1, 1 / 2, 1 / 4]}>
        <Project key={project.id} {...project} />
      </Grid>
    ))}
  </div>
)

export default Portfolio
