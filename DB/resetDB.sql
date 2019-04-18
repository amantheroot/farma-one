DROP DATABASE IF EXISTS project_one;

CREATE DATABASE IF NOT EXISTS project_one;

USE project_one;

-- TABLES
-- CREATE TABLE categories (
--   category_name VARCHAR(30) NOT NULL,
--   category_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
--   PRIMARY KEY (category_id)
-- ) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE customers (
  customer_name VARCHAR(30) NOT NULL,
  customer_address VARCHAR(300) NOT NULL,
  customer_phone VARCHAR(10) NULL,
  customer_email VARCHAR(30) NULL,
  customer_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (customer_id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE suppliers (
  supplier_name VARCHAR(30) NOT NULL,
  supplier_address VARCHAR(300) NOT NULL,
  supplier_phone VARCHAR(10) NULL,
  supplier_email VARCHAR(30) NULL,
  supplier_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (supplier_id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE products (
  product_name VARCHAR(30) NOT NULL,
  product_price FLOAT UNSIGNED NOT NULL,
  -- supplier_id INT UNSIGNED NOT NULL,
  -- category_id INT UNSIGNED NOT NULL,
  product_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (product_id)
  -- FOREIGN KEY (category_id) REFERENCES categories(category_id),
  -- FOREIGN KEY (supplier_id) REFERENCES suppliers(supplier_id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE stocks (
  product_id INT UNSIGNED NOT NULL,
  product_qty INT UNSIGNED NOT NULL,
  stock_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (stock_id),
  FOREIGN KEY (product_id) REFERENCES products(product_id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE orders (
  customer_id INT UNSIGNED NOT NULL,
  product_id INT UNSIGNED NOT NULL,
  product_qty_sold INT UNSIGNED NOT NULL,
  order_time TIMESTAMP NOT NULL,
  order_id INT UNSIGNED NOT NULL,
  PRIMARY KEY (order_id),
  FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
  FOREIGN KEY (product_id) REFERENCES products(product_id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;