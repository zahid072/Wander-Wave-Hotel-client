import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../pages/shared/navbar/Navbar'
import Footer from '../pages/shared/footer/Footer'
import useAuth from '../hooks/useAuth'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify'

const Root = () => {
  const { signUpSuccess, setSignUpSuccess, signInSuccess, setSignInSuccess } = useAuth();
  useEffect(() => {
    if (signUpSuccess) {
      toast.success("Account successfully created.");
      setSignUpSuccess(false); // Reset successMessage after showing toast
    }
  }, [signUpSuccess]);
  useEffect(() => {
    if (signInSuccess) {
      toast.success("Sign In Successful.");
      setSignInSuccess(false); // Reset successMessage after showing toast
    }
  }, [signInSuccess]);
  return (
    <div className='font-poppins max-w-[1536px] mx-auto'>
      <div>
    <Navbar/>
      </div>
        <Outlet/>
        <ToastContainer />
    <div>
      <Footer/>
    </div>
    
    </div>
  )
}

export default Root
