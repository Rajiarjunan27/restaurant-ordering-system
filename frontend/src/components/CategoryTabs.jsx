import { useState } from "react";
import { categories } from "../data/foods";
import "../Styles/CategoryTabs.css";

function CategoryTabs({ selectedCategory, setSelectedCategory }) {

    return (

        <div className="category-tabs">

            {categories.map((category) => (

                <button
                    key={category}
                    className={
                        selectedCategory === category
                            ? "category-btn active"
                            : "category-btn"
                    }
                    onClick={() => setSelectedCategory(category)}
                >

                    {category}

                </button>

            ))}

        </div>

    );

}

export default CategoryTabs;