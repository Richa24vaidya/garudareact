// import React from 'react';
import React, { useState } from 'react';
import newlogobg from '../img/newlogobg.png'

const Navbar = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };


  return (
    <header className="fixed w-full">
      <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto lg:text-2xl sm:text-xl">
          <a href="/" className="flex items-center">
            <img src={newlogobg} className="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
          </a>

          <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a href="/" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-pink-500 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Home</a>
              </li>
              <li>
                <a href="/about" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-pink-500 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">About</a>
              </li>
              <li>
                <button
                  id="dropdownNavbarLink"
                  onClick={toggleDropdown}
                  className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-500 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  Services
                  <svg
                    className={`w-2.5 h-2.5 ms-2.5 ${isDropdownVisible ? 'transform rotate-180' : ''}`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>
                {/* Dropdown menu */}
                <div
                  id="dropdownNavbar"
                  className={`${isDropdownVisible ? 'block' : 'hidden'
                    } z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
                >
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownNavbarLink">
                    <li>
                      <a href="/product" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-pink-500">Product Development</a>
                    </li>
                    <li>
                      <a href="/web" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-pink-500">Web Development</a>
                    </li>
                    <li>
                      <a href="/iot" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-pink-500">Internet Of Things</a>
                    </li>
                    <li>
                      <a href="/healthcare" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-pink-500">Healthcare</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="/blog" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-pink-500 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Blog</a>
              </li>
              <li>
                <a href="/career" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-pink-500 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Career</a>
              </li>
              <li>
                <a href="/contact" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-pink-500 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
              </li>
            </ul>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden px-2 py-1 text-gray-900"
            onClick={toggleDropdown}
          >
            <svg
              className={`w-6 h-6 ${isDropdownVisible ? 'transform rotate-180' : ''}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Dropdown menu for a mobile device */}
        <div
          className={`lg:hidden ${isDropdownVisible ? 'block' : 'hidden'
            } z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-full dark:bg-gray-700 dark:divide-gray-600`}
        >
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
            <li>
              <a href="/" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-pink-500 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Home</a>
            </li>
            <li>
              <a href="/about" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-pink-500 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">About</a>
            </li>
            <li>
              <button
                id="dropdownNavbarLink"
                onClick={toggleDropdown}
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-500 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                Services
                <svg
                  className={`w-2.5 h-2.5 ms-2.5 ${isDropdownVisible ? 'transform rotate-180' : ''}`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              {/* Dropdown menu */}
              <div
          className={`lg:hidden ${isDropdownVisible ? 'block' : 'hidden'
            } z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-full dark:bg-gray-700 dark:divide-gray-600`}
        >
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownNavbarLink">
                  <li>
                    <a href="/product" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-pink-500">Product Development</a>
                  </li>
                  <li>
                    <a href="/web" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-pink-500">Web Development</a>
                  </li>
                  <li>
                    <a href="/iot" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-pink-500">Internet Of Things</a>
                  </li>
                  <li>
                    <a href="/healthcare" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-pink-500">Healthcare</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="/blog" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-pink-500 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Blog</a>
            </li>
            <li>
              <a href="/career" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-pink-500 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Career</a>
            </li>
            <li>
              <a href="/contact" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-pink-500 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
