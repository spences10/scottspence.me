import React from 'react'
import { Project } from '../components/Project'
import styled from 'styled-components'

import { media } from '../theme/globalStyle'

const ProjectWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);

  ${media.giant`
    grid-template-columns: repeat(2, 1fr);
  `};
  ${media.desktop`
    grid-template-columns: repeat(2, 1fr);
  `};
  ${media.tablet`
    grid-template-columns: repeat(1, 1fr);
  `};
  ${media.phone`
    grid-template-columns: repeat(1, 1fr);
  `};
`

class Portfolio extends React.Component {
  state = {
    projects: [
      {
        id: 1,
        name: 'Project 1',
        desc: 'One line project 1 description',
        github: 'https://someproject1.com',
        demo: 'https://someprojectdemo1.com',
        image:
          'https://static.pexels.com/photos/695971/pexels-photo-695971.jpeg'
      },
      {
        id: 2000,
        name: 'Project 2',
        desc: 'One line project 2 description',
        github: 'https://someproject2.com',
        demo: 'https://someprojectdemo2.com',
        image:
          'https://static.pexels.com/photos/695973/pexels-photo-695973.jpeg'
      },
      {
        id: 3,
        name: 'Project 3',
        desc: 'One line project 3 description',
        github: 'https://someproject3.com',
        demo: 'https://someprojectdemo3.com',
        image:
          'https://static.pexels.com/photos/695992/pexels-photo-695992.jpeg'
      },
      {
        id: 4,
        name: 'Project 4',
        desc: 'One line project 4 description',
        github: 'https://someproject4.com',
        demo: 'https://someprojectdemo4.com',
        image:
          'https://static.pexels.com/photos/695794/pexels-photo-695794.jpeg'
      },
      {
        id: 5,
        name: 'Project 5',
        desc: 'One line project 5 description',
        github: 'https://someproject5.com',
        demo: 'https://someprojectdemo5.com',
        image:
          'https://static.pexels.com/photos/695799/pexels-photo-695799.jpeg'
      },
      {
        id: 6,
        name: 'Project 6',
        desc: 'One line project 6 description',
        github: 'https://someproject6.com',
        demo: 'https://someprojectdemo6.com',
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
        <ProjectWrapper>
          {this.state.projects.map(project => (
            <Project key={project.id} {...project} />
          ))}
        </ProjectWrapper>
      </div>
    )
  }
}

export default Portfolio
