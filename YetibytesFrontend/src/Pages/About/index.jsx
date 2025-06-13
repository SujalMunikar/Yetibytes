import React from "react";
import AboutUs from "../../Components/Aboutus";
import Banner from "../../Components/Aboutus/Banner";
import TeamSection from "../../Components/Aboutus/TeamSection";
import Contact from "../../Components/Aboutus/Contact";

const About = () => {
  return (
    <>
    <AboutUs/>
    <Banner/>
    <div id="team">
    <TeamSection/>
    </div>
    <Contact/>
    </>
  );
};

export default About;