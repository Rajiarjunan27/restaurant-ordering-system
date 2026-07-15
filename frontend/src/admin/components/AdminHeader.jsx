import { useState } from "react";
import {
  FaBell,
  FaCalendarAlt,
  FaUserCircle
} from "react-icons/fa";

import "../styles/Header.css";

function AdminHeader() {

  const today = new Date().toISOString().split("T")[0];

  const [selectedDate, setSelectedDate] = useState(today);

  return (

    <header className="admin-header">

      {/* Left */}

      <div className="header-left">

        <h2>Dashboard</h2>

        <p>Welcome back, Admin 👋</p>

      </div>

      {/* Right */}

      <div className="header-right">

        {/* Date */}

        <div className="date-picker">

          <FaCalendarAlt className="calendar-icon" />

          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />

        </div>

        {/* Notification */}

        <button className="notification-btn">

          <FaBell />

          <span className="notification-dot"></span>

        </button>

        {/* Profile */}

        <div className="admin-profile">

          <FaUserCircle />

          <div>

            <h4>Admin</h4>

            <p>Restaurant Admin</p>

          </div>

        </div>

      </div>

    </header>

  );

}

export default AdminHeader;