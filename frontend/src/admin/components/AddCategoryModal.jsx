import { FaTimes } from "react-icons/fa";
import "../styles/AddCategoryModal.css";

function AddCategoryModal({ show, onClose }) {

    if (!show) return null;

    return (

        <div className="modal-overlay">

            <div className="category-modal">

                <div className="modal-header">

                    <h2>Add Category</h2>

                    <button
                        className="close-btn"
                        onClick={onClose}
                    >
                        <FaTimes />
                    </button>

                </div>

                <form>

                    <div className="form-group">

                        <label>Category Name</label>

                        <input
                            type="text"
                            placeholder="Enter category name"
                        />

                    </div>

                    <div className="form-group">

                        <label>Description</label>

                        <textarea
                            rows="4"
                            placeholder="Enter description"
                        ></textarea>

                    </div>

                    <div className="form-group">

                        <label>Status</label>

                        <select>

                            <option>Active</option>
                            <option>Inactive</option>

                        </select>

                    </div>

                    <div className="form-group">

                        <label>Category Image</label>

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
                            Save Category
                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}

export default AddCategoryModal;