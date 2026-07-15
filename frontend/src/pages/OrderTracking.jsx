import { useNavigate } from "react-router-dom";
import "../Styles/OrderTracking.css";

function OrderTracking() {

    const navigate = useNavigate();

    return (

        <div className="tracking-page">

            {/* Header */}

            <div className="tracking-header">

                <button
                     className="tracking-back-btn"
                     onClick={() => navigate(-1)}
                >
                 &#8592;
                </button>

                <h2>Order Details</h2>

            </div>

            {/* Order Info */}

            <div className="order-info">

                <p><strong>Order ID</strong></p>

                <h3>#VB10025</h3>

                <p>Placed on 02 May 2025, 12:30 PM</p>

            </div>

            {/* Timeline */}

            <div className="timeline">

                <div className="timeline-item completed">

                    <div className="circle">✓</div>

                    <div>

                        <h4>Order Placed</h4>

                        <p>02 May, 12:30 PM</p>

                    </div>

                </div>

                <div className="timeline-item completed">

                    <div className="circle">✓</div>

                    <div>

                        <h4>Accepted</h4>

                        <p>02 May, 12:32 PM</p>

                    </div>

                </div>

                <div className="timeline-item active">

                    <div className="circle">🍔</div>

                    <div>

                        <h4>Preparing</h4>

                        <p>02 May, 12:40 PM</p>

                    </div>

                </div>

                <div className="timeline-item">

                    <div className="circle"></div>

                    <div>

                        <h4>Out for Delivery</h4>

                    </div>

                </div>

                <div className="timeline-item">

                    <div className="circle"></div>

                    <div>

                        <h4>Delivered</h4>

                    </div>

                </div>

            </div>

            {/* Footer */}

            <div className="tracking-footer">

                <h4>3 Items</h4>

                <h2>₹400</h2>

            </div>

            <div className="address">

                <h4>Delivery Address</h4>

                <p>

                    123, Main Road,

                    Tenkasi,

                    Tamil Nadu - 627811

                </p>

            </div>

        </div>

    );

}

export default OrderTracking;