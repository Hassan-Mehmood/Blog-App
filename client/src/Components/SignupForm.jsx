import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import Field from "./FormFields/Field";
import { signUpUser } from "../api/axiosClient";

// This component & Login component are the worst things i have written in my life!!
// Will fix it when i get the time and energy

const SignupForm = ({ setshowSignup, setshowLogin }) => {
  const [signupErrors, setSignupErrors] = useState([]);
  const [signupSuccess, setsignupSuccess] = useState("");

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  let formErrors = {
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const mutation = useMutation(async (addUser) => {
    try {
      const { data } = await signUpUser("/auth/register", addUser);
      setsignupSuccess(data.success);
    } catch (error) {
      const response = error.response.data;
      console.log(response);
      setSignupErrors(response);
    }
  });

  signupErrors.forEach((error) => {
    // console.log(error);
    const field = error.param;
    const msg = error.msg;
    formErrors = { ...formErrors, [field]: msg };
  });

  const handleFormChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData({ ...formData, [inputName]: inputValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setsignupSuccess("");
    setSignupErrors([]);
    mutation.mutate(formData);
  };

  const showLogin = () => {
    setshowSignup(false);
    setshowLogin(true);
  };

  const handleOverlayClick = () => {
    setshowSignup(false);
  };
  return (
    <>
      <div
        className="dark-overlay fixed top-0 bottom-0 left-0 right-0 z-30 bg-black700"
        onClick={handleOverlayClick}
      ></div>
      <div className="w-full max-w-sm fixed top-2/4 left-2/4 right-2/4 -translate-x-2/4 -translate-y-2/4 rounded z-30">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 z-50">
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
              errorMessage={formErrors.userName}
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
              errorMessage={formErrors.email}
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
              errorMessage={formErrors.password}
            />
          </div>
          <div className="mb-2">
            {/* CONFIRM PASSWORD */}
            <Field
              id={"confirmpassword"}
              label={"Confirm Password"}
              name={"confirmPassword"}
              placeholder={"Confirm Password"}
              type={"password"}
              value={formData.confirmPassword}
              handleFormChange={handleFormChange}
              errorMessage={formErrors.confirmPassword}
            />
          </div>
          <div className="mb-6">
            <span className="text-xs text-green error-span">
              {signupSuccess}
            </span>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue700 hover:text-white border font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline focus:bg-blue700 focus:text-white mb-3"
            type="submit"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
          <p onClick={showLogin}>
            Already have an account?{" "}
            <span className="text-blue700 hover:underline">Sign in</span>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignupForm;
