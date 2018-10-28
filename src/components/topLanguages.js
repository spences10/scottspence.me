import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import { ResponsivePie } from 'nivo'
import { topLanguages } from '../services/dataMassagers'

const TopLanguages = props => {
  return (
    <React.Fragment>
      <p>jsx goes here</p>
    </React.Fragment>
  )
}

TopLanguages.propTypes = {}

export default props => (
  <StaticQuery
    query={graphql`
      query GitHubQuery {
        github {
          viewer {
            repositories(last: 100, isFork: false) {
              nodes {
                name
                description
                url
                languages(first: 5) {
                  nodes {
                    color
                    name
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <TopLanguages data={data} {...props} />}
  />
)
