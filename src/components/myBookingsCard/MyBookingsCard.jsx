import React from "react";
import { FaPen } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

const MyBookingsCard = ({handleUpdateDate, handleCancelBooking, bookingData}) => {
  return (
    <div className="bg-gray-200 py-5">
      <div className="flex flex-col max-w-3xl lg:mx-auto mx-2 my-5  py-6 px-2 space-y-4 sm:p-10 bg-gray-900 text-gray-100">
        <h2 className="text-xl font-semibold uppercase">All Bookings : {`(${bookingData.length})`}</h2>
        <ul className="flex flex-col divide-y divide-gray-700">

          {
            bookingData.length === 0 && (
              <p className="text-center text-red-400 text-xl font-gilda">YOUR BOOKING LIST IS EMPTY.</p>
            )
          }
          
         {
          bookingData?.map((booking, index)=>(
            <li className="flex flex-col py-3 sm:flex-row sm:justify-between">
            <div className="flex items-center w-full md:flex-row flex-col border rounded px-3 md:py-0 py-3 space-x-2 sm:space-x-4">
              <img
                className="flex-shrink-0 object-cover md:size-24 w-full h-40 dark:border- rounded outline-none sm:w-32 sm:h-32 bg-gray-500"
                src={booking?.image}
                alt=""
              />
              <div className="flex flex-col justify-between w-full py-4">
                <div className="flex justify-between md:flex-row flex-col gap-3 w-full pb-2">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                      {booking?.name}
                    </h3>
                    <p className="text-sm text-gray-200">Booking Date : {booking?.booking_date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">$ {booking?.price_per_night}</p>
                  </div>
                </div>
                <div className="flex md:flex-row gap-4 flex-col text-sm ">
                  <button
                    onClick={()=>{
                      handleCancelBooking(booking?.roomId, booking?._id)
                    }}
                    type="button"
                    className="bg-gray-200 cursor-pointer text-black rounded flex items-center gap-2 px-3 py-2"
                  >
                    <MdCancel className=" text-xl"/>
                    <span>CANCEL</span>
                  </button>
                  <button
                    onClick={()=>{
                      handleUpdateDate(booking?._id)
                    }}
                    type="button"
                    className=" bg-gray-200 cursor-pointer text-black rounded flex items-center gap-2 px-3 py-2"
                  >
                    <FaPen />
                    <span>DATE</span>
                  </button>
                </div>
              </div>
            </div>
          </li>
          ))
         }
          
        </ul>
      </div>
    </div>
  );
};

export default MyBookingsCard;
