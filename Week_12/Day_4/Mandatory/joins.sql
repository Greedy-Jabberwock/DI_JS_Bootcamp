-- 1
SELECT 
    department_name,
    locations.location_id,
    locations.street_address,
    locations.state_province,
    countries.country_name
FROM departments
LEFT JOIN locations
    ON locations.location_id = departments.location_id
LEFT JOIN countries
    ON countries.country_id = locations.country_id;
    
-- 2
SELECT 
    first_name, 
    last_name,
    employees.department_id,
    departments.department_name
FROM 
    employees
INNER JOIN departments
    ON employees.department_id = departments.department_id;
    
-- 3
SELECT
    employee_id,
    CONCAT(first_name, ' ', last_name) AS fullname,
    jobs.job_title,
    departments.department_name
FROM 
    employees
INNER JOIN jobs
    ON employees.job_id = jobs.job_id
INNER JOIN departments
    ON employees.department_id = departments.department_id
INNER JOIN locations
    ON departments.location_id = locations.location_id
WHERE locations.city = 'London';

-- 4
SELECT 
    e1.employee_id,
    e1.last_name as employee,
    e2.manager_id,
    e2.last_name as manager
FROM 
    employees as e1
RIGHT JOIN employees as e2
    ON e1.manager_id = e2.employee_id
    AND e2.manager_id IS NOT NULL;
    
-- 5
SELECT 
    employee_id,
    first_name,
    last_name,
    email,
    hire_date,
    jobs.job_title,
    salary,
    departments.department_id,
    departments.department_name
FROM 
    employees
INNER JOIN 
    departments
    ON employees.department_id = departments.department_id
INNER JOIN 
    jobs
    ON employees.job_id = jobs.job_id;
    
-- 6
SELECT 
    department_id,
    employee_id,
    jobs.job_title,
    CURRENT_DATE - hire_date AS days_of_work
FROM
    employees
INNER JOIN 
    jobs
    ON employees.job_id = jobs.job_id
-- WHERE department_id = 90; -- Task told to retrieve department_id = 90, but it is only 11 departments;
WHERE department_id = 9;

-- 7
SELECT DISTINCT
    departments.department_name,
    CONCAT(managers.first_name, ' ', managers.last_name) AS manager,
    locations.city
FROM 
    employees
INNER JOIN
    departments
    ON employees.department_id = departments.department_id
INNER JOIN 
    employees AS managers
    ON employees.manager_id = managers.employee_id
INNER JOIN 
    locations 
    ON departments.location_id = locations.location_id;
    
-- 8
SELECT 
    first_name,
    last_name, 
    jobs.job_title,
    jobs.max_salary - jobs.min_salary AS average_salary
FROM 
    employees
INNER JOIN
    jobs
    ON employees.job_id = jobs.job_id;

-- 9
SELECT 
    departments.department_name,
    managers.first_name,
    managers.last_name,
    managers.hire_date,
    managers.salary,
    EXTRACT(year from CURRENT_DATE) - EXTRACT(year from managers.hire_date) AS work_years
FROM 
    employees
INNER JOIN
    employees AS managers
    ON employees.manager_id = managers.employee_id
INNER JOIN 
    departments
    ON employees.department_id = departments.department_id
WHERE 
    EXTRACT(year from CURRENT_DATE) - EXTRACT(year from managers.hire_date) > 15;