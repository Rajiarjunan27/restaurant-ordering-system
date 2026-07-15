import { FaTimes } from "react-icons/fa";
import "../styles/AddCategoryModal.css";

function EditCategoryModal({
    show,
    onClose,
    category
}){

    if(!show || !category) return null;

    return(

        <div className="modal-overlay">

            <div className="category-modal">

                <div className="modal-header">

                    <h2>Edit Category</h2>

                    <button
                        className="close-btn"
                        onClick={onClose}
                    >
                        <FaTimes/>
                    </button>

                </div>

                <form>

                    <div className="form-group">

                        <label>Category Name</label>

                        <input
                            type="text"
                            defaultValue={category.name}
                        />

                    </div>

                    <div className="form-group">

                        <label>Description</label>

                        <textarea
                            rows="4"
                            defaultValue={category.description}
                        />

                    </div>

                    <div className="form-group">

                        <label>Status</label>

                        <select defaultValue={category.status}>

                            <option>Active</option>
                            <option>Inactive</option>

                        </select>

                    </div>

                    <div className="form-group">

                        <label>Category Image</label>

                        <input type="file"/>

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
                            Update Category
                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}

export default EditCategoryModal;