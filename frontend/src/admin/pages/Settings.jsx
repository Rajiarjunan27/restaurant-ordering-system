import { useState } from "react";

import AdminSidebar from "../components/AdminSidebar";
import AdminHeader from "../components/AdminHeader";

import "../styles/Settings.css";

function Settings() {

    const [settings, setSettings] = useState({
        restaurantName: "Velluthukattu Unlimited Biriyani",
        phone: "+91 9876543210",
        address: "123, Main Road, Tenkasi, Tamil Nadu - 627811",
        deliveryCharge: "30",
        minimumOrder: "100",
    });

    const handleChange = (e) => {

        setSettings({
            ...settings,
            [e.target.name]: e.target.value,
        });

    };

    return (

        <div className="settings-layout">

            <AdminSidebar />

            <div className="settings-main">

                <AdminHeader />

                <div className="settings-content">

                    <h2>Restaurant Settings</h2>

                    <div className="settings-card">

                        <div className="form-group">

                            <label>Restaurant Name</label>

                            <input
                                type="text"
                                name="restaurantName"
                                value={settings.restaurantName}
                                onChange={handleChange}
                            />

                        </div>

                        <div className="form-group">

                            <label>Phone Number</label>

                            <input
                                type="text"
                                name="phone"
                                value={settings.phone}
                                onChange={handleChange}
                            />

                        </div>

                        <div className="form-group">

                            <label>Address</label>

                            <textarea
                                rows="4"
                                name="address"
                                value={settings.address}
                                onChange={handleChange}
                            />

                        </div>

                        <div className="form-group">

                            <label>Delivery Charge (₹)</label>

                            <input
                                type="number"
                                name="deliveryCharge"
                                value={settings.deliveryCharge}
                                onChange={handleChange}
                            />

                        </div>

                        <div className="form-group">

                            <label>Minimum Order (₹)</label>

                            <input
                                type="number"
                                name="minimumOrder"
                                value={settings.minimumOrder}
                                onChange={handleChange}
                            />

                        </div>

                        <button className="save-settings-btn">

                            Save Changes

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Settings;