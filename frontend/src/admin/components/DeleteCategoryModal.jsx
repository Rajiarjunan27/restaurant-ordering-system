import { FaTrash, FaTimes } from "react-icons/fa";
import "../styles/DeleteFoodModal.css";

function DeleteCategoryModal({
    show,
    onClose,
    category
}){

    if(!show || !category) return null;

    return(

        <div className="modal-overlay">

            <div className="delete-modal">

                <div className="delete-icon">

                    <FaTrash/>

                </div>

                <h2>Delete Category</h2>

                <p>

                    Are you sure you want to delete

                    <strong> {category.name}</strong> ?

                </p>

                <div className="modal-buttons">

                    <button
                        className="cancel-btn"
                        onClick={onClose}
                    >
                        <FaTimes/>
                        Cancel
                    </button>

                    <button className="delete-btn">

                        <FaTrash/>

                        Delete

                    </button>

                </div>

            </div>

        </div>

    );

}

export default DeleteCategoryModal;