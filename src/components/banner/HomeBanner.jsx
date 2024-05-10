import React, { useState } from "react";
import videos from "../../assets/video/banner-video.mov";
import { IoIosArrowDown } from "react-icons/io";

const HomeBanner = () => {
  const [date, setDate] = useState(new Date());
  const [dayIn, setDayIn] = useState(1);
  const [monthIn, setMonthIn] = useState("january");
  const [dayOut, setDayOut] = useState(3);
  const [monthOut, setMonthOut] = useState("january");

  const handleCheckIn = (event) => {
    // console.log(event)
    const selectedDate = event.target ? new Date(event.target.value) : date;
    setDate(selectedDate);
    const selectedDay = parseInt(selectedDate.getDate());
    const selectedMonth = selectedDate.toLocaleString("default", {
      month: "long",
    });
    setDayIn(selectedDay);
    setMonthIn(selectedMonth);
  };
  const handleCheckOut = (event) => {
    // console.log(event)
    const selectedDate = event.target ? new Date(event.target.value) : date;
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
      <div className="relative">
        <video className=" w-full" autoPlay loop muted width="100%">
          <source src={videos} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d34] to-[#1211116d] flex justify-center items-center">
          <div>
            <h1 className="font-gilda mx-auto text-center font-bold lg:text-6xl text-white z-50 w-[600px] leading-loose">
              ENJOY A LUXURY EXPERIENCE
            </h1>
            <div className="flex mt-4">
              <div className="p-10 lg:w-[500px] flex justify-around bg-white">
                {" "}
                {/* calender div */}
                <div className="relative text-center">
                  <h1>Check In</h1>
                  <div className="flex gap-2 mt-3">
                    <h1 className="lg:text-6xl font-semibold font-poppins">
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
                {/* calender div */}
                <div className="relative text-center px-6">
                  <h1>Check Out</h1>
                  <div className="flex gap-2 mt-3">
                    <h1 className="lg:text-6xl font-semibold font-poppins">
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
              <button className="bg-[#2C4549] md:p-5 text-center md:w-40 text-white">
                CHECK AVAILABILITY
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
