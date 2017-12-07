import React from 'react'
import {
  FaEnvelope,
  FaTwitter,
  FaGithub,
  FaMedium,
  FaFire,
  FaCodepen,
  FaLinkedin
} from 'react-icons/lib/fa'

class Contact extends React.Component {
  render() {
    return (
      <div id="contact" className="contact">
        <h1>Contact</h1>
        <ul className="social">
          <li>
            <a
              href="mailTo:spences10apps@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/ScottDevTweets"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/spences10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/@spences10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaMedium />
            </a>
          </li>
          <li>
            <a
              href="https://forum.freecodecamp.com/users/spences10/summary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFire />
            </a>
          </li>
          <li>
            <a
              href="http://codepen.io/spences10/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaCodepen />
            </a>
          </li>
          <li>
            <a
              href="https://uk.linkedin.com/in/linkedinscottspence"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Contact
