import React from "react";
import "../Components/group.css";
import img1 from "../assets/group1.png";
import img2 from "../assets/group2.png";
import img3 from "../assets/group3.png";
import img4 from "../assets/group4.png";
import imgw1 from '../assets/wg1.png'
import imgw2 from '../assets/wg2.png'
import imgw3 from '../assets/wg3.png'
import imgw4 from '../assets/wg4.png'

const Group = () => {
  return (
    <div className="group-component">
      {data.map((val, i) => {
        return (
          <section key={i}>
            <div className="title">
              <img src={val.img} alt={val.title} />
              <img className="white-img" src={val.wimg} alt={val.title} />
              <h4>{val.title}</h4>
            </div>
            <p>{val.p}</p>
            <button>{val.btn}</button>
          </section>
        );
      })}
    </div>
  );
};
const data = [
  {
    img: img1,
	wimg: imgw1,
    title: "People",
    p: "Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.",
    btn: "Connect",
  },
  {
    img: img2,
	wimg: imgw2,
    title: "Place",
    p: "Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.",
    btn: "Meet up",
  },
  {
    img: img3,
	wimg: imgw3,
    title: "Product",
    p: "Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.",
    btn: "Got it",
  },
  {
    img: img4,
	wimg: imgw4,
    title: "Program",
    p: "Find events, meetups and workshops related to your hobby.  Register or buy tickets online.",
    btn: "Attend",
  },
];
export default Group;
