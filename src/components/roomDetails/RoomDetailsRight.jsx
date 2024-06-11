import React, { useState } from "react";
import { useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import RoomReviews from "../roomReviews/RoomReviews";
import useFetchData from "../../hooks/useFetchData";
import { Link } from "react-router-dom";

const RoomDetailsRight = ({ room, handleBooking, available }) => {
  const { roomData } = useFetchData();
  const { guests, _id } = room;
  const [err, setErr] = useState("");
  const defaultDate = new Date();
  const defaultDay = defaultDate.getDate();
  const [checkIn, setCheckIn] = useState(defaultDate.toISOString().split('T')[0]);
  // checkout
  const [checkOut, setCheckOut] = useState('');
  useEffect(() => {
    const crntDate = new Date();
    const nextDay = new Date(crntDate);
    nextDay.setDate(crntDate.getDate() + 3);
    const formattedDate = nextDay.toISOString().split('T')[0];
    setCheckOut(formattedDate);
  }, []);
  // checkout
  const defaultMonth = defaultDate.toLocaleString("default", { month: "long" });
  const [dayIn, setDayIn] = useState(defaultDay);
  const [monthIn, setMonthIn] = useState(defaultMonth);
  const [dayOut, setDayOut] = useState(defaultDay + 3);
  const [monthOut, setMonthOut] = useState(defaultMonth);
  const [nights, setNights] = useState(0);

  useEffect(() => {
    if (dayOut > dayIn) {
      setNights(dayOut - dayIn);
    } else {
      setNights(0);
    }
  }, [dayIn, dayOut]);

  const handleCheckIn = (event) => {
    setErr("");
    const selectedDate = new Date(event.target.value);
    
    const formattedDate = selectedDate.toISOString().split('T')[0];
    setCheckIn(formattedDate);
    const selectedDay = parseInt(selectedDate.getDate());
    const selectedMonth = selectedDate.toLocaleString("default", {
      month: "long",
    });
    setDayIn(selectedDay);
    setMonthIn(selectedMonth);
  };
  const handleCheckOut = (event) => {
    const selectedDate = new Date(event.target.value);
    const formattedDate = selectedDate.toISOString().split('T')[0];
    setCheckOut(formattedDate);
    const selectedDay = parseInt(selectedDate.getDate());
    const selectedMonth = selectedDate.toLocaleString("default", {
      month: "long",
    });
    setDayOut(selectedDay);
    setMonthOut(selectedMonth);
  };
  return (
    <div>
      <div className="grid grid-cols-2 gap-3 bg-[#2c4549a6] p-4 rounded text-white">
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
            defaultValue={checkIn}
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
            defaultValue={checkOut}
            type="date"
          />
        </div>
        <div className="relative text-center p-3 bg-[#2C4549]">
          <h1>GUESTS</h1>
          <div className="flex gap-2 md:mt-3 justify-center mt-1">
            <h1 className="md:text-5xl text-3xl font-semibold font-poppins">
              {guests}
            </h1>
          </div>
        </div>
        <div className="relative text-center p-3 bg-[#2C4549]">
          <h1>NIGHTS</h1>
          <div className="flex gap-2 md:mt-3 justify-center mt-1">
            <h1 className="md:text-5xl text-3xl font-semibold font-poppins">
              {nights}
            </h1>
          </div>
        </div>
      </div>
      {err && <p className="text-red-500">{err}</p>}
      <div className="mt-5">
        <button
          onClick={() => {
            handleBooking(`${checkIn} - ${checkOut}`, nights);
          }}
          className={`btn w-full ${
            available
              ? "bg-[#2C4549] hover:bg-[#2C4549]"
              : "bg-[#82342e] hover:bg-[#492c2c]"
          } text-white rounded`}
        >
          {!available ? "Booked" : "Book Now"}
        </button>
      </div>
      <div className="mt-5">
        <RoomReviews id={_id} />
      </div>
      <div className="bg-[#7142910f] p-5 rounded flex flex-col gap-3 justify-center  w-full mt-5">
        <h1 className="text-xl font-semibold pb-2">Best Rooms</h1>
        {roomData?.slice(1, 3).map((room, index) => (
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="rounded relative overflow-hidden"
          >
            <div className="absolute top-0 bottom-0 z-10 left-0 right-0 bg-[#2d2b2b2f]"></div>
            <img
              className="w-full rounded object-cover object-center"
              src={room?.images[0]}
              alt=""
            />
            <p data-aos="fade-left"
                data-aos-delay="100"
                data-aos-duration="500" className="absolute z-20 top-5 right-0 bg-white py-1 px-3 rounded-l">
              ${room?.price_per_night}
            </p>
            <div className="absolute text-center z-20 left-[30%] top-[60%]">
              <h1 className=" text-xl font-semibold text-white rounded">
                {room?.name}
              </h1>
              <Link to={`/roomDetails/${room?._id}`}>
              
              <button className="uppercase text-white px-3 py-1 rounded mt-4 underline bg-black text-sm font-semibold ">
                book now
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomDetailsRight;
