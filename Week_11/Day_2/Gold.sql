SELECT 
    first_name, 
    last_name, 
    birth_date 
FROM 
    students
-- ORDER BY last_name ASC LIMIT 4 -- 1
-- ORDER BY birth_date DESC LIMIT 1 -- 2
LIMIT 3 OFFSET 2 -- 3