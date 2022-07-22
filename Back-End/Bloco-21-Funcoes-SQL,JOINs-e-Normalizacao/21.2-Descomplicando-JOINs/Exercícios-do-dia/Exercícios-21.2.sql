USE pixar;

SELECT * FROM movies;
SELECT * FROM box_office;
SELECT * FROM theater;

#1
SELECT 
    m.title, b.domestic_sales, b.international_sales
FROM
    movies AS m
        INNER JOIN
    box_office AS b ON m.id = b.movie_id;
    
#2
SELECT 
    m.title,
    (b.domestic_sales + b.international_sales) AS 'Número total de vendas'
FROM
    movies AS m
        INNER JOIN
    box_office AS b ON m.id = b.movie_id
WHERE b.international_sales > b.domestic_sales;

#3
SELECT 
    m.title,
    b.rating
FROM
    movies AS m
        INNER JOIN
    box_office AS b ON m.id = b.movie_id
ORDER BY b.rating DESC;

#4
SELECT 
	t.`name`,
    t.location,
    m.title,
    m.director,
    m.`year`,
    m.length_minutes
FROM
    theater AS t
        LEFT JOIN
    movies AS m ON t.id = m.theater_id
ORDER BY t.name;

#5
SELECT 
	t.`name`,
    t.location,
    m.title,
    m.director,
    m.`year`,
    m.length_minutes
FROM
    theater AS t
        RIGHT JOIN
    movies AS m ON t.id = m.theater_id
ORDER BY t.name;

#6
SELECT 
	m.id,
    m.title,
    m.director,
    m.`year`,
    m.length_minutes,
    m.theater_id
FROM
    movies AS m
INNER JOIN
    box_office AS b ON m.id = b.movie_id
WHERE m.theater_id IS NOT NULL AND b.rating > 8;