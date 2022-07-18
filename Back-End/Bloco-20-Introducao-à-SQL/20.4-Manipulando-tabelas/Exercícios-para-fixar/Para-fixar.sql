USE sakila;

INSERT INTO staff (first_name, last_name, address_id, email, store_id, active, username, password) VALUES
('Isabella', 'Miranda', 2, 'isabella@teste.com', 1, 1, 'Maisinha', '123456');

INSERT INTO staff (first_name, last_name, address_id, email, store_id, active, username, password) VALUES
    ('Isabella', 'Miranda', 2, 'isabella@teste.com', 1, 1, 'Maisinha', '123456'),
    ('Lucas', 'Silva', 1, NULL, 2, 1, 'luquinhas', NULL);
    
INSERT INTO actor (first_name, last_name)
SELECT first_name, last_name
FROM customer
ORDER BY customer_id
LIMIT 5;

INSERT INTO category (name) VALUES
('Sofia'),
('Luna'),
('Lucas');

INSERT INTO store (manager_staff_id, address_id)
VALUES (3, 3);
