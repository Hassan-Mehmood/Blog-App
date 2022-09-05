import React from "react";
import moment from "moment";

const Blog = ({ blog }) => {
  return (
    <div className="blog grid grid-cols-3 gap-1 items-center my-6 lg:mb-8">
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
  );
};

export default Blog;
