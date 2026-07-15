import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUtensils,
  FaList,
  FaClipboardList,
  FaUsers,
  FaChartBar,
  FaCog,
  FaSignOutAlt
} from "react-icons/fa";

import "../styles/Sidebar.css";

// Change this path according to your logo location
import logo from "../../assets/logo.png";

function AdminSidebar() {
  return (
    <div className="admin-sidebar">

      {/* Logo Section */}

      <div className="sidebar-logo">

        <img
          src={logo}
          alt="Restaurant Logo"
        />

        <h2>VELLUTHUKATTU</h2>

        <p>Unlimited Biriyani</p>

      </div>

      {/* Navigation */}

      <nav className="sidebar-menu">

        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <FaTachometerAlt />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/admin/orders"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <FaClipboardList />
          <span>Orders</span>
        </NavLink>

        <NavLink
          to="/admin/foods"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <FaUtensils />
          <span>Food Items</span>
        </NavLink>

        <NavLink
          to="/admin/categories"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <FaList />
          <span>Categories</span>
        </NavLink>

        <NavLink
          to="/admin/customers"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <FaUsers />
          <span>Customers</span>
        </NavLink>

        <NavLink
          to="/admin/reports"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <FaChartBar />
          <span>Reports</span>
        </NavLink>

        <NavLink
          to="/admin/settings"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <FaCog />
          <span>Settings</span>
        </NavLink>

      </nav>

      {/* Logout */}

      <div className="sidebar-footer">

        <button className="logout-btn">

          <FaSignOutAlt />

          <span>Logout</span>

        </button>

      </div>

    </div>
  );
}

export default AdminSidebar;