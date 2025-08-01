import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

// Labels for each month
const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// Data for exams attended
const attendedData = [14, 13, 12, 12, 8, 6, 23, 10, 18, 16, 5, 11];

const barData = {
  labels,
  datasets: [
    {
      data: attendedData,
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

const BarChart = () => {
  return (
    <div className="h-32 w-full">
      <Bar data={barData} options={barOptions} />
    </div>
  );
};

export default BarChart;
