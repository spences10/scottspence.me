import React from 'react'
import logo from '../styles/images/logo.svg'
import styled from 'styled-components'

const StyledLogo = styled.image`
  height: 30px
`

class Nav extends React.Component {
  render() {
    return (
      <div className="nav">
          <ul className="links">
            <li>
              <a
                href="#home"
              >
                <StyledLogo img src={logo} className="logo" alt="logo" />
              </a>
            </li>
            <li>
              <a
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
    )
  }
}

export default Nav
