import React from "react";

const Articles = () => {
  return (
    <article className="pl-8 grid grid-cols-3 gap-4 mt-40">
      <section className=" col-span-2">
        <div className="author_info">
          <img
            src="https://miro.medium.com/fit/c/20/20/1*yPhYY-wHnLlVOuNqft-hUw.jpeg"
            alt=""
          />
          <p>Emmanual</p>
        </div>
        <div className="blog grid grid-cols-3 ">
          <div className="col-span-2">
            <h2 className="font-roboto font-bold text-2xl lg:text-3xl mb-3">
              Why Dall-E will not steal my job
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
              eligendi elit. Suscipit, eligendi
            </p>
          </div>
          <div className="blog_img w-full ">
            <img
              src="https://miro.medium.com/fit/c/200/134/1*syf2qY1PXnJYeSA4vmSb0w.png"
              alt=""
              className="mx-auto"
            />
          </div>
        </div>
      </section>
      <section className="">
        <p className="uppercase">Discover more of what matters to you</p>
      </section>
    </article>
  );
};

export default Articles;
