import React from "react";
import "../Components/getstart.css";
import img from "../assets/Group 99.png";
const Getstart = () => {
  return (
    <div className="getstart-component">
      <section>
        <div className="title-btn">
          <h4>
            Your <span>Hobby</span>, Your <span>Community...</span>
          </h4>
          <button>Get started</button>
        </div>
        <img src={img} alt="" />
      </section>
    </div>
  );
};

export default Getstart;
