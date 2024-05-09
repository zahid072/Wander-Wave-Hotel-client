import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/navbar/Navbar";
import Footer from "../pages/shared/footer/Footer";

const Root = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Root;
