import React from "react";
import MainNavbar from "../Components/MainNavbar";
import HeroSection from "../Components/HeroSection";
import Articles from "../Components/Articles";

const HomePage = () => {
  return (
    <>
      <header>
        <MainNavbar />
        <HeroSection />
      </header>
      <main>
        <Articles />
        <section></section>
      </main>
    </>
  );
};

export default HomePage;
