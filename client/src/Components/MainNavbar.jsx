import React from "react";
import { useState } from "react";
import SignupFormm from "./SignupForm";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";

const Navbar = () => {
  const [changeColor, setChangeColor] = useState(false);
  const [showSignup, setshowSignup] = useState(false);
  const [showLogin, setshowLogin] = useState(false);
  const navigate = useNavigate();

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

  const handleWriteClick = () => {
    if (!user) {
      setshowLogin(true);
      return;
    }
    navigate("/write");
  };

  window.addEventListener("scroll", handleScrollNavbar);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 border-b transition ease-in duration-100  z-30 ${
          changeColor ? "bg-white" : "bg-customYellow"
        }`}
      >
        <div className=" container flex justify-between items-center px-8 h-20  ">
          <div className="logo">
            <Link to={"/"}>
              <h1 className="text-3xl font-semibold">Blogs</h1>
            </Link>
          </div>
          <ul className="flex justify-between">
            <li onClick={handleWriteClick} className="text-lg cursor-pointer">
              Write
            </li>
            {user ? (
              <>
                <li className="mx-8 text-lg">
                  <Link to={`/user_blogs/${user?.userDetails._id}`}>
                    My Blogs
                  </Link>
                </li>

                <li className="text-lg">
                  <Link to={""}>{user?.userDetails.username}</Link>
                </li>
                <li className="text-lg ml-8">
                  <Link to={""} onClick={handleLogout}>
                    Logout
                  </Link>
                </li>
              </>
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
