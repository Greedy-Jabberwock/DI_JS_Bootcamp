-- 1 
SELECT first_name, last_name, salary FROM employees
WHERE salary > (SELECT salary FROM employees WHERE last_name LIKE 'Bell');

-- 2
SELECT first_name, last_name FROM employees
WHERE 
    manager_id IN (
        SELECT employee_id FROM employees 
        WHERE 
            job_id IN (SELECT job_id FROM jobs WHERE job_title ILIKE '%manager%')
        AND 
    department_id IN (
        SELECT department_id FROM departments 
        WHERE
            location_id IN (
            SELECT location_id FROM locations 
            WHERE country_id IN
                (SELECT country_id FROM countries 
                 WHERE country_name = 'United States of America'))
    )
    );
    
-- 3
SELECT first_name, last_name FROM employees
WHERE job_id IN 
    (SELECT job_id FROM jobs WHERE job_title ILIKE '%manager%');
    
-- 4
SELECT first_name, last_name FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);

-- 5
SELECT first_name, last_name FROM employees
WHERE salary = (SELECT min_salary FROM jobs WHERE jobs.job_id = employees.job_id);

-- 6
SELECT first_name, last_name FROM employees
WHERE job_id NOT IN (
    SELECT job_id FROM jobs
    WHERE job_title ILIKE '%manager%' 
            OR 
          job_title ILIKE '%president%'
    );
        
-- 7 
SELECT employee_id, first_name, last_name FROM employees
WHERE salary > (SELECT AVG(max_salary - min_salary) FROM jobs
                WHERE jobs.job_id = employees.job_id);
                
-- 8
SELECT salary FROM employees
ORDER BY salary DESC
LIMIT 1 OFFSET 4;

-- 9
SELECT salary FROM employees
ORDER BY salary ASC
LIMIT 1 OFFSET 3;

-- 10
SELECT department_id, department_name FROM departments
WHERE department_id NOT IN (SELECT DISTINCT department_id FROM employees);