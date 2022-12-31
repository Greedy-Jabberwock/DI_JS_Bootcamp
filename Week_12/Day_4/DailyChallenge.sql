-- -- 1, 2, 4
-- CREATE TABLE users (
--     user_id SERIAL PRIMARY KEY,
--     f_name VARCHAR(50) NOT NULL,
--     l_name VARCHAR(50) NOT NULL
-- );

-- CREATE TABLE orders (
--     order_id SERIAL PRIMARY KEY,
--     order_date TIMESTAMP NOT NULL,
--     fk_user_id INTEGER NOT NULL,
--     FOREIGN KEY (fk_user_id) REFERENCES users(user_id) ON DELETE CASCADE
-- );

-- CREATE TABLE items (
--     item_id SERIAL PRIMARY KEY,
--     name VARCHAR(100) NOT NULL,
--     amount INT NOT NULL,
--     fk_order_id INT NOT NULL,
--     FOREIGN KEY (fk_order_id) REFERENCES orders(order_id) ON DELETE CASCADE
-- );

-- -- 3
-- CREATE OR REPLACE FUNCTION total_amount(order_id INT)
--     RETURNS INT AS $total$
-- BEGIN
--     RETURN (SELECT SUM(amount) FROM items WHERE fk_order_id = order_id);
-- END;
-- $total$ LANGUAGE plpgsql;

-- INSERT INTO users(f_name, l_name)
-- VALUES ('John', 'Doe'), ('Jane', 'Doe');

-- INSERT INTO orders(order_date, fk_user_id)
-- VALUES (LOCALTIMESTAMP, 1), (LOCALTIMESTAMP, 2);

-- INSERT INTO items (name, amount, fk_order_id)
-- VALUES
--     ('Table', 100, 1),
--     ('Display', 300, 1),
--     ('Mouse', 50, 1),
--     ('Tablet', 1000, 2),
--     ('Headphones', 150, 2)
   


