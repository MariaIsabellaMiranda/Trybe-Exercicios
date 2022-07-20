USE sakila;

SELECT * FROM film;

UPDATE actor 
SET 
    first_name = 'JULIES'
WHERE
    first_name = 'JULIA';

UPDATE category
SET `name` = 'Science Fiction'
WHERE `name` = 'Sci-fi';

UPDATE film 
SET 
    rental_rate = 25.00
WHERE
    `length` > '100'
        AND rating IN ('G' , 'PG', 'PG-13')
        AND replacement_cost > 20;

UPDATE film 
SET 
    rental_rate = (CASE
        WHEN rental_duration BETWEEN 0 AND 100 THEN 10
        WHEN rental_duration > 100 THEN 20
    END);