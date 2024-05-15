import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useFetchData = () => {
  const [featureLoader, setFeatureLoader] = useState(true);
  const [roomData, setRoomData] = useState([]);
  const [reviewsData, setReviewsData] = useState([]);

  const [bookingData, setBookingData] = useState([]);
  const { user, reFetch, setReFetch } = useAuth();
  const { email, reloadUserInfo } = user;
  const user_email = email ? email : reloadUserInfo?.providerUserInfo[0].email;

  useEffect(() => {
    axiosSecure.get(`/bookings?email=${user_email}`).then((res) => {
      setBookingData(res?.data);
      setReFetch(false);
    });
  }, [reFetch, user]);

  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get(`/highestPricedRooms`).then((res) => {
      console.log(res.data);
      setRoomData(res.data);
      setFeatureLoader(false);
    });
  }, []);

  useEffect(() => {
    axiosSecure.get("/clientReviews").then((res) => {
      setReviewsData(res.data);
    });
  }, []);

  return { featureLoader, roomData, reviewsData, bookingData };
};

export default useFetchData;
