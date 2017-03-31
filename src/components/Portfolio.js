import React from 'react'
import Project from './Project'

class Portfolio extends React.Component {

  componentWillMount() {
    this.props.loadProjects
  }

  render() {
    return (
      <div id="portfolio" className="portfolio">
        <h1>Portfolio</h1>
        <p>Et do culpa mollit ea aliqua ipsum.</p>
        <Project />
      </div>
    )
  }
}

export default Portfolio
