import { FaTrash, FaTimes } from "react-icons/fa";
import "../styles/DeleteFoodModal.css";

function DeleteFoodModal({ show, onClose, food }) {

    if (!show || !food) return null;

    return (

        <div className="modal-overlay">

            <div className="delete-modal">

                <div className="delete-icon">
                    <FaTrash />
                </div>

                <h2>Delete Food</h2>

                <p>
                    Are you sure you want to delete
                    <strong> "{food.name}"</strong> ?
                </p>

                <div className="modal-buttons">

                    <button
                        className="cancel-btn"
                        onClick={onClose}
                    >
                        <FaTimes />
                        Cancel
                    </button>

                    <button
                        className="delete-btn"
                        onClick={onClose}
                    >
                        <FaTrash />
                        Delete
                    </button>

                </div>

            </div>

        </div>

    );

}

export default DeleteFoodModal;