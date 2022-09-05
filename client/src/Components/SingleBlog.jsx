import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import React from "react";
import { useParams } from "react-router-dom";
import { fetchSingleBlog } from "../api/axiosClient";

const SingleBlog = () => {
  const { id } = useParams();

  const { data, isLoading, isError, error } = useQuery(
    ["Singleblog"],
    async () => await fetchSingleBlog(`/blogs/${id}`)
  );

  return (
    <section className="max-w-2xl mx-auto mt-20">
      {isLoading && (
        <div className="text-center text-xl opacity-60">Loading Blog...</div>
      )}
      {isError && <div className="text-center text-xl opacity-60">{error}</div>}
      {data ? (
        <div className="blog-content px-3">
          <section className="author_info flex items-center  mb-2">
            <img
              src="https://miro.medium.com/fit/c/20/20/1*yPhYY-wHnLlVOuNqft-hUw.jpeg"
              alt=""
              className="rounded-full"
              width={30}
            />
            <div>
              <p className="text-lg capitalize ml-2 ">
                {data?.author.username}
              </p>
              <p className="text-sm  ml-2 ">
                {moment(data?.createdAt).format("MMM DD YYYY")}
              </p>
            </div>
          </section>

          <section>
            <div className="my-8">
              <h2 className="font-bold mb-2 text-4xl">{data?.title}</h2>
              <h4 className="text-2xl opacity-60">{data?.excerpt}</h4>
            </div>
            <div className="mb-8">
              <img
                src={require(`../uploads/${data.image}`)}
                alt=""
                className="block mx-auto w-full"
              />
            </div>
            <div>{data?.body}</div>
          </section>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default SingleBlog;
