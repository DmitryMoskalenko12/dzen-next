
CREATE DATABASE IF NOT EXISTS inventory;
USE inventory;

CREATE TABLE orders (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  date DATETIME NOT NULL,
  description TEXT
);

CREATE TABLE products (
  id INT PRIMARY KEY AUTO_INCREMENT,
  serial_number VARCHAR(64) NOT NULL,
  is_new BOOLEAN NOT NULL,
  photo VARCHAR(255),
  title VARCHAR(255) NOT NULL,
  type VARCHAR(100) NOT NULL,
  specification VARCHAR(255) NOT NULL,
  guarantee_start DATETIME NOT NULL,
  guarantee_end DATETIME NOT NULL,
  order_id INT NOT NULL,
  date DATETIME NOT NULL,
  FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE
);

CREATE TABLE product_prices (
  id INT PRIMARY KEY AUTO_INCREMENT,
  product_id INT NOT NULL,
  value DECIMAL(12,2) NOT NULL,
  symbol ENUM('USD','UAH') NOT NULL,
  is_default BOOLEAN NOT NULL,
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);
