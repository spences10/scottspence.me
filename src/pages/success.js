import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SuccessPage = () => (
  <Layout>
    <Helmet>
      <title>Success Page</title>
      <meta name="description" content="Success Page" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Success/Thank You Page</h1>
          </header>
          <p>Thank you for contacting me!</p>
        </div>
      </section>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SuccessPage
