import React from "react";
import useReviewsData from "../../hooks/useReviewsData";
import { useState } from "react";
import { useEffect } from "react";
import TimeStamp from "../allReviews/TimeStamp";
import { FaStar } from "react-icons/fa";

const RoomReviews = ({ id }) => {
  const stars = [1, 2, 3, 4, 5];
  const { reviewsData } = useReviewsData();
  const [roomReviews, setRoomReviews] = useState([]);

  useEffect(() => {
    const filterReviews = reviewsData.filter((review) => review.room_id === id);
    if (filterReviews.length > 0) {
      setRoomReviews(filterReviews);
    }
  }, [id, reviewsData]);
  return (
    <div className="bg-[#768689] p-4 rounded">
      <h1 className="text-xl font-semibold font-gilda  text-white">
        Client Reviews : {`( ${roomReviews.length} )`}
      </h1>
      <div className="bg-slate-300 rounded mt-2 h-[400px] py-2 overflow-y-auto">
        {roomReviews.length < 1 && (
          <h1 className="text-center bg-white p-2 rounded px-2 text-[#366281]">
            Book the room and share your feedback!
          </h1>
        )}

        {roomReviews.slice(0, 6).map((review, index) => (
          <div key={index} className="bg-white p-3 mb-2">
            <div className="flex gap-4 my-2 border-b">
              <img
                className="size-12 rounded-full"
                src={review?.user_image}
                alt=""
              />
              <div className="">
                <h1 className="font-semibold">{review?.user_name}</h1>
                <div className="rating flex">
                  {stars.map((star, index) => (
                    <FaStar
                      key={index}
                      className={` ${index + 1 <= review?.rating ? "text-orange-400" : ""}`}
                    />
                  ))}
                </div>
                <p className="flex gap-2">
                  Reviewed : <TimeStamp timestamp={review?.timestamp} />
                  
                </p>
              </div>
            </div>
            <div>
              <p>{review?.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomReviews;
