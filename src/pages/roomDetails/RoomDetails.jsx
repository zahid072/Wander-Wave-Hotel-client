import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData} from "react-router-dom";

const RoomDetails = () => {
  const room = useLoaderData()
  const [slidImage, setSlidImage] = useState(0);
  const { name, images } = room;

  const handleImage = (imageNO)=>{
    setSlidImage(imageNO)
  }
 

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Details || Wander Wave</title>
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
            Room Details
          </h1>
        </div>
      </div>
      <div className="mt-10 md:mt-14 flex  lg:flex-row-reverse flex-col gap-5 max-w-7xl lg:mx-auto mx-2">
        <div className="lg:w-1/3 w-full ">
          <div className="sticky top-0"></div>
        </div>
        <div className="md:w-2/3 w-full ">
          <h1 className="text-4xl font-bold mb-2">{name}</h1>
          <div>
             <div>
              <figure><img className="h-[500px] w-full object-cover object-center" src={images[slidImage]} alt="" /></figure>
              <div className="flex gap-4 mt-5 justify-center items-center">
              {
              images.map((image , index)=>(
                <figure key={index}>
                  <img onClick={()=>{handleImage(index)}} className="h-20 cursor-pointer" src={image} alt={index} />
                </figure>
              ))
             }
              </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
