import React from 'react'
import { Project } from './Project'

this.state = {
  projects: [
    { id: 1, name: 'Project 1', desc: 'Project description: Project 1', github: '', preview: '', image: '' },
    { id: 2, name: 'Project 2', desc: 'Project description: Project 2', github: '', preview: '', image: '' },
    { id: 3, name: 'Project 3', desc: 'Project description: Project 3', github: '', preview: '', image: '' },
    { id: 4, name: 'Project 4', desc: 'Project description: Project 4', github: '', preview: '', image: '' }
  ]
}

export const Portfolio = () => (
  <div id="portfolio" className="portfolio">
    <h1>Portfolio</h1>
    <p>Et do culpa mollit ea aliqua ipsum.</p>
    <div className="projects-container">
      {this.state.projects.map(project => <Project key={project.id} {...project} />)}
    </div>
  </div>
)

export default Portfolio
