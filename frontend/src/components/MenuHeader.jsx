import "../Styles/MenuHeader.css";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function MenuHeader({ onMenuClick })  {

    const navigate = useNavigate();
    const { cartCount } = useContext(CartContext);

    return (

        <header className="menu-header">

            <button
    className="menu-icon-btn"
    onClick={onMenuClick}
>
    <FaBars />
</button>

            <div className="restaurant-info">

                <h2>VELLUTHUKATTU</h2>

                <span>UNLIMITED BIRIYANI</span>

            </div>

            <button
                className="menu-icon-btn cart-icon"
                onClick={() => navigate("/cart")}
            >

                <FaShoppingCart />

                {cartCount > 0 && (
    <span className="cart-badge">
        {cartCount}
    </span>
)}

            </button>

        </header>

    );

}

export default MenuHeader;