import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { HiOutlineHome, HiVideoCamera } from "react-icons/hi";
import "./Navbar.css";
function Navbar() {
  const [background, setBackground] = useState(false);
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      setBackground(true);
    } else if (window.screenY < 50) {
      setBackground(false);
    }
  });

  return (
    <div
      className={
        (background
          ? "bg-[#00000099] px-5 lg:px-20 py-4 text-white fixed w-full z-10"
          : "") +
        "px-5 lg:px-20 py-4 text-white fixed w-full transition-all z-30"
      }
    >
      <nav className="flex flex-row justify-between items-center">
        <NavLink to="/" className="brand">
          <h2 className="text-2xl font-bold">React Movie App</h2>
        </NavLink>
        <button
          className="md:hidden text-2xl"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <AiOutlineMenu />
        </button>
        <div
          className={
            "md:flex flex-col md:flex-row md:justify-between md:items-center text-lg font-medium text-neutral-200 ml-auto absolute md:relative top-0 left-0 w-3/5 md:w-auto h-screen md:h-auto menuBar transition-all" +
            (navbarOpen ? " flex" : " hidden")
          }
        >
          <h2 className="text-2xl font-bold md:hidden mininavBar-brand">
            React Movie App
          </h2>
          <NavLink
            to="/"
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="flex flex-row md:block items-center"
          >
            <HiOutlineHome className="md:hidden mr-2" /> Home
          </NavLink>
          <NavLink
            to="/watchlist"
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="flex flex-row md:block items-center"
          >
            <HiVideoCamera className="mr-2 md:hidden" /> WatchList
          </NavLink>
          <NavLink
            to="/login"
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="mt-auto md:mt-0"
          >
            Login
          </NavLink>
          <NavLink
            to="/"
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="mb-5 md:mb-0"
          >
            <button className="md:bg-[#000000] font-semibold rounded-md text-white navBtn">
              Sign up
            </button>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
