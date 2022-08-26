import React from "react";
// import Navbar from "../Components/Navbar";

const WriteBlog = () => {
  return (
    <>
      {/* <Navbar /> */}
      <form className="container flex h-screen items-center justify-center">
        <section className="w-max max-w-xl flex flex-col justify-center">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" className="border p-4 w-full" />
          <label htmlFor="body">Blog Body</label>
          <textarea type="text" id="body" className="border" />
        </section>
      </form>
    </>
  );
};

export default WriteBlog;
