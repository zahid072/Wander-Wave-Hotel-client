import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoIosMailOpen } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-[#282727]">
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <aside>
          <h1 className="text-3xl font-bold font-gilda py-5">Wander Wave</h1>
          <p>
             Hotels
            <br />
            All rights reserved. © 2024
          </p>
        </aside>
        <nav>
          <h6 className="footer-title text-2xl">GET IN TOUCH</h6>
          <div className="grid grid-flow-col gap-8 text-2xl">
            <a>
              <FaFacebook />
            </a>
            <a>
              <FaGithub />
            </a>
            <a>
              <FaLinkedin />
            </a>
            <a>
              <FaTwitter />
            </a>
          </div>
        </nav>
        <nav>
          <div className="py-5px-10  items-center text-white justify-between">
            <h1 className="text-2xl font-semibold flex items-center gap-2">
              <IoIosMailOpen className="text-[#5C8392] text-center text-2xl" />{" "}
              NEWSLETTER
            </h1>
            <div className="md:mt-6 mt-4 flex md:gap-5 gap-2">
              <input
                className="input lg:w-80 w-40 bg-transparent border border-[#5C8392] focus:border-[#5C8392] "
                type="email"
                placeholder="E-mail Address"
              />
              <button className="btn text-[#5C8392] border border-[#5C8392] bg-transparent hover:bg-transparent">
                Subscribe
              </button>
            </div>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
