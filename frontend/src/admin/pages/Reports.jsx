import AdminSidebar from "../components/AdminSidebar";
import AdminHeader from "../components/AdminHeader";

import "../styles/Reports.css";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";

import { Line, Pie } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Tooltip,
    Legend
);

function Reports() {

    const salesData = {
        labels: [
            "01 May",
            "05 May",
            "10 May",
            "15 May",
            "20 May",
            "25 May",
            "30 May",
        ],

        datasets: [
            {
                label: "Sales",
                data: [5000,12000,16000,14500,21000,18000,20000],
                borderColor: "#FF9800",
                backgroundColor: "#FFE0B2",
                tension: .4,
                fill:false,
            },
        ],
    };

    const orderTypeData = {

        labels:["Delivery","Takeaway","Dine In"],

        datasets:[
            {
                data:[52,28,20],
                backgroundColor:[
                    "#4CAF50",
                    "#FF9800",
                    "#2196F3",
                ],
            },
        ],
    };

    return (

        <div className="reports-layout">

            <AdminSidebar/>

            <div className="reports-main">

                <AdminHeader/>

                <div className="reports-content">

                    <div className="reports-header">

                        <h2>Sales Reports</h2>

                        <div className="report-actions">

                            <input
                                type="date"
                            />

                            <button>

                                Export

                            </button>

                        </div>

                    </div>

                    <div className="report-cards">

                        <div className="report-card">

                            <h4>Total Sales</h4>

                            <h2>₹36,850</h2>

                        </div>

                        <div className="report-card">

                            <h4>Total Orders</h4>

                            <h2>98</h2>

                        </div>

                        <div className="report-card">

                            <h4>Average Order</h4>

                            <h2>₹376</h2>

                        </div>

                    </div>

                    <div className="charts-container">

                        <div className="chart-card">

                            <h3>Sales Over Time</h3>

                            <Line data={salesData}/>

                        </div>

                        <div className="chart-card">

                            <h3>Orders By Type</h3>

                            <Pie data={orderTypeData}/>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Reports;