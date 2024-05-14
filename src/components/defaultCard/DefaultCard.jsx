import React from "react";
import { MdLineStyle } from "react-icons/md";
import { PiUserSquareThin } from "react-icons/pi";
import { Link } from "react-router-dom";

const DefaultCard = ({ rooms, viewToggle }) => {

  return (
    <>
      <Link to={`/roomDetails/${rooms?._id}`}>
        <div className="w-full overflow-hidden rounded relative border cursor-pointer">
          <div className="h-[300px] w-full relative">
            <img
              className="h-full w-full object-cover object-center  rounded rounded-b-none"
              src={rooms?.images[0]}
              alt=""
            />
            <p className=" absolute bottom-5 left-5 py-1 px-6 rounded bg-white">
              $ {rooms?.price_per_night} / Per Night
            </p>
          </div>
          <div className="p-5">
            <h1 className="text-2xl font-semibold">{rooms?.name}</h1>
            <div
              className={`mt-5 flex justify-between ${
                !viewToggle ? "md:w-1/2" : "w-full"
              }`}
            >
              <p className="flex gap-2 items-center">
                <PiUserSquareThin className="text-2xl" />
                Guests: {rooms?.guests}
              </p>
              <p className="flex gap-2 items-center">
                <img
                  className="size-5"
                  src="http://www.nicdarkthemes.com/themes/hotel-booking/wp/demo/chalet/wp-content/plugins/nd-booking/inc/shortcodes/include/search-results/icon-plan-grey.svg"
                  alt=""
                />
                {rooms?.room_size}
              </p>
            </div>
          </div>
          <p
            id="parent"
            className="hover:bg-[#cf78491c] absolute top-0 left-0 bottom-0 right-0  rounded transition-all text-center flex items-center justify-center"
          >
            <MdLineStyle id="child" className="text-[#ffffffca] text-3xl scale-0" />
          </p>
        </div>
      </Link>
    </>
  );
};

export default DefaultCard;
