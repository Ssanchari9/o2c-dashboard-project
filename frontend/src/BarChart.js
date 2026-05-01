import { Bar } from "react-chartjs-2";

function BarChart({ data }) {
  const chartData = {
    labels: data.map(d => d.Region),
    datasets: [
      {
        label: "Avg Delay",
        data: data.map(d => d.avgDelay),
      },
    ],
  };

  return <Bar data={chartData} />;
}

export default BarChart;
