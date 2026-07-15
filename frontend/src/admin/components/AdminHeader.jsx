import { useState } from "react";
import {
  FaBell,
  FaCalendarAlt,
  FaUserCircle
} from "react-icons/fa";

import "../styles/Header.css";

function AdminHeader({

    title="Dashboard",
    subtitle="Welcome back, Admin 👋"

}){

    return(

        <div className="admin-header">

            <div>

                <h1>{title}</h1>

                <p>{subtitle}</p>

            </div>

            <div className="header-right">

                {/* Date picker / profile / notifications later */}

            </div>

        </div>

    );

}

export default AdminHeader;

