/*

mysql> select ceil(3.3);
+-----------+
| ceil(3.3) |
+-----------+
|         4 |
+-----------+
1 row in set (0.00 sec)

mysql> select truncate(11.34,0);
+-------------------+
| truncate(11.34,0) |
+-------------------+
|                11 |
+-------------------+
1 row in set (0.00 sec)

mysql> select truncate(11.34,3);
+-------------------+
| truncate(11.34,3) |
+-------------------+
|             11.34 |
+-------------------+
1 row in set (0.00 sec)

mysql> select truncate(11.34,4);
+-------------------+
| truncate(11.34,4) |
+-------------------+
|             11.34 |
+-------------------+
1 row in set (0.00 sec)

mysql> select truncate(11.34,-1);
+--------------------+
| truncate(11.34,-1) |
+--------------------+
|                 10 |
+--------------------+
1 row in set (0.00 sec)

mysql> select truncate(11.34,-2);
+--------------------+
| truncate(11.34,-2) |
+--------------------+
|                  0 |
+--------------------+
1 row in set (0.00 sec)

mysql> select truncate(112,-2);
+------------------+
| truncate(112,-2) |
+------------------+
|              100 |
+------------------+
1 row in set (0.00 sec)

mysql> select date_diff("2023-06-20","2023-06-10");
ERROR 1046 (3D000): No database selected
mysql> use itvedant;
Database changed
mysql> select date_diff("2023-06-20","2023-06-10");
ERROR 1305 (42000): FUNCTION itvedant.date_diff does not exist
mysql> select datediff("2023-06-20","2023-06-10");
+-------------------------------------+
| datediff("2023-06-20","2023-06-10") |
+-------------------------------------+
|                                  10 |
+-------------------------------------+
1 row in set (0.01 sec)

mysql> select extract(days from '2023-06-20');
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'days from '2023-06-20')' at line 1
mysql> select extract(day from '2023-06-20');
+--------------------------------+
| extract(day from '2023-06-20') |
+--------------------------------+
|                             20 |
+--------------------------------+
1 row in set (0.01 sec)

mysql> select extract(month from '2023-06-20');
+----------------------------------+
| extract(month from '2023-06-20') |
+----------------------------------+
|                                6 |
+----------------------------------+
1 row in set (0.01 sec)

mysql> select extract(year from '2023-06-20');
+---------------------------------+
| extract(year from '2023-06-20') |
+---------------------------------+
|                            2023 |
+---------------------------------+
1 row in set (0.00 sec)

mysql> select current_timestamp();
+---------------------+
| current_timestamp() |
+---------------------+
| 2023-06-20 15:36:14 |
+---------------------+
1 row in set (0.00 sec)

mysql> select date_format(current_timestamp,'%d-%M-%Y');
+-------------------------------------------+
| date_format(current_timestamp,'%d-%M-%Y') |
+-------------------------------------------+
| 20-June-2023                              |
+-------------------------------------------+
1 row in set (0.00 sec)

mysql> select date_format(current_timestamp,'%d-%M-%Y','%h:%i:%s);
    '> select date_format(current_timestamp,'%d-%M-%Y','%h:%i:%s');
    '> ^C
mysql> select date_format(current_timestamp,'%d-%M-%Y','%h:%i:%s');
ERROR 1582 (42000): Incorrect parameter count in the call to native function 'date_format'
mysql> select date_format(current_timestamp(),'%d-%M-%Y','%h:%i:%s');
ERROR 1582 (42000): Incorrect parameter count in the call to native function 'date_format'
mysql> select date_format(current_timestamp(),'%d-%M-%Y','%h:%i:%s');
ERROR 1582 (42000): Incorrect parameter count in the call to native function 'date_format'
mysql> select date_format(current_timestamp(),'%d-%M-%Y, %h:%i:%s');
+-------------------------------------------------------+
| date_format(current_timestamp(),'%d-%M-%Y, %h:%i:%s') |
+-------------------------------------------------------+
| 20-June-2023, 03:39:52                                |
+-------------------------------------------------------+
1 row in set (0.00 sec)

mysql> select date_format(current_timestamp(),'%d-%M-%Y, %h:%i:%s,    %T');
+--------------------------------------------------------------+
| date_format(current_timestamp(),'%d-%M-%Y, %h:%i:%s,    %T') |
+--------------------------------------------------------------+
| 20-June-2023, 03:40:25,    15:40:25                          |
+--------------------------------------------------------------+
1 row in set (0.00 sec)

mysql> select date_format(current_timestamp(),'%d-%M-%Y, %h:%i:%s,    %r');
+--------------------------------------------------------------+
| date_format(current_timestamp(),'%d-%M-%Y, %h:%i:%s,    %r') |
+--------------------------------------------------------------+
| 20-June-2023, 03:40:35,    03:40:35 PM                       |
+--------------------------------------------------------------+
1 row in set (0.00 sec)

mysql> select date_format(current_timestamp(),'%d-%M-%Y,    %r');
+----------------------------------------------------+
| date_format(current_timestamp(),'%d-%M-%Y,    %r') |
+----------------------------------------------------+
| 20-June-2023,    03:40:51 PM                       |
+----------------------------------------------------+
1 row in set (0.00 sec)

mysql> select date_format(current_timestamp(),'%d-%M-%Y,    %T :%p');
+--------------------------------------------------------+
| date_format(current_timestamp(),'%d-%M-%Y,    %T :%p') |
+--------------------------------------------------------+
| 20-June-2023,    15:41:10 :PM                          |
+--------------------------------------------------------+
1 row in set (0.00 sec)

mysql> select date_format(current_timestamp(),'%d-%M-%Y,    %T :%p,   %j');
+--------------------------------------------------------------+
| date_format(current_timestamp(),'%d-%M-%Y,    %T :%p,   %j') |
+--------------------------------------------------------------+
| 20-June-2023,    15:41:21 :PM,   171                         |
+--------------------------------------------------------------+
1 row in set (0.00 sec)

mysql> select date_format(current_timestamp(),'%d-%M-%Y,    %T :%p,   %J');
+--------------------------------------------------------------+
| date_format(current_timestamp(),'%d-%M-%Y,    %T :%p,   %J') |
+--------------------------------------------------------------+
| 20-June-2023,    15:41:35 :PM,   J                           |
+--------------------------------------------------------------+
1 row in set (0.00 sec)

mysql> select date_format(current_timestamp(),'%d-%M-%Y,    %T :%p,   %j');
+--------------------------------------------------------------+
| date_format(current_timestamp(),'%d-%M-%Y,    %T :%p,   %j') |
+--------------------------------------------------------------+
| 20-June-2023,    15:41:39 :PM,   171                         |
+--------------------------------------------------------------+
1 row in set (0.00 sec)

*/

/*

mysql> select least(40, 30,4,12);
+--------------------+
| least(40, 30,4,12) |
+--------------------+
|                  4 |
+--------------------+
1 row in set (0.01 sec)

mysql> select greatest(40, 30,4,12);
+-----------------------+
| greatest(40, 30,4,12) |
+-----------------------+
|                    40 |
+-----------------------+
1 row in set (0.01 sec)

mysql> select max(salary) from employee;
ERROR 1054 (42S22): Unknown column 'salary' in 'field list'
mysql> show tables;
+--------------------+
| Tables_in_itvedant |
+--------------------+
| employee           |
| fullstack          |
| revision           |
| table1             |
| table2             |
+--------------------+
5 rows in set (0.07 sec)

mysql> desc empolyee;
ERROR 1146 (42S02): Table 'itvedant.empolyee' doesn't exist
mysql> desc employee;
+----------------+-------------+------+-----+---------+-------+
| Field          | Type        | Null | Key | Default | Extra |
+----------------+-------------+------+-----+---------+-------+
| id             | int         | NO   | PRI | NULL    |       |
| Student_Name   | varchar(25) | YES  |     | NULL    |       |
| Student_Salary | bigint      | YES  |     | NULL    |       |
| Student_Age    | int         | YES  |     | NULL    |       |
| Date           | date        | YES  |     | NULL    |       |
+----------------+-------------+------+-----+---------+-------+
5 rows in set (0.01 sec)

mysql> select max(Studet_Salary) from employee;
ERROR 1054 (42S22): Unknown column 'Studet_Salary' in 'field list'
mysql> select max(Student_Salary) from employee;
+---------------------+
| max(Student_Salary) |
+---------------------+
|               44000 |
+---------------------+
1 row in set (0.01 sec)

mysql> select avg(Student_Salary) from employee;
+---------------------+
| avg(Student_Salary) |
+---------------------+
|          31781.8182 |
+---------------------+
1 row in set (0.00 sec)

mysql> select sum(Student_Salary) from employee;
+---------------------+
| sum(Student_Salary) |
+---------------------+
|              349600 |
+---------------------+
1 row in set (0.00 sec)

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
11 rows in set (0.00 sec)

mysql> select avg(salary) where id between 1 and 3;
ERROR 1054 (42S22): Unknown column 'salary' in 'field list'
mysql> select avg(salary) from employee where id between 1 and 3;
ERROR 1054 (42S22): Unknown column 'salary' in 'field list'
mysql> select avg(salary) from employee where id between 1 and 3;
ERROR 1054 (42S22): Unknown column 'salary' in 'field list'
mysql> select avg(Student_Salary) from employee where id between 1 and 3;
+---------------------+
| avg(Student_Salary) |
+---------------------+
|          33333.3333 |
+---------------------+
1 row in set (0.02 sec)

mysql> select sum(Student_Salary) from employee where id in (1,2,3);
+---------------------+
| sum(Student_Salary) |
+---------------------+
|              100000 |
+---------------------+
1 row in set (0.00 sec)

mysql> select sum(Student_Salary) from employee group by having id in (1,2,3);
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'having id in (1,2,3)' at line 1
mysql> select sum(Student_Salary) from employee group by having id(1,2,3);
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'having id(1,2,3)' at line 1
mysql> select sum(Student_Salary) from employee group by having salary(<30000);
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'having salary(<30000)' at line 1
mysql> select sum(Student_Salary) from employee group by having salary(>30000);
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'having salary(>30000)' at line 1
mysql> select count(distinct Student_Salary) from employee;
+--------------------------------+
| count(distinct Student_Salary) |
+--------------------------------+
|                             11 |
+--------------------------------+
1 row in set (0.00 sec)

mysql> select sum(Student_Salary) from employee group by having (salary>30000);
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'having (salary>30000)' at line 1
mysql> select sum(Student_Salary) from employee group by having(salary>30000);
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'having(salary>30000)' at line 1
mysql> select sum(Student_Salary) from employee where salary > 30000;
ERROR 1054 (42S22): Unknown column 'salary' in 'where clause'
mysql> select sum(Student_Salary) from employee group by having(Student_Salary>30000);
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'having(Student_Salary>30000)' at line 1
mysql> select sum(Student_Salary) from employee group by having (Student_Salary>30000);
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'having (Student_Salary>30000)' at line 1
mysql> select sum(Student_Salary) from employee where Student_Salary > 30000;
+---------------------+
| sum(Student_Salary) |
+---------------------+
|              225000 |
+---------------------+
1 row in set (0.01 sec)

mysql> select count(salary) from employee;
ERROR 1054 (42S22): Unknown column 'salary' in 'field list'
mysql> select count(Student_Salary) from employee;
+-----------------------+
| count(Student_Salary) |
+-----------------------+
|                    11 |
+-----------------------+
1 row in set (0.00 sec)

*/