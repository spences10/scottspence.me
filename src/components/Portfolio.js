import React from 'react'
import { Project } from '../components/Project'

class Portfolio extends React.Component {
  state = {
    projects: [
      {
        id: 1,
        name: 'Project 1',
        desc: 'One line project 1 description',
        github: 'https://someproject1.com',
        image:
          'https://static.pexels.com/photos/695971/pexels-photo-695971.jpeg'
      },
      {
        id: 2,
        name: 'Project 2',
        desc: 'One line project 2 description',
        github: 'https://someproject2.com',
        image:
          'https://static.pexels.com/photos/695973/pexels-photo-695973.jpeg'
      },
      {
        id: 3,
        name: 'Project 3',
        desc: 'One line project 3 description',
        github: 'https://someproject3.com',
        image:
          'https://static.pexels.com/photos/695992/pexels-photo-695992.jpeg'
      },
      {
        id: 4,
        name: 'Project 4',
        desc: 'One line project 4 description',
        github: 'https://someproject4.com',
        image:
          'https://static.pexels.com/photos/695794/pexels-photo-695794.jpeg'
      },
      {
        id: 5,
        name: 'Project 5',
        desc: 'One line project 5 description',
        github: 'https://someproject5.com',
        image:
          'https://static.pexels.com/photos/695799/pexels-photo-695799.jpeg'
      },
      {
        id: 6,
        name: 'Project 6',
        desc: 'One line project 6 description',
        github: 'https://someproject6.com',
        image:
          'https://static.pexels.com/photos/696208/pexels-photo-696208.jpeg'
      }
    ]
  }

  render() {
    return (
      <div>
        <h1>Portfolio</h1>
        <p>List of projects here:</p>
        {this.state.projects.map(project => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    )
  }
}

export default Portfolio
