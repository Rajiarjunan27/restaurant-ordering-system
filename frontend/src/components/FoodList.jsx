import FoodCard from "./FoodCard";
function FoodList({ foods }) {

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