import React from 'react'
import logo from '../css/images/logo.svg'

class Nav extends React.Component {
  render() {
    return (
      <div className="nav">
        <ul className="links">
          <li>
            <a href="#nav"><img src={logo} className="logo" alt="logo" /></a>
          </li>
          <li>
            <a
              href="#"
              onClick={this.context.parallax.scrollTo(3)}
            >
              About
            </a>
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

Nav.contextTypes = { parallax: React.PropTypes.object }

export default Nav
