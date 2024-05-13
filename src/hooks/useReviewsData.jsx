import { useState, useEffect } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useReviewsData = () => {
  const [reviewsData, setReviewsData] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get("/clientReviews").then((res) => {
      setReviewsData(res.data);
    });
  }, []);
  return { reviewsData };
};

export default useReviewsData;
