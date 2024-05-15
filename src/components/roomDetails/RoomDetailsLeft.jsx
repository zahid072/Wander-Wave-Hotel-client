import React, { useState } from "react";
import { BsXCircle } from "react-icons/bs";
import { FaRegCheckCircle } from "react-icons/fa";
import { PiUserSquareThin } from "react-icons/pi";
import { TbBed } from "react-icons/tb";

const RoomDetailsLeft = ({ room, available }) => {
  const [slidImage, setSlidImage] = useState(0);

  const handleImage = (imageNO) => {
    setSlidImage(imageNO);
  };
  const {
    description,
    room_size,
    guests,
    price_per_night,
    services,
    images,
    special_offers,
  } = room;

  return (
    <div className="w-full">
      <div>
        <div className="p-5 rounded bg-slate-300">
          <figure>
            <img
              className="h-[500px] w-full object-cover object-center"
              src={images[slidImage]}
              alt=""
            />
          </figure>
          <div className="flex gap-4 pt-5 justify-center items-center bg-white">
            {images?.map((image, index) => (
              <figure key={index}>
                <img
                  onClick={() => {
                    handleImage(index);
                  }}
                  className="h-20 cursor-pointer"
                  src={image}
                  alt={index}
                />
              </figure>
            ))}
          </div>
        </div>
        <div className="py-6 my-6">
          <p>{description}</p>
        </div>
        <div className="h-[1px] w-full bg-slate-200 "></div>
        <div className="flex md:flex-row flex-col md:justify-around justify-center md:gap-0 gap-5 py-5">
          <p className="flex gap-2 flex-col justify-center items-center">
            <img
              className="size-8"
              src="http://www.nicdarkthemes.com/themes/hotel-booking/wp/demo/chalet/wp-content/plugins/nd-booking/inc/shortcodes/include/search-results/icon-plan-grey.svg"
              alt=""
            />
            {room_size}
          </p>
          <p className="flex gap-2 flex-col justify-center items-center">
            {available ? (
              <FaRegCheckCircle className="text-5xl text-green-400" />
            ) : (
              <BsXCircle className="text-5xl text-red-400" />
            )}
            <span>
              Available :{" "}
              <span
                className={`${available ? "text-green-500" : "text-red-400"}`}
              >
                {available ? "YES" : "NO"}
              </span>
            </span>
          </p>
          <p className="flex gap-2 flex-col justify-center items-center">
            <PiUserSquareThin className="text-5xl" />
            {guests} Guests
          </p>
          <p className="flex gap-2 flex-col justify-center items-center">
            <TbBed className="text-5xl" />${price_per_night} / PER NIGHT
          </p>
        </div>
        <div className="py-5 ">
          <h1 className="text-3xl font-bold py-5">Room services</h1>
          <ul className="list-disc flex flex-wrap md:gap-10">
            {services?.map((service, index) => (
              <li key={index} className="ml-4">
                {service}
              </li>
            ))}
          </ul>
        </div>
        <div className="h-[1px] w-full bg-slate-200 "></div>
        <div className="py-5">
          <h1 className="text-3xl font-bold font-gilda py-5">Spacial Offers</h1>
          {special_offers[0] ? (
            <div className="flex gap-3 items-center">
              <div className="text-xl font-semibold">
                <h1>Offer Type </h1>
                <h1 className="mt-2">Offer </h1>
              </div>
              <div className="text-xl font-semibold">
                <p>:</p>
                <p className="mt-2">:</p>
              </div>
              <div className="text-lg ml-3 font-normal text-red-400">
                <p>{special_offers[0]?.offer_type}</p>
                <p className="mt-2">{special_offers[0]?.offer_details}</p>
              </div>
            </div>
          ) : (
            <h1 className="text-red-400">No offer available</h1>
          )}
        </div>
        <div className="h-[1px] w-full bg-slate-200 "></div>
        <div>
          <h1 className="text-3xl font-semibold font-gilda px-3 py-4 mt-5">
            AROUND THE HOTEL
          </h1>
          <div className="mb-10 py-2 flex md:flex-row flex-col justify-center items-center gap-5">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="h-[400px] relative w-full"
            >
              <img
                className="h-full object-cover object-center w-full"
                src="http://www.nicdarkthemes.com/themes/hotel-booking/wp/demo/chalet/wp-content/uploads/sites/3/2022/05/vert5.jpg"
                alt=""
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
              className="h-[400px] relative w-full"
            >
              <img
                className="h-full object-cover object-center w-full"
                src="https://i.pinimg.com/474x/a0/97/c3/a097c3d896aa51dda494f4e7f55aecb8.jpg"
                alt=""
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="600"
              className="h-[400px] relative w-full"
            >
              <img
                className="h-full object-cover object-center w-full"
                src="https://img.freepik.com/premium-photo/luxury-beautiful-hotel-resort-room-picture_925414-341.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailsLeft;
