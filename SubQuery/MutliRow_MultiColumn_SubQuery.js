/*

Multiple Column Subqueries:

Main query compares to values from a multiple-row and multiple-column subquery. 
SELECT field1, field2,�.FROM table 
WHERE (field1, field2,..) IN 
(SELECT field, field,�FROM table WHERE condition); 

mysql> select id, Student_Salary,Student_Age from employee where (Student_Salary,Student_Age) in
 (select Student_Salary,Student_Age from employee where id between 1 and 5);
+----+----------------+-------------+
| id | Student_Salary | Student_Age |
+----+----------------+-------------+
|  1 |          35000 |          26 |
|  2 |          40000 |          18 |
|  3 |          25000 |          29 |
|  4 |          27000 |          23 |
|  5 |          31000 |          26 |
+----+----------------+-------------+
5 rows in set (0.01 sec)


Example:-
Display all the employees with same job and office as Pamela.
SELECT  firstName, LastName FROm employees
WHERE jobtitle IN (SELECT jobTitle FROM employees 
WHERE firstName = 'Pamela')
AND officeCode = (SELECT officeCode FROM employees 
WHERE firstName = 'Pamela')
AND firstName <> 'Pamela';

mysql> select id, Student_Salary,Student_Age from employee where (Student_Salary,Student_Age) in (select Student_Salary,Student_Age from employee where id between 1 and 5) and id <> 3;
+----+----------------+-------------+
| id | Student_Salary | Student_Age |
+----+----------------+-------------+
|  1 |          35000 |          26 |
|  2 |          40000 |          18 |
|  4 |          27000 |          23 |
|  5 |          31000 |          26 |
+----+----------------+-------------+
4 rows in set (0.00 sec)

OR

SELECT  firstName, LastName FROm employees
WHERE (jobTitle, officeCode) IN 
(SELECT jobTitle, officeCode FROM employees
WHERE firstName = 'Pamela') AND firstName <> 'Pamela';

mysql> select * from employee where (Student_Salary, Student_Age) in
 (select Student_Salary, Student_Age from employee where Student_salary < 40000);
+----+--------------+----------------+-------------+------------+
| id | Student_Name | Student_Salary | Student_Age | Date       |
+----+--------------+----------------+-------------+------------+
|  1 | Pranit       |          35000 |          26 | 1997-06-19 |
|  3 | Soumitra     |          25000 |          29 | 1993-09-15 |
|  4 | Monu         |          27000 |          23 | 1987-03-10 |
|  5 | Yogesh       |          31000 |          26 | 1998-03-29 |
|  6 | Pramod       |          28000 |          28 | 1987-12-09 |
|  8 | Goma         |          19000 |          19 | 1991-08-01 |
|  9 | Ganesh       |          33000 |          33 | 1999-01-19 |
| 10 | Mogesh       |          25600 |          23 | 1988-07-22 |
+----+--------------+----------------+-------------+------------+
8 rows in set (0.01 sec)

*/