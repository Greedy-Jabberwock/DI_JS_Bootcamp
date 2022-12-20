-- CREATE TABLE students(
--     student_id SERIAL PRIMARY KEY,
--     first_name VARCHAR(50) NOT NULL,
--     last_name VARCHAR(50) NOT NULL,
--     birth_date DATE NOT NULL
-- );

-- INSERT INTO students (first_name, last_name, birth_date)
-- VALUES 
--     ('Marc', 'Benichou', '11-02-1998'),
--     ('Yoan', 'Cohen', '12-03-2010'),
--     ('Lea', 'Benichou', '07-27-1987'),
--     ('Amelia', 'Dux', '04-07-1996'),
--     ('David', 'Grez', '06-14-2003'),
--     ('Omer', 'Simpson', '10-03-1980'),
--     ('Vitalii', 'Kuznetsov', '10-26-1994');
    

-- SELECT * FROM students;

-- SELECT first_name, last_name FROM students

-- SELECT first_name, last_name FROM students
-- WHERE student_id = 2 -- 1
-- WHERE first_name LIKE 'Marc' AND last_name LIKE 'Benichou' -- 2
-- WHERE first_name LIKE 'Marc' OR last_name LIKE 'Benichou' -- 3
-- WHERE first_name LIKE '%a%' -- 4
-- WHERE first_name ILIKE 'a%' -- 5
-- WHERE first_name LIKE '%a' -- 6
-- WHERE first_name LIKE '%a_' -- 7
-- WHERE student_id = 1 OR student_id = 3 -- 8

SELECT * FROM students 
WHERE birth_date >= '01-01-2000'



