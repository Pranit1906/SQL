/*
The MySQL UNION Operator
The UNION operator is used to combine the result-set of two or more SELECT statements.

Every SELECT statement within UNION must have the same number of columns
The columns must also have similar data types
The columns in every SELECT statement must also be in the same order


UNION Syntax
SELECT column_name(s) FROM table1
UNION
SELECT column_name(s) FROM table2;


mysql> select * from table2;
+----+---------+------+------------+-----------------+
| id | name    | age  | contact    | email           |
+----+---------+------+------------+-----------------+
|  1 | Yogesh  |   25 | 1234567890 | prangt$gnl.com  |
|  2 | Mohit   |   26 | 1002223334 | abcdc@gmail.com |
|  3 | Pramod  |   24 | 1452222334 | zcv@gmail.com   |
|  4 | Prabhu  |   35 | 1781258304 | sandt@gmail.com |
|  5 | kamlesh |   32 | 6619937919 | udvch@gmail.com |
+----+---------+------+------------+-----------------+
5 rows in set (0.00 sec)

mysql> select * from table1;
+----+---------+------+------------+-----------------+
| id | name    | age  | contact    | email           |
+----+---------+------+------------+-----------------+
|  1 | Pranit  |   25 | 1234567890 | prangt$gnl.com  |
|  2 | Mohit   |   26 | 9175456789 | abcdc@gmail.com |
|  3 | Sumeet  |   24 | 8924567890 | zcv@gmail.com   |
|  4 | Pramod  |   35 | 8762447890 | sandt@gmail.com |
|  5 | kamlesh |   32 | 6619937919 | udvch@gmail.com |
+----+---------+------+------------+-----------------+
5 rows in set (0.00 sec)

mysql> select name, age, contact from table1 union select name, age, contact from table2;
+---------+------+------------+
| name    | age  | contact    |
+---------+------+------------+
| Pranit  |   25 | 1234567890 |
| Mohit   |   26 | 9175456789 |
| Sumeet  |   24 | 8924567890 |
| Pramod  |   35 | 8762447890 |
| kamlesh |   32 | 6619937919 |
| Yogesh  |   25 | 1234567890 |
| Mohit   |   26 | 1002223334 |
| Pramod  |   24 | 1452222334 |
| Prabhu  |   35 | 1781258304 |
+---------+------+------------+
9 rows in set (0.00 sec)

mysql> select * from table1 union all select * from table2;
+----+---------+------+------------+-----------------+
| id | name    | age  | contact    | email           |
+----+---------+------+------------+-----------------+
|  1 | Pranit  |   25 | 1234567890 | prangt$gnl.com  |
|  2 | Mohit   |   26 | 9175456789 | abcdc@gmail.com |
|  3 | Sumeet  |   24 | 8924567890 | zcv@gmail.com   |
|  4 | Pramod  |   35 | 8762447890 | sandt@gmail.com |
|  5 | kamlesh |   32 | 6619937919 | udvch@gmail.com |
|  1 | Yogesh  |   25 | 1234567890 | prangt$gnl.com  |
|  2 | Mohit   |   26 | 1002223334 | abcdc@gmail.com |
|  3 | Pramod  |   24 | 1452222334 | zcv@gmail.com   |
|  4 | Prabhu  |   35 | 1781258304 | sandt@gmail.com |
|  5 | kamlesh |   32 | 6619937919 | udvch@gmail.com |
+----+---------+------+------


mysql> select name, age, contact from table1 union select name, age, contact from table2 order by age;
+---------+------+------------+
| name    | age  | contact    |
+---------+------+------------+
| Sumeet  |   24 | 8924567890 |
| Pramod  |   24 | 1452222334 |
| Pranit  |   25 | 1234567890 |
| Yogesh  |   25 | 1234567890 |
| Mohit   |   26 | 9175456789 |
| Mohit   |   26 | 1002223334 |
| kamlesh |   32 | 6619937919 |
| Pramod  |   35 | 8762447890 |
| Prabhu  |   35 | 1781258304 |
+---------+------+------------+
9 rows in set (0.01 sec)


*/
