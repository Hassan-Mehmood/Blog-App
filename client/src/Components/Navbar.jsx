import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [changeColor, setChangeColor] = useState(false);

  const handleScrollNavbar = () => {
    if (window.scrollY >= 200) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  window.addEventListener("scroll", handleScrollNavbar);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 border-b transition ease-in duration-100 ${
        changeColor ? "bg-white" : "bg-customYellow"
      }`}
    >
      <div className=" container flex justify-between items-center px-8 h-20  ">
        <div className="logo">
          <h1 className="text-3xl font-semibold">Blogs</h1>
        </div>
        <ul className="flex justify-between">
          <li>
            <Link to={"/write"} className="text-lg">
              Write
            </Link>
          </li>
          <li className="mx-8">
            <Link to={"/login"} className="text-lg">
              Login
            </Link>
          </li>
          <li>
            <Link to={"/login"} className="text-lg">
              Signup
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
