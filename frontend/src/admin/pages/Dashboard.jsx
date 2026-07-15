import {
  FaClipboardList,
  FaUsers,
  FaUtensils,
  FaRupeeSign,
} from "react-icons/fa";

import AdminSidebar from "../components/AdminSidebar";
import AdminHeader from "../components/AdminHeader";
import StatCard from "../components/StatCard";
import RevenueCard from "../components/RevenueCard";
import OrdersChart from "../components/OrdersChart";
import RecentOrders from "../components/RecentOrders";

import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-layout">

      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <main className="dashboard-main">

        {/* Header */}
        <AdminHeader />

        {/* Statistics */}
        <section className="stats-grid">

          <StatCard
            title="Total Orders"
            value="245"
            icon={<FaClipboardList />}
            color="#FF9800"
          />

          <StatCard
            title="New Customers"
            value="82"
            icon={<FaUsers />}
            color="#4CAF50"
          />

          <StatCard
            title="Menu Items"
            value="48"
            icon={<FaUtensils />}
            color="#2196F3"
          />

          <StatCard
            title="Revenue"
            value="₹45,250"
            icon={<FaRupeeSign />}
            color="#E91E63"
          />

        </section>

        {/* Revenue + Chart */}
        <section className="dashboard-row">

          <div className="revenue-section">
            <RevenueCard />
          </div>

          <div className="chart-section">
            <OrdersChart />
          </div>

        </section>

        {/* Recent Orders */}
        <section className="orders-section">
          <RecentOrders />
        </section>

      </main>

    </div>
  );
}

export default Dashboard;