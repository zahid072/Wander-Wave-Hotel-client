import React from "react";
import { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect } from "react";
import { useState } from "react";
import MyBookingsCard from "../../components/myBookingsCard/MyBookingsCard";
import { FaXmark } from "react-icons/fa6";
import Swal from "sweetalert2";
import { IoIosArrowDown } from "react-icons/io";
import AddReviews from "../../components/addReviews/AddReviews";

const MyBookings = () => {
  // -------------------modals---------------------
  const [modal, setModal] = useState(false);
  const [reviewModal, setReviewModal] = useState(false);
  // ------------------data states-----------------
  const [bookingId, setBookingId] = useState(null);
  const [room_id, setReviewRoomId] = useState(null);
  const [reFetch, setReFetch] = useState(false);
  const { user } = useContext(AuthContext);
  const [bookingData, setBookingData] = useState([]);
  const [postLoader, setPostLoader] = useState(false);
  const [deleteLoader, setDeleteLoader] = useState(false);
  // -------------------date states start---------------------------------
  const defaultDate = new Date();
  const defaultDay = defaultDate.getDate();
  const defaultMonth = defaultDate.toLocaleString("default", { month: "long" });
  const [dayIn, setDayIn] = useState(defaultDay);
  const [monthIn, setMonthIn] = useState(defaultMonth);
  const [dayOut, setDayOut] = useState(defaultDay + 3);
  const [monthOut, setMonthOut] = useState(defaultMonth);

  const [checkIn, setCheckIn] = useState(
    `${defaultDate.getDate().toString().padStart(2, "0")}/${(
      defaultDate.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}/${defaultDate.getFullYear()}`
  );
  const [checkOut, setCheckOut] = useState(
    `${(defaultDate.getDate() + 3).toString().padStart(2, "0")}/${(
      defaultDate.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}/${defaultDate.getFullYear()}`
  );
  // -----------------------date states end--------------------------
  const axiosSecure = useAxiosSecure();
  const { email, reloadUserInfo } = user;
  const user_email = email ? email : reloadUserInfo?.providerUserInfo[0].email;

  useEffect(() => {
    axiosSecure.get(`bookings?email=${user_email}`).then((res) => {
      setBookingData(res?.data);
      setReFetch(false);
    });
  }, [reFetch]);
  console.log(bookingData);

  // -------------------booking date update handle-----------------------------
  const handleUpdateDate = (id) => {
    setModal(true);
    setBookingId(id);
  };
  const newDate = { booking_date: `${checkIn} - ${checkOut}` };
  const handleUpdate = () => {
    setPostLoader(true);
    axiosSecure
      .patch(`/bookings/${bookingId}`, newDate)
      .then((res) => {
        if (res.data.modifiedCount) {
          setPostLoader(false);
          setModal(false);
          setReFetch(true);
          Swal.fire({
            title: "Success!",
            text: "Successfully Updated",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      })
      .catch((err) => {
        setPostLoader(false);
        setModal(false);
        Swal.fire({
          title: "Error!",
          text: err.message,
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  // ------------------booking delete handle---------------------------------
  const handleCancelBooking = (rooId, id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to cancel this booking!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes!",
      cancelButtonText: "No!",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        setDeleteLoader(true);
        axiosSecure.delete(`/bookings/${id}`).then((res) => {
          if (res.data.deletedCount) {
            axiosSecure
              .patch(`/hotelRooms/${rooId}`, { availability: true })
              .then((res) => {
                console.log(res.data);
                if (res.data.modifiedCount) {
                  setReFetch(true);
                  setDeleteLoader(false);
                  Swal.fire({
                    title: "Canceled!",
                    text: "Your booking has been Canceled.",
                    icon: "success",
                    confirmButtonText: "Ok",
                  });
                }
              })
              .catch((err) => {
                setDeleteLoader(false);
                Swal.fire({
                  title: "Error!",
                  text: err.message,
                  icon: "error",
                  confirmButtonText: "Ok",
                });
              });
          }
        });
      }
    });
  };

  // ------------------------------handle get updated date ------------------------------------
  const handleCheckIn = (e) => {
    const selectedDate = new Date(e.target.value);
    setCheckIn(
      `${selectedDate.getDate().toString().padStart(2, "0")}/${(
        selectedDate.getMonth() + 1
      )
        .toString()
        .padStart(2, "0")}/${selectedDate.getFullYear()}`
    );
    // ------------ set display date and month--------------
    const selectedDay = parseInt(selectedDate.getDate());
    const selectedMonth = selectedDate.toLocaleString("default", {
      month: "long",
    });
    setDayIn(selectedDay);
    setMonthIn(selectedMonth);
  };
  const handleCheckOut = (e) => {
    const selectedDate = new Date(e.target.value);
    setCheckOut(
      `${selectedDate.getDate().toString().padStart(2, "0")}/${(
        selectedDate.getMonth() + 1
      )
        .toString()
        .padStart(2, "0")}/${selectedDate.getFullYear()}`
    );
    // ------------ set display date and month--------------
    const selectedDay = parseInt(selectedDate.getDate());
    const selectedMonth = selectedDate.toLocaleString("default", {
      month: "long",
    });
    setDayOut(selectedDay);
    setMonthOut(selectedMonth);
  };
  // ----------------handleReviews---------------------
  const handleReviews = (id)=>{
    setReviewModal(true)
    setReviewRoomId(id)
  }
  return (
    <div className="relative">
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
            <nav aria-label="breadcrumb" className="w-full p-4 text-gray-100">
              <ol className="flex justify-center flex-wrap h-8 space-x-2">
                <li className="flex items-center">
                  <Link
                    to={"/"}
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
                  <Link
                    to={"/rooms"}
                    rel="noopener noreferrer"
                    className="flex items-center px-1 capitalize hover:underline"
                  >
                    BOOK MORE
                  </Link>
                </li>
                <li className="flex items-center space-x-2">
                  /
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="flex items-center px-1  hover:underline  cursor-default uppercase"
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
          <MyBookingsCard
            bookingData={bookingData}
            handleCancelBooking={handleCancelBooking}
            handleUpdateDate={handleUpdateDate}
            handleReviews={handleReviews}
          />
        </div>
        {deleteLoader && (
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-[#2e2d2d47] flex items-center justify-center">
            <span className="loading loading-spinner loading-lg text-white size-16"></span>
          </div>
        )}
      </div>
      {reviewModal && (
        <div className="absolute top-0 bottom-0 left-0 right-0 z-50 bg-[#31303061]">
          <div className="fixed rounded lg:w-2/5 md:w-2/3 w-11/12  top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 bg-white">
            <div className="relative size-full p-5">
             <AddReviews room_id={room_id} setReviewModal={setReviewModal} />
            </div>
          </div>
        </div>
      )}
      {modal && (
        <div className="absolute top-0 bottom-0 left-0 right-0 z-50 bg-[#31303061]">
          <div className="fixed rounded lg:w-2/5 md:w-2/3 w-11/12  top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 bg-white">
            <div className="relative size-full p-5">
              <div className="grid grid-cols-2 gap-3 bg-[#2c4549a6] p-4 mb-20 mt-5 rounded text-white">
                <div className="relative p-3 text-center bg-[#2C4549]">
                  <h1>CHECK IN</h1>
                  <div className="flex gap-2 justify-center md:mt-3 mt-1">
                    <h1 className="md:text-5xl text-3xl font-semibold font-poppins">
                      {dayIn < 10 ? "0" + dayIn : dayIn}
                    </h1>
                    <h2>
                      {monthIn} <IoIosArrowDown className="mx-auto mt-1" />
                    </h2>
                  </div>
                  <input
                    className=" absolute top-0 left-0 bottom-0 right-0 opacity-0 cursor-pointer w-full h-full"
                    onChange={handleCheckIn}
                    type="date"
                  />
                </div>
                <div className="relative text-center p-3 bg-[#2C4549]">
                  <h1>CHECK OUT</h1>
                  <div className="flex gap-2 md:mt-3 justify-center mt-1">
                    <h1 className="md:text-5xl text-3xl font-semibold font-poppins">
                      {dayOut < 10 ? "0" + dayOut : dayOut}
                    </h1>
                    <h2>
                      {monthOut} <IoIosArrowDown className="mx-auto mt-1" />
                    </h2>
                  </div>
                  <input
                    className=" absolute top-0 left-0 bottom-0 right-0 opacity-0 cursor-pointer w-full h-full"
                    onChange={handleCheckOut}
                    type="date"
                  />
                </div>
              </div>

              <button
                onClick={() => {
                  setModal(false);
                }}
                className="p-1  rounded bg-slate-200 absolute top-2 right-2"
              >
                <FaXmark />
              </button>

              <button
                onClick={handleUpdate}
                className="px-5 py-2 rounded bg-[#2C4549] hover:bg-[#283d41] text-white absolute bottom-5 left-1/2 transform -translate-x-1/2"
              >
                Update
              </button>
              {postLoader && (
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#2e2d2d47] flex items-center justify-center">
                  <span className="loading loading-spinner loading-lg text-white size-16"></span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyBookings;
