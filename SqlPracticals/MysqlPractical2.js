/*

mysql> select 8 & 3;
+-------+
| 8 & 3 |
+-------+
|     0 |
+-------+
1 row in set (0.01 sec)

mysql> select 24 | 5;
+--------+
| 24 | 5 |
+--------+
|     29 |
+--------+
1 row in set (0.00 sec)

mysql> select ~ 1;
+----------------------+
| ~ 1                  |
+----------------------+
| 18446744073709551614 |
+----------------------+
1 row in set (0.00 sec)

mysql> select 10 ^ 2;
+--------+
| 10 ^ 2 |
+--------+
|      8 |
+--------+
1 row in set (0.00 sec)

mysql> select 12 >> 1;
+---------+
| 12 >> 1 |
+---------+
|       6 |
+---------+
1 row in set (0.00 sec)

mysql> select 12 << 1;
+---------+
| 12 << 1 |
+---------+
|      24 |
+---------+
1 row in set (0.00 sec)

mysql> select 18 & 8 | 12 ^ 3;
+-----------------+
| 18 & 8 | 12 ^ 3 |
+-----------------+
|              15 |
+-----------------+
1 row in set (0.00 sec)


*/

/*

mysql> select * from revision;
+----+--------+-----+
| id | name   | age |
+----+--------+-----+
|  1 | Pranit |  25 |
|  2 | Sanit  |  18 |
|  3 | Yogesh |  28 |
|  4 | Pramod |  20 |
|  5 | Ramesh |  32 |
+----+--------+-----+
5 rows in set (0.00 sec)

mysql> select lower(name);
ERROR 1054 (42S22): Unknown column 'name' in 'field list'
mysql> select lower(name);
ERROR 1054 (42S22): Unknown column 'name' in 'field list'
mysql> select lower(name) from revision;
+-------------+
| lower(name) |
+-------------+
| pranit      |
| sanit       |
| yogesh      |
| pramod      |
| ramesh      |
+-------------+
5 rows in set (0.00 sec)

mysql> select upper(name) from revision;
+-------------+
| upper(name) |
+-------------+
| PRANIT      |
| SANIT       |
| YOGESH      |
| PRAMOD      |
| RAMESH      |
+-------------+
5 rows in set (0.00 sec)

mysql> select * from employee;
+----+--------------+----------------+-------------+------------+
| id | Student_Name | Student_Salary | Student_Age | Date       |
+----+--------------+----------------+-------------+------------+
|  1 | Pranit       |          35000 |          26 | 1997-06-19 |
|  2 | Sanit        |          40000 |          18 | 2004-07-26 |
|  3 | Soumitra     |          25000 |          29 | 1993-09-15 |
|  4 | Monu         |          27000 |          23 | 1987-03-10 |
|  5 | Yogesh       |          31000 |          26 | 1998-03-29 |
|  6 | Pramod       |          28000 |          28 | 1987-12-09 |
|  7 | Sonu         |          42000 |          24 | 1995-07-16 |
|  8 | Goma         |          19000 |          19 | 1991-08-01 |
|  9 | Ganesh       |          33000 |          33 | 1999-01-19 |
| 10 | Mogesh       |          25600 |          23 | 1988-07-22 |
| 11 | Gandhi       |          44000 |          89 | 1945-05-21 |
+----+--------------+----------------+-------------+------------+
11 rows in set (0.05 sec)

mysql> select lower(Student_Name), lower(Student_Salary) from employee;
+---------------------+-----------------------+
| lower(Student_Name) | lower(Student_Salary) |
+---------------------+-----------------------+
| pranit              | 35000                 |
| sanit               | 40000                 |
| soumitra            | 25000                 |
| monu                | 27000                 |
| yogesh              | 31000                 |
| pramod              | 28000                 |
| sonu                | 42000                 |
| goma                | 19000                 |
| ganesh              | 33000                 |
| mogesh              | 25600                 |
| gandhi              | 44000                 |
+---------------------+-----------------------+
11 rows in set (0.00 sec)

mysql> select trim('    Sumeet    ') as trimmed_String;
+----------------+
| trimmed_String |
+----------------+
| Sumeet         |
+----------------+
1 row in set (0.00 sec)

mysql> select rtrim('    Sumeet    ') as Right_trimmed_String;
+----------------------+
| Right_trimmed_String |
+----------------------+
|     Sumeet           |
+----------------------+
1 row in set (0.01 sec)

mysql> select ltrim('    Sumeet    ') as Left_trimmed_String;
+---------------------+
| Left_trimmed_String |
+---------------------+
| Sumeet              |
+---------------------+
1 row in set (0.01 sec)

mysql> select length(ltrim('    Sumeet    ')) as length _Left_trimmed_String;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '_Left_trimmed_String' at line 1
mysql> select length(ltrim('    Sumeet    ')) as length_Left_trimmed_String;
+----------------------------+
| length_Left_trimmed_String |
+----------------------------+
|                         10 |
+----------------------------+
1 row in set (0.01 sec)

mysql> select length(rtrim('    Sumeet    ')) as length_Right_trimmed_String;
+-----------------------------+
| length_Right_trimmed_String |
+-----------------------------+
|                          10 |
+-----------------------------+
1 row in set (0.00 sec)

mysql> select length(rtrim('    Sumeet  ')) as length_Right_trimmed_String;
+-----------------------------+
| length_Right_trimmed_String |
+-----------------------------+
|                          10 |
+-----------------------------+
1 row in set (0.00 sec)

mysql> select length(ltrim('    Sumeet ')) as length_Left_trimmed_String;
+----------------------------+
| length_Left_trimmed_String |
+----------------------------+
|                          7 |
+----------------------------+
1 row in set (0.00 sec)

mysql> select length(ltrim(' Sumeet      ')) as length_Right_trimmed_String;
+-----------------------------+
| length_Right_trimmed_String |
+-----------------------------+
|                          12 |
+-----------------------------+
1 row in set (0.00 sec)

mysql> select length(rtrim(' Sumeet      ')) as length_Right_trimmed_String;
+-----------------------------+
| length_Right_trimmed_String |
+-----------------------------+
|                           7 |
+-----------------------------+
1 row in set (0.00 sec)

mysql> select length(ltrim('    Sumeet ')) as length_Left_trimmed_String;
+----------------------------+
| length_Left_trimmed_String |
+----------------------------+
|                          7 |
+----------------------------+
1 row in set (0.00 sec)

mysql> select length(rtrim('    Sumeet ')) as length_Right_trimmed_String;
+-----------------------------+
| length_Right_trimmed_String |
+-----------------------------+
|                          10 |
+-----------------------------+
1 row in set (0.00 sec)

mysql> select charCode(65);
ERROR 1305 (42000): FUNCTION itvedant.charCode does not exist
mysql> select charCodeAT(65);
ERROR 1305 (42000): FUNCTION itvedant.charCodeAT does not exist
mysql> select atCharCode(65);
ERROR 1305 (42000): FUNCTION itvedant.atCharCode does not exist
mysql> select sqr(65);
ERROR 1305 (42000): FUNCTION itvedant.sqr does not exist
mysql> select ~4;
+----------------------+
| ~4                   |
+----------------------+
| 18446744073709551611 |
+----------------------+
1 row in set (0.00 sec)

mysql> select 10^2;
+------+
| 10^2 |
+------+
|    8 |
+------+
1 row in set (0.00 sec)

mysql> select  12>>1 as right_shift;
+-------------+
| right_shift |
+-------------+
|           6 |
+-------------+
1 row in set (0.00 sec)

mysql> select  12<<1 as left_shift;
+------------+
| left_shift |
+------------+
|         24 |
+------------+
1 row in set (0.00 sec)

mysql> select  18&8|12^3 as Result;
+--------+
| Result |
+--------+
|     15 |
+--------+
1 row in set (0.00 sec)

mysql> select concat("My","Name","Is","Pranit");
+-----------------------------------+
| concat("My","Name","Is","Pranit") |
+-----------------------------------+
| MyNameIsPranit                    |
+-----------------------------------+
1 row in set (0.01 sec)

*/