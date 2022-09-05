import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchBlogs } from "../api/axiosClient";

import { Link } from "react-router-dom";
import Blog from "./Blog";

const Articles = () => {
  const { data, isLoading, isError, error } = useQuery(["blogs"], () =>
    fetchBlogs("/blogs")
  );
  console.log(data);
  return (
    <>
      <article className="container mt-12 px-8 lg:grid lg:grid-cols-3 gap-8 lg:mt-10">
        <section className="mb-8 pb-4 border-b lg:border-none order-2">
          <p className="uppercase text-xs font-bold font-roboto my-2">
            Discover more of what matters to you
          </p>
          <div className="">
            <span className="inline-block mr-2 px-2 my-1 border-light">
              Self
            </span>
            <span className="inline-block mr-2 px-2 my-1 border-light">
              Data Science
            </span>
            <span className="inline-block mr-2 px-2 my-1 border-light">
              Relationship
            </span>
            <span className="inline-block mr-2 px-2 my-1 border-light">
              Programming
            </span>
            <span className="inline-block mr-2 px-2 my-1 border-light">
              Productivity
            </span>
            <span className="inline-block mr-2 px-2 my-1 border-light">
              JavaScript
            </span>
            <span className="inline-block mr-2 px-2 my-1 border-light">
              React
            </span>
            <span className="inline-block mr-2 px-2 my-1 border-light">
              Angular
            </span>
          </div>
        </section>

        {/* {loading ? loadingSpinner() : ""} */}
        {isError ? `${error.message}` : ""}
        <section className="order-1 col-span-2">
          {isLoading ? "Loading" : ""}
          {isError ? error : ""}
          {data?.length === 0 ? "No Blogs in the database" : ""}
          {data?.map((blog, key) => (
            <Link to={`/blog/${blog._id}`} key={key}>
              <Blog blog={blog} />
            </Link>
          ))}
        </section>
      </article>
    </>
  );
};

export default Articles;
