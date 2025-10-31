CREATE DATABASE IF NOT EXISTS food_delivery;
USE food_delivery;

CREATE TABLE restaurants (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50),
  total_orders INT
);

CREATE TABLE peak_hours (
  id INT AUTO_INCREMENT PRIMARY KEY,
  hour INT,
  order_count INT
);

CREATE TABLE repeat_customers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50),
  total_orders INT
);

-- Sample Data
INSERT INTO restaurants (name, total_orders)
VALUES
('Zesty Bites', 12),
('Green Bowl', 8),
('Sweet Cravings', 5);

INSERT INTO peak_hours (hour, order_count)
VALUES
(12, 7),
(20, 10),
(21, 5);

INSERT INTO repeat_customers (name, total_orders)
VALUES
('Priyanka', 3),
('Amit', 2);

