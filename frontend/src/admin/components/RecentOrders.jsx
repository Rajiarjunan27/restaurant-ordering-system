import "../styles/RecentOrders.css";

const orders = [
  {
    id: "#1001",
    customer: "Rahul",
    amount: "₹350",
    status: "Preparing",
    time: "12:30 PM",
  },
  {
    id: "#1002",
    customer: "Kumar",
    amount: "₹520",
    status: "Completed",
    time: "12:42 PM",
  },
  {
    id: "#1003",
    customer: "Priya",
    amount: "₹180",
    status: "Pending",
    time: "12:55 PM",
  },
  {
    id: "#1004",
    customer: "Arun",
    amount: "₹670",
    status: "Cancelled",
    time: "01:05 PM",
  },
];

function RecentOrders() {

  return (

    <div className="recent-orders">

      <div className="table-header">

        <h3>Recent Orders</h3>

        <button>View All</button>

      </div>

      <table>

        <thead>

          <tr>

            <th>Order ID</th>

            <th>Customer</th>

            <th>Amount</th>

            <th>Status</th>

            <th>Time</th>

          </tr>

        </thead>

        <tbody>

          {orders.map((order) => (

            <tr key={order.id}>

              <td>{order.id}</td>

              <td>{order.customer}</td>

              <td>{order.amount}</td>

              <td>

                <span
                  className={`status ${order.status.toLowerCase()}`}
                >
                  {order.status}
                </span>

              </td>

              <td>{order.time}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default RecentOrders;