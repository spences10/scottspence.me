import React from 'react'
import Header from './Header'
import ParallaxHeader from './ParallaxHeader'
import Contact from './Contact'

class App extends React.Component {
  render () {
    return (
      <div>
        <Header/>
        <ParallaxHeader/>
        <Contact/>
			</div>
    )
  }
}

export default App
