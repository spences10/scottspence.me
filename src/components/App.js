import React from 'react'
// import Headroom from 'react-headroom'
import styled from 'styled-components'

import Header from './Header'
// import Nav from './Nav'
import About from './About'
// import { Portfolio } from './Portfolio'
// import Contact from './Contact'

const background = styled.body`
  background-color: yellow;
  font: consolas
`

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      projects: [
        { id: 1, name: 'Project 1', desc: 'Project description: Project 1', github: '', preview: '', image: '' },
        { id: 2, name: 'Project 2', desc: 'Project description: Project 2', github: '', preview: '', image: '' },
        { id: 3, name: 'Project 3', desc: 'Project description: Project 3', github: '', preview: '', image: '' },
        { id: 4, name: 'Project 4', desc: 'Project description: Project 4', github: '', preview: '', image: '' }
      ]
    }
  }
  render() {
    return (
      <div className="app">
        <background>
        {/*<Headroom>
          <Nav />
        </Headroom>*/}
        <Header />
        <About />
        {/*<Portfolio projectsArr={this.state.projects} />*/}
        {/*<Contact />*/}
        </background>
      </div>
    )
  }
}

export default App
