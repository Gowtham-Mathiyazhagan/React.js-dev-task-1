import React, { useState } from "react";
import group from "../assets/Group 27.jpg";
import "../Components/head.css";
const Head = () => {
  const [block, setBlock] = useState(true);
  let sign = {};
  let join = {};
  if (block) {
    sign = { opacity: "1" };
    join = { opacity: "0" };
  } else {
    join = { opacity: "1" };
    sign = { opacity: "0" };
  }
  return (
    <div className="head-container">
      <div className="left">
        <div className="title-para">
          <h2>
            Explore your <span>hobby</span> or <span>passion</span>
          </h2>
          <p>
            Sign-in to interact with a community of fellow hobbyists and an
            eco-system of experts, teachers, suppliers, classes, workshops, and
            places to practice, participate or perform. Your hobby may be about
            visual or performing arts, sports, games, gardening, model making,
            cooking, indoor or outdoor activities…
            <br />
            <br />
            If you are an expert or a seller, you can Add your Listing and
            promote yourself, your students, products, services or events. Hop
            on your hobbyhorse and enjoy the ride.
          </p>
        </div>
        <img src={group} alt="group" />
      </div>
      <div className="right">
        <div className="head">
          <div
            className="sign"
            style={
              block
                ? { color: "#8064a2", borderBottom: "2px solid #8064a2" }
                : {}
            }
            onClick={() => setBlock(!block)}
          >
            Sign in
          </div>
          <div
            className="join-in"
            style={
              block
                ? {}
                : { color: "#8064a2", borderBottom: "2px solid #8064a2" }
            }
            onClick={() => setBlock(!block)}
          >
            Join-in
          </div>
        </div>
        <div className="buttons">
          <button>
            <i class="bi bi-google"></i>Continue with Google
          </button>
          <button>
            <i class="bi bi-facebook"></i>Continue with Facebook
          </button>
        </div>
        <div className="line">
          <span></span>Or connect with<span></span>
        </div>
        <div className="email-section">
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
        </div>
        <div className="remember" style={sign}>
          <div>
            <input type="checkbox" name="check" />
            <label htmlFor="check">Remember me</label>
          </div>
          <div>
            <i class="bi bi-lock-fill"></i>
            <span>Forgot password?</span>
          </div>
        </div>
        <div className="join" style={join}>
          Password strength
        </div>
        <p className="join" style={join}>
          By continuing, you agree to our <span>Terms of Service</span> and{" "}
          <span>Privacy Policy.</span>
        </p>
        <button style={sign}>Continue</button>
        <button className="join" style={join}>
          Agree and Continue
        </button>
      </div>
      <img className="mobile" src={group} alt="group" />
    </div>
  );
};

export default Head;
