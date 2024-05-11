import React from 'react'
import { Helmet } from 'react-helmet'
import Loader from '../../loader/Loader'

const Contact = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact || Wander Wave</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
         <Loader/>
    </div>
  )
}

export default Contact
