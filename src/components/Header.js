import React from 'react'
import Headroom from 'react-headroom' // Headroom is header that hides on scroll

// Home Page Title Header
class Header extends React.Component {

  render() {
    return (
      <Headroom className="headroom">
        <ul>
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
