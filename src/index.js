import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import registerServiceWorker from './registerServiceWorker'

import App from './components/App'
import './theme/globalStyle'

ReactDOM.render(
  <div>
    <Helmet
      title="Scott Spence - portfolio"
      meta={[
        {
          name: 'description',
          content: 'The portfolio site of Scott Spence - developer'
        },
        {
          name: 'keywords',
          content:
            'developer, JavaScript, js, learning, 100daysofcode, ScottDevTweets'
        }
      ]}
    />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>,
  document.getElementById('root')
)
registerServiceWorker()
