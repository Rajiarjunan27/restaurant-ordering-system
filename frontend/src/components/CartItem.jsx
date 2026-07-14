
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../Styles/Cart.css";

function CartItem({ item }) {

    const {
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
    } = useContext(CartContext);

    return (

        <div className="cart-item">

            <img
                src={item.image}
                alt={item.name}
            />

            <div className="item-details">

                <h4>{item.name}</h4>

                <p>₹{item.price}</p>

            </div>

            <div className="qty-box">

                <button
                    onClick={() => decreaseQuantity(item.id)}
                >
                    -
                </button>

                <span>{item.quantity}</span>

                <button
                    onClick={() => increaseQuantity(item.id)}
                >
                    +
                </button>

            </div>

            <button
                className="delete-btn"
                onClick={() => removeFromCart(item.id)}
            >
                🗑
            </button>

        </div>

    );

}

export default CartItem;