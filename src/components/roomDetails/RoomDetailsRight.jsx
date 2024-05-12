import React, { useState } from "react";
import { useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

const RoomDetailsRight = ({ room }) => {
  const { guests, availability } = room;
  const [err, setErr] = useState("");
  const defaultDate = new Date();
  const defaultDay = defaultDate.getDate();
  const defaultMonth = defaultDate.toLocaleString("default", { month: "long" });
  const [dayIn, setDayIn] = useState(defaultDay);
  const [monthIn, setMonthIn] = useState(defaultMonth);
  const [dayOut, setDayOut] = useState(defaultDay + 3);
  const [monthOut, setMonthOut] = useState(defaultMonth);
  const [nights, setNights] = useState(0);

  const handleBooking = () => {
    if (nights === 0) {
      setErr("Please select a valid date.");
    }
  };

  useEffect(() => {
    if (dayOut > dayIn) {
      setNights(dayOut - dayIn);
    } else if (dayOut < dayIn) {
      setNights(0);
    }
  }, [dayIn, dayOut]);

  const handleCheckIn = (event) => {
    setErr("");
    // console.log(event)
    const selectedDate = new Date(event.target.value);
    setDate(selectedDate);
    const selectedDay = parseInt(selectedDate.getDate());
    const selectedMonth = selectedDate.toLocaleString("default", {
      month: "long",
    });
    setDayIn(selectedDay);
    setMonthIn(selectedMonth);
  };
  const handleCheckOut = (event) => {
    setErr("");
    // console.log(event)
    const selectedDate = new Date(event.target.value);
    setDate(selectedDate);
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
          onClick={handleBooking}
          className={`btn w-full ${availability ? "bg-[#2C4549] hover:bg-[#2C4549]" : "bg-[#82342e] hover:bg-[#492c2c]"} text-white rounded`}
        >
          {!availability ? "Booked" : "Book Now"}
        </button>
      </div>
    </div>
  );
};

export default RoomDetailsRight;
