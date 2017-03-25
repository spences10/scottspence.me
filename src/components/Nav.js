import React from 'react'
import logo from '../css/images/logo.svg'

// Home Page Title Header
class Header extends React.Component {

  render() {
    return (
      <div className="nav">
        <ul className="links">
          <li>
            <a href="#home"><img src={logo} className="logo" alt="logo" /></a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Header
