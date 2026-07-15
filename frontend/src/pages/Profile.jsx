import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaUserCircle,
  FaBoxOpen,
  FaInfoCircle,
  FaPhoneAlt,
  FaSignOutAlt,
  FaChevronRight,
} from "react-icons/fa";

import "../Styles/Profile.css";

function Profile() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");

    navigate("/login");
  };

  return (
    <div className="profile-page">

      {/* Header */}

      <div className="profile-header">

        <button
          className="back-btn"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft />
        </button>

        <h2>Profile</h2>

      </div>

      <div className="profile-container">

        {/* User */}

        <div className="profile-user">

          <FaUserCircle className="user-icon" />

          <h3>Guest User</h3>

          <p>Welcome Back!</p>

        </div>

        {/* Menu */}

        <div
          className="profile-card"
          onClick={() => navigate("/tracking")}
        >

          <div className="left">

            <FaBoxOpen className="menu-icon" />

            <span>My Orders</span>

          </div>

          <FaChevronRight />

        </div>

        <div
          className="profile-card"
          onClick={() => navigate("/about")}
        >

          <div className="left">

            <FaInfoCircle className="menu-icon" />

            <span>About Us</span>

          </div>

          <FaChevronRight />

        </div>

        <div
          className="profile-card"
          onClick={() => navigate("/contact")}
        >

          <div className="left">

            <FaPhoneAlt className="menu-icon" />

            <span>Contact Us</span>

          </div>

          <FaChevronRight />

        </div>

        {/* Logout */}

        <button
          className="logout-btn"
          onClick={handleLogout}
        >

          <FaSignOutAlt />

          Logout

        </button>

        <div className="version">

          Version 1.0.0

        </div>

      </div>

    </div>
  );
}

export default Profile;