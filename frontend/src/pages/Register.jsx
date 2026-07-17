import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../services/api";
import "../Styles/Register.css";
function Register() {
  const navigate = useNavigate();

const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [phoneNumber, setPhoneNumber] = useState("");
const [password, setPassword] = useState("");

const [loading, setLoading] = useState(false);
const [error, setError] = useState("");
const handleRegister = async () => {
  try {
    setLoading(true);
    setError("");

    await api.post("/auth/register/", {
      username,
      email,
      phone_number: phoneNumber,
      password,
    });

    alert("Registration Successful!");
    navigate("/login");
  } catch (err) {
    setError("Registration failed. Please check your details.");
  } finally {
    setLoading(false);
  }
};
  return (

    <div className="register-container">

      <div className="register-card">

        <button
        className="register-back-btn"
        onClick={() => navigate(-1)}
        aria-label="Go Back"
    >
        &#8592;
    </button>

        <h2>Create Account</h2>

        <p className="subtitle">
          Sign up to get started
        </p>

        <div className="form-group">
          <label>Full Name</label>
          <input
  type="text"
  placeholder="Enter username"
  value={username}
  onChange={(e) => setUsername(e.target.value)}
/>
        </div>
        <div className="form-group">
          <label>E mail</label>
         <input
  type="email"
  placeholder="Mail id"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
        </div>

        <div className="form-group">
          <label>Mobile Number</label>
          <input
  type="text"
  placeholder="Enter mobile number"
  value={phoneNumber}
  onChange={(e) => setPhoneNumber(e.target.value)}
/>
        </div>

        <div className="form-group">
          <label>Password</label>
       <input
  type="password"
  placeholder="Enter password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>
        </div>
{error && <p style={{ color: "red" }}>{error}</p>}
        <button
  className="register-btn"
  onClick={handleRegister}
  disabled={loading}
>
  {loading ? "Registering..." : "Register"}
</button>

        <div className="bottom-text">
          Already have an account?
          <Link to="/login"> Login</Link>
        </div>

      </div>

    </div>

  );
}

export default Register;