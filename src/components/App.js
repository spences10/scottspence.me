import React from 'react'
import Parallax from 'react-springy-parallax'
import Nav from './Nav'
import Header from './Header'
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'

class App extends React.Component {
  constructor() {
    super()
    this.ref = 'parallax'
  }
  render() {
    return (
      <div>
        <Parallax ref={this.ref} pages={4}>

          <Parallax.Layer
            offset={0}
            speed={0.5}
            onClick={() => this.refs.parallax.scrollTo(1)}
          >
            <Nav />
            <Header />
          </Parallax.Layer>

          <Parallax.Layer
            offset={1}
            speed={0.5}
            onClick={() => this.refs.parallax.scrollTo(2)}
          >
            <About />
          </Parallax.Layer>

          <Parallax.Layer
            offset={2}
            speed={0.5}
            onClick={() => this.refs.parallax.scrollTo(3)}
          >
            <Portfolio />
          </Parallax.Layer>

          <Parallax.Layer
            offset={3}
            speed={0.5}
            onClick={() => this.refs.parallax.scrollTo(0)}
          >
            <Contact />
          </Parallax.Layer>

        </Parallax>
      </div>
    )
  }
}

export default App
