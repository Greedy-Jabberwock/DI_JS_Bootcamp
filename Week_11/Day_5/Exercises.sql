---------- Basic Select Statement ---------

-- 1
-- SELECT first_name, last_name FROM employees;

-- 2
-- SELECT DISTINCT department_id FROM employees;

-- 3
-- SELECT * FROM employees ORDER BY first_name;

-- 4
-- SELECT 
--     first_name, 
--     last_name, 
--     salary, salary * 1.15 AS PF
-- FROM employees 

-- 5
-- SELECT 
--     employee_id,
--     first_name,
--     last_name,
--     salary
-- FROM employees
-- ORDER BY salary ASC;

-- 6 
-- SELECT SUM(salary) AS salary_sum FROM employees;

-- 7
-- SELECT 
--     MAX(salary) AS max_salary,
--     MIN(salary) AS min_salary
-- FROM employees;

-- 8
-- SELECT AVG(salary) as average_salary FROM employees;

-- 9
-- SELECT COUNT(employee_id) AS total_employees 
-- FROM employees;

-- 10
-- SELECT UPPER(first_name) AS upper_name 
-- FROM employees;

-- 11
-- SELECT SUBSTRING(first_name, 1, 3) FROM employees;

-- 12
-- SELECT 
--     first_name || ' ' || last_name AS full_name
-- FROM employees;

-- 13
-- SELECT 
--     first_name || ' ' || last_name 
--         AS full_name,
--     LENGTH(first_name) + LENGTH(last_name) 
--         AS fullname_len
-- FROM employees;

-- 14
-- SELECT first_name 
-- FROM employees
-- WHERE first_name LIKE '%[0-9]%';

-- 15
-- SELECT * FROM employees LIMIT 10;


---------- Restricting And Sorting ---------

-- 1
-- SELECT first_name, last_name, salary
-- FROM employees
-- WHERE salary BETWEEN 10000 AND 15000;

-- 2
-- SELECT first_name, last_name, hire_date
-- FROM employees
-- WHERE EXTRACT(YEAR FROM hire_date) = 1987;

-- 3
-- SELECT * FROM employees
-- WHERE first_name ILIKE '%c%' 
--     AND first_name ILIKE '%e%';

-- 4
-- SELECT last_name, jobs.job_title, salary 
-- FROM employees
-- INNER JOIN jobs
-- ON jobs.job_id = employees.job_id
-- WHERE 
--     job_title NOT IN ('Programmer', 'Shipping Clerk')
--     AND 
--     salary NOT IN (4500, 10000, 15000);

-- 5
-- SELECT last_name FROM employees
-- WHERE LENGTH(last_name) = 6;

-- 6
-- SELECT last_name FROM employees
-- WHERE last_name LIKE '__e%';

-- 7
-- SELECT * FROM employees
-- INNER JOIN jobs
-- ON jobs.job_id = employees.job_id;

-- 8
SELECT * FROM employees 
WHERE UPPER(last_name) IN 
    ('JONES', 'KING', 'BLAKE', 'SCOTT', 'FORD');
