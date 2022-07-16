USE sakila;
SELECT * FROM customer;

SELECT * FROM customer
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';

SELECT CONCAT(first_name, ' ', last_name) AS Nome_Completo FROM customer
WHERE active IS False AND store_id = 2
AND first_name <> 'KENNETH'
ORDER BY first_name;

SELECT * FROM film;
SELECT title, description, release_year, replacement_cost FROM film
WHERE rating <> 'NC-17' AND replacement_cost >= 18.00
ORDER BY replacement_cost DESC, title ASC
LIMIT 100;

SELECT * FROM customer;
SELECT COUNT(first_name) AS clientes_ativos FROM customer
WHERE active IS True AND store_id = 1;

SELECT * FROM customer
WHERE active IS False AND store_id = 1;

SELECT * FROM film;
SELECT * FROM film
WHERE rating = 'NC-17'
ORDER BY rental_rate, title
LIMIT 50;
