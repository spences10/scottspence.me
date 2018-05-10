import React from 'react'
import styled from 'styled-components'

import { PageWrapper } from '../theme/globalStyle'

const MdTitle = styled.h1``

const MdDate = styled.span`
  font-weight: 700;
  font-size: 0.8rem;
  color: ${props => props.theme.primary.dark};
`

const Template = ({
  data // this prop will be injected by the GraphQL query below.
}) => {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <PageWrapper>
      <div className="md-post">
        <MdTitle>{frontmatter.title}</MdTitle>
        <MdDate>Updated: {frontmatter.date}</MdDate>
        <div
          className="md-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </PageWrapper>
  )
}

export default Template

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "YYYY MMMM Do")
        path
        title
      }
    }
  }
`
