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
import { FaStar } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import TimeStamp from "./TimeStamp";

const AllReviews = () => {
  const stars = [1, 2, 3, 4, 5];
  const [reviews, setReviews] = useState([]);
  const axiosSecure = useAxiosSecure()
  useEffect(() => {
    axiosSecure.get(`/clientReviews`).then((res) => {
      setReviews(res.data);
      setTimeout(()=>{
        document.querySelector('.swiper-pagination .swiper-pagination-bullet:nth-child(2)').click()
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
        {
          reviews.length === 0 && <h1 className=" text-center text-red-400 text-3xl font-bold font-gilda">EMPTY</h1>
        }
        {reviews?.slice(0, 8).map((review, index) => (
          <SwiperSlide key={index} className="md:w-96 max-[500px]:max-w-96 h-[500px] mt-4 bg-white p-4">
            <img
              id="review-userImage"
              className="size-28 mx-auto rounded-full"
              src={review?.user_image}
            />
            <div className="py-4 space-y-3">
              <h1 className="text-xl font-bold text-center">
                {review?.user_name}
              </h1>
              <p className="text-center">{review?.comment}</p>
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
              <div className="flex justify-center mt-4 ">
                <h1 className="text-center text-2xl"><TimeStamp timestamp={review?.timestamp}/></h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
        
      </Swiper>
    </div>
  );
};

export default AllReviews;
