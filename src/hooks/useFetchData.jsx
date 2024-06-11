import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useFetchData = () => {
  const [featureLoader, setFeatureLoader] = useState(true);
  const [roomData, setRoomData] = useState([]);
  const [reviewsData, setReviewsData] = useState([]);
 

  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get(`/highestPricedRooms`).then((res) => {
      setRoomData(res?.data);
      setFeatureLoader(false);
    });
  }, []);

  useEffect(() => {
    axiosSecure.get("/clientReviews").then((res) => {
      setReviewsData(res?.data);
    });
  }, []);

  return { featureLoader, roomData, reviewsData };
};

export default useFetchData;
