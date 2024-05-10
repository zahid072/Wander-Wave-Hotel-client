import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Error</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1>404</h1>
      <Link to={"/"}>Home</Link>
    </div>
  )
}

export default ErrorPage
