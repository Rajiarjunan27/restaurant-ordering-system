import foods from "../data/foods";
import FoodCard from "./FoodCard";

function FoodList() {
  return (
    <div>
      {foods.map((food) => (
        <FoodCard
          key={food.id}
          food={food}
        />
      ))}
    </div>
  );
}

export default FoodList;