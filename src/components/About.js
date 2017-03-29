import React from 'react'
import { FaFire } from 'react-icons/lib/fa'

class About extends React.Component {
  render() {
    return (
      <div id="about" className="about">
        <h1>About</h1>
        <div className="about-start">
          Here you can view the various projects I have made using a range of frameworks and libraries whilst continuing my full stack developer certification with freeCodeCamp(<FaFire />)
        </div>
        <div className="">
          This page was made with React and Stylus 
        </div>
      </div>
    )
  }
}

export default About
