import React from "react";
import { Link } from "react-router-dom";
// import Navbar from "../Components/Navbar";

const WriteBlog = () => {
  // const onImageChange = () => {};

  return (
    <section className="flex flex-col justify-center items-center max-h-screen">
      <h2 className="text-4xl my-8">Write your blog</h2>

      <div className="w-full max-w-3xl">
        <form className="bg-white shadow-md  rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              placeholder="Title"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="body"
            >
              Body
            </label>
            <textarea
              id="message"
              rows="8"
              className="block p-2.5 w-full text-sm focus:outline-none focus:shadow-outline rounded-lg border"
              placeholder="Your message..."
            ></textarea>
            <label className="image-upload mt-5">
              <input type="file" name="image" accept="image/*" />
              Upload Image
            </label>
          </div>
          <div className="flex items-center justify-between ">
            <button
              className="font-bold py-2 px-4 rounded border"
              type="button"
            >
              Publish
            </button>
          </div>
        </form>
        <button
          className="font-bold ml-8 py-2 px-4 rounded border"
          type="button"
        >
          <Link to={"/"}>Back</Link>
        </button>
      </div>
    </section>
  );
};

export default WriteBlog;
