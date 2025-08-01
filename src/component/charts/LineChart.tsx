import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler
);

// Line chart data
const lineData = {
  labels: [
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
  ],
  datasets: [
    {
      label: "Accuracy",
      data: [30, 60, 45, 70, 40, 65, 75, 55, 68, 85, 60, 70],
      borderColor: "rgba(44, 140, 83, 1)", // Solid green line
      backgroundColor: (context: any) => {
        const ctx = context.chart.ctx;
        const chart = context.chart;
        const gradient = ctx.createLinearGradient(0, 0, 0, chart.height);
        gradient.addColorStop(0, "rgba(44, 140, 83, 0.2)"); // very light near the line
        gradient.addColorStop(1, "rgba(44, 140, 83, 0)"); // transparent
        return gradient;
      },
      tension: 0.4,
      fill: true,
      pointRadius: 0,
      borderWidth: 2,
    },
  ],
};

const lineOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: { enabled: true },
  },
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: {
        color: "#6b7280",
        font: { size: 9 },
        padding: 10,
      },
    },
  },
};

// Component
const LineChart = () => {
  return (
    <div className="overflow-hidden">
      <Line data={lineData} options={lineOptions} />
    </div>
  );
};

export default LineChart;
