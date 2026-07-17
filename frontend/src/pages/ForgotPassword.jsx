import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../services/api";
import "../Styles/ForgotPassword.css";

function ForgotPassword() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleResetPassword = async () => {
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      await api.post("/auth/forgot-password/", {
        username,
        password: newPassword,
      });

      alert("Password updated successfully!");
      navigate("/login");
    } catch (err) {
      setError("Unable to update password.");
      console.log(err.response?.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="forgot-container">
      <div className="forgot-card">

        <button
          className="forgot-back-btn"
          onClick={() => navigate(-1)}
        >
          &#8592;
        </button>

        <h2>Forgot Password</h2>
        <p className="subtitle">
          Enter your username and new password
        </p>

        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>New Password</label>
          <input
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        {error && (
          <p style={{ color: "red" }}>{error}</p>
        )}

        <button
          className="forgot-btn"
          onClick={handleResetPassword}
          disabled={loading}
        >
          {loading ? "Updating..." : "Update Password"}
        </button>

        <div className="bottom-text">
          Remember your password?
          <Link to="/login"> Login</Link>
        </div>

      </div>
    </div>
  );
}

export default ForgotPassword;