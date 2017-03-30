import React from 'react'

class Project extends React.Component {
  createProject(event) {
    event.preventDefault()
    console.log('add project')
  }
  render() {
    return (
      <div className="projects" >
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
        <button type="submit" onClick={e => this.createProject(e)}>Add Project</button>
      </div>
    )
  }
}

export default Project
