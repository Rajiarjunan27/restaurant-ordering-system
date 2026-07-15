import React from "react";
import { useNavigate } from "react-router-dom";
import DrawerMenu from "../components/DrawerMenu";
import BottomNavigation from "../components/BottomNavigation";
import { categories } from "../data/foods";
import "../Styles/Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">

      {/* Header */}

      <header className="home-header">

        <DrawerMenu />

        <div className="logo-section">
          <h2>VELLUTHUKATTU</h2>
          <span>Unlimited Biriyani</span>
        </div>

      </header>

      {/* Welcome */}

      <div className="welcome-card">

        <h2>Welcome 👋</h2>

        <p>Authentic Taste</p>

        <span>Unlimited Happiness</span>

      </div>

      {/* Explore Menu */}

      <div
        className="explore-card"
        onClick={() => navigate("/menu")}
      >

        <h3>🍛 Explore Menu</h3>

        <p>View all delicious dishes</p>

      </div>

      {/* Categories */}

      <div className="section">

        <h3>Browse Categories</h3>

        <div className="category-grid">

  {categories
    .filter((category) => category !== "All")
    .map((category) => (

      <button
        key={category}
        className="category-btn"
        onClick={() =>
          navigate("/menu", {
            state: { category },
          })
        }
      >
        {category}
      </button>

    ))}

</div>

      </div>

      <BottomNavigation />

    </div>
  );
}

export default Home;