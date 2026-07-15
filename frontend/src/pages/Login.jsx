import { Link } from "react-router-dom";
import "../Styles/Login.css";

function Login() {
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
          <label>Mobile Number</label>
          <input
            type="text"
            placeholder="Enter mobile number"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
          />
        </div>

        <div className="forgot-password">
          Forgot Password?
        </div>

        <button className="login-btn">
          Login
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