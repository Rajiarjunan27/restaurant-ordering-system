import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import "../../admin/styles/AdminLogin.css";

// Change these paths according to your assets folder
import logo from "../../assets/logo.png";
import biryaniImage from "../../assets/Food/briyani.jpg";

function AdminLogin() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // Backend integration later
    navigate("/admin/dashboard");
  };

  return (
    <div className="admin-login-page">

      <div className="admin-login-card">

        {/* Logo */}

        <img
          src={logo}
          alt="Restaurant Logo"
          className="admin-logo"
        />

        <h2>VELLUTHUKATTU</h2>

        <h4>Unlimited Biriyani</h4>

        <h3>Admin Login</h3>

        <p>Sign in to continue</p>

        {/* Form */}

        <form onSubmit={handleLogin}>

          {/* Username */}

          <label>Username</label>

          <div className="input-box">

            <FaUser className="input-icon" />

            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

          </div>

          {/* Password */}

          <label>Password</label>

          <div className="input-box">

            <FaLock className="input-icon" />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="button"
              className="eye-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>

          </div>

          {/* Login */}

          <button
            type="submit"
            className="admin-login-btn"
          >
            Login
          </button>

        </form>

        {/* Bottom Image */}

        <img
          src={biryaniImage}
          alt="Biryani"
          className="login-food-image"
        />

      </div>

    </div>
  );
}

export default AdminLogin;