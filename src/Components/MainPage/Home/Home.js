import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Blogs from "../Blogs/Blogs";
import BusinessInfo from "../BusinessInfo/BusinessInfo";
import Contact from "../Contact/Contact";
import Header from "../Header/Header";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Header />
      <BusinessInfo />
      <Services />
      <Testimonial/>
      <Blogs/>
      <Contact/>
      <Footer />
    </div>
  );
};

export default Home;
