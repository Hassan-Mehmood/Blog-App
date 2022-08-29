import React from "react";
import useFetch from "../hooks/useFetch";

const Articles = () => {
  const { data, error, loading } = useFetch("/blogs");

  return (
    <>
      <article className="container mt-12 px-8 lg:grid lg:grid-cols-3 gap-8 lg:mt-40">
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

        <section className="order-1 col-span-2">
          {data.map((blog, key) => (
            <div
              className="blog grid grid-cols-3 gap-1 items-center my-6 lg:my-0"
              key={key}
            >
              <div className="col-span-2">
                <div className="author_info">
                  <img
                    src="https://miro.medium.com/fit/c/20/20/1*yPhYY-wHnLlVOuNqft-hUw.jpeg"
                    alt=""
                    className="rounded-full"
                  />
                  <p className="text-sm">Emmanual</p>
                </div>
                <h2 className="font-roboto font-bold text-base xs:text-2xl md:text-3xl  ">
                  {blog.title}
                </h2>
                <p className="hidden md:block">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit, eligendi elit. Suscipit, eligendi
                </p>
                <div className="mt-2">
                  <p className="inline-block">Aug 6</p>
                  <span className="inline-block bg-light rounded-lg px-3 ml-4">
                    Tech
                  </span>
                </div>
              </div>
              <div className="blog_img w-full ">
                <img
                  src="https://miro.medium.com/fit/c/200/134/1*syf2qY1PXnJYeSA4vmSb0w.png"
                  alt=""
                  className="mx-auto"
                />
              </div>
            </div>
          ))}
        </section>
      </article>
    </>
  );
};

export default Articles;
