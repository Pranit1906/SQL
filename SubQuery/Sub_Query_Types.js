/*

Types of Subqueries:
1.Single Row SubQuery
2.Multiple Row SubQuery
3.CoRelation SubQuery

*/

/*
1.Single row subqueries:-
They are queries that return only one row from the inner select statement.

Example:-
When we want to find out the employees of a office in which GEORGE is working.
SELECT officeCode FROM employees 
WHERE firstname = 'George';

Once it returns the office code (let us say 3) you would then give
SELECT firstName, lastName FROM employees 
WHERE officeCode = 3;

This can be done using the subquery as follows:
SELECT firstName, lastName FROM employees
WHERE officeCode = (SELECT officeCode FROM employees 
WHERE firstname = 'George');

/------------------------------------------Normal Query ---------------------------------------------/

mysql> select Student_Name , Student_Salary from employee where id = 1;
+--------------+----------------+
| Student_Name | Student_Salary |
+--------------+----------------+
| Pranit       |          35000 |
+--------------+----------------+
1 row in set (0.00 sec)

mysql> select Student_Name , Student_Salary from employee where id between 1 and 5;
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





/---------------------------------------Sub Query(Same Output as Above)-----------------------------------------/

//Single Row SubQuery
mysql> select Student_Name , Student_Salary from employee where id = (select id from employee where id = 1);
+--------------+----------------+
| Student_Name | Student_Salary |
+--------------+----------------+
| Pranit       |          35000 |
+--------------+----------------+
1 row in set (0.00 sec)

mysql> select Student_Name, Student_Salary from employee where id <=(select id from employee where id =5);
+--------------+----------------+
| Student_Name | Student_Salary |
+--------------+----------------+
| Pranit       |          35000 |
| Sanit        |          40000 |
| Soumitra     |          25000 |
| Monu         |          27000 |
| Yogesh       |          31000 |
+--------------+----------------+
5 rows in set (0.01 sec)

*/





