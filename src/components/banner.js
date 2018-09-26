import React from 'react'
import PropTypes from 'prop-types'

import { media } from '../theme/globalStyle'

/*
* https://css-tricks.com/snippets/css/shake-css-keyframe-animation/
*/
export const animateShake = keyframes`
  10%, 90% {
    transform: translate3d(-3px, 0, 0) rotate(8deg);
  }
  
  20%, 80% {
    transform: translate3d(5px, 0, 0);
  }
  30%, 50%, 70% {
    transform: translate3d(-5px, 0, 0) rotate(-8deg);
  }
  40%, 60% {
    transform: translate3d(5px, 0, 0);
  }
`

const Banner = props => {
  const { firstName: first, lastName: last } = props
  return (
    <React.Fragment>
      <Name className="name">
        <StyledLink to="/">
          <First>
            {first.split('').map((letter, index) => (
              <Letter key={`${letter}-${index}`}>{letter}</Letter>
            ))}
          </First>
          <Last>
            {last.split('').map((letter, index) => (
              <Letter key={`${letter}-${index}`}>{letter}</Letter>
            ))}
          </Last>
        </StyledLink>
      </Name>
    </React.Fragment>
  )
}

Banner.propTypes = {
  first: PropTypes.string,
  last: PropTypes.string
}

export default props => (
  <StaticQuery
    query={graphql`
      query BannerQuery {
        site {
          siteMetadata {
            firstName
            lastName
          }
        }
      }
    `}
    render={data => <Banner data={data} {...props} />}
  />
)
