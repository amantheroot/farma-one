DROP DATABASE IF EXISTS project_one;

CREATE DATABASE IF NOT EXISTS project_one;

USE project_one;

-- TABLES
CREATE TABLE products (
  product_name VARCHAR(30) NOT NULL,
  prodcut_price FLOAT UNSIGNED NOT NULL,
  supplier_id INT UNSIGNED NOT NULL,
  product_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
);

CREATE TABLE stocks (
  product_id INT UNSIGNED NOT NULL,
  product_qty INT UNSIGNED NOT NULL,
  stock_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
);

CREATE TABLE customers (
  customer_name VARCHAR(30) NOT NULL,
  customer_address VARCHAR(300) NOT NULL,
  customer_phone VARCHAR(10) NOT NULL,
  customer_email VARCHAR(30) NULL,
  customer_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
);

CREATE TABLE suppliers (
  supplier_name VARCHAR(30) NOT NULL,
  supplier_address VARCHAR(300) NOT NULL,
  supplier_phone VARCHAR(10) NOT NULL,
  supplier_email VARCHAR(30) NOT NULL,
  supplier_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
);

CREATE TABLE orders (
  customer_id INT UNSIGNED NOT NULL,
  product_id INT UNSIGNED NOT NULL,
  product_qty_sold INT UNSIGNED NOT NULL,
  product_price FLOAT UNSIGNED NOT NULL,
  order_time TIMESTAMP NOT NULL,
  order_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
);