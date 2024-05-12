import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import AllReviews from "../../components/allReviews/AllReviews";

const Contact = () => {
  
  

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact || Wander Wave</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div>
        <AllReviews />
      </div>
    </div>
  );
};

export default Contact;
