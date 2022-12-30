-- 1
-- SELECT DISTINCT language.name FROM film
-- INNER JOIN language
-- ON language.language_id = film.language_id;

-- 2.1
-- SELECT 
--     title,
--     description, 
--     language.name AS language
-- FROM film
-- LEFT JOIN language
-- ON language.language_id = film.language_id;

-- 2.2
-- SELECT 
--     title,
--     description, 
--     language.name AS language
-- FROM film
-- RIGHT JOIN language
-- ON language.language_id = film.language_id;

-- 3
-- CREATE TABLE new_film (
--     film_id SERIAL PRIMARY KEY,
--     title VARCHAR(50) NOT NULL
--     );

-- INSERT INTO new_film(title) 
-- VALUES 
--     ('The Shining'),
--     ('Salems Lot'),
--     ('Dune');

-- 4
-- CREATE TABLE customer_review (
--     review_id SERIAL PRIMARY KEY,
--     film_id INTEGER,
--     language_id INTEGER,
--     title VARCHAR(50) NOT NULL,
--     score SMALLINT NOT NULL 
--         CHECK (score >= 1 AND score <= 10),
--     review_text TEXT NOT NUll,
--     last_update TIMESTAMP NOT NULL, 
--     FOREIGN KEY (film_id) REFERENCES new_film (film_id),
--     FOREIGN KEY (language_id) REFERENCES language (language_id)
-- );


-- 5
-- INSERT INTO customer_review(
--     film_id,
--     language_id,
--     title,
--     score,
--     review_text,
--     last_update
-- )
-- VALUES
--     (
--         1, 3, 'Wonderful', 10, 'SOME REVIEW TEXT', '10-11-2022'
--     ),
--     (
--         2, 4, 'Crap', 1, 'SOME ANOTHER TEXT', '11-09-2022'
--     );

-- 6
-- ALTER TABLE customer_review
-- ADD CONSTRAINT film_id
-- FOREIGN KEY (film_id) 
-- REFERENCES new_film (film_id)
-- ON DELETE CASCADE;

-- DELETE FROM new_film WHERE film_id = 1;

-- SELECT * FROM customer_review;