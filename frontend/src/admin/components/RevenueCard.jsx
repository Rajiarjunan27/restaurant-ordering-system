import { FaArrowUp } from "react-icons/fa";
import "../styles/RevenueCard.css";

function RevenueCard() {

    return (

        <div className="revenue-card">

            <div className="revenue-header">

                <div>

                    <h3>Sales Overview</h3>

                    <p>Today's Revenue</p>

                </div>

                <span className="growth">

                    <FaArrowUp />

                    12%

                </span>

            </div>

            <div className="revenue-body">

                <h1>₹45,250</h1>

                <p>Compared to yesterday</p>

            </div>

            <div className="revenue-footer">

                <div>

                    <h4>Orders</h4>

                    <span>245</span>

                </div>

                <div>

                    <h4>Customers</h4>

                    <span>82</span>

                </div>

                <div>

                    <h4>Avg Order</h4>

                    <span>₹185</span>

                </div>

            </div>

        </div>

    );

}

export default RevenueCard;