import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Rooms = () => {
  const [roomData, setRoomData] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get("/hotelRooms").then((res) => {
      console.log(res.data);
      setRoomData(res.data);
    });
  }, []);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Rooms || Wander Wave</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 justify-items-center">
        {roomData.map((room, index) => (
          <div key={index} className="size-[300px]">
            <img className="h-full w-full" src={room?.images[0]} alt="" />
            
          </div>
        ))}
      </div> 
    </div>
  );
};

export default Rooms;
