import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import { ResponsivePie } from 'nivo'
import { topLanguages } from '../services/dataMassage'
import styled from 'styled-components'
// import { Dump } from '../util/helpers'

const LanguageWrapper = styled.div`
  width: 100%;
  height: 55vh;
  max-height: 700px;
  max-width: 700px;
  margin: 0 auto;
  padding: 40;
`

const TopLanguages = ({ data }) => {
  const { repositories } = data.github.viewer
  return (
    <LanguageWrapper>
      <ResponsivePie
        data={topLanguages(repositories)}
        margin={{
          top: 40,
          right: 80,
          bottom: 80,
          left: 80
        }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
      />
    </LanguageWrapper>
  )
}
// <Dump data={data.github.viewer.repositories} />

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
