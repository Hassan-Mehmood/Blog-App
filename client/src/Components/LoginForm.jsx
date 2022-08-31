import axios from "axios";
import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useSelector, useDispatch } from "react-redux";
import Field from "./FormFields/Field";

// This component & Signup component are the worst things i have written in my life!!
// Will fix it when i get the time and energy

const LoginForm = ({ setshowLogin }) => {
  // Login form data state
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  // Function to send login request to server
  const { data, mutateAsync } = useMutation((user) => {
    const URL = process.env.REACT_APP_SERVER_URL + "/auth/login";
    return axios.post(URL, user);
  });

  console.log(data);
  // detect change in login form
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    await mutateAsync(formData);
  };

  // Hide the login form when clicked
  const handleOverlayClick = () => {
    setshowLogin(false);
  };
  return (
    <>
      <div
        className="dark-overlay fixed top-0 bottom-0 left-0 right-0 bg-black700"
        onClick={handleOverlayClick}
      ></div>
      <div className="w-full max-w-xs fixed top-2/4 left-2/4 right-2/4 -translate-x-2/4 -translate-y-2/4 rounded">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <p className="font-bold text-center text-3xl mb-4">Login</p>
          <div className="mb-4">
            {/* USERNAME */}
            <Field
              id={"userName"}
              label={"Username"}
              name={"userName"}
              placeholder={"Username"}
              type={"text"}
              value={formData.userName}
              handleFormChange={handleFormChange}
            />
          </div>
          <div className="mb-6">
            {/* PASSWORD */}
            <Field
              id={"password"}
              label={"Password"}
              name={"password"}
              placeholder={"Password"}
              type={"password"}
              value={formData.password}
              handleFormChange={handleFormChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue700 hover:text-white border font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline focus:bg-blue700 focus:text-white"
              type="submit"
              onClick={handleSubmit}
            >
              Sign In
            </button>
          </div>
          <div className="text-center">
            <p></p>
            <p className="text-red mt-8"></p>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
