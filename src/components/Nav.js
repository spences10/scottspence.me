import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

import logo from '../images/logo.svg'

const StyledLogo = styled.img`
  height: 30px;
`

const Nav = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </header>
)

// class Nav extends React.Component {
//   render() {
//     return (
//       <div className="nav">
//         <ul className="links">
//           <li>
//             <a href="#home">
//               <StyledLogo img src={logo} className="logo" alt="logo" />
//             </a>
//           </li>
//           <li>
//             <a href="#about">About</a>
//           </li>
//           <li>
//             <a href="#portfolio">Portfolio</a>
//           </li>
//           <li>
//             <a href="#contact">Contact</a>
//           </li>
//         </ul>
//       </div>
//     )
//   }
// }

export default Nav
