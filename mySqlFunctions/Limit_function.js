/*

 LIMIT :-
LIMIT clause is used to specify the number of records to return.
LIMIT clause is useful on large tables with thousands of records. Returning a large number of records can impact performance.

Syntax:-
SELECT column_name(s)
FROM table_name
WHERE condition
LIMIT number;

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
+----+--------+-----------

mysql> select * from employee Limit 3;
+----+--------+------------+--------+----------+
| Id | Name   | Department | Salary | Location |
+----+--------+------------+--------+----------+
|  1 | Jay    | HR         |  50000 | Mumbai   |
|  2 | Yash   | Management |  70000 | Pune     |
|  3 | Annand | Training   |  60000 | Chennai  |
+----+--------+------------+--------+----------+
3 rows in set (0.00 sec)


mysql> select * from employee where Location = 'Chennai' Limit 1;
+----+--------+------------+--------+----------+
| Id | Name   | Department | Salary | Location |
+----+--------+------------+--------+----------+
|  3 | Annand | Training   |  60000 | Chennai  |
+----+--------+------------+--------+----------+
1 row in set (0.01 sec)

 */