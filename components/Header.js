import React from 'react'
import Link from 'next/link'
import { aStyle } from '../styles/styles'

const linkStyle = {
  marginRight: 15,
  fontFamily: 'Monoid'
}

const Header = () => (
  <div>
    <aStyle><Link href="/">
      <a style={linkStyle}>Home</a>
    </Link></aStyle>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <Link href="/portfolio">
      <a style={linkStyle}>Portfolio</a>
    </Link>
    <Link href="/contact">
      <a style={linkStyle}>Contact</a>
    </Link>
  </div>
)

export default Header
