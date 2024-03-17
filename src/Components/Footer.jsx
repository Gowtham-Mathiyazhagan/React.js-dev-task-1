import React from "react";
import "../Components/footer.css";
const Footer = () => {
  return (
    <div className="footer-component">
      <div className="contant">
        <div className="hobby">
          <ul>
            <li>Hobbycue</li>
            <li>About Us</li>
            <li>Our Services</li>
            <li>Work with Us</li>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="how">
          <ul>
            <li>How Do I</li>
            <li>Sign Up</li>
            <li>Add a Listing</li>
            <li>Claim Listing</li>
            <li>Post a Query</li>
            <li>Add a Blog Post</li>
            <li>Other Queries</li>
          </ul>
        </div>
        <div className="quick">
          <ul>
            <li>Quick Links</li>
            <li>Listings</li>
            <li>Blog Posts</li>
            <li>Shop / Store</li>
            <li>Community</li>
          </ul>
        </div>
        <div className="social">
          <div className="group-one">
            <ul>
              <li>Social media</li>
            </ul>
            <ul>
              <li>
                <i className="bi bi-google"></i>
              </li>
              <li>
                <i className="bi bi-facebook"></i>
              </li>
              <li>
                <i className="bi bi-instagram"></i>
              </li>
              <li>
                <i className="bi bi-twitter"></i>
              </li>
              <li>
                <i className="bi bi-telegram"></i>
              </li>
              <li>
                <i className="bi bi-youtube"></i>
              </li>
              <li>
                <i className="bi bi-envelope-fill"></i>
              </li>
              <li>
                <i className="bi bi-threads"></i>
              </li>
            </ul>
          </div>
          <div className="group-two">
            <ul>
              <li>Invite Friends</li>
            </ul>
            <div className="input">
              <input type="text" />
              <button>Invite</button>
            </div>
          </div>
        </div>
      </div>
      <footer>© Purple Cues Private Limited</footer>
    </div>
  );
};

export default Footer;
