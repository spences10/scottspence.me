import React from 'react'
import Parallax from 'react-springy-parallax'
import Header from './Header'
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'
import projectsList from '../projects-list'

class App extends React.Component {
  constructor(props) {
    super(props)
    // this was added in to pass `handleScroll` to the Nav component for clicking
    this.handleScroll = value => this.parallax && this.parallax.scrollTo(value)

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
        <Parallax
          ref={ref => (this.parallax = ref)}
          pages={4}
        >

          <Parallax.Layer
            offset={0}
            speed={0.5}
            onClick={() => this.parallax.scrollTo(1)}
          >
            <Header />
          </Parallax.Layer>

          <Parallax.Layer
            offset={1}
            speed={0.5}
            onClick={() => this.parallax.scrollTo(2)}
          >
            <About />
          </Parallax.Layer>

          <Parallax.Layer
            offset={2}
            speed={0.5}
            onClick={() => this.parallax.scrollTo(3)}
          >
            <Portfolio loadProjects={this.loadProjects} />
          </Parallax.Layer>

          <Parallax.Layer
            offset={3}
            speed={0.5}
            onClick={() => this.parallax.scrollTo(0)}
          >
            <Contact />
          </Parallax.Layer>

        </Parallax>
      </div>
    )
  }
}

export default App
