import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import registerServiceWorker from './registerServiceWorker'

import App from './components/App'
import './theme/globalStyle'

ReactDOM.render(
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Scott Spence</title>
      <link rel="canonical" href="http://scottspence/me" />
    </Helmet>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>,
  document.getElementById('root')
)
registerServiceWorker()
