import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/Home/Home";
import SignIn from "../pages/auth/signIn/SignIn";
import SignUp from "../pages/auth/signUp/SignUp";
import Rooms from "../pages/Rooms/Rooms";
import MyBookings from "../pages/myBookings/MyBookings";
import Contact from "../pages/contact/Contact";
import PrivateRouter from "./PrivateRouter";
import RoomDetails from "../pages/roomDetails/RoomDetails";
import Gallery from "../pages/gallery/Gallery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/rooms/",
        element: <Rooms />,
      },
      {
        path: "/myBookings",
        element: (
          <PrivateRouter>
            <MyBookings />
          </PrivateRouter>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/roomDetails/:id",
        element: (
          <PrivateRouter>
            <RoomDetails />
          </PrivateRouter>
        ),
        loader:({ params }) => fetch(`https://assignment-11-server-mocha-nine.vercel.app/hotelRooms/${params?.id}`)
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
