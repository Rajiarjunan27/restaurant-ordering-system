import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

import "../styles/OrdersChart.css";

const data = [
  { name: "Completed", value: 45 },
  { name: "Preparing", value: 25 },
  { name: "Pending", value: 18 },
  { name: "Cancelled", value: 12 },
];

const COLORS = [
  "#4CAF50",
  "#FF9800",
  "#2196F3",
  "#F44336",
];

function OrdersChart() {

  return (

    <div className="orders-chart-card">

      <h3>Order Status</h3>

      <ResponsiveContainer
        width="100%"
        height={280}
      >

        <PieChart>

          <Pie
            data={data}
            innerRadius={70}
            outerRadius={100}
            dataKey="value"
          >

            {data.map((entry, index) => (

              <Cell
                key={index}
                fill={COLORS[index]}
              />

            ))}

          </Pie>

          <Tooltip />

          <Legend />

        </PieChart>

      </ResponsiveContainer>

    </div>

  );

}

export default OrdersChart;