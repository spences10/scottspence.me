import React from 'react'
import FaHand from 'react-icons/lib/fa/hand-paper-o'
import FaMousePointer from 'react-icons/lib/fa/mouse-pointer'
import styled from 'styled-components'

const background = styled.body`
  background-color: blue;
  font: consolas;
`

// Home Page Title Header
class Header extends React.Component {
  render() {
    return (
      <div id="header" className="header">
        <background>
          <div className="name">
            <h1>Scott Spence</h1>
            <span className="nameSpan" />
            <h2>
              Hello <FaHand />
            </h2>
            <span />
            <h2>
              <FaMousePointer />
            </h2>
          </div>
        </background>
      </div>
    )
  }
}

export default Header
