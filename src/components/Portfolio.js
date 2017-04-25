import React from 'react'
import PropTypes from 'prop-types'
import { Project } from './Project'

export const Portfolio = (props) => {
  return (
    <div id="portfolio" className="portfolio">
      <h1>Portfolio</h1>
      <p>Et do culpa mollit ea aliqua ipsum.</p>
      <div className="projects-container">
        {props.projectsArr.map(project => <Project key={project.id} {...project} />)}
      </div>
      <Project />
    </div>
  )
}

Portfolio.propTypes = {
  projectsArr: PropTypes.array.isRequired
}

export default Portfolio
