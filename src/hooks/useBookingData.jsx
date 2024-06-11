import { useEffect, useState } from 'react'
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useBookingData = () => {
    const axiosSecure = useAxiosSecure();
    const [bookingData, setBookingData] = useState([]);
    const { user, reFetch, setReFetch } = useAuth();
    const user_email = user?.email ? user?.email : user?.reloadUserInfo?.providerUserInfo[0]?.email;
  
    useEffect(() => {
      axiosSecure.get(`/bookings?email=${user_email}`).then((res) => {
        setBookingData(res?.data);
        setReFetch(false);
      });
      
    }, [reFetch, user]);
  return bookingData
}

export default useBookingData
