import React from 'react'
import { navigateTo } from 'gatsby'
import Recaptcha from 'react-google-recaptcha'

// need a .env.development file with the SITE_RECAPTCHA_KEY in there

import Layout from '../components/layout'

const RECAPTCHA_KEY = process.env.GATSBY_SITE_RECAPTCHA_KEY

function encode(data) {
  return Object.keys(data)
    .map(
      key =>
        encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
    )
    .join('&')
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: encode({ 'form-name': 'contact', ...this.state })
    })
      .then(() => navigateTo('/success/'))
      .catch(error => alert(error))

    e.preventDefault()
  }

  render() {
    return (
      <Layout>
        <h1>Contact</h1>
        <form
          name="contact"
          method="post"
          action="/success/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          data-netlify-recaptcha="true"
          onSubmit={this.handleSubmit}>
          <noscript>
            <p>This form will not work with JavaScript disabled.</p>
          </noscript>
          <p hidden>
            <label>
              Don’t fill this out:{' '}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your name:
              <br />
              <input
                type="text"
                name="name"
                onChange={this.handleChange}
              />
            </label>
          </p>
          <p>
            <label>
              Your email:
              <br />
              <input
                type="email"
                name="email"
                onChange={this.handleChange}
              />
            </label>
          </p>
          <p>
            <label>
              Message:
              <br />
              <textarea name="message" onChange={this.handleChange} />
            </label>
          </p>
          <Recaptcha
            ref="recaptcha"
            sitekey={RECAPTCHA_KEY}
            onChange={this.handleRecaptcha}
          />
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </Layout>
    )
  }
}
