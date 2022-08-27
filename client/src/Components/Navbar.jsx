import React from "react";
import { useState } from "react";
import SignupFormm from "../Components/SignupForm";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
const Navbar = () => {
  const [changeColor, setChangeColor] = useState(false);
  const [showSignup, setshowSignup] = useState(false);
  const [showLogin, setshowLogin] = useState(false);

  const handleScrollNavbar = () => {
    if (window.scrollY >= 200) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  const handleSignup = () => {
    setshowSignup(true);
  };
  const handleLogin = () => {
    setshowLogin(true);
  };

  window.addEventListener("scroll", handleScrollNavbar);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 border-b transition ease-in duration-100  ${
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
            <li className="mx-8 text-lg" onClick={handleLogin}>
              <Link to={""}>Log in</Link>
            </li>
            <li className="text-lg" onClick={handleSignup}>
              <Link to={""}>Sign up</Link>
            </li>
          </ul>
        </div>
      </nav>
      {showSignup && <SignupFormm setshowSignup={setshowSignup} />}
      {showLogin && <LoginForm setshowLogin={setshowLogin} />}
    </>
  );
};

export default Navbar;
