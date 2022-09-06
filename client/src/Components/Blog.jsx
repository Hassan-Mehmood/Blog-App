import React, { useState } from "react";
import moment from "moment";
import { useMutation } from "@tanstack/react-query";
import { deleteBlog } from "../api/axiosClient";
import { Link } from "react-router-dom";

const Blog = ({ blog, user }) => {
  const [handleDelete, setHandleDelete] = useState(false);
  const mutation = useMutation((blog) => {
    deleteBlog(`/blogs/delete/${blog}`);
  });

  const handleDeleteClick = (blogId) => {
    mutation.mutate(blogId);
  };

  return (
    <>
      <Link to={`/blog/${blog._id}`}>
        <div className="blog grid grid-cols-3 gap-1 items-center my-6 lg:mb-4">
          <div className="col-span-2">
            <div className="author_info flex mb-2">
              <img
                src="https://miro.medium.com/fit/c/20/20/1*yPhYY-wHnLlVOuNqft-hUw.jpeg"
                alt=""
                className="rounded-full"
              />
              <p className="text-sm capitalize ml-2 -z-10">
                {blog.author.username}
              </p>
            </div>
            <h2 className="font-roboto font-bold text-base xs:text-2xl md:text-3xl  ">
              {blog.title}
            </h2>
            <p className="hidden md:block opacity-80 my-2">{blog.excerpt}</p>
            <div className="mt-4">
              <p className="inline-block">
                {moment(blog.createdAt).format("MMM D")}
              </p>
              {blog?.tags.map((tag, key) => (
                <span
                  className="inline-block bg-light rounded-lg px-3 ml-4"
                  key={key}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="blog_img ">
            <div className="h-[134px]">
              <img
                src={require(`../uploads/${blog.image}`)}
                alt=""
                className="mx-auto h-full object-cover"
                height={134}
                width={200}
              />
            </div>
          </div>
        </div>
      </Link>
      {user?.userDetails._id === blog.author._id ? (
        <div className="lg:mb-4">
          <button className="bg-blue700 py px-4 text-white mr-1">Edit</button>
          <button
            className="bg-red py px-4 text-white"
            onClick={() => handleDeleteClick(blog._id)}
          >
            Delete
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Blog;
