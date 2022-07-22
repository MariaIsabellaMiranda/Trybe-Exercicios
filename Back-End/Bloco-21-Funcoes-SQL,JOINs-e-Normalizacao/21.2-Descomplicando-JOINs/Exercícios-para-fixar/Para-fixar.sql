#1
SELECT 
    a.actor_id,
    CONCAT(a.first_name, ' ', a.last_name) AS nome_completo,
    f.film_id
FROM
    sakila.actor AS a
INNER JOIN
    sakila.film_actor AS f ON a.actor_id = f.actor_id;

#2
SELECT 
    CONCAT(s.first_name, ' ', s.last_name) AS nome_completo,
    a.address
FROM
    sakila.staff AS s
INNER JOIN
    sakila.address AS a ON s.address_id = a.address_id;

#3
SELECT
	customer_id,
    CONCAT(c.first_name, ' ', c.last_name) AS nome_completo,
    c.email,
    a.address_id,
    a.address
FROM
    sakila.customer AS c
INNER JOIN
    sakila.address AS a ON c.address_id = a.address_id
ORDER BY nome_completo DESC
LIMIT 100;

#4
SELECT
    CONCAT(c.first_name, ' ', c.last_name) AS nome_completo,
    c.email,
    a.address_id,
    a.address,
    a.district
FROM
    sakila.customer AS c
INNER JOIN
    sakila.address AS a ON c.address_id = a.address_id
WHERE
    a.district = 'California'
        AND c.first_name LIKE '%rene%';

#5
SELECT
    CONCAT(c.first_name, ' ', c.last_name) AS nome_completo,
    COUNT(a.address_id) AS quantidade_de_endereços
FROM
    sakila.customer AS c
INNER JOIN
    sakila.address AS a ON c.address_id = a.address_id
	WHERE c.`active` IS true
GROUP BY nome_completo
ORDER BY nome_completo DESC;

#6
SELECT
    CONCAT(s.first_name, ' ', s.last_name) AS nome_completo,
    FORMAT(AVG(p.amount), 2) AS média_pagamento
FROM
    sakila.staff AS s
INNER JOIN
    sakila.payment AS p ON s.staff_id = p.staff_id
WHERE YEAR(p.payment_date) = 2006
GROUP BY nome_completo;

#7
SELECT
	a.actor_id,
    CONCAT(a.first_name, ' ', a.last_name) AS nome_completo,
    f.film_id,
    f.title
FROM
    sakila.actor AS a
INNER JOIN
	sakila.film_actor AS fA ON fA.actor_id = a.actor_id
INNER JOIN
    sakila.film AS f ON fA.film_id = f.film_id;