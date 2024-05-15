import React from "react";
import Loader from "../loader/Loader";
import { Link } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";

const FeaturedRooms = () => {
  const { featureLoader, roomData } = useFetchData();
  return (
    <div className="p-5 flex lg:flex-row flex-col overflow-hidden">
      <div className="lg:w-2/6 w-full bg-cover bg-center bg-no-repeat bg-[#f4f5f5]">
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="backdrop-blur-[7px] w-full h-full flex flex-col items-center justify-center"
        >
          <img
            className="md:size-20 size-10 mt-5"
            src="https://i.ibb.co/SshG09F/room-icon.png"
            alt=""
          />
          <h1 className="text-4xl font-semibold font-gilda my-5 text-center">
            FEATURED ROOMS
          </h1>
        </div>
      </div>
      <div className="lg:w-2/3 w-full grid md:grid-cols-2 grid-cols-1 gap-5 bg-[#f9f2f2]">
        {featureLoader && <Loader />}
        {roomData.map((room, index) => (
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            key={index}
            className="w-full overflow-hidden rounded relative border border-[#2c454970] cursor-pointer"
          >
            <div className="h-[300px] w-full relative">
              <img
                className="h-full w-full object-cover object-center  rounded rounded-b-none"
                src={room?.images[0]}
                alt=""
              />
              <p
                data-aos="fade-left"
                data-aos-delay="500"
                data-aos-duration="500"
                className=" absolute top-5 -right-2 py-1 px-6 rounded bg-[#2c4549bd] text-white"
              >
                $ {room?.price_per_night} / Per Night
              </p>
            </div>
            <div className="p-5">
              <h1 className="text-xl font-semibold">
                {room?.description.slice(0, 50) + "...."}
              </h1>
              <div className={`mt-5 flex justify-between md:w-1/2 w-full`}>
                <Link to={`/roomDetails/${room?._id}`}>
                  <button className="btn text-white bg-[#2c4549e6] hover:bg-[#2C4549]">
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedRooms;
