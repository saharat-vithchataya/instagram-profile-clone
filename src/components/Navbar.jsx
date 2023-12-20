import React from "react";
import {
  FaHome,
  FaFacebookMessenger,
  FaPlusSquare,
  FaRegCompass,
  FaRegHeart,
  FaRegGrinTears,
} from "react-icons/fa";

import Logo from "../assets/logo-Instagram.png";

function Navbar() {
  return (
    <div>
      <nav className="border-b">
        <div className="sm:w-full md:w-[60rem] lg:w-[60rem] mx-auto">
          <div className="flex justify-between flex-col sm:flex-col md:flex-row lg:flex-row h-32 md:h-16 lg:h-16  py-2 items-center">
            <div className="nav-logo">
              <figure>
                <img src={Logo} alt="Instagram Logo" width={100} />
              </figure>
            </div>
            <div className="nav-search-bar">
              <input
                className="border p-1 px-3 text-center rounded "
                type="text"
                placeholder="search"
              />
            </div>
            <ul className="nav-menus flex">
              <li className="px-2 text-xl">
                <a href="#">
                  <FaHome />
                </a>
              </li>
              <li className="px-2 text-xl">
                <a href="#">
                  <FaFacebookMessenger />
                </a>
              </li>
              <li className="px-2 text-xl">
                <a href="#">
                  <FaPlusSquare />
                </a>
              </li>
              <li className="px-2 text-xl">
                <a href="#">
                  <FaRegCompass />
                </a>
              </li>
              <li className="px-2 text-xl">
                <a href="#">
                  <FaRegHeart />
                </a>
              </li>
              <li className="px-2 text-xl">
                <a href="#">
                  <FaRegGrinTears />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
