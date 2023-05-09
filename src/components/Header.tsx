import Image from "next/image";
import Icon from "../../public/logo.svg";
import React from "react";

export default function Header() {
    
    return (
        <header>
  <nav className=" bg-gradient-to-r from-[#d09f60] to-sec px-4 lg:px-6 py-4 fixed w-full top-0 z-10">
    <div className="flex justify-between items-center mx-auto max-w-screen-xl">
      <a href="" className="pb-1">
      <h1 className="text-5xl text-white font-bold pt-1">ARNEURA</h1>
      </a>

      <div className="lg:hidden">
        <button
          type="button"
          className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="4" width="24" height="2" />
            <rect y="11" width="24" height="2" />
            <rect y="18" width="24" height="2" />
          </svg>
        </button>
      </div>

      <div className="hidden justify-center items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu">
        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 justify-center items-center float-right">
          <li>
            <a href="#" className="block py-2 pr-4 pl-3 lg:hover:scale-105 text-white border-b border-gray-100 hover:bg-gray-700 lg:hover:bg-transparent lg:border-0 lg:hover:text-linkSec lg:p-0">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 pr-4 pl-3 lg:hover:scale-105 text-white border-b border-gray-100 hover:bg-gray-700 lg:hover:bg-transparent lg:border-0 lg:hover:text-linkSec lg:p-0">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 pr-4 pl-3 lg:hover:scale-105 text-white border-b border-gray-100 hover:bg-gray-700 lg:hover:bg-transparent lg:border-0 lg:hover:text-linkSec lg:p-0">
              Technologies
            </a>
          </li>
          <li>
          </li>
        </ul>

      </div>

    </div>

  </nav>

        </header>
    )
}