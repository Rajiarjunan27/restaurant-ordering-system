import { Link } from "react-router-dom";
import "../Styles/Register.css";

function Register() {

  return (

    <div className="register-container">

      <div className="register-card">

        <Link to="/login" className="back-btn">
          &#8592;
        </Link>

        <h2>Create Account</h2>

        <p className="subtitle">
          Sign up to get started
        </p>

        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter full name"
          />
        </div>

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

        <button className="register-btn">
          Register
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