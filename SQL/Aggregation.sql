-- PostgresSQL Aggregation functions means to group multiple records and return a single value.
-- 1. COUNT() function 
SELECT COUNT(*) FROM employee;
-- 2. SUM() function
SELECT SUM(age) FROM employee;
-- 3. AVG() function
SELECT AVG(age) FROM employee;
-- 4. MIN() function
SELECT MIN(age) FROM employee;
-- 5. MAX() function
SELECT MAX(age) FROM employee;
-- 6. GROUP BY clause
SELECT order_price, COUNT(*) FROM orders GROUP BY order_price;
-- 7. HAVING clause
SELECT order_price, COUNT(*) FROM orders GROUP BY order_price HAVING COUNT(*) > 1;
-- 8. DISTINCT clause
SELECT DISTINCT order_price FROM orders;
-- 9. ORDER BY clause
SELECT * FROM orders ORDER BY order_price DESC;
SELECT * FROM orders ORDER BY order_price ASC;
-- 10. LIMIT clause
SELECT * FROM orders LIMIT 1;
-- 11. OFFSET clause
-- 12. FETCH clause
-- 13. FOR UPDATE clause
-- 14. Window functions
-- 15. CUBE clause
-- 16. ROLLUP clause
-- 17. GROUPING SETS clause
-- 18. GROUPING() function