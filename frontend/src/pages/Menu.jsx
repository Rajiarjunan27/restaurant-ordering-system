import { useContext } from "react";
import foods from "../data/foods";
import FoodCard from "../components/FoodCard";
import { CartContext } from "../context/CartContext";

function Menu() {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="container mt-4">

      <h2 className="text-center mb-4">
        Our Menu
      </h2>

      <div className="row">

        {foods.map((food) => (
          <div
            className="col-lg-3 col-md-4 col-sm-6 mb-4"
            key={food.id}
          >
            <FoodCard
              food={food}
              onAddToCart={addToCart}
            />
          </div>
        ))}

      </div>

    </div>
  );
}

export default Menu;