SELECT DATEDIFF('2030-01-20', NOW());

SELECT TIMEDIFF('10:25:45', '11:00:00');

USE sakila;
SELECT * FROM film;

SELECT
AVG(`length`) AS 'Média de Duração',
MIN(`length`) AS 'Duração Mínima',
MAX(`length`) AS 'Duração Máxima',
SUM(`length`) AS 'Tempo de Exibição Total',
COUNT(*) AS 'Filmes Registrados'
FROM film;

SELECT * FROM customer;
SELECT active, COUNT(customer_id) AS 'quantidade de clientes' FROM customer
GROUP BY active;

SELECT store_id, active, COUNT(customer_id) FROM customer
GROUP BY store_id, active;

SELECT * FROM film;
SELECT rating, AVG(rental_duration) AS Média FROM film
GROUP BY rating
ORDER BY Média DESC;

SELECT * FROM address;
SELECT district, COUNT(address_id) AS 'Quantidade de Endereços' FROM address
GROUP BY district
ORDER BY 'Quantidade de Endereços' DESC;

SELECT rating, AVG(length) AS durações_médias FROM film
GROUP BY rating
HAVING durações_médias BETWEEN 115.0 AND 121.50
ORDER BY durações_médias DESC;

SELECT rating, SUM(replacement_cost) AS custo_total_de_substituicao FROM film
GROUP by rating
HAVING custo_total_de_substituicao > 3950.50
ORDER BY custo_total_de_substituicao;