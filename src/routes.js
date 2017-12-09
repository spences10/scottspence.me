import React from 'react'
import { HashRouter, Router, Route } from 'react-router-dom'

import App from './App'
import Hi from './components/Hi'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

export default (
  <Router history={HashRouter}>
    <Route path="/" component={App}>
      <IndexRoute component={Hi} />
    </Route>
  </Router>
)
