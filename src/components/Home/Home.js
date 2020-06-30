import React from "react";
import Projects from "../Projects/Projects";
// import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Box from "@material-ui/core/Box";
import Skills from '../Skills/Skills'
// import Contact from '../Contact/Contact'
import CallToAction from '../CallToAction/CallToAction'
// import Toolbar from '../Toolbar/Toolbar'
// import NavMenu from '../NavMenu/NavMenu'
// import Navbar from '../NavMenu/Navbar'


const Home = () => {
  return (
      <>
    <Box component="div" style={{ background: "#5f5b60", height: "100vh" }}>
      {/* <Navbar /> */}
      {/* <Toolbar/> */}
      {/* <NavMenu/> */}
      <CallToAction/>
      <Projects />
      <Skills/>
      <Footer />
    </Box>
    </>
  );
};

export default Home;
