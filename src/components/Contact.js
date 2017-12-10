import React from 'react'
// import {
//   FaEnvelope,
//   FaTwitter,
//   FaGithub,
//   FaMedium,
//   FaLinkedin
// } from 'react-icons/lib/fa'

import { StyledH1, StyledLi, StyledUl, StyledA } from '../theme/globalStyle'

class Contact extends React.Component {
  render() {
    return (
      <div>
        <StyledH1>Contact</StyledH1>

        <StyledA
          href="mailTo:spences10apps@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          email
          {/* <FaEnvelope /> */}
        </StyledA>
        <StyledA
          href="https://twitter.com/ScottDevTweets"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
          {/* <FaTwitter /> */}
        </StyledA>

        <StyledA
          href="https://github.com/spences10"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
          {/* <FaGithub /> */}
        </StyledA>

        <StyledA
          href="https://medium.com/@spences10"
          target="_blank"
          rel="noopener noreferrer"
        >
          medium
          {/* <FaMedium /> */}
        </StyledA>

        <StyledA
          href="https://uk.linkedin.com/in/linkedinscottspence"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin
          {/* <FaLinkedin /> */}
        </StyledA>
      </div>
    )
  }
}

export default Contact
