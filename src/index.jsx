import React from 'react'
import { render } from 'react-dom'
import {
  BrowserRouter,
  Route,
  Switch,
  Link
} from 'react-router-dom'

import { Hi } from './components/Hi'
import About from './components/About'
import { Portfolio } from './components/Portfolio'
import Contact from './components/Contact'

const DefaultLayout = ({ children }) => (
  <div>
    <p>Main layout</p>
    {children}
  </div>
)

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li><Link to="/">Hi</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <Switch>
          <Route exact path="/" render={() => <DefaultLayout><Hi /></DefaultLayout>} />
          <Route exact path="/about" render={() => <DefaultLayout><About /></DefaultLayout>} />
          <Route path="/portfolio" render={() => <DefaultLayout><Portfolio /></DefaultLayout>} />
          <Route path="/contact" render={() => <DefaultLayout><Contact /></DefaultLayout>} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

render(<Root />, document.querySelector('#main'))
