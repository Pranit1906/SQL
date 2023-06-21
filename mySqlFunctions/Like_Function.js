/*
The SQL LIKE Operator
The LIKE operator is used in a WHERE clause to search for a specified pattern in a column.

There are two wildcards often used in conjunction with the LIKE operator:

 The percent sign (%) represents zero, one, or multiple characters
 The underscore sign (_) represents one, single character

Here are some examples showing different LIKE operators with '%' and '_' wildcards:

LIKE Operator	                     Description
WHERE CustomerName LIKE 'a%'	Finds any values that start with "a"
WHERE CustomerName LIKE '%a'	Finds any values that end with "a"
WHERE CustomerName LIKE '%or%'	Finds any values that have "or" in any position
WHERE CustomerName LIKE '_r%'	Finds any values that have "r" in the second position
WHERE CustomerName LIKE 'a_%'	Finds any values that start with "a" and are at least 2 characters in length
WHERE CustomerName LIKE 'a__%'	Finds any values that start with "a" and are at least 3 characters in length
WHERE ContactName LIKE 'a%o'	Finds any values that start with "a" and ends with "o"

mysql> select * from employee;
+----+--------+------------+--------+----------+
| Id | Name   | Department | Salary | Location |
+----+--------+------------+--------+----------+
|  1 | Jay    | HR         |  50000 | Mumbai   |
|  2 | Yash   | Management |  70000 | Pune     |
|  3 | Annand | Training   |  60000 | Chennai  |
|  4 | Ruhi   | Sales      |  40000 | Delhi    |
|  5 | Pratik | Admin      |  30000 | Pune     |
|  6 | Raj    | Training   |  50000 | Mumbai   |
+----+--------+------------+--------+----------+
6 rows in set (0.00 sec)

mysql> select * from employee where Name like'%a';
Empty set (0.00 sec)

mysql> select * from employee where Name like'%a_';
+----+------+------------+--------+----------+
| Id | Name | Department | Salary | Location |
+----+------+------------+--------+----------+
|  1 | Jay  | HR         |  50000 | Mumbai   |
|  6 | Raj  | Training   |  50000 | Mumbai   |
+----+------+------------+--------+----------+
2 rows in set (0.00 sec)

mysql> select * from employee where Name like'a%_';
+----+--------+------------+--------+----------+
| Id | Name   | Department | Salary | Location |
+----+--------+------------+--------+----------+
|  3 | Annand | Training   |  60000 | Chennai  |
+----+--------+------------+--------+----------+
1 row in set (0.00 sec)

mysql> select * from employee where Name like'J%y';
+----+------+------------+--------+----------+
| Id | Name | Department | Salary | Location |
+----+------+------------+--------+----------+
|  1 | Jay  | HR         |  50000 | Mumbai   |
+----+------+------------+--------+----------+
1 row in set (0.00 sec)


*/