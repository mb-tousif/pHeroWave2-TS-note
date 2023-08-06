CREATE TABLE buyer (
    buyer_id INT,
    buyer_name VARCHAR(255),
    buyer_email VARCHAR(255)
);

INSERT INTO buyer (buyer_id, buyer_name, buyer_email)
VALUES (1, 'John', 'john@gmail.com'),
(2, 'Mary', 'mary@gmail.com');

-- add COLUMN
ALTER TABLE buyer ADD COLUMN age VARCHAR(255) DEFAULT '20' not NULL;

create TABLE employee (
    employee_id SERIAL PRIMARY KEY,
    employee_name VARCHAR(50) NOT NULL,
    employee_email VARCHAR(255) NOT NULL
);

-- add COLUMN
ALTER TABLE employee ADD COLUMN age INT DEFAULT 20 not NULL;
-- DROP TABLE IF EXISTS employee;
-- inset into employee
INSERT INTO employee (employee_name, employee_email)
VALUES ('John', 'phero@gmail.com'),
('Mary', 'test@phero.com');
-- change column CONSTRAINTS employee_age int to CHAR(255)
ALTER TABLE employee ALTER COLUMN age TYPE CHAR(255);
-- change column CONSTRAINTS employee_age CHAR(255) to int
-- ALTER TABLE employee ALTER COLUMN age TYPE INT;