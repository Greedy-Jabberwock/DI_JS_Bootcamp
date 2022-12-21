-- 1
-- SELECT * FROM customer;

-- 2
-- SELECT 
--     first_name || ' ' || last_name AS full_name
-- FROM customer;

-- 3 
-- SELECT DISTINCT create_date FROM customer;

-- 4
-- SELECT * FROM customer
-- ORDER BY first_name DESC;

-- 5
-- SELECT 
--     film_id, 
--     title,
--     description,
--     release_year,
--     rental_rate
-- FROM film
-- ORDER BY rental_rate ASC;

-- 6
-- SELECT address, phone
-- FROM address
-- WHERE district='Texas';

-- 7
-- SELECT * FROM film 
-- WHERE film_id BETWEEN 15 AND 150;

-- 8
-- SELECT * FROM film
-- WHERE title='The Shining'

-- 9
-- SELECT * FROM film
-- WHERE title ILIKE '%shining'

-- 10
-- SELECT * FROM film
-- ORDER BY replacement_cost ASC
-- LIMIT 10;

-- 11
-- SELECT * FROM film
-- ORDER BY replacement_cost ASC
-- LIMIT 10 OFFSET 10;

-- 12
-- SELECT 
--     customer.first_name || ' ' || customer.last_name
--         AS full_name,
--     amount,
--     payment_date
-- FROM 
--     payment
-- INNER JOIN customer
-- ON payment.customer_id = customer.customer_id;
    
-- 13
-- SELECT * FROM film
-- WHERE film_id NOT IN (
--     SELECT film_id FROM inventory
--     );

-- 14
-- SELECT city, country.country
-- FROM city
-- INNER JOIN country
-- ON city.country_id = country.country_id;

-- 15
SELECT 
    staff.staff_id ,
    staff.first_name || ' ' || staff.last_name 
        AS staff_name,
    customer.customer_id,
    customer.first_name || ' ' || customer.last_name
        AS customer_name,
    amount, 
    payment_date
FROM 
    payment
INNER JOIN customer
ON customer.customer_id = payment.customer_id
INNER JOIN staff
ON staff.staff_id = payment.staff_id
ORDER BY staff_id ASC;
