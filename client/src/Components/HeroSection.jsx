import React from "react";

const HeroSection = () => {
  return (
    <main className="h-[28.125rem] flex justify-start items-center mt-20 bg-customYellow border-b">
      <div className="container px-8">
        <h2 className="font-notoSerif md:text-7xl sm:text-6xl text-5xl mb-6 font-bold">
          Stay Curious.
        </h2>
        <p className="font-roboto  text-base sm:text-lg md:text-xl max-w-sm ">
          Discover stories, thinking, and expertise from writers on any topic.
        </p>
        <button className="bg-black text-white px-8 py-2 rounded-3xl mt-8 hover:text-black hover:bg-white transition ease-in-out duration-100">
          Start Reading
        </button>
      </div>
    </main>
  );
};

export default HeroSection;
