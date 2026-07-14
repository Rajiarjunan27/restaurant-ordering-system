import { useState } from "react";
import { categories } from "../data/foods";
import "../Styles/CategoryTabs.css";

function CategoryTabs({ onCategoryChange }) {

    const [selected, setSelected] = useState("All");

    const handleClick = (category) => {

        setSelected(category);

        if (onCategoryChange) {
            onCategoryChange(category);
        }

    };

    return (

        <div className="category-tabs">

            {

                categories.map((category) => (

                    <button
                        key={category}
                        className={
                            selected === category
                                ? "category-btn active"
                                : "category-btn"
                        }
                        onClick={() => handleClick(category)}
                    >

                        {category}

                    </button>

                ))

            }

        </div>

    );

}

export default CategoryTabs;