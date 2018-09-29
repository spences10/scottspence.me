import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

import { ShinyButton, ButtonBig } from '../components/shared'

const ContactPage = () => (
  <Layout>
    <h1>Hi from the second page</h1>

    <p>
      I apologise for what you are seeing right now, it will be fixed
      in coming changes
    </p>

    <p>Testing Netlify forms</p>

    <form
      name="contact"
      method="post"
      action="/success"
      data-netlify="true"
      data-netlify-honeypot="bot-field">
      <input type="hidden" name="bot-field" />
      <div className="field half first">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" />
      </div>
      <div className="field half">
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" id="email" />
      </div>
      <div className="field">
        <label htmlFor="message">Message:</label>
        <textarea name="message" id="message" rows="6" />
      </div>
      <ul className="actions">
        <div>
          <input
            type="submit"
            value="Send Message"
            className="special"
          />
        </div>
        <div>
          <input type="reset" value="Clear" />
        </div>
      </ul>
    </form>

    <Link to="/">
      <ShinyButton>homepage</ShinyButton>
    </Link>
  </Layout>
)

export default ContactPage
