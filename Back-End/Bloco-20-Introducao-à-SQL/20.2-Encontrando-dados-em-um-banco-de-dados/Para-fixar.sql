SELECT 'Maria Isabella';
SELECT 'Maria Isabella', 'Miranda', 29, 'Ribeirão Preto';
SELECT 'Maria Isabella' AS nome, 'Miranda' AS sobrenome, 29 AS idade, 'Ribeirão Preto' AS cidade;
SELECT 13 * 8;
SELECT now() AS data_atual;

SELECT * FROM sakila.city;
SELECT first_name, last_name FROM sakila.customer;
SELECT * FROM sakila.rental;
SELECT * FROM sakila.film;
SELECT title, description, release_year FROM sakila.film;

SELECT * FROM sakila.film;
SELECT CONCAT(title, ' ', release_year) AS lançamento_do_filme FROM sakila.film;
SELECT CONCAT(title, ' ', rating) AS classificação FROM sakila.film;
SELECT * FROM sakila.address;
SELECT CONCAT(address, ' ', district) AS 'endereço' FROM sakila.address;

SELECT * FROM sakila.staff;
SELECT COUNT(password) FROM sakila.staff;
SELECT COUNT(*) FROM sakila.staff;
SELECT COUNT(email) FROM sakila.staff;

SELECT COUNT(*) FROM sakila.rental;
SELECT * FROM sakila.rental LIMIT 10;
SELECT * FROM sakila.rental LIMIT 10 OFFSET 3;
SELECT * FROM sakila.actor LIMIT 10 OFFSET 4;

#Aqui só para deixar registrado que existe essa opção, irei usar o USE para selecionar a tabela que quero trabalhar
USE sakila;
SELECT * FROM film;
SELECT title, release_year, rating FROM film;
SELECT COUNT(*) FROM film;
SELECT title, release_year, length, rating, replacement_cost FROM film
ORDER BY length DESC, replacement_cost ASC
LIMIT 20;


SELECT * FROM actor;
SELECT DISTINCT last_name FROM actor;
SELECT first_name, last_name FROM actor
ORDER BY last_name DESC, first_name;

SELECT * FROM language;
SELECT name FROM language LIMIT 5 OFFSET 1;
