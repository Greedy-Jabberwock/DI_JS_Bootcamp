-- 1 
UPDATE employees
SET phone_number = REPLACE(phone_number, '123', '999');

-- 2
SELECT * FROM employees
WHERE LENGTH(first_name) >= 8;

-- 3
SELECT 
    first_name,
    last_name,
    CONCAT(
        UPPER(LEFT(first_name, 1)),
        UPPER(last_name),
        '@example.com'
    ) AS email
FROM 
    employees;
    
-- 4
SELECT 
    employee_id,
    SUBSTRING(email, 1, LENGTH(email) - 3)
FROM 
    employees;
    
-- 5
SELECT 
    (STRING_TO_ARRAY(job_title, ' '))[1]
FROM jobs;

-- 6
SELECT 
    first_name,
    LENGTH(first_name) AS f_name_length
FROM employees
WHERE first_name LIKE 'A%' 
    OR first_name LIKE 'J%' 
    OR first_name LIKE 'M%'
ORDER BY first_name;  

-- 7
SELECT 
    first_name,
    CONCAT(salary, '$') AS SALARY
FROM employees;