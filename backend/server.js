const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors());

app.get("/kpi", (req, res) => {
  const query = `
    SELECT 
      SUM(Invoice_Amount) AS totalRevenue,
      AVG(DATEDIFF(Payment_Date, Due_Date)) AS avgDelay,
      (COUNT(CASE WHEN DATEDIFF(Payment_Date, Due_Date) > 0 THEN 1 END) * 100.0 / COUNT(*)) AS latePercent
    FROM invoices;
  `;

  db.query(query, (err, result) => {
    if (err) throw err;
    res.json(result[0]);
  });
});

app.get("/region-delay", (req, res) => {
  const query = `
    SELECT Region, AVG(DATEDIFF(Payment_Date, Due_Date)) AS avgDelay
    FROM invoices
    GROUP BY Region;
  `;

  db.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.get("/payment-status", (req, res) => {
  const query = `
    SELECT Payment_Status, COUNT(*) AS count
    FROM invoice_analysis
    GROUP BY Payment_Status;
  `;

  db.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
