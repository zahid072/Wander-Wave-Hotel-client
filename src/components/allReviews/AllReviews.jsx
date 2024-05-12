import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { useEffect } from "react";
import axios from "axios";

const AllReviews = () => {
  const stars = [1, 2, 3, 4, 5];
  const [roomData, setRoomData] = useState([]);
  useEffect(() => {
    axios.get(`/reviews.json`).then((res) => {
      console.log(res.data);
      setRoomData(res.data);
    });
  }, []);


  return (
    <div className="md:mx-5 mx-2">
      <h1 className="text-center text-4xl font-bold py-7 bg-slate-700 text-white mx-auto rounded-t w-full">
        USER REVIEWS
      </h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2000,
        }}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper h-[500px] w-full bg-cover rounded-t-none bg-center bg-no-repeat py-10 rounded"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("https://akm-img-a-in.tosshub.com/indiatoday/images/story/202109/PG-24-25-Spice-September-2021-.jpg?size=690:388")`,
        }}
      >
        {roomData.map((review, index) => (
          <SwiperSlide key={index} className="w-96 bg-white p-4">
            <img
              className="size-28 mx-auto rounded-full object-cover object-center"
              src={review?.userImage}
            />
            <div className="py-4 space-y-3">
              <h1 className="text-xl font-bold text-center">{review?.userName}</h1>
              <p className="text-center">{review?.description}</p>
              <div className="rating mx-auto justify-center flex">
               {
                stars.map((star, index)=>(
                    <input
                    key={index}
                    type="radio"
                    name="rating"
                    checked
                    className={`mask mask-star-2 ${
                      index+1 <= review?.rating ? "bg-orange-400" : ""
                    }`}
                  />
                ))
               }
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AllReviews;
