import React from "react";
import img from "../assets/Add.png";
import "../Components/add.css";
const Add = () => {
  return (
    <div className="add-component">
      <section>
        <div className="title">
          <img src={img} alt="" />
          <h4>Add your own</h4>
        </div>
        <p>
          Are you a teacher or expert? Do you sell or rent out equipment, venue
          or event tickets? Or, you know someone who should be on hobbycue? Go
          ahead and Add your Own page
        </p>
        <button>Add new</button>
      </section>
    </div>
  );
};

export default Add;
