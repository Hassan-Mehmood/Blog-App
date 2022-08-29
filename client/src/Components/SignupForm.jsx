import axios from "axios";
import React from "react";
import { useState } from "react";

// This component & Login component are the worst things i have written in my life!!
// Will fix it when i get the time and energy

const SignupForm = ({ setshowSignup }) => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [focused, setFocused] = useState(false);

  const hanldeFormChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData({ ...formData, [inputName]: inputValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post("/auth/register", formData);

    setFormData({ userName: "", email: "", password: "", confirmPassword: "" });
  };
  const handleFocus = () => {
    setFocused(true);
  };
  // console.log(formData);
  const handleOverlayClick = () => {
    setshowSignup(false);
  };
  return (
    <>
      <div
        className="dark-overlay fixed top-0 bottom-0 left-0 right-0 bg-black700"
        onClick={handleOverlayClick}
      ></div>
      <div className="w-full max-w-sm fixed top-2/4 left-2/4 right-2/4 -translate-x-2/4 -translate-y-2/4 rounded">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <p className="font-bold text-center text-3xl mb-4">Signup</p>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="userame"
            >
              Username
            </label>
            {/* INPUT */}
            <input
              className="signup-input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              name="userName"
              type="text"
              required={true}
              onBlur={handleFocus}
              focused={focused.toString()}
              pattern="^[a-zA-z]{3,16}$"
              placeholder="Username"
              onChange={hanldeFormChange}
              value={formData.userName}
            />
            {/* <span className="text-xs text-red error-span">
              Username should be 3-16 characters and shuld not include special
              characters
            </span> */}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              E-Mail
            </label>
            {/* INPUT */}
            <input
              className="signup-input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              required={true}
              onBlur={handleFocus}
              focused={focused.toString()}
              placeholder="E-Mail"
              onChange={hanldeFormChange}
              value={formData.email}
            />
            {/* <span className="text-xs text-red error-span">
              E-Mail should be of correct type
            </span> */}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            {/* INPUT */}
            <input
              className="signup-input shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
              type="password"
              required={true}
              onBlur={handleFocus}
              focused={focused.toString()}
              pattern="^[a-zA-z]{6,16}$"
              placeholder="******************"
              onChange={hanldeFormChange}
              value={formData.password}
            />
            {/* <span className="text-xs text-red error-span">
              Password shuld be 6-20 characters and include atleast 1 letter, 1
              number
            </span> */}
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="confirmpassword"
            >
              Confirm Password
            </label>
            {/* INPUT */}
            <input
              className="signup-input shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmpassword"
              name="confirmPassword"
              type="password"
              required={true}
              onBlur={handleFocus}
              focused={focused.toString()}
              pattern={formData.password}
              placeholder="******************"
              onChange={hanldeFormChange}
              value={formData.confirmPassword}
            />
            {/* <span className="text-xs text-red error-span">
              Password don't match
            </span> */}
          </div>

          <button
            className="bg-blue-500 hover:bg-blue700 hover:text-white border font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline focus:bg-blue700 focus:text-white"
            type="button"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};

export default SignupForm;
