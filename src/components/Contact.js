import React from 'react'

import Icon from '../theme/icons'
import { ICONS } from '../theme/constants'

import { StyledH1, StyledLi, StyledUl, StyledA } from '../theme/globalStyle'

class Contact extends React.Component {
  render() {
    return (
      <div>
        <StyledH1>Contact</StyledH1>

        <a
          href="mailTo:spences10apps@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon={ICONS.EMAIL} size={64} />
        </a>
        <a
          href="https://twitter.com/ScottDevTweets"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon={ICONS.TWITTER} size={64} />
        </a>

        <a
          href="https://github.com/spences10"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon={ICONS.GITHUB} size={64} />
        </a>

        <a
          href="https://medium.com/@spences10"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon={ICONS.MEDIUM} size={64} />
        </a>

        <a
          href="https://uk.linkedin.com/in/linkedinscottspence"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon={ICONS.LINKEDIN} size={64} />
        </a>
      </div>
    )
  }
}

export default Contact
