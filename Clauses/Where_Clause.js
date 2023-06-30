/*

Where Clause:
1) The  Where clause allows you to specify a search condition for the rows returned by a query.

2) Where Clause is use for to filter the record.

3)The WHERE clause is used to extract only those records that fulfill a specified condition.

Syntax:

select column_list from tableName where serach_condition; 

EMP_Table

ID       Name          Salary          Contact

1        Sagar         10000          9966558822
2        Ram           15000          8855224411
3        Rajesh         8000          9966554411
4        Sameer        35000          7744115566
5        Kala          22000          6622554433
6        Avinash       40000          9569852514
7        Roshan        25000          8855886688   

Filter Example:

1) Select * from emp where id=3;

2) Select id,name,salary from emp where id=5 and name='Kala';

3)select * from emp where id=5  or id=6 or id=4;

4) Select id,name,contact,salary from emp where id between 1 and 5

5) select * from emp where salary >20000;

6) select * from emp where salary >20000 and salary <40000

*/

/*
Answers:-

mysql> select * from emp where id = 3;
+----+--------+--------+------------+
| ID | Name   | Salary | Contact    |
+----+--------+--------+------------+
|  3 | Rajesh |   8000 | 9966554411 |
+----+--------+--------+------------+
1 row in set (0.00 sec)

mysql> select id,name,salary from emp where id = 5 and name = 'Kala';
+----+------+--------+
| id | name | salary |
+----+------+--------+
|  5 | Kala |  22000 |
+----+------+--------+
1 row in set (0.01 sec)

mysql> select * from emp where id =5 or id = 6 or id = 4;
+----+---------+--------+------------+
| ID | Name    | Salary | Contact    |
+----+---------+--------+------------+
|  4 | Sameer  |  35000 | 7744115566 |
|  5 | Kala    |  22000 | 6622554433 |
|  6 | Avinash |  40000 | 9569852514 |
+----+---------+--------+------------+
3 rows in set (0.00 sec)

mysql> select id, name, contact, salary from emp where id between 1 and 5;
+----+--------+------------+--------+
| id | name   | contact    | salary |
+----+--------+------------+--------+
|  1 | Sagar  | 9966558822 |  10000 |
|  2 | Ram    | 8855224411 |  15000 |
|  3 | Rajesh | 9966554411 |   8000 |
|  4 | Sameer | 7744115566 |  35000 |
|  5 | Kala   | 6622554433 |  22000 |
+----+--------+------------+--------+
5 rows in set (0.00 sec)

mysql> select * from emp where salary > 20000;
+----+---------+--------+------------+
| ID | Name    | Salary | Contact    |
+----+---------+--------+------------+
|  4 | Sameer  |  35000 | 7744115566 |
|  5 | Kala    |  22000 | 6622554433 |
|  6 | Avinash |  40000 | 9569852514 |
|  7 | Roshan  |  25000 | 8855886688 |
+----+---------+--------+------------+
4 rows in set (0.00 sec)

mysql> select * from emp where salary > 20000 and salary < 40000;
+----+--------+--------+------------+
| ID | Name   | Salary | Contact    |
+----+--------+--------+------------+
|  4 | Sameer |  35000 | 7744115566 |
|  5 | Kala   |  22000 | 6622554433 |
|  7 | Roshan |  25000 | 8855886688 |
+----+--------+--------+------------+
3 rows in set (0.00 sec)




*/