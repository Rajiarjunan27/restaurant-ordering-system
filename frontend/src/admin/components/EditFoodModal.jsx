import { FaTimes } from "react-icons/fa";
import "../styles/AddFoodModal.css";

function EditFoodModal({
    show,
    onClose,
    food
}) {

    if (!show || !food) return null;

    return (

        <div className="modal-overlay">

            <div className="food-modal">

                <div className="modal-header">

                    <h2>Edit Food</h2>

                    <button
                        className="close-btn"
                        onClick={onClose}
                    >
                        <FaTimes />
                    </button>

                </div>

                <form>

                    <div className="form-group">

                        <label>Food Name</label>

                        <input
                            type="text"
                            defaultValue={food.name}
                        />

                    </div>

                    <div className="form-group">

                        <label>Category</label>

                        <select defaultValue={food.category}>

                            <option>Biriyani</option>
                            <option>Starters</option>
                            <option>Chinese</option>
                            <option>Parotta</option>
                            <option>Dosa</option>
                            <option>Drinks</option>

                        </select>

                    </div>

                    <div className="form-group">

                        <label>Price</label>

                        <input
                            type="number"
                            defaultValue={food.price}
                        />

                    </div>

                    <div className="form-group">

                        <label>Status</label>

                        <select defaultValue={food.status}>

                            <option>Active</option>
                            <option>Inactive</option>

                        </select>

                    </div>

                    <div className="form-group">

                        <label>Food Image</label>

                        <input type="file" />

                    </div>

                    <div className="modal-buttons">

                        <button
                            type="button"
                            className="cancel-btn"
                            onClick={onClose}
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="save-btn"
                        >
                            Update Food
                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}

export default EditFoodModal;