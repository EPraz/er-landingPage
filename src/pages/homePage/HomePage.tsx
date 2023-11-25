import React from "react";
// import Layout from "../../components/template/layout/Layout";
import {
  Carousel,
  Discover,
  Footer,
  HeroSection,
  Navbar,
  Form,
  Org,
  About,
  News,
} from "../../components/organisms";

const HomePage = () => {
  return (
    <>
      {/* <Layout> */}
      <Navbar />
      <HeroSection />
      <News />
      <About />
      <Discover />
      <Carousel />
      <Org />
      <Form />
      <Footer />
      {/* </Layout> */}
    </>
  );
};

export default HomePage;
