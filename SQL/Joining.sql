CREATE TABLE orders (
    order_id SERIAL NOT NULL,
    buyer_id INT NOT NULL,
    order_price INT NOT NULL,
    PRIMARY KEY (order_id)
);

INSERT INTO orders (buyer_id, order_price) VALUES (1, 100);
INSERT INTO orders (buyer_id, order_price) VALUES (2, 200);
SELECT * FROM orders order_price;

SELECT *
FROM orders
INNER JOIN buyer ON orders.buyer_id = buyer.buyer_id;
SELECT buyer.buyer_name, buyer.buyer_email, orders.order_price
FROM orders
INNER JOIN buyer ON orders.buyer_id = buyer.buyer_id;
-- Joining Multiple Tables needs to satisfy the following conditions:
-- 1. The first table must have a foreign key column that references to the primary key of the second table.
-- 2. The second table must have a foreign key column that references to the primary key of the third table.
-- 3. if any REFERENCES did not match it leave the row

--                      Left Join 
-- postgresql means that the first table is the main table and the second table is the secondary table. The left join will return all the rows from the first table and the matching rows from the second table. If there is no matching row from the second table, it returns NULL.
-- Example:
SELECT *
FROM orders
LEFT JOIN buyer ON orders.buyer_id = buyer.buyer_id;
--                      Right Join
-- postgresql means that the first table is the main table and the second table is the secondary table. The right join will return all the rows from the second table and the matching rows from the first table. If there is no matching row from the first table, it returns NULL.
-- Example:
SELECT *
FROM orders
RIGHT JOIN buyer ON orders.buyer_id = buyer.buyer_id;
--                      Full Join
-- postgresql means that the first table is the main table and the second table is the secondary table. The full join will return all the rows from the first table and the second table. If there is no matching row from the first table or the second table, it returns NULL.
-- Example:
SELECT *
FROM orders
FULL JOIN buyer ON orders.buyer_id = buyer.buyer_id;
--                      Self Join
-- postgresql means that the first table is the main table and the second table is the secondary table. The self join is a join of a table to itself. This table appears twice in the FROM clause and is followed by table aliases that qualify column names in the join condition.
-- Example:
SELECT *
FROM orders o1
INNER JOIN orders o2 ON o1.buyer_id = o2.buyer_id;
--                      Cross Join
-- postgresql means that the first table is the main table and the second table is the secondary table. The cross join is a join of a table to itself. This table appears twice in the FROM clause and is followed by table aliases that qualify column names in the join condition.
-- Example:
SELECT *
FROM orders o1
CROSS JOIN orders o2;
--                      Natural Join
-- postgresql means that the first table is the main table and the second table is the secondary table. The natural join is a join of a table to itself. This table appears twice in the FROM clause and is followed by table aliases that qualify column names in the join condition.
-- Example:
SELECT *
FROM orders o1
NATURAL JOIN orders o2;
--                      Join with USING clause
-- postgresql means that the first table is the main table and the second table is the secondary table. The join with USING clause is a join of a table to itself. This table appears twice in the FROM clause and is followed by table aliases that qualify column names in the join condition.
-- Example:
SELECT *
FROM orders o1
JOIN orders o2 USING (buyer_id);