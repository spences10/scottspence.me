import React from 'react'
import Layout from '../components/Layout.js'
import styles from '../styles/styles'

export default () => (
  <Layout>
    <p>Hello Next.js</p>

    <style jsx>{styles}</style>
    {/*<style jsx>{`
      h1, a {
        font-family: "Arial";
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>*/}

  </Layout>
)
