/*

Aggregation functions: The aggregation functions act on set of records or the entire table.
Many aggregation functions accept the DISTINCT clause. Aggregation functions are also known as group functions.

AVG([DISTINCT] expr): Returns the average value of expr. The DISTINCT option can be used to return the average of the distinct values of expr.

mysql> select * from employees;
+----+--------+------------+--------+----------+
| Id | Name   | Department | Salary | Location |
+----+--------+------------+--------+----------+
|  1 | Jay    | HR         |   5000 | Chennai  |
|  2 | Yash   | Management |   7000 | Pune     |
|  3 | Annand | Training   |   6000 | Chennai  |
|  4 | Ruhi   | Sales      |   4000 | Delhi    |
|  5 | Pratik | Admin      |   3000 | NULL     |
+----+--------+------------+--------+----------+
5 rows in set (0.02 sec)

mysql> select avg(salary) from employees;
+-------------+
| avg(salary) |
+-------------+
|   5000.0000 |
+-------------+
1 row in set (0.02 sec)



COUNT(expr): Returns a count of the number of non-NULL values of expr in the rows retrieved by a SELECT statement.
The result is a BIGINT value.


mysql> select count(*) from employees;
+----------+
| count(*) |
+----------+
|        5 |
+----------+
1 row in set (0.03 sec)


MAX([DISTINCT] expr): Returns the maximum value of expr.

mysql> select max(salary) from employees;
+-------------+
| max(salary) |
+-------------+
|        7000 |
+-------------+
1 row in set (0.01 sec)


MIN([DISTINCT] expr): Returns the minimum value of expr.

mysql> select min(salary) from employees;
+-------------+
| min(salary) |
+-------------+
|        3000 |
+-------------+
1 row in set (0.01 sec)


SUM([DISTINCT] expr): Returns the sum of expr. If the return set has no rows, SUM() returns NULL. The DISTINCT keyword can be used to sum only the distinct values of expr.
mysql> select sum(salary) from employees;
+-------------+
| sum(salary) |
+-------------+
|       25000 |
+-------------+
1 row in set (0.00 sec)


*/

/*
GROUP BY Clause With HAVING
Group by clause: GROUP BY clause is used to group selected rows and return a single row of summary information based on that group.
The group by clause can have following types of expressions: 

Constants 

Group functions 

The function SYSDATE 

The group by clause can contain not more than 255 expressions.
SELECT fieldname on which you group by, 
group function(fieldname),�. 
FROM tablename WHERE condition 
GROUP BY fieldname HAVING condition;

mysql> select Name,Location,count(Name)  from employee group by Location;
+--------+----------+-------------+
| Name   | Location | count(Name) |
+--------+----------+-------------+
| Jay    | Mumbai   |           2 |
| Yash   | Pune     |           2 |
| Annand | Chennai  |           1 |
| Ruhi   | Delhi    |           1 |
+--------+----------+-------------+
4 rows in set (0.00 sec)




When to use Having clause: 

When you need to use a aggregate function in a condition.

Eg : Display those departments having minimum salary is less than 5000
SELECT deptno, MIN(sal) FROM emp WHERE MIN(sal) < 5000 GROUP BY deptno; 
Will give an error because where clause cannot have a Group function with GROUP BY clause. 

SELECT deptno, MIN(salary) FROM emp GROUP BY deptno HAVING MIN(sal)<5000;

mysql> select * from employee;
+----+--------+------------+--------+----------+
| Id | Name   | Department | Salary | Location |
+----+--------+------------+--------+----------+
|  1 | Jay    | HR         |   5000 | Mumbai   |
|  2 | Yash   | Management |   7000 | Pune     |
|  3 | Annand | Training   |   6000 | Chennai  |
|  4 | Ruhi   | Sales      |   4000 | Delhi    |
|  5 | Pratik | Admin      |   6000 | Pune     |
|  6 | Raj    | Training   |   5000 | Mumbai   |
+----+--------+------------+--------+----------+

mysql> select Department,min(salary) from employee group by Department having min(salary) < 5000;
+------------+-------------+
| Department | min(salary) |
+------------+-------------+
| Sales      |        4000 |
+------------+-------------+
1 row in set (0.01 sec)


mysql> select Department,min(salary) from employee group by Department having min(salary) > 5000;
+------------+-------------+
| Department | min(salary) |
+------------+-------------+
| Management |        7000 |
| Admin      |        6000 |
+------------+-------------+
2 rows in set (0.00 sec)






*/