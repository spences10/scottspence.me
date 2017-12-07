import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Hi } from './components/Hi'
import About from './components/About'
import { Portfolio } from './components/Portfolio'
import Contact from './components/Contact'

import Wrapper from './components/Wrapper'
import './styles/app'

const UlStyle = styled.ul`
  margin: 0, 0;
`

const DefaultLayout = ({ children }) => <div>{children}</div>

const Root = () => (
  <Wrapper>
    <BrowserRouter>
      <div>
        <UlStyle>
          <ul>
            <li>
              <Link to="/">Hi</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </UlStyle>

        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <DefaultLayout>
                <Hi />
              </DefaultLayout>
            )}
          />
          <Route
            exact
            path="/about"
            render={() => (
              <DefaultLayout>
                <About />
              </DefaultLayout>
            )}
          />
          <Route
            path="/portfolio"
            render={() => (
              <DefaultLayout>
                <Portfolio />
              </DefaultLayout>
            )}
          />
          <Route
            path="/contact"
            render={() => (
              <DefaultLayout>
                <Contact />
              </DefaultLayout>
            )}
          />
        </Switch>
      </div>
    </BrowserRouter>
  </Wrapper>
)

render(<Root />, document.querySelector('#main'))

DefaultLayout.propTypes = {
  children: PropTypes.array.isRequired
}
