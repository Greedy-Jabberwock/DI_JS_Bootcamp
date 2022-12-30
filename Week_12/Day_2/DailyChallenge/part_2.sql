-- -- 1
-- DROP TABLE IF EXISTS book;

-- CREATE TABLE book (
--     book_id SERIAL PRIMARY KEY,
--     title VARCHAR(150) NOT NULL,
--     author VARCHAR(150) NOT NULL
-- );

-- -- 2
-- INSERT INTO book (title, author)
-- VALUES 
--     ('Alice In Wonderland', 'Lewis Carroll'),
--     ('Harry Potter', 'J.K. Rowling'),
--     ('To kill a mockingbird', 'Harper Lee');

-- -- 3
-- DROP TABLE IF EXISTS student;

-- CREATE TABLE student (
--     student_id SERIAL PRIMARY KEY,
--     name VARCHAR(50) NOT NULL UNIQUE,
--     age SMALLINT
-- );

-- -- 4
-- INSERT INTO student (name, age)
-- VALUES 
--     ('John', 12), ('Lera', 11),
--     ('Patrick', 10), ('Bob', 14);

-- -- 5
-- DROP TABLE IF EXISTS library;

-- CREATE TABLE library (
--     book_fk_id INTEGER,
--     student_id INTEGER,
--     borrowed_date TIMESTAMP,
--     PRIMARY KEY (book_fk_id, student_id),
--     FOREIGN KEY (book_fk_id) REFERENCES book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
--     FOREIGN KEY (student_id) REFERENCES student(student_id) ON DELETE CASCADE ON UPDATE CASCADE
-- );

-- 6
-- INSERT INTO library (student_id, book_fk_id, borrowed_date)
-- VALUES
--     ((SELECT student_id FROM student WHERE name = 'John'),
--      (SELECT book_id FROM book WHERE title = 'Alice In Wonderland'),
--      '02-15-2022'
--     ),
--     ((SELECT student_id FROM student WHERE name = 'Bob'),
--      (SELECT book_id FROM book WHERE title = 'To kill a mockingbird'),
--      '03-03-2021'
--     ),
--     ((SELECT student_id FROM student WHERE name = 'Lera'),
--      (SELECT book_id FROM book WHERE title = 'Alice In Wonderland'),
--      '05-23-2021'
--     ),
--     ((SELECT student_id FROM student WHERE name = 'Bob'),
--      (SELECT book_id FROM book WHERE title = 'Harry Potter'),
--      '08-12-2021'
--     );

-- 7.1 
SELECT * FROM library;

-- 7.2
SELECT book.title, student.name FROM library
INNER JOIN book
    ON book.book_id = library.book_fk_id
INNER JOIN student
    ON student.student_id = library.student_id;
    
-- 7.3 
SELECT AVG(student.age) FROM library
INNER JOIN student
    ON student.student_id = library.student_id
INNER JOIN book
    ON book.book_id = library.book_fk_id
WHERE book.title = 'Alice In Wonderland';

-- 7.4 
DELETE FROM student WHERE student_id = 4;