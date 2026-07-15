import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

import AdminSidebar from "../components/AdminSidebar";
import AdminHeader from "../components/AdminHeader";

import "../styles/Categories.css";
import { useState } from "react";

import AddCategoryModal from "../components/AddCategoryModal";
import EditCategoryModal from "../components/EditCategoryModal";
import DeleteCategoryModal from "../components/DeleteCategoryModal";

import briyani from "../../assets/Food/briyani.jpg";
import chicken65 from "../../assets/Food/chicken_65.jpg";
import kattukari from "../../assets/Food/kattukari.jpg";
import parotta from "../../assets/Food/parota_varites.jpg";
import juice from "../../assets/Food/juice.jpg";

function Categories() {
    const [showAddModal,setShowAddModal]=useState(false);
const [showEditModal,setShowEditModal]=useState(false);
const [showDeleteModal,setShowDeleteModal]=useState(false);

const [selectedCategory,setSelectedCategory]=useState(null);

    const categories = [

        {
            id:1,
            image:briyani,
            name:"Biriyani",
            description:"All Biriyani Items",
            status:"Active",
        },

        {
            id:2,
            image:chicken65,
            name:"Starters",
            description:"Starter Items",
            status:"Active",
        },

        {
            id:3,
            image:kattukari,
            name:"Chinese",
            description:"Chinese Foods",
            status:"Active",
        },

        {
            id:4,
            image:parotta,
            name:"Parotta",
            description:"Parotta Varieties",
            status:"Active",
        },

        {
            id:5,
            image:juice,
            name:"Drinks",
            description:"Beverages",
            status:"Active",
        }

    ];

    return (

        <div className="categories-layout">

            <AdminSidebar />

            <div className="categories-main">

                <AdminHeader />

                <div className="categories-content">

                    <div className="categories-header">

                        <h2>Category Management</h2>

                        <button
    className="add-category-btn"
    onClick={()=>setShowAddModal(true)}
>
    <FaPlus/>
    Add Category
</button>
                    </div>

                    <div className="categories-card">

                        <table>

                            <thead>

                                <tr>

                                    <th>Image</th>
                                    <th>Category Name</th>
                                    <th>Description</th>
                                    <th>Status</th>
                                    <th>Action</th>

                                </tr>

                            </thead>

                            <tbody>

                                {categories.map((category)=>(

                                    <tr key={category.id}>

                                        <td>

                                            <img
                                                src={category.image}
                                                alt={category.name}
                                                className="category-image"
                                            />

                                        </td>

                                        <td>{category.name}</td>

                                        <td>{category.description}</td>

                                        <td>

                                            <span className="category-status">

                                                {category.status}

                                            </span>

                                        </td>

                                        <td>

                                            <button
    className="edit-btn"
    onClick={()=>{
        setSelectedCategory(category);
        setShowEditModal(true);
    }}
>
    <FaEdit/>
</button>

                                            <button
    className="delete-btn"
    onClick={()=>{
        setSelectedCategory(category);
        setShowDeleteModal(true);
    }}
>
    <FaTrash/>
</button>

                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>
<AddCategoryModal
    show={showAddModal}
    onClose={()=>setShowAddModal(false)}
/>

<EditCategoryModal
    show={showEditModal}
    category={selectedCategory}
    onClose={()=>setShowEditModal(false)}
/>

<DeleteCategoryModal
    show={showDeleteModal}
    category={selectedCategory}
    onClose={()=>setShowDeleteModal(false)}
/>
        </div>

    );

}

export default Categories;