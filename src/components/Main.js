import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Hi from './Hi'
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Hi} />
      <Route path="/about" component={About} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </main>
)

export default Main
