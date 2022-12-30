-- 1 
-- UPDATE film 
-- SET language_id = 2
-- WHERE film_id BETWEEN 20 and 40;

-- 2
-- store_id and address_id are the foreign key for customer table
-- We need to use id-s to insert values.

-- 3
-- DROP TABLE customer_review;
-- I don't know, was that a plan or some error, but this command drop table customer_review and crashed PGadmin.

-- 4
-- SELECT * FROM rental
-- WHERE return_date IS NULL;

-- 5
-- SELECT
--     film.*
-- --     ,
-- --     rental.rental_date,
-- --     rental.return_date
--     FROM rental
-- INNER JOIN inventory
--     ON rental.inventory_id = inventory.inventory_id
-- INNER JOIN film
--     ON inventory.film_id = film.film_id
-- WHERE rental.return_date IS NULL
--     ORDER BY replacement_cost DESC
--     LIMIT 30;

-- 6.1
SELECT DISTINCT
    film.title
FROM film_actor
INNER JOIN actor 
    ON film_actor.actor_id = actor.actor_id
INNER JOIN film
    ON film_actor.film_id = film.film_id
WHERE (
          film.description ILIKE '%sumo%' 
          AND 
          actor.first_name = 'Penelope'
          AND 
          actor.last_name = 'Monroe'
      );
      
-- 6.2
SELECT DISTINCT
    film.title
FROM film_actor
INNER JOIN actor 
    ON film_actor.actor_id = actor.actor_id
INNER JOIN film
    ON film_actor.film_id = film.film_id
WHERE 
      (
          film.rating = 'R'
          AND
          film.length < 60
          AND 
          film.description ILIKE '%documentary%'
      );
      
-- 6.3 
SELECT
--     rental.rental_date,
--     rental.return_date,
    film.title
--     ,
--     customer.first_name || ' ' || customer.last_name AS customer_name,
--     payment.amount
FROM rental
INNER JOIN inventory
    ON rental.inventory_id = inventory.inventory_id
INNER JOIN film
    ON inventory.film_id = film.film_id
INNER JOIN customer
    ON rental.customer_id = customer.customer_id
INNER JOIN payment
    ON customer.customer_id = payment.customer_id
WHERE 
    customer.first_name = 'Matthew' 
    AND 
    customer.last_name = 'Mahan'
    AND 
    payment.amount > 4
    AND 
    rental.return_date 
        BETWEEN '07-28-2005' 
                AND 
                '08-01-2005';


-- 6.4
SELECT DISTINCT
--     film.title,
    film.replacement_cost
--     ,
--     customer.first_name || ' ' || customer.last_name 
--         AS customer_name
FROM rental
INNER JOIN inventory
    ON rental.inventory_id = inventory.inventory_id
INNER JOIN film
    ON inventory.film_id = film.film_id
INNER JOIN customer
    ON rental.customer_id = customer.customer_id
INNER JOIN payment
    ON customer.customer_id = payment.customer_id
WHERE 
    customer.first_name = 'Matthew' 
    AND 
    customer.last_name = 'Mahan'
    AND (
        film.title ILIKE '%boat%'
        OR
        film.description ILIKE '%boat%'
        )
ORDER BY film.replacement_cost DESC