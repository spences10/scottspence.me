import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Link from 'gatsby-link'

import SEO from '../components/seo'

import { /*PageWrapper,*/ ShinyButton } from '../components/shared'
import Layout from '../components/layout'
// import { Dump } from '../util/helpers'

const MdTitle = styled.h1``

const MdDate = styled.span`
  font-weight: 700;
  font-size: 0.8rem;
  color: ${props => props.theme.fontLight};
`

const Template = ({
  data // this prop will be injected by the GraphQL query below.
}) => {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html, excerpt } = markdownRemark
  const { imageLink } = data.site.siteMetadata
  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        description={excerpt || 'nothin’'}
        image={imageLink}
        pathname={frontmatter.path}
        article
      />
      <div className="md-post">
        <MdTitle>{frontmatter.title}</MdTitle>
        <MdDate>Updated: {frontmatter.date}</MdDate>
        {/* <Dump excerpt={excerpt} /> */}
        <div
          className="md-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
      <Link to="/">
        <ShinyButton>homepage</ShinyButton>
      </Link>
    </Layout>
  )
}

Template.propTypes = {
  data: PropTypes.object
}

export default Template

/* eslint-disable */
export const pageQuery = graphql`
  query MDPageByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt(pruneLength: 250)
      frontmatter {
        date(formatString: "YYYY MMMM Do")
        path
        title
      }
    }
    site {
      siteMetadata {
        imageLink
      }
    }
  }
`
/* eslint-enable */
