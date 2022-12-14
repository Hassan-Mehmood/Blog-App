import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { useContext } from "react";
import { BsFillImageFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { uploadBlog } from "../api/axiosClient";
import Field from "../Components/FormFields/Field";
import { AuthContext } from "../Context/AuthContext";

const WriteBlog = () => {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    excerpt: "",
    image: "",
    tags: "",
  });

  const { user } = useContext(AuthContext);
  const { userDetails } = user;

  const mutation = useMutation((blog) => {
    uploadBlog("/blogs/write", blog);
  });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      mutation.mutate({ ...formData, author: userDetails._id });
    } catch (error) {
      console.log(error);
    }
  };
  const handlePhoto = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  return (
    <section className="flex flex-col justify-center items-center max-h-screen">
      <h2 className="text-4xl mt-8 mb-4">Write your blog</h2>
      <h4>
        Author: <span className="font-bold">{userDetails.username}</span>
      </h4>
      <div className="w-full max-w-3xl">
        <form
          className="bg-white shadow-md  rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
          method="post"
          encType="multipart/form-data"
        >
          <div className="mb-4">
            <Field
              label={"Title"}
              id={"title"}
              name={"title"}
              type={"text"}
              placeholder={"Title.."}
              handleFormChange={handleFormChange}
            />
          </div>
          <div className="mb-4">
            <Field
              label={"Excerpt"}
              id={"excerpt"}
              name={"excerpt"}
              type={"text"}
              placeholder={"Excerpt..."}
              handleFormChange={handleFormChange}
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="body"
            >
              Body
            </label>
            <textarea
              id="message"
              rows="8"
              name="body"
              className="block p-2.5 w-full text-sm focus:outline-none focus:shadow-outline rounded-lg border"
              placeholder="Blog body..."
              onChange={handleFormChange}
            ></textarea>
          </div>
          <div className="mb-6 mt-3">
            <Field
              label={"Tags"}
              id={"tags"}
              name={"tags"}
              type={"text"}
              placeholder={"Write tags separated by comma ( , )"}
              handleFormChange={handleFormChange}
            />
          </div>
          <div className="flex items-center justify-between ">
            <div>
              <input
                type="file"
                name="image"
                accept=".png, .jpg, .jpeg"
                onChange={handlePhoto}
                id="image"
                required
              />
            </div>
            <button
              className="font-bold py-2 px-4 ml-2 rounded border"
              type="submit"
              onSubmit={handleSubmit}
            >
              Publish
            </button>
            <button className="font-bold ml-8 py-2 px-4 rounded border">
              <Link to={"/"} type="button">
                Back
              </Link>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default WriteBlog;
