import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../pages/shared/navbar/Navbar'
import Footer from '../pages/shared/footer/Footer'

const Root = () => {
  return (
    <div className='font-poppins relative max-w-[1536px] mx-auto'>
      <div>
    <Navbar/>
      </div>
      <div>
        <Outlet/>
      </div>
    <div>
      <Footer/>
    </div>
    </div>
  )
}

export default Root
