import { useNavigate, useLocation } from "react-router-dom";
import "../Styles/BottomNavigation.css";

function BottomNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="bottom-nav">

      <div
        className={location.pathname === "/home" ? "active" : ""}
        onClick={() => navigate("/home")}
      >
        🏠
        <p>Home</p>
      </div>

      <div
        className={location.pathname === "/menu" ? "active" : ""}
        onClick={() => navigate("/menu")}
      >
        📂
        <p>Categories</p>
      </div>

      <div
        className={location.pathname === "/tracking" ? "active" : ""}
        onClick={() => navigate("/tracking")}
      >
        📦
        <p>Orders</p>
      </div>

      <div
        className={location.pathname === "/profile" ? "active" : ""}
        onClick={() => navigate("/profile")}
      >
        👤
        <p>Profile</p>
      </div>

    </div>
  );
}

export default BottomNavigation;