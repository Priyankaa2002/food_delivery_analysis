// src/components/Dashboard.js
import React, { useEffect, useState } from "react";
import { fetchAnalyticsData } from "../api";
import "../styles.css";

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchAnalyticsData()
      .then(setData)
      .catch(() => setError("Unable to load analytics data"));
  }, []);

  if (error) return <p>{error}</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <div className="dashboard">
      <h2>🍽️ Food Delivery Analytics Dashboard</h2>

      <div className="card">
        <h3>🏆 Top Restaurants</h3>
        <ul>
          {data.restaurants.map((r, i) => (
            <li key={i}>
              {r.name} — {r.total_orders} orders
            </li>
          ))}
        </ul>
      </div>

      <div className="card">
        <h3>⏰ Peak Order Hours</h3>
        <ul>
          {data.peakHours.map((h, i) => (
            <li key={i}>
              {h.hour}:00 — {h.order_count} orders
            </li>
          ))}
        </ul>
      </div>

      <div className="card">
        <h3>👥 Repeat Customers</h3>
        <ul>
          {data.repeatCustomers.map((c, i) => (
            <li key={i}>
              {c.name} — {c.total_orders} repeat orders
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
