import React from "react";
import { saveId } from "../../Utilities/LocalStorage";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Modal = ({ setIsActivate }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleOffer = (e) => {
    e.preventDefault();
    if (user) {
      saveId(10, "offer-key");
      setIsActivate(true);
    } else {
      navigate("/signIn");
    }
  };
  return (
    <div
      className="py-5
    "
    >
      <h1 className="bg-[#718897eb] rounded  text-white font-bold py-2 text-xl text-center mt-8 ">
        Enjoy 10% off your first hotel booking!
      </h1>
      <form
        onSubmit={handleOffer}
        className="bg-[#2a414fd2] p-3 mt-5 rounded w-full flex justify-center flex-col"
      >
        <div className="flex flex-col gap-5 mt-5 ">
          <input
            type="text"
            className="input input-bordered w-full "
            name="name"
            placeholder="Your name"
          />
          <input
            type="text"
            className="input input-bordered w-full "
            placeholder="Login email"
            name="email"
            required
          />
        </div>

        <button className=" btn bg-[#2e5d71] text-white py-2 border rounded mt-6 w-40 btn-accent mx-auto ">
          Activate 10% off
        </button>
      </form>
    </div>
  );
};

export default Modal;
