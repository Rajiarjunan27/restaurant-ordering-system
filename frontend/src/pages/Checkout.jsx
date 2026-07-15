import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import "../Styles/Checkout.css";

function Checkout() {

    const navigate = useNavigate();

    const {
        subtotal,
        deliveryCharge,
        grandTotal,
    } = useContext(CartContext);

    const [orderType, setOrderType] = useState("Delivery");
    const [paymentMethod, setPaymentMethod] = useState("COD");

    return (

        <div className="checkout-page">

            {/* Header */}

            <div className="checkout-header">

                <button
                    className="checkout-back-btn"
                    onClick={() => navigate(-1)}
                >
                    <FaArrowLeft />
                </button>

                <h2>Checkout</h2>

            </div>

            {/* Customer Information */}

            <h4>Customer Information</h4>

            <input
                type="text"
                placeholder="Full Name"
            />

            <input
                type="text"
                placeholder="Mobile Number"
            />

            <textarea
                rows="3"
                placeholder="Delivery Address"
            ></textarea>

            {/* Order Type */}

            <h4>Order Type</h4>

            <div className="order-type">

                <button
                    className={orderType === "Dine In" ? "active" : ""}
                    onClick={() => setOrderType("Dine In")}
                >
                    🍽 Dine In
                </button>

                <button
                    className={orderType === "Takeaway" ? "active" : ""}
                    onClick={() => setOrderType("Takeaway")}
                >
                    🛍 Takeaway
                </button>

                <button
                    className={orderType === "Delivery" ? "active" : ""}
                    onClick={() => setOrderType("Delivery")}
                >
                    🚚 Delivery
                </button>

            </div>

            {/* Payment */}

            <h4>Payment Method</h4>

            <label className="radio-option">

                <input
                    type="radio"
                    checked={paymentMethod === "COD"}
                    onChange={() => setPaymentMethod("COD")}
                />

                Cash On Delivery

            </label>

            <label className="radio-option">

                <input
                    type="radio"
                    checked={paymentMethod === "Restaurant"}
                    onChange={() => setPaymentMethod("Restaurant")}
                />

                Pay at Restaurant

            </label>

            {/* Notes */}

            <h4>Order Notes (Optional)</h4>

            <textarea
                rows="3"
                placeholder="Add any notes..."
            ></textarea>

            {/* Summary */}

            <h4>Order Summary</h4>

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
                    <span>Total Amount</span>
                    <span>₹{grandTotal}</span>
                </div>

            </div>

            <button
                className="place-order-btn"
                onClick={() => navigate("/order-success")}
            >
                Place Order
            </button>

        </div>

    );

}

export default Checkout;