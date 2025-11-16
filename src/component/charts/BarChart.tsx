import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

const barOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: (ctx: any) => ` ${ctx.raw}`,
      },
      displayColors: false,
    },
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: { color: "#6b7280", font: { size: 9 } },
    },
    y: {
      display: false,
    },
  },
};

const BarChart: React.FC<{ labels: string[]; values: number[] }> = ({
  labels,
  values,
}) => {
  const barData = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: (ctx: any) => {
          const index = ctx.dataIndex;
          return index === 6 ? "#16a34a" : "#bbf7d0"; // Highlight July
        },
        borderRadius: 4,
        borderSkipped: false,
        barThickness: 36,
      },
    ],
  };

  return (
    <div className="h-32 w-full">
      <Bar data={barData} options={barOptions} />
    </div>
  );
};

export default BarChart;
