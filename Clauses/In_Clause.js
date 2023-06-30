/*

IN
In Clause: 
1) The function returns 1 if expr is equal to any of the values in the IN list, otherwise, returns 0.
mysql> select 10 in (11, 10, 13);
+--------------------+
| 10 in (11, 10, 13) |
+--------------------+
|                  1 |
+--------------------+
1 row in set (0.00 sec)

2) It is used to help reduce the need for multiple Or condition in a SELECT, INSERT, UPDATE, or DELETE statement.

EMP_Table

ID       Name          Salary          Contact

1        Sagar         10000          9966558822
2        Ram           15000          8855224411
3        Rajesh         8000          9966554411
4        Sameer        35000          7744115566


1) Select 10 in (12,10,45);

mysql> select 10 in (11, 10, 13);
+--------------------+
| 10 in (11, 10, 13) |
+--------------------+
|                  1 |
+--------------------+
1 row in set (0.00 sec)

2)select * from emp where id in (1,2,3,6);

mysql> select * from emp where id in (1,2,3,6);
+----+---------+--------+------------+
| ID | Name    | Salary | Contact    |
+----+---------+--------+------------+
|  1 | Sagar   |  10000 | 9966558822 |
|  2 | Ram     |  15000 | 8855224411 |
|  3 | Rajesh  |   8000 | 9966554411 |
|  6 | Avinash |  40000 | 9569852514 |
+----+---------+--------+------------+
4 rows in set (0.00 sec)

3)select * from emp where name in("Sameer",'Raj','Rajesh','Kala');

mysql> select * from emp where name IN ('Sameer','Ram','Rajesh','Kala');
+----+--------+--------+------------+
| ID | Name   | Salary | Contact    |
+----+--------+--------+------------+
|  2 | Ram    |  15000 | 8855224411 |
|  3 | Rajesh |   8000 | 9966554411 |
|  4 | Sameer |  35000 | 7744115566 |
|  5 | Kala   |  22000 | 6622554433 |
+----+--------+--------+------------+
4 rows in set (0.01 sec)

4)select * from emp where name not in("Sameer",'Raj','Rajesh','Kala');

mysql> select * from emp where name NOT  IN ('Sameer','Ram','Rajesh','Kala');
+----+---------+--------+------------+
| ID | Name    | Salary | Contact    |
+----+---------+--------+------------+
|  1 | Sagar   |  10000 | 9966558822 |
|  6 | Avinash |  40000 | 9569852514 |
|  7 | Roshan  |  25000 | 8855886688 |
+----+---------+--------+------------+
3 rows in set (0.00 sec)

5)select * from emp where salary in(10000,8000,40000,22000,35000);


mysql> select * from emp where salary in (10000,8000,40000,22000,35000);
+----+---------+--------+------------+
| ID | Name    | Salary | Contact    |
+----+---------+--------+------------+
|  1 | Sagar   |  10000 | 9966558822 |
|  3 | Rajesh  |   8000 | 9966554411 |
|  4 | Sameer  |  35000 | 7744115566 |
|  5 | Kala    |  22000 | 6622554433 |
|  6 | Avinash |  40000 | 9569852514 |
+----+---------+--------+------------+
5 rows in set (0.00 sec)

*/