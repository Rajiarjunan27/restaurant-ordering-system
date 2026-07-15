import { FaTimes } from "react-icons/fa";
import "../styles/AddFoodModal.css";

function AddFoodModal({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="modal-overlay">

      <div className="food-modal">

        <div className="modal-header">

          <h2>Add New Food</h2>

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
              placeholder="Enter food name"
            />
          </div>

          <div className="form-group">
            <label>Category</label>

            <select>

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
              placeholder="Enter price"
            />

          </div>

          <div className="form-group">

            <label>Status</label>

            <select>

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
              Save Food
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default AddFoodModal;