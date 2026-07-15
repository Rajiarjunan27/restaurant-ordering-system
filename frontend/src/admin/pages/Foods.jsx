import { useState } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import AddFoodModal from "../components/AddFoodModal";
import AdminSidebar from "../components/AdminSidebar";
import AdminHeader from "../components/AdminHeader";
import EditFoodModal from "../components/EditFoodModal";
import DeleteFoodModal from "../components/DeleteFoodModal";

import "../styles/Foods.css";

import briyani from "../../assets/Food/briyani.jpg";
import chicken65 from "../../assets/Food/chicken_65.jpg";
import mutton from "../../assets/Food/mutton_briyani.jpg";
import kattukari from "../../assets/Food/kattukari.jpg";
import parotta from "../../assets/Food/parota_varites.jpg";

function Foods() {
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedFood, setSelectedFood] = useState(null);
   
    const [showDeleteModal, setShowDeleteModal] = useState(false);
   

  const foods = [
  {
    id: 1,
    image: briyani,
    name: "Chicken Biriyani",
    category: "Biriyani",
    price: 170,
    status: "Active",
  },
  {
    id: 2,
    image: mutton,
    name: "Mutton Biriyani",
    category: "Biriyani",
    price: 250,
    status: "Active",
  },
  {
    id: 3,
    image: chicken65,
    name: "Chicken 65",
    category: "Starters",
    price: 100,
    status: "Active",
  },
  {
    id: 4,
    image: kattukari,
    name: "Mutton Chukka",
    category: "Starters",
    price: 200,
    status: "Active",
  },
  {
    id: 5,
    image: parotta,
    name: "Parotta",
    category: "Parotta",
    price: 15,
    status: "Active",
  },
];
  return (
    <div className="foods-layout">

      <AdminSidebar />

      <div className="foods-main">

        <AdminHeader />

        <div className="foods-content">

          <div className="foods-header">

            <h2>Menu Management</h2>

          <button
    className="add-food-btn"
    onClick={() => setShowAddModal(true)}
>
    <FaPlus />
    Add Food
</button>

          </div>

          <div className="foods-card">

            <table>

              <thead>

                <tr>

                  <th>Image</th>
                  <th>Food Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Action</th>

                </tr>

              </thead>

              <tbody>

                {foods.map((food) => (

                  <tr key={food.id}>

                    <td>
                      <img
                        src={food.image}
                        alt={food.name}
                        className="food-image"
                      />
                    </td>

                    <td>{food.name}</td>

                    <td>{food.category}</td>

                    <td>₹{food.price}</td>

                    <td>

                      <span className="food-status">
                        {food.status}
                      </span>

                    </td>

                    <td>

                      <button
    className="edit-btn"
    onClick={() => {
        setSelectedFood(food);
        setShowEditModal(true);
    }}
>
    <FaEdit />
</button>

                      <button
    className="delete-btn"
    onClick={() => {
        setSelectedFood(food);
        setShowDeleteModal(true);
    }}
>
    <FaTrash />
</button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>
<AddFoodModal
    show={showAddModal}
    onClose={() => setShowAddModal(false)}
/>

<DeleteFoodModal
    show={showDeleteModal}
    food={selectedFood}
    onClose={() => setShowDeleteModal(false)}
/>
<EditFoodModal
    show={showEditModal}
    food={selectedFood}
    onClose={() => setShowEditModal(false)}
/>
    </div>
  );
}

export default Foods;