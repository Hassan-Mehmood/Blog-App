import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { fetchUserBlogs } from "../api/axiosClient";
import Blog from "./Blog";

const UserBlogs = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useQuery(["userBlogs"], () =>
    fetchUserBlogs(`blogs/user_blogs/${id}`)
  );
  console.log(data);
  return (
    <section className="">
      <div className="author_info max-w-3xl mx-auto mt-28 lg:mt-20">
        <img
          src="https://miro.medium.com/fit/c/20/20/1*yPhYY-wHnLlVOuNqft-hUw.jpeg"
          alt=""
          className="rounded-full"
          width={30}
        />
        <div className="mt-4">
          <p className="text-lg capitalize ml-2 ">
            <span className="font-bold">Name:</span> {data?.username}
          </p>
          <p className="text-lg capitalize ml-2 ">
            <span className="font-bold">Email:</span> {data?.email}
          </p>
        </div>
      </div>

      <div className="max-w-3xl mt-20 mx-auto">
        {isLoading ? "Loading" : ""}
        {isError ? error : ""}
        {data?.length === 0 ? "No Blogs in the database" : ""}
        {data?.posts.map((blog, key) => (
          <Blog blog={blog} key={key} />
        ))}
      </div>
    </section>
  );
};

export default UserBlogs;
