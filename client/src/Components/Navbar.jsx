import React from "react";
import { useState } from "react";
import SignupFormm from "../Components/SignupForm";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";
const Navbar = () => {
  const [changeColor, setChangeColor] = useState(false);
  const [showSignup, setshowSignup] = useState(false);
  const [showLogin, setshowLogin] = useState(false);

  const { user, dispatch } = useContext(AuthContext);

  const handleScrollNavbar = () => {
    if (window.scrollY >= 200) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  const handleShowSignup = () => {
    setshowSignup(true);
  };
  const handleShowLogin = () => {
    setshowLogin(true);
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
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
            {user ? (
              <li className="mx-8 text-lg">
                <Link to={""} onClick={handleLogout}>
                  {" "}
                  {user?.userDetails.username}
                </Link>
              </li>
            ) : (
              <>
                <li className="mx-8 text-lg" onClick={handleShowLogin}>
                  <Link to={""}>Log in</Link>
                </li>
                <li className="text-lg" onClick={handleShowSignup}>
                  <Link to={""}>Sign up</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
      {showSignup && (
        <SignupFormm
          setshowSignup={setshowSignup}
          setshowLogin={setshowLogin}
        />
      )}
      {showLogin && (
        <LoginForm setshowLogin={setshowLogin} setshowSignup={setshowSignup} />
      )}
    </>
  );
};

export default Navbar;
