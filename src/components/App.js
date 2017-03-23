import React from 'react'
import Header from './Header'
import ParallaxHeader from './ParallaxHeader'
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Parallax from 'react-springy-parallax'

class App extends React.Component {
  render() {
    return (
      <div>
        <Parallax ref="parallax" pages={4}>

          <Parallax.Layer offset={0} speed={1} />
          <Parallax.Layer offset={1} speed={1} />
          <Parallax.Layer offset={2} speed={1} />
          <Parallax.Layer offset={3} speed={1} />

          <Parallax.Layer
            offset={0}
            speed={0.5}
            onClick={() => this.refs.parallax.scrollTo(1)}
          >
            <Header />
            <ParallaxHeader />
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
