// src/App.js
import React from "react";
import Dashboard from "./components/Dashboard";
import "./styles.css";

export default function App() {
  return (
    <div>
      <header className="header">
        <h1>🍔 Food Delivery Data Analysis</h1>
      </header>
      <Dashboard />
    </div>
  );
}
