import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";
import RoomDetailsRight from "../../components/roomDetails/RoomDetailsRight";
import RoomDetailsLeft from "../../components/roomDetails/RoomDetailsLeft";
import { useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaXmark } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";

const RoomDetails = () => {
  const [postLoader, setPostLoader] = useState(false);
  const [modal, setModal] = useState(false);
  const [night, setNight] = useState(0);
  const room = useLoaderData();
  const [booking_date, setBookingDate] = useState("");
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  if (room.message) {
    return;
  }
  const { name, images, price_per_night, availability, room_size, _id } = room;
  const [available, setAvailable] = useState(availability);
  const user_email = user?.email ? user?.email : user?.reloadUserInfo?.providerUserInfo[0].email;
  const image = images[0];
  const roomId = _id;

  const handleBooking = (date, nights) => {
    if (available) {
      setNight(nights);
      setModal(true);
      setBookingDate(date);
    } else {
      Swal.fire({
        title: "Sorry!",
        text: "The room already Booked",
        icon: "error",
        confirmButtonText: "Close",
      });
    }
  };
  const new_booking = {
    name,
    roomId,
    image,
    price_per_night,
    room_size,
    booking_date,
    user_email,
  };
  const handleConfirm = () => {
    setModal(false);
    setPostLoader(true);
    axiosSecure
      .post("/bookings", new_booking)
      .then((res) => {
        if (res.data.insertedId) {
          axiosSecure
            .patch(`/hotelRooms/${_id}`, { availability: false })
            .then((res) => {
              if (res.data.modifiedCount) {
                setPostLoader(false);
                setAvailable(false);
                Swal.fire({
                  title: "Success!",
                  text: "Successfully Booked",
                  icon: "success",
                  confirmButtonText: "Ok",
                });
              }
            })
            .catch((err) => {
              setPostLoader(false);
              Swal.fire({
                title: "Error!",
                text: err.message,
                icon: "error",
                confirmButtonText: "Ok",
              });
            });
        }
      })
      .catch((err) => {
        setPostLoader(false);
        Swal.fire({
          title: "Error!",
          text: err.message,
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };
  return (
    <div className="relative">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Details || Wander Wave</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="relative">
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("https://media.designcafe.com/wp-content/uploads/2023/09/11183952/modern-luxury-bedroom-design.jpg")`,
          }}
          className="h-80 w-full bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center text-white"
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
                    className="w-5 h-5 pr-1 underline text-gray-100 "
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                  </svg>
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                /
                <Link
                  to={"/gallery"}
                  rel="noopener noreferrer"
                  className="flex items-center px-1 active:underline capitalize hover:underline"
                >
                  GALLERY
                </Link>
              </li>

              <li className="flex items-center space-x-2">
                /
                <Link
                  to={"/rooms"}
                  rel="noopener noreferrer"
                  className="flex items-center px-1 hover:underline  cursor-default uppercase"
                >
                  book more
                </Link>
              </li>
            </ol>
          </nav>
          <h1 className="font-gilda px-2 text-center md:text-6xl text-3xl font-semibold tracking-widest">
            Room Details
          </h1>
        </div>
      </div>
      <div className="my-10 max-w-[1320px] lg:mx-auto mx-2">
        <h1 className="text-3xl text-end font-semibold uppercase tracking-widest">
          {name}
        </h1>
      </div>
      <div className="flex lg:flex-row flex-col-reverse gap-5 max-w-[1320px] lg:mx-auto mx-2">
        <div className="lg:w-1/3 w-full ">
          <div className="">
            <RoomDetailsRight
              room={room}
              handleBooking={handleBooking}
              available={available}
            />
          </div>
        </div>
        <div className="lg:w-2/3 w-full ">
          <RoomDetailsLeft room={room} available={available} />
        </div>
      </div>
      {modal && (
        <div className="absolute z-50 top-0 bottom-0 left-0 right-0 bg-[#31303061]">
          <div className="fixed rounded lg:w-2/5 md:w-2/3 w-11/12  top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 bg-white">
            <div className="relative size-full p-5">
              <div className="md:w-4/5 w-full h-2/5 mx-auto ">
                <img
                  className="w-full object-cover object-center "
                  src={images[0]}
                  alt=""
                />
              </div>

              <div className="mb-10 text-center space-y-3 py-5">
                <h1 className="text-xl font-bold">{name}</h1>
                <p className="flex md:flex-row flex-col gap-4 justify-center">
                  <span className="font-semibold">Price</span> : $
                  {price_per_night}{" "}
                  <span>
                    <span className="font-semibold">Size</span> : {room_size}
                  </span>
                </p>
                <p>
                  <span className="font-semibold">Nights</span> : {night}
                </p>
                <p>
                  <span className="font-semibold">Booking Date</span> :{" "}
                  {booking_date}
                </p>
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
                onClick={handleConfirm}
                className="px-5 py-2 rounded bg-[#2C4549] hover:bg-[#283d41] text-white absolute bottom-5 left-1/2 transform -translate-x-1/2"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
      {postLoader && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-[#2e2d2d47] flex items-center justify-center">
          <span className="loading loading-spinner loading-lg text-white size-16"></span>
        </div>
      )}
    </div>
  );
};

export default RoomDetails;
