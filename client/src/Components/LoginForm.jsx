import axios from "axios";
import React, { useState } from "react";

// This component & Signup component are the worst things i have written in my life!!
// Will fix it when i get the time and energy

const LoginForm = ({ setshowLogin, setshowSignup }) => {
  const SERVER_URL = process.env.REACT_APP_SERVER_URL + "/auth/login";
  const [loading, setLoading] = useState(false);
  const [serverResponse, setserverResponse] = useState("");
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setserverResponse("");

    setLoading(true);

    const response = await axios.post(SERVER_URL, formData);

    console.log(response.data.message);

    setserverResponse(response.data.message);

    console.log(response);

    setLoading(false);
  };

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
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="******************"
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
            <p>{loading && "Loading"}</p>
            <p className="text-red mt-8">{serverResponse}</p>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
