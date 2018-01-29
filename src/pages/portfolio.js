import React from 'react'
import Link from 'gatsby-link'
import Portfolio from '../components/Portfolio'
import Img from 'gatsby-image'

const PortfolioPage = ({ data }) => (
  <div>
    <p>portfolio things</p>

    <Img
      alt={'props.name'}
      resolutions={data.project1.childImageSharp.resolutions}
    />
    <Img
      alt={'props.name'}
      resolutions={data.project2.childImageSharp.resolutions}
    />
    <Img
      alt={'props.name'}
      resolutions={data.project3.childImageSharp.resolutions}
    />

    <Portfolio />
    <Link to="/">Go home</Link>
  </div>
)

export const query = graphql`
  query GatsbyImageQuery {
    project1: file(relativePath: { regex: "/project1/" }) {
      childImageSharp {
        resolutions(width: 125, height: 125) {
          ...GatsbyImageSharpResolutions
        }
      }
    }
    project2: file(relativePath: { regex: "/project2/" }) {
      childImageSharp {
        resolutions(width: 125, height: 125) {
          ...GatsbyImageSharpResolutions
        }
      }
    }
    project3: file(relativePath: { regex: "/project3/" }) {
      childImageSharp {
        resolutions(width: 125, height: 125) {
          ...GatsbyImageSharpResolutions
        }
      }
    }
  }
`

export default PortfolioPage
