/*

Multiple row subqueries: They are queries that return more than one row from the inner select statement.


Multiple row operator:-

1.) IN: equal to any member in the list
Example: Display all the employees who are in same office as �Tom� or �Martin�.
SELECT firstName, lastName FROM employees
WHERE officeCode IN (SELECT officeCode FROM employees
WHERE firstName IN (�Tom�, �Martin�));


mysql> select Student_Name , Student_Salary from employee where id in (select id from employee where id between 1 and 5);
+--------------+----------------+
| Student_Name | Student_Salary |
+--------------+----------------+
| Pranit       |          35000 |
| Sanit        |          40000 |
| Soumitra     |          25000 |
| Monu         |          27000 |
| Yogesh       |          31000 |
+--------------+----------------+
5 rows in set (0.00 sec)
*/

/*
2.) ANY:- compare to each value returned by the subquery

Any Operator:

i.) < ANY means less than the maximum.
ii.) > ANY means more than the minimum
iii.)= ANY is equal to IN

Example:-
Display all the products whose MSRP is less than any Motorcycles and are not Motorcycles.

SELECT productCode, productName, MSRP, productLine
FROM products
WHERE MSRP > ANY (SELECT MSRP FROM products
WHERE productLine = 'Planes') 
AND productLine <> 'Planes';



SELECT productCode, productName, MSRP, productLine
FROM products
WHERE MSRP < ANY (SELECT MSRP FROM products
WHERE productLine = 'Planes') 
AND productLine <> 'Planes';


mysql> select  id,Student_Name, Student_Salary from employee
 where Student_Salary > ANY (select Student_Salary from employee where Student_Salary = 25000);
+----+--------------+----------------+
| id | Student_Name | Student_Salary |
+----+--------------+----------------+
|  1 | Pranit       |          35000 |
|  2 | Sanit        |          40000 |
|  4 | Monu         |          27000 |
|  5 | Yogesh       |          31000 |
|  6 | Pramod       |          28000 |
|  7 | Sonu         |          42000 |
|  9 | Ganesh       |          33000 |
| 10 | Mogesh       |          25600 |
| 11 | Gandhi       |          44000 |
+----+--------------+----------------+
9 rows in set (0.01 sec)

mysql> select  id,Student_Name, Student_Salary from employee 
where Student_Salary < ANY (select Student_Salary from employee where Student_Salary = 44000);
+----+--------------+----------------+
| id | Student_Name | Student_Salary |
+----+--------------+----------------+
|  1 | Pranit       |          35000 |
|  2 | Sanit        |          40000 |
|  3 | Soumitra     |          25000 |
|  4 | Monu         |          27000 |
|  5 | Yogesh       |          31000 |
|  6 | Pramod       |          28000 |
|  7 | Sonu         |          42000 |
|  8 | Goma         |          19000 |
|  9 | Ganesh       |          33000 |
| 10 | Mogesh       |          25600 |
+----+--------------+----------------+
10 rows in set (0.00 sec)

mysql> select  id,Student_Name, Student_Salary from employee where 
Student_Salary > ANY (select Student_Salary from employee where Student_Salary = 44000);
Empty set (0.00 sec)

mysql> select  id,Student_Name, Student_Salary from employee where 
Student_Salary = ANY (select Student_Salary from employee);
+----+--------------+----------------+
| id | Student_Name | Student_Salary |
+----+--------------+----------------+
|  1 | Pranit       |          35000 |
|  2 | Sanit        |          40000 |
|  3 | Soumitra     |          25000 |
|  4 | Monu         |          27000 |
|  5 | Yogesh       |          31000 |
|  6 | Pramod       |          28000 |
|  7 | Sonu         |          42000 |
|  8 | Goma         |          19000 |
|  9 | Ganesh       |          33000 |
| 10 | Mogesh       |          25600 |
| 11 | Gandhi       |          44000 |
+----+--------------+----------------+
11 rows in set (0.01 sec)

*/
/*
3.)ALL: compare value to every value returned by the subquery.

ALL operator:

i>)  < ALL means less than the minimum.
ii.) > ALL means more than maximum.

Example:-
Display all the productNames whose buyPrice is greater than the average buyPrice of all the categories.

SELECT productCode, productName, productLine, buyPrice
FROM products
WHERE buyPrice > ALL (SELECT AVG(buyPrice) FROM 
products GROUP BY productLine);

Example:-
Display all the productNames whose buyPrice is less than the average buyPrice of all the categories.

SELECT productCode, productName, productLine, buyPrice
FROM products
WHERE buyPrice < ALL (SELECT AVG(buyPrice) FROM 
products GROUP BY productLine);

mysql> select  id,Student_Name, Student_Salary from employee where 
Student_Salary > All (select avg(Student_Salary) from employee) group by Student_Name;
+----+--------------+----------------+
| id | Student_Name | Student_Salary |
+----+--------------+----------------+
|  1 | Pranit       |          35000 |
|  2 | Sanit        |          40000 |
|  7 | Sonu         |          42000 |
|  9 | Ganesh       |          33000 |
| 11 | Gandhi       |          44000 |
+----+--------------+----------------+
5 rows in set (0.01 sec)

mysql> select  id,Student_Name, Student_Salary from employee where 
Student_Salary < All (select avg(Student_Salary) from employee) group by Student_Name;
+----+--------------+----------------+
| id | Student_Name | Student_Salary |
+----+--------------+----------------+
|  3 | Soumitra     |          25000 |
|  4 | Monu         |          27000 |
|  5 | Yogesh       |          31000 |
|  6 | Pramod       |          28000 |
|  8 | Goma         |          19000 |
| 10 | Mogesh       |          25600 |
+----+--------------+----------------+
6 rows in set (0.01 sec)

*/