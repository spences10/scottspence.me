import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { Project } from '../components/Project'
import styled from 'styled-components'
import Img from 'gatsby-image'

import { media } from '../theme/globalStyle'

import { projectsApi } from '../utils/api'

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

const PortfolioPage = ({ data }) => {
  const { edges: imgData } = data.allFile
  // console.log('====================')
  // console.log(data)
  // console.log(imgData)
  // console.log('====================')

  return (
    <div>
      <p>portfolio things</p>

      <h1>Portfolio</h1>
      <p>List of projects here:</p>
      {/* {this.props.imgData.map((property, index) => (
          <Img
            key={index}
            alt={property.node.relativePath}
            resolutions={property.node.childImageSharp.resolutions}
          />
        ))} */}

      <ProjectWrapper>
        {projectsApi.projects.map(project => (
          <Project key={project.id} {...project} />
        ))}
      </ProjectWrapper>

      <Link to="/">Go home</Link>
    </div>
  )
}

export const query = graphql`
  query GatsbyImageQuery {
    allFile(filter: { relativePath: { regex: "/project/" } }) {
      edges {
        node {
          relativePath
          childImageSharp {
            resolutions(width: 125, height: 125) {
              ...GatsbyImageSharpResolutions
            }
          }
        }
      }
    }
  }
`

PortfolioPage.propTypes = {
  data: PropTypes.object.isRequired
}

export default PortfolioPage
