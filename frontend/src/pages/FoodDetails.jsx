import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import foods from "../data/foods";
import "../Styles/FoodDetails.css";

function FoodDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { addToCart } = useContext(CartContext);

  const [quantity, setQuantity] = useState(1);

  const food = foods.find((item) => item.id === Number(id));

  if (!food) {
    return <h2>Food Not Found</h2>;
  }

  const increase = () => {
    setQuantity(quantity + 1);
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="food-details-page">

      {/* Header */}

      <div className="food-header">

        <button
          className="back-btn"
          onClick={() => navigate(-1)}
        >
          ←
        </button>

        <h3>Food Details</h3>

      </div>

      {/* Image */}

      <div className="food-image-container">

        <img
          src={food.image}
          alt={food.name}
          className="food-image"
        />

      </div>

      {/* Food Info */}

      <div className="food-content">

        <h2>{food.name}</h2>

        <p className="food-category">
          {food.category}
        </p>

        <h3 className="price">
          ₹{food.price}
        </h3>

        <p className="description">
          Delicious food prepared with fresh ingredients and authentic spices.
        </p>

        {/* Quantity */}

        <div className="quantity-box">

          <span>Quantity</span>

          <div className="quantity-control">

            <button onClick={decrease}>-</button>

            <span>{quantity}</span>

            <button onClick={increase}>+</button>

          </div>

        </div>

        {/* Buttons */}

        <div className="button-group">

    <button
        className="cart-btn"
        onClick={() => {
            addToCart(food);
            navigate("/Cart");
        }}
    >
        Add To Cart
    </button>

    <button
        className="buy-btn"
        onClick={() => {
            addToCart(food);
            navigate("/Checkout");
        }}
    >
        Buy Now
    </button>

</div>

      </div>

    </div>
  );
}

export default FoodDetails;