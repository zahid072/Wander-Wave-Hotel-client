import React from "react";
import "leaflet/dist/leaflet.css";
import { Marker, Popup } from "react-leaflet";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { BiArea } from "react-icons/bi";
import { icon } from "leaflet";

const DirectionMap = () => {
  const customIcon = new icon({
    iconUrl: "https://i.ibb.co/swkyLbB/marker.png",
    iconSize: [50, 60],
  });
  return (
    <div
      className="bg-cover md:mx-5 mx-2 shadow-sm bg-center bg-no-repeat"
      style={{
        backgroundImage: `url("https://cf.bstatic.com/static/img/theme-index/bg_luxury/869918c9da63b2c5685fce05965700da5b0e6617.jpg")`,
      }}
    >
      <div className="h-full bg-[#00000041] w-full backdrop-blur-md md:px-10 px-4 pb-8">
        <h1 className="md:text-4xl text-2xl text-white md:text-start text-center font-gilda font-bold md:py-10 py-5 rounded-t px-5">
          Hotel Direction
        </h1>
        <MapContainer
          className="h-[600px] rounded"
          center={[51.505, -0.09]}
          zoom={11}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]} icon={customIcon}>
            <Popup>
              <img src="" className="rounded-full size-14 mx-auto" alt="" />
              <h1 className="mt-2 text-center text-xl font-semibold ">ggg</h1>
              <div className="flex items-center gap-2 ">
                <BiArea className="text-emerald-400 text-2xl" /> hh
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default DirectionMap;
