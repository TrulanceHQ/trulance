import React, { useState } from "react";
import ContactUsBtn from "./Buttons";
import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path ? "text-buttonGreen" : "";
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="top-0 left-0 w-full backdrop-blur-md z-10 fixed border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="images/Logo.png" className="h-8" alt="Trulance Logo" />
        </a>

        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:w-96 md:flex flex-row justify-center md:border-none bg-transparent backdrop-blur-md md:bg-transparent border border-gray-100 rounded-lg mt-4 md:mt-0`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col pt-10 md:w-80 justify-start md:justify-center md:items-start items-center h-[80vh] md:h-auto p-4 md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li className="w-full text-center border-b border-t border-gray-100 md:border-0">
              <Link
                to="/about"
                className={`block py-2 px-3 text-white/100 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-buttonGreen md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${isActive(
                  "/about"
                )}`}
              >
                About us
              </Link>
            </li>
            <li className="w-full text-center border-b border-t border-gray-100 md:border-0 md:w-44">
              <Link
                to="/products"
                className={`block py-2 px-1 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-buttonGreen md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${isActive(
                  "/products"
                )}`}
              >
                Our Products
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden w-full md:w-auto md:flex flex-row justify-between">
          <a href="/#ContactUs">
            <ContactUsBtn label={"Contact Us"} />
          </a>
        </div>
      </div>
    </nav>
  );
}
