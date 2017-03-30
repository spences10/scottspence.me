import React from 'react'

class Project extends React.Component {
  createProject(event) {
    event.preventDefault()
    console.log('gonnam make a project')
  }
  render() {
    return (
      <div className="project-container" >
        <div className="name">
          Name
        </div>
        <div className="desc">
          Desc
        </div>
        <div className="github">
          GitHub
        </div>
        <div className="preview">
          Preview
        </div>
        <div className="image">
          Image
        </div>
        <a onClick={e => this.createProject(e)}>Add Project</a>
      </div>
    )
  }
}

export default Project
