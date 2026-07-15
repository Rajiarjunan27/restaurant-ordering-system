import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
} from "react-icons/fa";

import "../Styles/ContactPage.css";
import logo from "../assets/logo.png";

function ContactPage() {
  const navigate = useNavigate();

  return (
    <div className="contact-page">

      {/* Header */}
      <div className="contact-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <FaArrowLeft />
        </button>

        <h2>Contact Us</h2>
      </div>

      <div className="contact-container">

        {/* Logo */}
        <div className="contact-logo">
          <img src={logo} alt="Restaurant Logo" />
          <h3>VELLUTHUKATTU</h3>
          <p>Unlimited Biriyani</p>
        </div>

        {/* Address */}
        <div className="contact-card">
          <FaMapMarkerAlt className="card-icon" />

          <h4>Address</h4>

          <p>
            123, Main Road<br />
            Tenkasi<br />
            Tamil Nadu - 627811
          </p>
        </div>

        {/* Phone */}
        <div className="contact-card">
          <FaPhoneAlt className="card-icon" />

          <h4>Phone</h4>

          <p>+91 98765 43210</p>
        </div>

        {/* Email */}
        <div className="contact-card">
          <FaEnvelope className="card-icon" />

          <h4>Email</h4>

          <p>info@velluthukattu.com</p>
        </div>

        {/* Business Hours */}
        <div className="contact-card">
          <FaClock className="card-icon" />

          <h4>Business Hours</h4>

          <p>Monday - Sunday</p>

          <strong>11:00 AM - 11:00 PM</strong>
        </div>

        {/* Buttons */}

        <div className="contact-buttons">

          <a href="tel:+919876543210" className="call-btn">
            <FaPhoneAlt />
            Call Now
          </a>

          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noreferrer"
            className="whatsapp-btn"
          >
            <FaWhatsapp />
            WhatsApp
          </a>

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noreferrer"
            className="map-btn"
          >
            <FaMapMarkerAlt />
            Google Maps
          </a>

        </div>

        <div className="contact-footer">
          <p>Thank you for choosing ❤️</p>
          <small>Version 1.0.0</small>
        </div>

      </div>
    </div>
  );
}

export default ContactPage;