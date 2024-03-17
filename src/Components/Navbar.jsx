import React, { useState } from "react";
import logo from "../assets/HobbyCue Logo.jpg";
import "../Components/navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="nav-container">
        <img src={logo} alt="logo" />
        <div className="input-group">
          <input type="text" />
          <button>
            <i class="bi bi-search"></i>
          </button>
        </div>
        <nav className="desktop">
          <div className="explore">
            <i class="bi bi-compass-fill"></i>
            Explore
            <i class="bi bi-chevron-down"></i>
            <ul>
              <li>People - Community</li>
              <li>Places - Venues</li>
              <li>Programs - Events</li>
              <li>Products - Store</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="hobbies">
            <i class="bi bi-star-fill"></i>
            Hobbies
            <i class="bi bi-chevron-down"></i>
          </div>
          <i class="bi bi-save-fill"></i>
          <i class="bi bi-bell-fill"></i>
          <i class="bi bi-cart-fill"></i>
          <button>Sign In</button>
        </nav>
        <nav className="mobile">
          <i class="bi bi-search"></i>
          <i class="bi bi-bell-fill"></i>
          <i class="bi bi-list"></i>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
