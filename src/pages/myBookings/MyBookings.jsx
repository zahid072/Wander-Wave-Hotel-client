import React from "react";
import { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect } from "react";
import { useState } from "react";
import MyBookingsCard from "../../components/myBookingsCard/MyBookingsCard";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookingData, setBookingData] = useState([]);
  const axiosSecure = useAxiosSecure();
  const { email, reloadUserInfo } = user;
  const user_email = email ? email : reloadUserInfo?.providerUserInfo[0].email;

  useEffect(() => {
    axiosSecure.get(`bookings?email=${user_email}`).then((res) => {
      setBookingData(res?.data);
    });
  }, []);
  console.log(bookingData);

  const handleUpdateDate = ()=>{

  }
  const handleCancelBooking = ()=>{
    
  }
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Bookings || Wander Wave</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div>
        <div className="relative">
          <div
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("https://cozystay.loftocean.com/apartment/wp-content/uploads/sites/6/2023/08/jean-philippe-delberghe-xrjusFfOksI-unsplash-3.jpg")`,
            }}
            className="h-96 w-full bg-no-repeat bg-cover bg-center flex flex-col gap-5 items-center justify-center text-white"
          >
            <nav
              aria-label="breadcrumb"
              className="w-full p-4 text-gray-100"
            >
              <ol className="flex justify-center flex-wrap h-8 space-x-2">
                <li className="flex items-center">
                  <Link to={"/"}
                    rel="noopener noreferrer"
                    title="Back to homepage"
                    className="hover:underline"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 pr-1 text-gray-100 "
                    >
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                    </svg>
                  </Link>
                </li>
                <li className="flex items-center space-x-2">
                  /
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="flex items-center px-1 capitalize hover:underline"
                  >
                    GALLERY
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                 /
                  <Link to={"/rooms"}
                    rel="noopener noreferrer"
                    className="flex items-center px-1 capitalize hover:underline"
                  >
                    BOOK NOW
                  </Link>
                </li>
                <li className="flex items-center space-x-2">
                  /
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="flex items-center px-1 capitalize hover:underline  cursor-default"
                  >
                    My Bookings
                  </a>
                </li>
              </ol>
            </nav>
            <h1 className="font-gilda px-2 text-center md:text-5xl text-3xl font-semibold tracking-widest">
              My Bookings
            </h1>
          </div>
        </div>
        <div>
          <MyBookingsCard bookingData={bookingData} handleCancelBooking={handleCancelBooking} handleUpdateDate={handleUpdateDate} />
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
