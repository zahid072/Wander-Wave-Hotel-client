import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>
      <h1>404</h1>
      <Link to={"/"}>Home</Link>
    </div>
  )
}

export default ErrorPage
