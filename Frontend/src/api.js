// src/api.js

const API_URL = "http://localhost:5000/api"; // Replace with your backend URL

export const fetchAnalyticsData = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Failed to fetch analytics data");
  return res.json();
};
