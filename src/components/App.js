import React from 'react'
import Header from './Header'
import ParallaxHeader from './ParallaxHeader'
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ParallaxHeader />
        <About />
        <Portfolio />
        <Contact />
      </div>
    )
  }
}

export default App
