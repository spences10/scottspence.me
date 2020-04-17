import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'

const ImageDiv = styled(Img)`
  margin: 0 auto;
  position: relative;
  height: 200px;
  width: 200px;
  border-radius: 50%;
`

const Wrapper = styled.div`
  flex: 1 1 0%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const MugFace = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "favicon.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Wrapper>
      <ImageDiv
        fluid={data.placeholderImage.childImageSharp.fluid}
        alt='mug face image'
      />
    </Wrapper>
  )
}
