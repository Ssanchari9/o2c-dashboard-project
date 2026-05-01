function KPI({ title, value }) {
  return (
    <div style={{ background: "#eee", padding: "20px", borderRadius: "10px" }}>
      <h3>{title}</h3>
      <h2>{value}</h2>
    </div>
  );
}

export default KPI;
