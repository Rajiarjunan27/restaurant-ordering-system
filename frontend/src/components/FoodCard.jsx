import "../Styles/FoodCard.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function FoodCard({ food }) {

    const navigate = useNavigate();

    const { addToCart } = useContext(CartContext);

    return (

        <div
            className="food-card"
            onClick={() => navigate(`/food/${food.id}`)}
        >

            <img
                src={food.image}
                alt={food.name}
                className="food-image"
            />

            <div className="food-info">

                <h5>{food.name}</h5>

                <p>₹{food.price}</p>

            </div>

            <button

                onClick={(e) => {

                    e.stopPropagation(); // Don't open Food Details

                    addToCart(food);

                }}

            >

                +

            </button>

        </div>

    );

}

export default FoodCard;