/*

Question
Write a query to find employee whose name start with 'M' and end with 'A' but 
the character length of name is 5.

mysql> select * from employees;
+----+--------+------------+--------+----------+
| Id | Name   | Department | Salary | Location |
+----+--------+------------+--------+----------+
|  1 | Jay    | HR         |   5000 | Chennai  |
|  2 | Yash   | Management |   7000 | Pune     |
|  3 | Annand | Training   |   6000 | Chennai  |
|  4 | Ruhi   | Sales      |   4000 | Delhi    |
|  5 | Pratik | Admin      |   3000 | NULL     |
|  6 | Manna  | HR         |  25000 | Thane    |
|  7 | Mannua | IT         |  55000 | Mulund   |
+----+--------+------------+--------+----------+
7 rows in set (0.00 sec)

mysql> select * from employees where Name like 'M%a' and Length(Name) = 5;
+----+-------+------------+--------+----------+
| Id | Name  | Department | Salary | Location |
+----+-------+------------+--------+----------+
|  6 | Manna | HR         |  25000 | Thane    |
+----+-------+------------+--------+----------+
1 row in set (0.00 sec)

Write a query to find all records where 'A' is at the fourth position.
mysql> select * from employees;
+----+--------+------------+--------+----------+
| Id | Name   | Department | Salary | Location |
+----+--------+------------+--------+----------+
|  1 | Jay    | HR         |   5000 | Chennai  |
|  2 | Yash   | Management |   7000 | Pune     |
|  3 | Annand | Training   |   6000 | Chennai  |
|  4 | Ruhi   | Sales      |   4000 | Delhi    |
|  5 | Pratik | Admin      |   3000 | NULL     |
|  6 | Manna  | HR         |  25000 | Thane    |
|  7 | Manan  | IT         |  55000 | Mulund   |
+----+--------+------------+--------+----------+
7 rows in set (0.00 sec)

mysql> select * from employees where Name like '___a%';
+----+--------+------------+--------+----------+
| Id | Name   | Department | Salary | Location |
+----+--------+------------+--------+----------+
|  3 | Annand | Training   |   6000 | Chennai  |
|  7 | Manan  | IT         |  55000 | Mulund   |
+----+--------+------------+--------+----------+
2 rows in set (0.00 sec)


Write a query to find employee whose department end with 'min'.
+----+--------+------------+--------+----------+
| Id | Name   | Department | Salary | Location |
+----+--------+------------+--------+----------+
|  1 | Jay    | HR         |   5000 | Chennai  |
|  2 | Yash   | Management |   7000 | Pune     |
|  3 | Annand | Training   |   6000 | Chennai  |
|  4 | Ruhi   | Sales      |   4000 | Delhi    |
|  5 | Pratik | Admin      |   3000 | NULL     |
|  6 | Manna  | HR         |  25000 | Thane    |
|  7 | Manan  | IT         |  55000 | Mulund   |
+----+--------+------------+--------+----------+
7 rows in set (0.00 sec)

mysql> select * from employees where Department like '%min';
+----+--------+------------+--------+----------+
| Id | Name   | Department | Salary | Location |
+----+--------+------------+--------+----------+
|  5 | Pratik | Admin      |   3000 | NULL     |
+----+--------+------------+--------+----------+
1 row in set (0.01 sec)


Write a query to find records whose salary is null.

mysql> select * from employees;
+----+--------+------------+--------+----------+
| Id | Name   | Department | Salary | Location |
+----+--------+------------+--------+----------+
|  1 | Jay    | HR         |   5000 | Chennai  |
|  2 | Yash   | Management |   7000 | Pune     |
|  3 | Annand | Training   |   6000 | Chennai  |
|  4 | Ruhi   | Sales      |   4000 | Delhi    |
|  5 | Pratik | Admin      |   3000 | NULL     |
|  6 | Manna  | HR         |  25000 | Thane    |
|  7 | Manan  | IT         |   NULL | Mulund   |

7 rows in set (0.00 sec)

mysql> select * from employees where Salary Is NULL;
+----+-------+------------+--------+----------+
| Id | Name  | Department | Salary | Location |
+----+-------+------------+--------+----------+
|  7 | Manan | IT         |   NULL | Mulund   |
+----+-------+------------+--------+----------+
1 row in set (0.00 se
*/