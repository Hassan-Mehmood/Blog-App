import axios from "axios";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import Field from "./FormFields/Field";

// This component & Login component are the worst things i have written in my life!!
// Will fix it when i get the time and energy

const SignupForm = ({ setshowSignup, setshowLogin }) => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const mutation = useMutation((addUser) => {
    const url = process.env.REACT_APP_SERVER_URL + "/auth/register";
    return axios.post(url, addUser);
  });

  // const [focused, setFocused] = useState(false);

  const handleFormChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData({ ...formData, [inputName]: inputValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    mutation.mutate(formData);
    // console.log("User registered");
    setFormData({ userName: "", email: "", password: "", confirmPassword: "" });
  };

  // const handleFocus = () => {
  //   setFocused(true);
  // };
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
          <div className="mb-4">
            {/* E-Mail */}
            <Field
              id={"email"}
              label={"E-Mail"}
              name={"email"}
              placeholder={"E-Mail"}
              type={"email"}
              value={formData.email}
              handleFormChange={handleFormChange}
            />
          </div>
          <div className="mb-4">
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
          <div className="mb-6">
            {/* CONFIRM PASSWORD */}
            <Field
              id={"confirmpassword"}
              label={"Confirm Password"}
              name={"confirmPassword"}
              placeholder={"Confirm Password"}
              type={"password"}
              value={formData.confirmPassword}
              handleFormChange={handleFormChange}
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue700 hover:text-white border font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline focus:bg-blue700 focus:text-white"
            type="submit"
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
