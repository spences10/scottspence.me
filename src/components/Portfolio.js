import React from 'react'
import { Project } from './Project'
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
    }
  ]
}

export const Portfolio = () => (
  <div id="portfolio" className="portfolio">
    <h1>Portfolio</h1>
    <p>List of projects here:</p>
    <div className="projects-container">
      {this.state.projects.map(project => (
        <Project key={project.id} {...project} />
      ))}
    </div>
  </div>
)

export default Portfolio
