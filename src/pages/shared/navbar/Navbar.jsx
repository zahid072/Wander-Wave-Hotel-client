import React, { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

const Navbar = ({ themes, handleThemeToggle }) => {
  const { user, navLoader, logOut } = useContext(AuthContext);
  const { pathname } = useLocation();

  const handleSignOut = () => {
    logOut();
  };
  const navLink = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={`${
            pathname === "/"
              ? "border-b-4 pb-2 px-1 border-black font-semibold"
              : "hover:font-semibold hover:border-b-4 pb-2 px-1 border-[#504f4f3c]"
          } transition`}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/rooms"}
          className={`${
            pathname === "/rooms"
              ? "border-b-4 pb-2 px-1 border-black font-semibold"
              : "hover:font-semibold hover:border-b-4 pb-2 px-1 border-[#504f4f3c]"
          } transition`}
        >
          Rooms
        </NavLink>
      </li>

      <li>
        <NavLink
          to={"/myBookings"}
          className={`${
            pathname === "/myBookings"
              ? "border-b-4 pb-2 px-1 border-black font-semibold"
              : "hover:font-semibold hover:border-b-4 pb-2 px-1 border-[#504f4f3c]"
          } transition`}
        >
          My Bookings
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/contact"}
          className={`${
            pathname === "/contact"
              ? "border-b-4 pb-2 px-1 border-black font-semibold"
              : "hover:font-semibold hover:border-b-4 pb-2 px-1 border-[#504f4f3c]"
          } `}
        >
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar w-full mr-0 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-11 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm font-semibold dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <div
                onClick={handleThemeToggle}
                className="mr-4 text-3xl cursor-pointer min-[375px]:hidden block mb-4 w-[61.5px]"
              >
                {themes === "light" && (
                  <div className="border-2 rounded-full pr-8 px-2 py-1 border-black">
                    <MdOutlineLightMode className="size-5" />
                  </div>
                )}
                {themes === "dark" && (
                  <div className="border-2 rounded-full pl-8 pr-2 py-1 border-gray-100 bg-black">
                    <MdDarkMode className="size-5 text-white" />
                  </div>
                )}
              </div>
              {navLink}

              {user ? (
                <button
                  onClick={handleSignOut}
                  className="btn md:hidden mt-2 block bg-[#30424E] hover:bg-[#435b6b] text-white"
                >
                  Sign Out
                </button>
              ) : (
                <div className="flex gap-2 items-center mt-3">
                  <Link to={"/signIn"}>
                    <button className="btn block bg-[#5C8392] hover:bg-[#587987] text-white md:hidden">
                      Sign In
                    </button>
                  </Link>
                  <Link to={"/signUp"}>
                    <button className="btn block bg-[#30424E]  text-white md:hidden">
                      Sign Up
                    </button>
                  </Link>
                </div>
              )}
            </ul>
          </div>

          <Link
            to={"/"}
            className="btn btn-ghost md:text-3xl text-xl font-bold"
          >
            Wander Wave
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex *:px-4 *:py-2 ">{navLink}</ul>
        </div>
        <div className="navbar-end">
          <div
            onClick={handleThemeToggle}
            className="mr-4 text-3xl cursor-pointer max-[375px]:hidden block"
          >
            {themes === "light" && (
              <div className="border-2 rounded-full pr-8 px-2 py-1 border-black">
                <MdOutlineLightMode className="size-5" />
              </div>
            )}
            {themes === "dark" && (
              <div className="border-2 rounded-full pl-8 pr-2 py-1 border-gray-100 bg-black">
                <MdDarkMode className="size-5 text-white" />
              </div>
            )}
          </div>
          {!navLoader ? (
            <>
              {user && (
                <div
                  className=" tooltip tooltip-bottom"
                  data-tip={user?.displayName}
                >
                  <img
                    className="size-12 cursor-pointer rounded-full md:mr-5"
                    src={
                      (user?.photoURL && user?.photoURL) ||
                      "https://static.vecteezy.com/system/resources/thumbnails/019/879/186/small/user-icon-on-transparent-background-free-png.png"
                    }
                    alt=""
                  />
                </div>
              )}

              {user ? (
                <button
                  onClick={handleSignOut}
                  className="btn hidden md:block bg-[#30424E] hover:bg-[#435b6b] text-white"
                >
                  Sign Out
                </button>
              ) : (
                <div className="md:flex gap-2 items-center">
                  <Link to={"/signIn"}>
                    <button className="btn hidden bg-[#5C8392] hover:bg-[#587987] text-white md:block">
                      Sign In
                    </button>
                  </Link>
                </div>
              )}
            </>
          ) : (
            <span className="loading loading-spinner loading-lg mr-10"></span>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
