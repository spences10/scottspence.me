import React from 'react'
import Headroom from 'react-headroom' // Headroom is header that hides on scroll
import logo from '../css/images/logo.svg'

// Home Page Title Header
class Header extends React.Component {

  render() {
    return (
      <Headroom id="home" className="headroom">
        <ul>
          <li>
            <a href="#home"><img src={logo} className="App-logo" alt="logo" /></a>
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
      </Headroom>
    )
  }
}

export default Header
