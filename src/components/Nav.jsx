import React from "react";

const Nav = () => {
  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <img
            src="/images/carkeyexpertslogo.jpeg"
            alt="Car Key Experts Logo"
            className="h-12 w-auto rounded-md shadow-sm object-contain"
          />
          
        </a>

        {/* Mobile Menu Button */}
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Nav Links */}
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col md:flex-row md:space-x-8 font-medium p-4 md:p-0 mt-4 md:mt-0 bg-gray-50 border border-gray-100 rounded-lg md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-blue-700 md:text-blue-600 md:hover:text-blue-500 dark:text-white md:dark:hover:text-blue-400"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block py-2 px-3 text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="block py-2 px-3 text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 px-3 text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
