import React from "react";

const LoginForm = ({ setshowLogin }) => {
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
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
              placeholder="******************"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue700 hover:text-white border font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline focus:bg-blue700 focus:text-white"
              type="button"
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="/"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
