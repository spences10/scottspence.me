import React from 'react'
import Header from './Header'
import Nav from './Nav'
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'
import projectsList from '../projects-list'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.loadProjects = this.loadProjects.bind(this)

    // get initialState
    this.state = {
      projects: {}
    }
  }

  loadProjects() {
    this.setState({
      projects: projectsList
    })
  }

  render() {
    return (
      <div>
        <Nav />
        <Header />
        <About />
        <Portfolio loadProjects={this.loadProjects} />
        <Contact />
      </div>
    )
  }
}

export default App
