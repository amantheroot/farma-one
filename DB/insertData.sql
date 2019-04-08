USE project_one;

INSERT INTO categories(category_name) VALUES ('CATEGORYNAME');
SET @catkey = LAST_INSERT_ID();

INSERT INTO customers(customer_name, customer_address, customer_phone, customer_email) VALUES ('NAME','ADDRESS','PHONE',NULL);
SET @custkey = LAST_INSERT_ID();

INSERT INTO suppliers(supplier_name, supplier_address, supplier_phone, supplier_email) VALUES ('NAME','ADDRESS','PHONE','EMAIL');
SET @suppkey = LAST_INSERT_ID();

INSERT INTO products(product_name, product_price, supplier_id, category_id) VALUES ('PNAME', 45.0, @suppkey, @catkey);
SET @prodkey = LAST_INSERT_ID();

INSERT INTO stocks(product_id, product_qty) VALUES (@prodkey, 34);

INSERT INTO orders(customer_id, product_id, product_qty_sold, product_price_sold, order_time) VALUES (
  @custkey, @prodkey, 4, 180.0, '2019-04-01-03-45-12'
);
