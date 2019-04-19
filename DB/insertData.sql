USE farma_one;

-- INSERT INTO categories(category_name) VALUES ('CATEGORYNAME');
-- SET @catkey = LAST_INSERT_ID();

-- INSERT INTO customers(customer_name, customer_address, customer_phone, customer_email) VALUES ('NAME','ADDRESS','PHONE',NULL);
-- SET @custkey = LAST_INSERT_ID();

-- INSERT INTO suppliers(supplier_name, supplier_address, supplier_phone, supplier_email) VALUES ('NAME','ADDRESS',NULL,NULL);
-- SET @suppkey = LAST_INSERT_ID();

-- INSERT INTO products(product_name, product_price) VALUES ('PNAME', 45.0);
-- SET @prodkey = LAST_INSERT_ID();

-- INSERT INTO stocks(product_id, product_qty) VALUES (@prodkey, 34);

-- INSERT INTO orders(customer_id, product_id, product_qty_sold, product_price_sold, order_time) VALUES (
--   @custkey, @prodkey, 4, 180.0, '2019-04-01-03-45-12'
-- );

INSERT INTO suppliers (supplier_name, supplier_address, supplier_phone, supplier_email) VALUES ('Urmilla Reddy Kuppireddy','Chennaram village, Achampel, Nagarkurnool dist.',NULL,NULL), ('Lavanya','Mahaboobnagar',NULL,NULL), ('Pavan Kumar','Kalvakoorthy',NULL,NULL), ('Laxmi','Pocharam',NULL,NULL), ('Kishore Kumar','Kalvakoorthy',NULL,NULL);

INSERT INTO products (product_name, product_price) VALUES ('Ground Nut Oil', 45.0), ('Mangoes', 45.0), ('Rice', 45.0), ('Chilli', 45.0), ('Red Gram', 45.0), ('Green Gram', 45.0), ('Ground Nuts', 45.0), ('Mustard', 45.0), ('Dhanya', 45.0), ('Turmeric', 45.0);
