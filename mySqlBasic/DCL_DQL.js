/*

1.DCL(Data Control Langauge):-
DCL commands are used to grant and take back authority from any database user.

Here are some commands that come under DCL:
a. Grant:- It is used to give user access privileges to a database.

Example:-
GRANT SELECT, UPDATE ON MY_TABLE TO SOME_USER, ANOTHER_USER;  


b. Revoke:- It is used to take back permissions from the user.

Example:-
REVOKE SELECT, UPDATE ON MY_TABLE FROM USER1, USER2;  


 
2.DQL(Data Query Language):-
DQL is used to fetch the data from the database.
It uses only one command:
a. SELECT: This is the same as the projection operation of relational algebra. It is used to select the attribute based on the condition described by WHERE clause.

Syntax:-
SELECT expressions FROM TABLES  WHERE conditions;  

For example:-
SELECT emp_name  FROM employee  WHERE age > 20; 

mysql> select * from employee;
+----+----------+--------+------+------------+
| id | name     | salary | age  | Date       |
+----+----------+--------+------+------------+
|  1 | Pranit   |  35000 |   26 | 1997-06-19 |
|  2 | Sanit    |  40000 |   18 | 2004-07-26 |
|  3 | Soumitra |  25000 |   29 | 1993-09-15 |
|  4 | Monu     |  27000 |   23 | 1987-03-10 |
|  5 | Yogesh   |  31000 |   26 | 1998-03-29 |
|  6 | Pramod   |  28000 |   28 | 1987-12-09 |
|  7 | Sonu     |  42000 |   24 | 1995-07-16 |
|  8 | Goma     |  19000 |   19 | 1991-08-01 |
|  9 | Ganesh   |  33000 |   33 | 1999-01-19 |
| 10 | Mogesh   |  25600 |   23 | 1988-07-22 |
| 11 | Gandhi   |  44000 |   89 | 1945-05-21 |
+----+----------+--------+------+------------+
11 rows in set (0.00 sec)

mysql>  select name, age from employee;
+----------+------+
| name     | age  |
+----------+------+
| Pranit   |   26 |
| Sanit    |   18 |
| Soumitra |   29 |
| Monu     |   23 |
| Yogesh   |   26 |
| Pramod   |   28 |
| Sonu     |   24 |
| Goma     |   19 |
| Ganesh   |   33 |
| Mogesh   |   23 |
| Gandhi   |   89 |
+----------+------+
11 rows in set (0.00 sec)

mysql>  select age from employee;
+------+
| age  |
+------+
|   26 |
|   18 |
|   29 |
|   23 |
|   26 |
|   28 |
|   24 |
|   19 |
|   33 |
|   23 |
|   89 |
+------+
11 rows in set (0.00 sec)
 
mysql>  select * from employee where age < 25;
+----+--------+--------+------+------------+
| id | name   | salary | age  | Date       |
+----+--------+--------+------+------------+
|  2 | Sanit  |  40000 |   18 | 2004-07-26 |
|  4 | Monu   |  27000 |   23 | 1987-03-10 |
|  7 | Sonu   |  42000 |   24 | 1995-07-16 |
|  8 | Goma   |  19000 |   19 | 1991-08-01 |
| 10 | Mogesh |  25600 |   23 | 1988-07-22 |
+----+--------+--------+------+------------+
5 rows in set (0.00 sec)

mysql>  select * from employee where age > 25;
+----+----------+--------+------+------------+
| id | name     | salary | age  | Date       |
+----+----------+--------+------+------------+
|  1 | Pranit   |  35000 |   26 | 1997-06-19 |
|  3 | Soumitra |  25000 |   29 | 1993-09-15 |
|  5 | Yogesh   |  31000 |   26 | 1998-03-29 |
|  6 | Pramod   |  28000 |   28 | 1987-12-09 |
|  9 | Ganesh   |  33000 |   33 | 1999-01-19 |
| 11 | Gandhi   |  44000 |   89 | 1945-05-21 |
+----+----------+--------+------+------------+
6 rows in set (0.00 sec)

*/