import React from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteBlog, fetchBlogs } from "../api/axiosClient";
import Blog from "./Blog";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Articles = () => {
  const { user } = useContext(AuthContext);
  const queryClient = useQueryClient();
  const [deleteLoading, setDeleteLoading] = useState(false);

  const { data, isLoading, isError, error } = useQuery(["blogs"], () =>
    fetchBlogs("/blogs")
  );

  const { mutateAsync } = useMutation(
    ["blogs"],
    (blog) => {
      deleteBlog(`/blogs/delete/${blog}`);
    },
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries(["blogs"]);
        queryClient.refetchQueries(["blogs"]);
        setDeleteLoading(false);
      },
    }
  );

  const handleDeleteClick = async (e, blogId) => {
    e.preventDefault();
    setDeleteLoading(true);
    await mutateAsync(blogId);
  };

  const navigate = useNavigate();
  const handleEditClick = (blog) => {
    navigate(`/blog/edit/${blog}`);
  };

  return (
    <>
      {/* Deleting Notification */}
      {deleteLoading && (
        <div className="fixed bottom-10 left-2/4 rounded text-center -translate-x-1/2 z-50 w-40 bg-red border px-5 py-3">
          <div className="text-white">Deleting</div>
        </div>
      )}

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

        {isError ? `${error.message}` : ""}
        <section className="order-1 col-span-2">
          {isLoading ? "Loading" : ""}
          {isError ? error : ""}
          {data?.length === 0 ? "No Blogs in the database" : ""}
          {data?.map((blog, key) => (
            <article key={key}>
              <Blog blog={blog} user={user} />
              {user?.userDetails._id === blog.author._id ? (
                <div className="lg:mb-4">
                  <button
                    className="bg-blue700 py px-4 text-white mr-1"
                    onClick={() => handleEditClick(blog._id)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red py px-4 text-white"
                    onClick={(e) => handleDeleteClick(e, blog._id)}
                  >
                    Delete
                  </button>
                </div>
              ) : (
                ""
              )}
            </article>
          ))}
        </section>
      </article>
    </>
  );
};

export default Articles;
