import React from "react";
import Projects from "../Projects/Projects";
import Footer from "../Footer/Footer";
// import Box from "@material-ui/core/Box";
import Skills from '../Skills/Skills'
import CallToAction from '../CallToAction/CallToAction'



const Home = () => {
  return (
      <>
    {/* <Box component="div" style={{ background: "#5f5b60", height: "100vh" }}> */}
      <CallToAction/>
      <Projects />
      <Skills/>
      <Footer />
    {/* </Box> */}
    </>
  );
};

export default Home;
