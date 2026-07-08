import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import hero from "../assets/Hero.jpg";
import "../styles/Splash.css";

function Splash() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-center"
      style={{
        minHeight: "100vh",
        backgroundColor: "#111",
        color: "#fff",
        padding: "20px",
      }}
    >
      {/* Logo */}
      <img
        src={logo}
        alt="Logo"
        style={{
          width: "90px",
          marginBottom: "20px",
        }}
      />

      {/* Restaurant Name */}
      <h2
        style={{
          color: "#F4B400",
          fontWeight: "bold",
          marginBottom: "5px",
        }}
      >
        VELLUTHUKATTU
      </h2>

      <h5
        style={{
          color: "#F4B400",
          marginBottom: "30px",
        }}
      >
        UNLIMITED BIRIYANI
      </h5>

      {/* Hero Image */}
      <img
        src={hero}
        alt="Chicken Biryani"
        className="img-fluid"
        style={{
          maxWidth: "320px",
          borderRadius: "15px",
          marginBottom: "25px",
        }}
      />

      {/* Tagline */}
      <h5>Authentic Taste</h5>

      <h5 className="mb-4">Unlimited Happiness</h5>

      {/* Buttons */}

      <Link
        to="/login"
        className="btn btn-warning w-100 mb-3"
        style={{ maxWidth: "300px" }}
      >
        Order Now
      </Link>

      <Link
        to="/home"
        className="btn btn-outline-light w-100"
        style={{ maxWidth: "300px" }}
      >
        Explore Menu
      </Link>
    </div>
  );
}

export default Splash;