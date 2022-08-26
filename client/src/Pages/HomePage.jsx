import React from "react";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import Articles from "../Components/Articles";

const HomePage = () => {
  return (
    <>
      <header>
        <Navbar />
        <HeroSection />
      </header>
      <main>
        <Articles />
        <section></section>
      </main>
      <div className="" style={{ margin: " 0 0 1500px 0" }}></div>
    </>
  );
};

export default HomePage;
