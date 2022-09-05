import React, { useState } from "react";
import { GrHomeRounded } from "react-icons/gr";

import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
const Sidebar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const [showSignup, setshowSignup] = useState(false);
  const [showLogin, setshowLogin] = useState(false);

  const handleShowSignup = () => {
    setshowSignup(true);
  };
  const handleShowLogin = () => {
    setshowLogin(true);
  };

  const handleWriteClick = () => {
    if (!user) {
      setshowLogin(true);
      return;
    }
    navigate("/write");
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <>
      {/* Sidebar */}
      <nav className="fixed left-0 top-0 bottom-0 w-20 border-light hidden lg:block">
        <div className="flex flex-col items-center justify-center h-full">
          <ul>
            <li className="mb-4">
              <Link to={"/"}>{<GrHomeRounded size={25} />}</Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* Top Nav */}

      <nav
        className={`fixed top-0 left-0 right-0 border-b transition ease-in duration-100  z-30 bg-white`}
      >
        <div className=" container flex justify-between items-center px-8 h-14 lg:hidden  ">
          <div className="logo">
            <h1 className="text-3xl font-semibold">Blogs</h1>
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
        <SignupForm setshowSignup={setshowSignup} setshowLogin={setshowLogin} />
      )}
      {showLogin && (
        <LoginForm setshowLogin={setshowLogin} setshowSignup={setshowSignup} />
      )}
    </>
  );
};

export default Sidebar;
