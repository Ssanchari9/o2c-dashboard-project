import React, { useEffect, useState } from "react";
import KPI from "./components/KPI";
import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";

function App() {
  const [kpi, setKpi] = useState({});
  const [regionData, setRegionData] = useState([]);
  const [statusData, setStatusData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/kpi")
      .then(res => res.json())
      .then(data => setKpi(data));

    fetch("http://localhost:5000/region-delay")
      .then(res => res.json())
      .then(data => setRegionData(data));

    fetch("http://localhost:5000/payment-status")
      .then(res => res.json())
      .then(data => setStatusData(data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>O2C Dashboard</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        <KPI title="Total Revenue" value={kpi.totalRevenue} />
        <KPI title="Avg Delay" value={kpi.avgDelay} />
        <KPI title="Late %" value={kpi.latePercent} />
      </div>

      <BarChart data={regionData} />
      <PieChart data={statusData} />
    </div>
  );
}

export default App;
