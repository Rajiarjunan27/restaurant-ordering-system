import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaUtensils,
  FaHeart,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";

import "../Styles/AboutPage.css";

// Change the path according to your project
import logo from "../assets/logo.png";

function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="about-page">

      {/* Header */}
      <div className="about-header">
        <button
          className="back-btn"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft />
        </button>

        <h2>About Us</h2>
      </div>

      <div className="about-container">

        {/* Logo */}

        <div className="logo-section">
          <img src={logo} alt="Restaurant Logo" />

          <h3>VELLUTHUKATTU</h3>

          <p>Unlimited Biriyani</p>
        </div>

        {/* About */}

        <div className="about-card">

          <h4>Welcome</h4>

          <p>
            Welcome to Velluthukattu Unlimited Biriyani.

            We proudly serve authentic South Indian
            Biriyani, Parotta, Chinese dishes,
            Dosa varieties and delicious meals
            prepared with fresh ingredients.

            <br /><br />

            Our mission is to provide quality food,
            friendly service and a memorable dining
            experience for every customer.
          </p>

        </div>

        {/* Why Choose Us */}

        <div className="feature-grid">

          <h4>Why Choose Us</h4>

          <div className="features">

            <div className="feature-box">
              <FaUtensils />
              <span>Fresh Food</span>
            </div>

            <div className="feature-box">
              <FaCheckCircle />
              <span>Hygienic Kitchen</span>
            </div>

            <div className="feature-box">
              <FaHeart />
              <span>Made With Love</span>
            </div>

            <div className="feature-box">
              <FaClock />
              <span>Fast Service</span>
            </div>

          </div>

        </div>

        {/* Working Hours */}

        <div className="hours-card">
    <FaClock className="clock-icon" />
    <h4>Working Hours</h4>
    <p>Monday - Sunday</p>
    <strong>11:00 AM - 11:00 PM</strong>
</div>

        {/* Footer */}

        <div className="footer-text">

          <p>Made with ❤️ in Tenkasi</p>

          <small>Version 1.0.0</small>

        </div>

      </div>

    </div>
  );
}

export default AboutPage;