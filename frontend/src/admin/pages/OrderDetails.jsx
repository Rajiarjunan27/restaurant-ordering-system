import { useNavigate, useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaUser,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

import AdminSidebar from "../components/AdminSidebar";
import AdminHeader from "../components/AdminHeader";

import "../styles/OrderDetails.css";

function OrderDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const order = {
    id: id,
    status: "Accepted",
    date: "02 May 2025, 12:30 PM",
    type: "Delivery",

    customer: {
      name: "Raj",
      phone: "9675634210",
      address: "123, Main Road, Tenkasi, Tamil Nadu - 627811",
    },

    payment: "Cash On Delivery",

    notes: "Please call before delivery",

    items: [
      {
        name: "Chicken Biriyani",
        qty: 2,
        price: 170,
      },
      {
        name: "Chicken 65",
        qty: 1,
        price: 160,
      },
      {
        name: "Coke (200ml)",
        qty: 1,
        price: 40,
      },
    ],

    subtotal: 370,
    delivery: 30,
    total: 400,
  };

  return (
    <div className="order-details-layout">

      <AdminSidebar />

      <div className="order-details-main">

        <AdminHeader />

        <div className="order-details-content">

          {/* Back Button */}

          <div className="order-back">
            <button
              className="back-btn"
              onClick={() => navigate(-1)}
            >
              <FaArrowLeft />
              Back
            </button>
          </div>

          {/* Top Card */}

          <div className="details-top">

            <div>

              <h2>#{order.id}</h2>

              <span className="status accepted">
                {order.status}
              </span>

            </div>

            <div className="date-section">

              <p>{order.date}</p>

              <small>{order.type}</small>

            </div>

          </div>

          {/* Customer & Items */}

          <div className="details-grid">

            {/* Customer */}

            <div className="customer-card">

              <h3>Customer Information</h3>

              <p>
                <FaUser />
                {order.customer.name}
              </p>

              <p>
                <FaPhone />
                {order.customer.phone}
              </p>

              <p>
                <FaMapMarkerAlt />
                {order.customer.address}
              </p>

              <hr />

              <h4>Payment Method</h4>

              <p>{order.payment}</p>

              <h4>Order Notes</h4>

              <p>{order.notes}</p>

            </div>

            {/* Order Items */}

            <div className="items-card">

              <h3>Order Items</h3>

              <table>

                <thead>

                  <tr>

                    <th>Item</th>

                    <th>Qty</th>

                    <th>Price</th>

                    <th>Total</th>

                  </tr>

                </thead>

                <tbody>

                  {order.items.map((item, index) => (

                    <tr key={index}>

                      <td>{item.name}</td>

                      <td>{item.qty}</td>

                      <td>₹{item.price}</td>

                      <td>₹{item.qty * item.price}</td>

                    </tr>

                  ))}

                </tbody>

              </table>

              <div className="bill-summary">

                <div>

                  <span>Subtotal</span>

                  <strong>₹{order.subtotal}</strong>

                </div>

                <div>

                  <span>Delivery Charge</span>

                  <strong>₹{order.delivery}</strong>

                </div>

                <div className="grand-total">

                  <span>Total Amount</span>

                  <strong>₹{order.total}</strong>

                </div>

              </div>

            </div>

          </div>

          {/* Buttons */}

          <div className="action-buttons">

            <button className="prepare-btn">
              Mark as Preparing
            </button>

            <button className="ready-btn">
              Mark as Ready
            </button>

            <button className="deliver-btn">
              Mark as Delivered
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default OrderDetails;