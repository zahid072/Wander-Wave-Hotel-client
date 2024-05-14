import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import { useEffect } from "react";
const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
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
        console.log("error tracked in the interceptor", error.response);
        if (error.response.status === 401) {
        
            logOut()
            .then(() => {
              navigate("/signIn");
            })
            .catch((error) => console.log(error));
        }
      }
    );
  }, []);

  return axiosSecure;
};

export default useAxiosSecure;
