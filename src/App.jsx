import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Head from "./Components/Head";
import Group from "./Components/Group";
import Add from "./Components/Add";
import Testimonial from "./Components/Testimonial";
import Getstart from "./Components/Getstart";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="app-component">
      {/* to make contant center */}
      <div>
        <Navbar />
        <Head />
        <Group />
        <Add />
        <Testimonial />
        <Getstart />
        <Footer />
      </div>
    </div>
  );
};

export default App;
