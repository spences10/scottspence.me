import React from 'react'
import FaHand from 'react-icons/lib/fa/hand-paper-o'
import FaMousePointer from 'react-icons/lib/fa/mouse-pointer'

// Home Page Title Header
class Header extends React.Component {

  render() {
    return (
      <div id="header" className="header">
        <div className="name">
          <h1>Scott Spence</h1>
          <span className="nameSpan" />
          <h2>Hello <FaHand /></h2>
          <span />
          <h2>Click to navigate through the pages <FaMousePointer /></h2>
        </div>
      </div>
    )
  }
}

export default Header
