// Backend/routes/analytics.js
import express from "express";
import { db } from "../db.js";

const router = express.Router();

// ✅ Get analytics data from MySQL
router.get("/", async (req, res) => {
  try {
    const [restaurants] = await db.execute(
      "SELECT name, total_orders FROM restaurants ORDER BY total_orders DESC LIMIT 5"
    );

    const [peakHours] = await db.execute(
      "SELECT hour, order_count FROM peak_hours ORDER BY order_count DESC"
    );

    const [repeatCustomers] = await db.execute(
      "SELECT name, total_orders FROM repeat_customers ORDER BY total_orders DESC"
    );

    res.json({ restaurants, peakHours, repeatCustomers });
  } catch (err) {
    console.error("❌ Error fetching analytics data:", err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
