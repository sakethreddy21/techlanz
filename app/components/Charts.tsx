import React from "react";
import { Pie, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  ArcElement,
  PointElement,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  PointElement,
  LinearScale,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);
export const LineChart = ({ data , title}: any) => {
  return (
    <div>
              <h3>{title}</h3>
      <Line
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          devicePixelRatio: 2,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              grid: {
                display: true,
                lineWidth: 2,
                drawTicks: false,
              },
              ticks: {
                color: "#7B6F72",
                font: {
                  size: 10,
                  weight: "bold",
                },
              },
            },
            y: {
              suggestedMin: 10,
              suggestedMax: 25,
              grid: {
                display: true,
                lineWidth: 2,
                drawTicks: false,
              },
              ticks: {
                display: true,
              },
            },
          },
        }}
      />
    </div>
  );
};


export const PieChart = ({ data, totalCost, title }: any) => {
  return (
    <div>
        <h3>{title}: ${totalCost}</h3>
      <Pie data={data} options={{ responsive: true, radius: 100 }} />
    </div>
  );
};
