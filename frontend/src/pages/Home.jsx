import { Link } from "react-router-dom";
import hero from "../assets/Hero.jpg";

function Home() {
  return (
    <div className="container mt-4">

      <div className="text-center">

        <img
          src={hero}
          alt="Biryani"
          className="img-fluid rounded"
          style={{ maxWidth: "500px" }}
        />

        <h2 className="mt-4">
          Welcome to Velluthukattu Unlimited Biryani
        </h2>

        <p>Authentic Taste, Unlimited Happiness</p>

        <Link to="/menu" className="btn btn-warning">
          Explore Menu
        </Link>

      </div>

    </div>
  );
}

export default Home;