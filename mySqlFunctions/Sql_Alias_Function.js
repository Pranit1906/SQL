/*

SQL Aliases
SQL aliases are used to give a table, or a column in a table, a temporary name.

Aliases are often used to make column names more readable.
An alias only exists for the duration of that query.
An alias is created with the AS keyword.

Syntax
SELECT column_name AS alias_name
FROM table_name;
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

mysql> select Name as Employee_Name from employee;
+---------------+
| Employee_Name |
+---------------+
| Jay           |
| Yash          |
| Annand        |
| Ruhi          |
| Pratik        |
| Raj           |
+---------------+
6 rows in set (0.00 sec)

mysql> select salary+300 as 300_Bonus from employee;
+-----------+
| 300_Bonus |
+-----------+
|     50300 |
|     70300 |
|     60300 |
|     40300 |
|     30300 |
|     50300 |
+-----------+
6 rows in set (0.01 sec)
*/