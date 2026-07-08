import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useParams } from "react-router-dom";
import foods from "../data/foods";

function FoodDetails() {
  const { id } = useParams();

  const food = foods.find((item) => item.id === Number(id));
  const { addToCart } = useContext(CartContext);


  if (!food) {
    return <h2 className="text-center mt-5">Food Not Found</h2>;
  }

  return (
    <div className="container mt-5">

      <div className="row">

        <div className="col-md-6">
          <img
            src={food.image}
            alt={food.name}
            className="img-fluid rounded shadow"
          />
        </div>

        <div className="col-md-6">

          <h1>{food.name}</h1>

          <p className="text-muted">
            {food.category}
          </p>

          <h2 className="text-success">
            ₹{food.price}
          </h2>

          <p>
            Authentic South Indian taste prepared with premium ingredients.
          </p>

            <button
                    className="btn btn-warning"
                    onClick={() => addToCart(food)}>
                    Add To Cart
            </button>

        </div>

      </div>

    </div>
  );
}

export default FoodDetails;