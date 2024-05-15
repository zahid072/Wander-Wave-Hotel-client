import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import DefaultCard from "../../components/defaultCard/DefaultCard";
import { MdGridView } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import Loader from "../../components/loader/Loader";
import visa from '../../assets/images/icons/visa.png'
import payPal from '../../assets/images/icons/paypal.png'
import googlePay from '../../assets/images/icons/googlepay.png'
import masterCard from '../../assets/images/icons/mastercard.png'

const Rooms = () => {
  const [roomData, setRoomData] = useState([]);
  const [viewToggle, setViewToggle] = useState(true);
  const axiosSecure = useAxiosSecure();
  const [maxPrice, setMaxPrice] = useState(600);
  const [loader, setLoader] = useState(true);
  const [sortValue, setSortValue] = useState("");

  // toggle view
  const handleTableView = () => {
    setViewToggle(false);
  };
  const handleGridView = () => {
    setViewToggle(true);
  };
 
  // get rooms data
  useEffect(() => {
    axiosSecure
      .get(`/hotelRooms?minPrice=50&maxPrice=${maxPrice}`)
      .then((res) => {
        console.log(res.data);

        const sorted = res.data.sort((a, b) => {
          if (sortValue === "highestPrice") {
            return b.price_per_night - a.price_per_night;
          } else if (sortValue === "lowestPrice") {
            return a.price_per_night - b.price_per_night;
          }
        });
        setRoomData(sorted);

        setLoader(false);
      });
  }, [maxPrice, sortValue]);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Rooms || Wander Wave</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="relative">
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("https://media.designcafe.com/wp-content/uploads/2023/09/11183952/modern-luxury-bedroom-design.jpg")`,
          }}
          className="h-80 w-full bg-no-repeat bg-cover bg-center flex items-center justify-center text-white"
        >
          <h1 className="font-gilda px-2 text-center md:text-6xl text-3xl font-semibold tracking-widest">
            FIND YOUR PERFECT STAY
          </h1>
        </div>
        <div className="p-5 md:px-5 px-2 bg-[#36293dee] flex justify-between items-center w-full">
          <select
            onChange={(e) => {
              setSortValue(e.target.value);
            }}
            name="SortBy"
            className="px-3 py-3 md:ml-[45%] rounded bg-[#365356] text-center outline-none text-white font-semibold"
          >
            <option className="text-black bg-gray-100" value="">
              SORT WITH PRICE
            </option>
            <option className="text-black bg-gray-100 " value="lowestPrice">
              LOWEST PRICE
            </option>
            <option className="text-black bg-gray-100 " value="highestPrice">
              HIGHEST PRICE
            </option>
          </select>
          <div className="md:pr-10 flex flex-wrap justify-end gap-2 items-center">
            <button onClick={handleTableView} className="btn md:mr-4">
              <TfiMenuAlt className="text-2xl" />
            </button>
            <button onClick={handleGridView} className="btn">
              <MdGridView className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10 md:mt-24 flex  lg:flex-row-reverse flex-col gap-5 max-w-7xl lg:mx-auto mx-2">
        <div className="lg:w-1/3 w-full ">
          <div className=" sticky top-4">
            <div className="bg-stone-100 p-5 rounded">
              <div>
                <h1 className="text-2xl font-bold text-[#4e333b] text-center py-3">
                  FILTER BY PRICE RANGE
                </h1>
                <p className="font-bold">$ {maxPrice}</p>
              </div>
              <input
                onChange={(e) => {
                  setMaxPrice(e.target.value);
                }}
                type="range"
                min={100}
                max="1000"
                defaultValue={400}
                className="range range-accent"
              />
            </div>
            <div className="mt-5 bg-stone-100 p-5 rounded">
                <h1 className="text-4xl font-bold font-gilda text-center text-orange-500">SPECIAL OFFERS</h1>
                <div className="mt-5 space-y-4">
                  <p className=" uppercase text-7xl font-semibold text-center">30% <span className="text-2xl">off</span></p>
                  <p className="uppercase text-center font-semibold">on a minimum of 4 nights booking.!</p>
                </div>
            </div>
            <div className="mt-5 bg-stone-100 p-5 rounded">

              <h1 className="text-2xl font-semibold uppercase font-gilda">Payment Methods</h1>
              <div className="flex md:flex-row flex-col justify-center items-center gap-5 mt-5">
                    <div className="lg:w-full w-28 h-14 rounded-lg">
                      <img className="w-full h-14" src={visa} alt="" />
                    </div>
                    <div className="lg:w-full w-28 h-14 rounded-lg">
                      <img className="w-full h-14" src={payPal} alt="" />
                    </div>
                    <div className="lg:w-full w-28 h-14 rounded-lg">
                      <img className="w-full h-14" src={googlePay} alt="" />
                    </div>
                    <div className="lg:w-full w-28 h-14 rounded-lg">
                      <img className="w-full h-14" src={masterCard} alt="" />
                    </div>
              </div>
            </div>
          </div>
        </div>
        {loader ? (
          <div
            className={`lg:w-2/3 w-full grid ${
              viewToggle ? "md:grid-cols-2" : ""
            } grid-cols-1 gap-6 justify-items-center`}
          >
            <Loader />
          </div>
        ) : (
          <div
            className={`lg:w-2/3 w-full grid ${
              viewToggle ? "md:grid-cols-2" : ""
            } grid-cols-1 gap-6 `}
          >
            {roomData.map((room, index) => (
              <DefaultCard key={index} rooms={room} viewToggle={viewToggle} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Rooms;
