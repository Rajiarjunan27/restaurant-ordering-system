import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";
import "../Styles/Cart.css";

function Cart() {

    const navigate = useNavigate();

    const {
        cart,
        subtotal,
        deliveryCharge,
        grandTotal,
    } = useContext(CartContext);

    return (

        <div className="cart-page">

            {/* Header */}

            <div className="cart-header">

                <button
                    className="back-btn"
                    onClick={() => navigate(-1)}
                >
                    ←
                </button>

                <h2>
                    My Cart ({cart.length})
                </h2>

            </div>

            {/* Empty Cart */}

            {cart.length === 0 ? (

                <div className="empty-cart">

                    <h3>Your Cart is Empty</h3>

                    <p>Add delicious food from our menu.</p>

                    <button
                        className="checkout-btn"
                        onClick={() => navigate("/menu")}
                    >
                        Browse Menu
                    </button>

                </div>

            ) : (

                <>

                    {/* Cart Items */}

                    {cart.map((item) => (

                        <CartItem
                            key={item.id}
                            item={item}
                        />

                    ))}

                    {/* Add More */}

                    <div
                        className="add-more"
                        onClick={() => navigate("/menu")}
                    >
                        + Add More Items
                    </div>

                    {/* Summary */}

                    <div className="summary">

                        <div>

                            <span>Subtotal</span>

                            <span>₹{subtotal}</span>

                        </div>

                        <div>

                            <span>Delivery Charge</span>

                            <span>₹{deliveryCharge}</span>

                        </div>

                        <div className="total">

                            <span>Total</span>

                            <span>₹{grandTotal}</span>

                        </div>

                    </div>

                    <button
                        className="checkout-btn"
                        onClick={() => navigate("/checkout")}
                    >
                        Proceed to Checkout
                    </button>

                </>

            )}

        </div>

    );

}

export default Cart;