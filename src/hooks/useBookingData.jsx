import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useBookingData = () => {
  const [bookingData, setBookingData] = useState([]);
  const { user, reFetch, setReFetch } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { email, reloadUserInfo } = user;
  const user_email = email ? email : reloadUserInfo?.providerUserInfo[0].email;

  useEffect(() => {
    axiosSecure.get(`/bookings?email=${user_email}`).then((res) => {
      setBookingData(res?.data);
      setReFetch(false);
    });
  }, [reFetch, user]);

  return { bookingData };
};

export default useBookingData;
