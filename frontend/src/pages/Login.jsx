import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../services/api";
import "../Styles/Login.css";


function Login() {
  const navigate = useNavigate();

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

const [loading, setLoading] = useState(false);
const [error, setError] = useState("");
const handleLogin = async () => {
    try {
        setLoading(true);
        setError("");

        const response = await api.post("/token/", {
            username,
            password,
        });

        localStorage.setItem("access", response.data.access);
        localStorage.setItem("refresh", response.data.refresh);

        alert("Login Successful!");

        navigate("/home");

    } catch (error) {

        setError("Invalid username or password");

    } finally {

        setLoading(false);

    }
};
  return (
    <div className="login-container">

      <div className="login-card">

        <button
    className="login-back-btn"
    onClick={() => navigate(-1)}
    aria-label="Go Back"
>
    &#8592;
</button>

        <h2>Welcome Back!</h2>
        <p className="subtitle">Login to continue</p>

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

    <label>Password</label>

    <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
    />

</div>

        <div className="forgot-password">
  <Link to="/forgot-password">Forgot Password?</Link>
</div>
{error && (
    <p style={{ color: "red" }}>{error}</p>
)}
        <button
    className="login-btn"
    onClick={handleLogin}
    disabled={loading}
>
    {loading ? "Logging in..." : "Login"}
</button>

        <div className="bottom-text">
          Don't have an account?
          <Link to="/register"> Register</Link>
        </div>

      </div>

    </div>
  );
}

export default Login;