import React from "react";
// import Layout from "../../components/template/layout/Layout";
import {
  Carousel,
  Discover,
  Footer,
  HeroSection,
  Navbar,
} from "../../components/organisms";

const HomePage = () => {
  return (
    <>
      {/* <Layout> */}
      <Navbar />
      <HeroSection />
      <Discover />
      <Carousel />
      <Footer />
      {/* </Layout> */}
    </>
  );
};

export default HomePage;
