import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'

import SEO from '../components/seo'
import Layout from '../components/layout'

import TopLanguages from '../components/topLanguages'

import { ProjectCard } from '../components/projectCard'
import { ShinyButton } from '../components/shared'

// import { Dump } from '../util/helpers'
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

const PortfolioPage = ({ data }) => {
  const { assets } = data.graphcmsdata
  return (
    <Layout>
      <SEO
        title={'Portfolio, projects, examples'}
        description={data.site.siteMetadata.description || 'nothin’'}
        image={data.site.siteMetadata.imageLink}
      />
      {/* <Dump assets={assets} /> */}
      <h1>Portfolio</h1>
      <p>List of projects here:</p>
      <div style={{ height: 500 }}>
        <TopLanguages />
      </div>
      <ProjectWrapper>
        {assets.map((project, index) => {
          const {
            projectName,
            projectDescription,
            githubRepo,
            demoLink
          } = project.projectImageProject[0]
          const { url: image, id } = project
          return (
            // <Dump prop={project.projectImageProject[0].projectName} />
            <ProjectCard
              key={id}
              name={projectName}
              desc={projectDescription}
              github={githubRepo}
              demo={demoLink}
              image={image}
            />
          )
        })}
      </ProjectWrapper>

      <p>
        <Link to="/">
          <ShinyButton>homepage</ShinyButton>
        </Link>
      </p>
    </Layout>
  )
}

export const query = graphql`
  {
    graphcmsdata {
      assets {
        createdAt
        updatedAt
        mimeType
        url
        size
        width
        status
        handle
        fileName
        height
        id
        projectImageProject {
          createdAt
          updatedAt
          status
          id
          projectName
          projectDescription
          githubRepo
          demoLink
        }
      }
    }
    site {
      siteMetadata {
        title
        description
        imageLink
      }
    }
  }
`

PortfolioPage.propTypes = {
  data: PropTypes.object.isRequired
}

export default PortfolioPage
