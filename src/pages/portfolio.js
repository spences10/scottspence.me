import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { Project } from '../components/Project'
import styled from 'styled-components'
// import Img from 'gatsby-image'

import { media } from '../theme/globalStyle'

import { projectsApi } from '../utils/api'

import { PageWrapper, ShinyButton } from '../theme/globalStyle'

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

  // projectsApi.projects.map(project => {
  //   console.log('=====projectsApi==========')
  //   console.log(project.image)
  //   console.log('====================')
  // })

  // imgData.map(property => {
  //   console.log('=====imgData==========')
  //   console.log(property.node.relativePath)
  //   console.log('====================')
  // })

  return (
    <PageWrapper>
      <h1>Portfolio</h1>
      <p>List of projects here:</p>
      {/* {imgData.map((property, index) => (
        <Img
          key={index}
          alt={property.node.relativePath}
          resolutions={property.node.childImageSharp.resolutions}
        />
      ))} */}

      <ProjectWrapper>
        {/* {imgData.map(property => {
          property.node.relativePath
          property.node.childImageSharp.resolutions
        })}
        {projectsApi.projects.map(project => (
          <Project key={project.id} {...project} />
        ))} */}
        {projectsApi.projects.map((project, index) => {
          project.imgData = imgData[index]
          return <Project key={project.id} {...project} />
        })}
      </ProjectWrapper>

      <p>
        <Link to="/">
          <ShinyButton>homepage</ShinyButton>
        </Link>
      </p>
    </PageWrapper>
  )
}

export const query = graphql`
  query GatsbyImageQuery {
    allFile(
      sort: { order: ASC, fields: [absolutePath] }
      filter: { relativePath: { regex: "/project/" } }
    ) {
      edges {
        node {
          relativePath
          childImageSharp {
            resolutions(width: 200, height: 200) {
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
