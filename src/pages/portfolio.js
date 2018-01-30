import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Portfolio from '../components/Portfolio'
import Img from 'gatsby-image'

const PortfolioPage = ({ data }) => {
  const { edges: imgData } = data.allFile
  // console.log('====================')
  // console.log(data)
  // console.log(imgData)
  // console.log('====================')

  return (
    <div>
      <p>portfolio things</p>

      {imgData.map((property, index) => (
        <Img
          key={index}
          alt={property.node.relativePath}
          resolutions={property.node.childImageSharp.resolutions}
        />
      ))}
      {/* <Img
        alt={'props.name'}
        resolutions={property.node.resolutions}
      /> */}
      {/* <Img
        alt={'props.name'}
        resolutions={data.project2.childImageSharp.resolutions}
      /> */}
      {/* <Img
        alt={'props.name'}
        resolutions={data.project3.childImageSharp.resolutions}
      /> */}

      <Portfolio imgData={imgData} />
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

    # project1: file(relativePath: { regex: "/project1/" }) {
    #   childImageSharp {
    #     resolutions(width: 125, height: 125) {
    #       ...GatsbyImageSharpResolutions
    #     }
    #   }
    # }
    # project2: file(relativePath: { regex: "/project2/" }) {
    #   childImageSharp {
    #     resolutions(width: 125, height: 125) {
    #       ...GatsbyImageSharpResolutions
    #     }
    #   }
    # }
    # project3: file(relativePath: { regex: "/project3/" }) {
    #   childImageSharp {
    #     resolutions(width: 125, height: 125) {
    #       ...GatsbyImageSharpResolutions
    #     }
    #   }
    # }
  }
`

PortfolioPage.propTypes = {
  data: PropTypes.object.isRequired
}

export default PortfolioPage
