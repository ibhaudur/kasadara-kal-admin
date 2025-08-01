import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Published", "Scheduled", "Draft"],
  datasets: [
    {
      data: [8, 3, 1],
      backgroundColor: ["#2BBC7C", "#36D991", "#6DFFBE"], // These will be used for chart and legend
      borderWidth: 1,
      cutout: "80%",
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
  },
};

const DoughnutChart: React.FC = () => {
  const total = data.datasets[0].data.reduce((a, b) => a + b, 0);

  return (
    <div className="flex flex-col items-center md:flex-row md:items-start">
      {/* Chart */}
      <div className="relative w-32 h-32 md:w-48 md:h-48 lg:h-32 lg:w-32">
        <Doughnut data={data} options={options} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-sm font-semibold">
          <p className="text-xl">{total}</p>
          <p className="text-gray-600">Projects</p>
        </div>
      </div>

      {/* Dynamic Legend */}
      <div className="space-y-1 ml-6 px-4 w-full lg:mt-5 md:mt-12">
        {data.labels.map((label, index) => (
          <div
            key={label}
            className="flex justify-between items-center text-sm text-gray-700"
          >
            <div className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded"
                style={{
                  backgroundColor: data.datasets[0].backgroundColor[index],
                }}
              />
              <span>{label}</span>
            </div>
            <span className="text-lg">{data.datasets[0].data[index]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoughnutChart;
