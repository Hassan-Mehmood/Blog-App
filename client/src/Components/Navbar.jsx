import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20 fixed top-0 left-0 right-0">
      <div className="logo">
        <h1 className="text-3xl font-semibold">Blogs</h1>
      </div>
      <ul className="flex justify-between">
        <li>
          <Link to={"/write"}>Write</Link>
        </li>
        <li className="mx-8">
          <Link to={""}>Login</Link>
        </li>
        <li>
          <Link to={""}>Signup</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
