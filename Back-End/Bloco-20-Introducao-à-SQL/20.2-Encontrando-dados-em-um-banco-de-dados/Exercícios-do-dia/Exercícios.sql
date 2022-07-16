#1- Escreva uma query para exibir a string "This is SQL Exercise, Practice and Solution".
SELECT 'This is SQL Exercise, Practice and Soluction' AS Frase_inicial;

#2- Escreva uma query para exibir três números em três colunas.
SELECT 1, 2, 3;
SELECT 1 AS coluna_um, 2 AS coluna_dois, 3 AS coluna_três

#3- Escreva uma query para exibir a soma dos números 10 e 15.
SELECT 10 + 15;

#4- Escreva uma query para exibir o resultado de uma expressão aritmética qualquer.
SELECT 2 + (3 + 7) - 8;

#5- Escreva uma query para exibir todas as informações de todos os cientistas.
SELECT 
    *
FROM
    Scientists.Scientists;

#6- Escreva uma query para exibir o nome como "nome_do_projeto" e as horas como "tempo_de_trabalho" de cada projeto.
SELECT 
    *
FROM
    Scientists.Projects;
SELECT 
    name AS nome_do_projeto, hours AS tempo_de_trabalho
FROM
    Scientists.Projects;

#7- Escreva uma query para exibir o nome dos cientistas em ordem alfabética.
SELECT 
    *
FROM
    Scientists.Scientists;
SELECT 
    *
FROM
    Scientists.Scientists
ORDER BY name;


#8- Escreva uma query para exibir o nome dos projetos em ordem alfabética descendente.
SELECT 
    *
FROM
    Scientists.Projects
ORDER BY name DESC;


#9- Escreva uma query que exiba a string "O projeto name precisou de hours horas para ser concluído." para cada projeto.
SELECT 
    CONCAT('O projeto ',
            name,
            ' precisou de ',
            hours,
            ' horas para ser concluído')
FROM
    Scientists.Projects

#10- Escreva uma query para exibir o nome e as horas dos três projetos com a maior quantidade de horas.
SELECT 
    *
FROM
    Scientists.Projects;
SELECT 
    name, hours
FROM
    Scientists.Projects
ORDER BY hours DESC
LIMIT 3;

#11- Escreva uma query para exibir o código de todos os projetos da tabela AssignedTo sem que haja repetições.
SELECT 
    *
FROM
    Scientists.AssignedTo;
SELECT DISTINCT
    project
FROM
    Scientists.AssignedTo;

#12- Escreva uma query para exibir o nome do projeto com maior quantidade de horas.
SELECT 
    name
FROM
    Scientists.Projects
ORDER BY hours DESC
LIMIT 1;

#13- Escreva uma query para exibir o nome do segundo projeto com menor quantidade de horas.
SELECT 
    name
FROM
    Scientists.Projects
ORDER BY hours
LIMIT 1 OFFSET 1; 

#14- Escreva uma query para exibir todas as informações dos cinco projetos com a menor quantidade de horas.
SELECT 
    *
FROM
    Scientists.Projects
ORDER BY hours
LIMIT 5;

#15- Escreva uma query que exiba a string "Existem Number cientistas na tabela Scientists.", em que Number se refira a quantidade de cientistas.
SELECT 
    CONCAT('Existem ',
            COUNT(*),
            ' cientistas na tabela Scientists') AS resultado
FROM
    Scientists.Scientists;
