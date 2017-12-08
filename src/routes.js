import React from 'react'
import { Router, Route, hasHistory } from 'react-router'

export default (
  <Router history={hasHistory}>
    <Route path="/" component={App} />
  </Router>
)
