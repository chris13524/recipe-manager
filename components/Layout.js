// MODIFIED FROM: https://github.com/vercel/next.js/blob/canary/examples/with-iron-session/components/Layout.js

import React from 'react'
import Head from 'next/head'
import Header from './Header'
import PropTypes from 'prop-types'

const Layout = ({ children }) => (
  <>
    <style jsx global>{`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }
      body {
        margin: 0;
        color: #333;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          'Helvetica Neue', Arial, Noto Sans, sans-serif, 'Apple Color Emoji',
          'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
      }
    `}</style>

    <Header />

    <main>
      <div className="container">{children}</div>
    </main>
  </>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.node,
}