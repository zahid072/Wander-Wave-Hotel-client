import React from "react";
import "leaflet/dist/leaflet.css";
import { Marker, Tooltip } from "react-leaflet";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { icon } from "leaflet";
import { FaLocationDot} from "react-icons/fa6";


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
        <h1 className="md:text-4xl text-2xl text-white md:text-start text-center font-gilda font-bold md:py-10 py-5 rounded-t px-5 tracking-wider">
          HOTEL DIRECTION
        </h1>
        <MapContainer
          className="h-[600px] rounded"
          center={[40.761454, -73.974236]}
          zoom={11}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[40.761454, -73.974236]} icon={customIcon}>
          <Tooltip className="p-4 rounded" direction="top" offset={[0, -50]} opacity={1}>
              <div>
                <img
                  src="https://www.newworldhotels.com/wp-content/uploads/2014/05/Mobile-NWHBR-Exterior.jpg"
                  className="rounded-full size-14 mx-auto"
                  alt=""
                />
                <h1 className="mt-2 text-center text-xl font-semibold">
                  Wander Wave Hotel
                </h1>
                <div className="flex items-center gap-2">
                  <FaLocationDot className="text-emerald-400 text-2xl" /> 2 East 55th Street, New York, NY 10022, USA.
                </div>
              </div>
            </Tooltip>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default DirectionMap;
