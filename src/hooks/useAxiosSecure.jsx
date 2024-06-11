import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import { useEffect } from "react";
const axiosSecure = axios.create({
  baseURL: "https://assignment-11-server-mocha-nine.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const {logOut} = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        if (error.response?.status === 401 || error.response?.status === 403) {
        
            logOut()
            .then(() => {
              navigate("/signIn");
            })
            .catch((error) => {});
        }
      }
    );
  }, []);

  return axiosSecure;
};

export default useAxiosSecure;
