import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  EffectCoverflow,
  Pagination,
  Autoplay,
} from "swiper/modules";
import { useEffect } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";

const AllReviews = () => {
  const stars = [1, 2, 3, 4, 5];
  const [roomData, setRoomData] = useState([]);
  useEffect(() => {
    axios.get(`/reviews.json`).then((res) => {
      console.log(res.data);
      setRoomData(res.data);
      setTimeout(()=>{
        document.querySelector('.swiper-pagination .swiper-pagination-bullet:last-child').click()
       }, 1000)
    });
  }, []);
  

  return (
    <div className="md:mx-5 mx-2 relative">
      <h1 className="text-center text-4xl font-bold py-7 bg-slate-700 text-white mx-auto rounded-t w-full">
       REVIEWS
      </h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        autoplay={{
          delay: 2000,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="h-[600px] bg-slate-200"
      >
        {roomData.map((review, index) => (
          <SwiperSlide key={index} className="w-96 h-[500px] mt-4 bg-white p-4">
            <img
              id="review-userImage"
              className="size-28 mx-auto rounded-full"
              src={review?.userImage}
            />
            <div className="py-4 space-y-3">
              <h1 className="text-xl font-bold text-center">
                {review?.userName}
              </h1>
              <p className="text-center">{review?.description}</p>
              <div className="rating mx-auto justify-center flex">
                {stars.map((star, index) => (
                  <FaStar
                    key={index}
                    className={`text-xl ${
                      index + 1 <= review?.rating ? "text-orange-400" : ""
                    }`}
                  />
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
        
      </Swiper>
    </div>
  );
};

export default AllReviews;
