import { useNavigate } from "react-router-dom";
import "../Styles/OrderSuccess.css";

function OrderSuccess() {

    const navigate = useNavigate();

    const orderId = "#VB10025";
    const totalAmount = 400;

    return (

        <div className="success-page">

            <div className="success-icon">

                ✓

            </div>

            <h2>Order Placed Successfully!</h2>

            <div className="order-card">

                <div>

                    <span>Order ID</span>

                    <strong>{orderId}</strong>

                </div>

                <div>

                    <span>Total Amount</span>

                    <strong>₹{totalAmount}</strong>

                </div>

            </div>

            <p className="success-text">

                Your order has been placed.

                <br />

                You will receive a confirmation

                <br />

                on your WhatsApp.

            </p>

            <button
                className="view-order-btn"
                onClick={() => navigate("/tracking")}
            >

                View My Orders

            </button>

            <button
                className="home-btn"
                onClick={() => navigate("/menu")}
            >

                Back to Home

            </button>

        </div>

    );

}

export default OrderSuccess;