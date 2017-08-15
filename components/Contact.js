import React from 'react'
import Link from 'next/link'
import { FaEnvelope, FaTwitter, FaGithub, FaMedium, FaFire, FaCodepen, FaLinkedin } from 'react-icons/lib/fa'
import styles from '../styles/styles'

const linkStyle = {
  fontSize: 40,
  marginRight: 15,
  fontFamily: 'Monoid'
}

const Contact = () => (
  <div>
    <Link prefetch href='mailTo:spences10apps@gmail.com'>
      <a style={linkStyle}>
        <FaEnvelope />
      </a>
    </Link>
    <Link href='https://twitter.com/ScottDevTweets'>
      <a style={linkStyle}>
        <FaTwitter />
      </a>
    </Link>
    <Link href='https://github.com/spences10'>
      <a style={linkStyle}>
        <FaGithub />
      </a>
    </Link>
    <Link href='https://medium.com/@spences10'>
      <a style={linkStyle}>
        <FaMedium />
      </a>
    </Link>
    <Link href='https://forum.freecodecamp.com/users/spences10/summary'>
      <a style={linkStyle}>
        <FaFire />
      </a>
    </Link>
    <Link href='http://codepen.io/spences10/'>
      <a style={linkStyle}>
        <FaCodepen />
      </a>
    </Link>
    <Link href='https://uk.linkedin.com/in/linkedinscottspence'>
      <a style={linkStyle}>
        <FaLinkedin />
      </a>
    </Link>
  </div>
)

export default Contact
