-- 1
-- CREATE TABLE customer (
--     customer_id SERIAL PRIMARY KEY,
--     first_name VARCHAR(50) NOT NULL,
--     last_name VARCHAR(50) NOT NULL
-- );

-- CREATE TABLE profile (
--     profile_id SERIAL PRIMARY KEY,
--     isLoggedIn BOOLEAN DEFAULT false,
--     CONSTRAINT fk_customer_id FOREIGN KEY (profile_id) REFERENCES customer (customer_id)
-- );

-- 2
-- INSERT INTO customer (first_name, last_name)
-- VALUES 
--     ('John', 'Doe'), ('Jerome', 'Lalu'), ('Lea', 'Rive');
    
-- 3
-- INSERT INTO profile (profile_id, isLoggedIn)
-- VALUES 
--     ((SELECT customer_id FROM customer WHERE first_name = 'John'), true),
--     ((SELECT customer_id FROM customer WHERE first_name = 'Jerome'), false);
    
-- 4
SELECT customer.first_name FROM profile
INNER JOIN customer
    ON customer.customer_id = profile.profile_id
WHERE profile.isLoggedIn;

SELECT customer.first_name, isLoggedIn FROM profile
FULL JOIN customer
    ON customer.customer_id = profile.profile_id;
    
SELECT COUNT(*) FROM profile
WHERE NOT isLoggedIn; 