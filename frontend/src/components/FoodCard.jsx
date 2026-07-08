import { Link } from "react-router-dom";

function FoodCard({ food, onAddToCart }) {
  return (
    <div className="card shadow h-100">

      <Link to={`/food/${food.id}`}>
        <img
          src={food.image}
          className="card-img-top"
          alt={food.name}
        />
      </Link>

      <div className="card-body">

        <Link
          to={`/food/${food.id}`}
          className="text-decoration-none text-dark"
        >
          <h5>{food.name}</h5>
        </Link>

        <p className="text-muted">
          {food.category}
        </p>

        <h4 className="text-success">
          ₹{food.price}
        </h4>

        <button
          className="btn btn-warning w-100"
          onClick={() => onAddToCart(food)}
        >
          Add to Cart
        </button>

      </div>

    </div>
  );
}

export default FoodCard;