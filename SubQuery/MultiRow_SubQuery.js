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



4. Exists :-
  1. The EXISTS operator in a subquery is used to check whether the subquery returns any rows. 
  2. It returns TRUE if the subquery returns one or more rows, and FALSE if the subquery returns no rows. 
  3. The EXISTS operator is often used in the context of a WHERE clause to filter rows based on 
   the existence of related rows in another table.
  4. Syntax:-
   SELECT column1, column2, ...
   FROM table1
   WHERE EXISTS (SELECT 1 FROM table2 WHERE condition);
  

 Example:
Suppose you have a departments table and an employees table:

CREATE TABLE departments (
    department_id INT,
    department_name VARCHAR(255)
);

INSERT INTO departments VALUES (1, 'HR');
INSERT INTO departments VALUES (2, 'IT');
INSERT INTO departments VALUES (3, 'Finance');

CREATE TABLE employees (
    employee_id INT,
    employee_name VARCHAR(255),
    department_id INT
);

INSERT INTO employees VALUES (1, 'Alice', 1);
INSERT INTO employees VALUES (2, 'Bob', 2);
INSERT INTO employees VALUES (3, 'Charlie', 1);


Now, if you want to find departments that have at least one employee, you can use the EXISTS operator:

SELECT department_id, department_name
FROM departments d
WHERE EXISTS (SELECT 1 FROM employees e WHERE e.department_id = d.department_id);



In this example, the subquery checks whether there is at least one row in the employees table
 with a matching department_id. The result would look like:
+-------------+------------------+
| department_id | department_name |
+-------------+------------------+
| 1           | HR               |
| 2           | IT               |
| 3           | Finance          |
+-------------+------------------+
The result set includes only those departments for which at least one employee exists in the employees table.
 The EXISTS operator is a powerful tool when you need to filter rows based on the existence of related rows in another table.
*/