import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

export default function Chart(props) {
  const chartData = props.rows.reduce((acc, curr) => {
    if (typeof acc[curr.category] == "undefined") {
      acc[curr.category] = curr.amount;
    } else {
      acc[curr.category] += curr.amount;
    }
    return acc;
  }, {});

  const totalSpending = props.rows.reduce((acc, curr) => acc + curr.amount, 0);

  let formattedChartData = [];

  for (let i = 0; i < Object.keys(chartData).length; i++) {
    formattedChartData.push({
      name: Object.keys(chartData)[i],
      value:
        Math.round((Object.values(chartData)[i] / totalSpending) * 100 * 1e2) /
        1e2,
    });
  }

  const COLORS = [
    "#FF0000",
    "#FFA500",
    "#008000",
    "#0000FF",
    "#800080",
    "#FFC0CB",
    "#A52A2A",
    "#808080",
    "#ADD8E6",
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "#ffff",
            padding: "5px",
            border: "1px solid #cccc",
          }}
        >
          <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="d-flex justify-content-center mb-5">
      <PieChart width={500} height={500}>
        <Pie
          data={formattedChartData}
          color="#000000"
          datakey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={180}
          fill="#8884d8"
        >
          {formattedChartData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              label={index.name}
            />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend />
      </PieChart>
    </div>
  );
}
