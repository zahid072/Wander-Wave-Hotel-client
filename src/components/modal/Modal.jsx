import React from "react";

const Modal = () => {
  return (
    <div
      className="py-5
    "
    >
      <h1 className="bg-[#718897eb] rounded  text-white font-bold py-2 text-xl text-center mt-8 ">
        Enjoy 10% off your first hotel booking!
      </h1>
      <div className="bg-[#2a414fd2] p-3 mt-5 rounded w-full flex justify-center flex-col">
        <div className="flex flex-col gap-5 mt-5 ">
          <input
            type="text"
            className="input input-bordered w-full "
            placeholder="Your name"
          />
          <input
            type="text"
            className="input input-bordered w-full "
            placeholder="Login email"
          />
        </div>

        <button className=" btn bg-[#2e5d71] text-white py-2 border rounded mt-6 w-40 btn-accent mx-auto ">
          Activate 10% off
        </button>
      </div>
    </div>
  );
};

export default Modal;
