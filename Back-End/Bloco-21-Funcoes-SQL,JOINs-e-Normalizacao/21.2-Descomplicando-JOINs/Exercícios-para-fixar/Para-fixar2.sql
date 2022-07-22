USE hr;

SELECT * FROM employees;

SELECT
CONCAT(E.first_name, " ", E.last_name) AS "Nome da Pessoa Colaboradora",
CONCAT(M.first_name, " ", M.last_name) AS "Nome Gerente"
FROM
employees AS E
INNER JOIN
employees AS M ON E.manager_id = M.employee_id
WHERE
E.department_id <> M.department_id;

SELECT
CONCAT(M.first_name, " ", M.last_name) AS "Nome Gerente",
COUNT(E.employee_id) AS Quantidade_de_pessoas_lideradas
FROM
employees AS E
INNER JOIN
employees AS M ON E.manager_id = M.employee_id
GROUP BY M.employee_id;