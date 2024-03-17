import React from "react";
import "../Components/testimonial.css";
import img1 from "../assets/Vector.png";
import img2 from "../assets/Ellipse.png";
const Testimonial = () => {
  return (
    <div className="testimonial-component">
      <section>
        <div className="title">
          <img src={img1} alt="" />
          <h4>Testimonials</h4>
        </div>
        <p>
          In a fast growing and ever changing city like Bangalore, it sometimes
          becomes very difficult to find or connect with like minded people.
          Websites like hobbycue.com is a great service which helps me get in
          touch with, communicate, connect, and exchange ideas with other
          dancers. It also provides the extra benefit of finding products and
          services that I can avail, which I can be assured is going to be of
          great quality as it comes recommended by people of the hobbycue
          community. To have discussions, to get visibility, and to be able to
          safely explore various hobbies and activities in my city, all under
          one roof, is an excellent idea and I highly recommend it.
        </p>
        <div className="play-list">
          <div className="play">
            <i class="bi bi-play-circle-fill"></i>
            <div>
              <span></span>
            </div>
            <span>0:00</span>
            <div className="img">
              <i class="bi bi-mic-fill"></i>
              <img src={img2} alt="" />
            </div>
          </div>
          <div className="author">
			<img src={img2} alt="" />
			<div>
            <h6>Shubha Nagarajan</h6>
            <p>Classical Dancer</p>
			</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
