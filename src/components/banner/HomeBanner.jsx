import React, { useContext, useState } from "react";
import videos from "../../../video/banner-video.mov";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const HomeBanner = () => {
  const defaultDate = new Date();
  const defaultDay = defaultDate.getDate();
  const defaultMonth = defaultDate.toLocaleString("default", { month: "long" });
  const [date, setDate] = useState(new Date());
  const [dayIn, setDayIn] = useState(defaultDay);
  const [monthIn, setMonthIn] = useState(defaultMonth);
  const [dayOut, setDayOut] = useState(defaultDay + 3);
  const [monthOut, setMonthOut] = useState(defaultMonth);
  const { count, setCount } = useContext(AuthContext);

  const handleCheckIn = (event) => {
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
        <video className="w-full " autoPlay loop muted width="100%">
          <source src={videos} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div  className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d34] to-[#1211116d] flex justify-center items-center">
          <div>
            <h1 className="font-gilda animate__animated animate__fadeInDown  mx-auto md:mt-0 mt-5 text-center font-bold lg:text-6xl md:text-4xl text-2xl text-white z-50 lg:w-[600px]">
              ENJOY A LUXURY <br /> EXPERIENCE
            </h1>
            <div  className="flex md:flex-row flex-col md:mt-4 mt-3 mx-auto -mb-20 animate__animated animate__fadeInDown">
              <div className="md:p-10 relative flex md:text-black text-white justify-around py-2 md:bg-white bg-[#4a4848b5]">
                {" "}
                {/* calender div */}
                <div className="relative px-6 text-center">
                  <h1>CHECK IN</h1>
                  <div className="flex gap-2 md:mt-3 mt-1">
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
                <div className="h-full w-1 bg-slate-500"></div>
                {/* calender div */}
                <div className="relative text-center px-6">
                  <h1>CHECK OUT</h1>
                  <div className="flex gap-2 md:mt-3 mt-1">
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
                <div className="h-full w-1 bg-slate-500"></div>
                <div className="text-center px-6">
                  <h1>GUESTS</h1>
                  <div className="flex gap-2 md:mt-3 mt-1">
                    <h1 className="md:text-5xl text-3xl font-semibold font-poppins">
                      {count}
                    </h1>
                    <h2 className="flex flex-col text-2xl cursor-pointer gap-1 ml-4">
                      <IoIosArrowUp
                        onClick={() => {
                          count < 4 ? setCount(count + 1) : "";
                        }}
                      ></IoIosArrowUp>
                      <IoIosArrowDown
                        onClick={() => {
                          count > 1 ? setCount(count - 1) : "";
                        }}
                      ></IoIosArrowDown>
                    </h2>
                  </div>
                </div>
              </div>
              <button className=" relative bg-[#2C4549] md:p-5 py-2 text-center md:w-40 text-white">
                <Link
                  className=" absolute top-0 left-0 bottom-0 right-0"
                  to={`/rooms`}
                ></Link>
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
