import ContactUsBtn from "./Buttons";
import { useLocation } from "react-router-dom";

export default function Navigation() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "text-buttonGreen" : "";
  };

  return (
    <nav className="top-0 left-0 w-full z-10 absolute border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="images/Logo.png" className="h-8" alt="Trulance Logo" />
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
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
          className="hidden w-full md:w-auto md:flex flex-row justify-between md:border-none bg-DarkBlue md:bg-transparent border border-gray-100 rounded-lg mt-4"
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="/about"
                className={`block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-buttonGreen md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${isActive(
                  "/about"
                )}`}
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="/products"
                className={`block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-buttonGreen md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${isActive(
                  "/products"
                )}`}
              >
                Our Products
              </a>
            </li>
            <div className="w-full md:w-auto md:hidden justify-between m-3">
              <ContactUsBtn label={"Contact Us"} />
            </div>
          </ul>
        </div>
        <div className="hidden w-full md:w-auto md:flex flex-row justify-between">
          <ContactUsBtn label={"Contact Us"} />
        </div>
      </div>
    </nav>
  );
}
