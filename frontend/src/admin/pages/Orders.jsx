import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaEye
} from "react-icons/fa";

import AdminSidebar from "../components/AdminSidebar";
import AdminHeader from "../components/AdminHeader";

import "../styles/Orders.css";

const orders = [
  {
    id: "VB10025",
    customer: "Raj",
    type: "Delivery",
    amount: "₹400",
    status: "Accepted",
    time: "12:30 PM",
  },
  {
    id: "VB10024",
    customer: "Arun Kumar",
    type: "Dine In",
    amount: "₹250",
    status: "Preparing",
    time: "12:20 PM",
  },
  {
    id: "VB10023",
    customer: "Siva Priya",
    type: "Delivery",
    amount: "₹320",
    status: "Completed",
    time: "11:40 AM",
  },
  {
    id: "VB10022",
    customer: "Karthik",
    type: "Takeaway",
    amount: "₹180",
    status: "New",
    time: "11:15 AM",
  },
  {
    id: "VB10021",
    customer: "Deepak",
    type: "Delivery",
    amount: "₹460",
    status: "Accepted",
    time: "11:05 AM",
  },
];

function Orders() {
    const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("All");

  const tabs = [
    "All",
    "New",
    "Accepted",
    "Preparing",
    "Completed",
    "Cancelled",
  ];

  const filteredOrders =
    activeTab === "All"
      ? orders
      : orders.filter((order) => order.status === activeTab);

  return (
    <div className="orders-layout">

      <AdminSidebar />

      <div className="orders-main">

        <AdminHeader />

        <div className="orders-content">

          <h2>Orders</h2>

          {/* Status Tabs */}

          <div className="orders-tabs">

            {tabs.map((tab) => (

              <button
                key={tab}
                className={
                  activeTab === tab
                    ? "tab active"
                    : "tab"
                }
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>

            ))}

          </div>

          {/* Search */}

          <div className="orders-search">

            <FaSearch />

            <input
              type="text"
              placeholder="Search by Order ID or Customer"
            />

          </div>

          {/* Table */}

          <div className="orders-table">

            <table>

              <thead>

                <tr>

                  <th>Order ID</th>

                  <th>Customer</th>

                  <th>Type</th>

                  <th>Amount</th>

                  <th>Status</th>

                  <th>Time</th>

                  <th>Action</th>

                </tr>

              </thead>

              <tbody>

                {filteredOrders.map((order) => (

                  <tr key={order.id}>

                    <td>{order.id}</td>

                    <td>{order.customer}</td>

                    <td>{order.type}</td>

                    <td>{order.amount}</td>

                    <td>

                      <span
                        className={`status ${order.status.toLowerCase()}`}
                      >
                        {order.status}
                      </span>

                    </td>

                    <td>{order.time}</td>

                    <td>

                      <button
                           className="view-btn"
                             onClick={() => navigate(`/admin/orders/${order.id}`)}
                               >
                             <FaEye />
                    </button>

                     

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Orders;