import React from 'react'
import FaHand from 'react-icons/lib/fa/hand-paper-o'

// Home Page Title Header
class ParallaxHeader extends React.Component {

  render() {
    return (
      <div id="header" className="header">
        <div className="name">
          <h1>Scott Spence</h1>
          <p>Hello <FaHand /></p>
        </div>
      </div>
    )
  }
}

export default ParallaxHeader
