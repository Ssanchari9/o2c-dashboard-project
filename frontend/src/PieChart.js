import { Pie } from "react-chartjs-2";

function PieChart({ data }) {
  const chartData = {
    labels: data.map(d => d.Payment_Status),
    datasets: [
      {
        data: data.map(d => d.count),
      },
    ],
  };

  return <Pie data={chartData} />;
}

export default PieChart;
