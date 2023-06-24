/*


mysql> create table table_2 (name varchar(25), Department varchar(30));
Query OK, 0 rows affected (0.06 sec)

mysql> desc table_1;
+------------+-------------+------+-----+---------+-------+
| Field      | Type        | Null | Key | Default | Extra |
+------------+-------------+------+-----+---------+-------+
| id         | int         | NO   | PRI | NULL    |       |
| name       | varchar(25) | YES  |     | NULL    |       |
| Department | varchar(30) | YES  |     | NULL    |       |
+------------+-------------+------+-----+---------+-------+
3 rows in set (0.01 sec)

mysql> desc table_2;
+------------+-------------+------+-----+---------+-------+
| Field      | Type        | Null | Key | Default | Extra |
+------------+-------------+------+-----+---------+-------+
| name       | varchar(25) | YES  |     | NULL    |       |
| Department | varchar(30) | YES  |     | NULL    |       |
+------------+-------------+------+-----+---------+-------+
2 rows in set (0.00 sec)

mysql> insert into table_1 values(1,'Pranit','IT'),(2,'Sanit','IT'),(3,'Yogesh','Operations'),(4,'Mangesh','Accounts'),(5,'Paresh','Operations'),(6,'Mayuresh','Accounts');
Query OK, 6 rows affected (0.02 sec)
Records: 6  Duplicates: 0  Warnings: 0

mysql> insert into table_2 values('Pranit23','IT'),('Sanit23','Accounts'),('Yogesh453','IT'),('Mangesh54','Accounts'),('Paresh43','Operations');
Query OK, 5 rows affected (0.02 sec)
Records: 5  Duplicates: 0  Warnings: 0

mysql> select * from table_1;
+----+----------+------------+
| id | name     | Department |
+----+----------+------------+
|  1 | Pranit   | IT         |
|  2 | Sanit    | IT         |
|  3 | Yogesh   | Operations |
|  4 | Mangesh  | Accounts   |
|  5 | Paresh   | Operations |
|  6 | Mayuresh | Accounts   |
+----+----------+------------+
6 rows in set (0.00 sec)

mysql> select * from table_2;
+-----------+------------+
| name      | Department |
+-----------+------------+
| Pranit23  | IT         |
| Sanit23   | Accounts   |
| Yogesh453 | IT         |
| Mangesh54 | Accounts   |
| Paresh43  | Operations |
+-----------+------------+
5 rows in set (0.00 sec)

mysql> select * from table_2 natural join table_1;
Empty set (0.00 sec)

mysql> select * from table_1 natural join table_2;
Empty set (0.00 sec)

mysql> show tables;
+-----------------+
| Tables_in_joint |
+-----------------+
| table_1         |
| table_2         |
+-----------------+
2 rows in set (0.00 sec)

mysql> alter table table_1 rename name to Mname;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'to Mname' at line 1
mysql> alter table table_1 rename column name to Mname;
Query OK, 0 rows affected (0.03 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> select * from table_1 natural join table_2;
+------------+----+----------+-----------+
| Department | id | Mname    | name      |
+------------+----+----------+-----------+
| IT         |  1 | Pranit   | Yogesh453 |
| IT         |  1 | Pranit   | Pranit23  |
| IT         |  2 | Sanit    | Yogesh453 |
| IT         |  2 | Sanit    | Pranit23  |
| Operations |  3 | Yogesh   | Paresh43  |
| Accounts   |  4 | Mangesh  | Mangesh54 |
| Accounts   |  4 | Mangesh  | Sanit23   |
| Operations |  5 | Paresh   | Paresh43  |
| Accounts   |  6 | Mayuresh | Mangesh54 |
| Accounts   |  6 | Mayuresh | Sanit23   |
+------------+----+----------+-----------+
10 rows in set (0.00 sec)

mysql> alter table table_2 rename column name to Ename;
Query OK, 0 rows affected (0.02 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> select * from table_1 natural join table_2;
+------------+----+----------+-----------+
| Department | id | Mname    | Ename     |
+------------+----+----------+-----------+
| IT         |  1 | Pranit   | Yogesh453 |
| IT         |  1 | Pranit   | Pranit23  |
| IT         |  2 | Sanit    | Yogesh453 |
| IT         |  2 | Sanit    | Pranit23  |
| Operations |  3 | Yogesh   | Paresh43  |
| Accounts   |  4 | Mangesh  | Mangesh54 |
| Accounts   |  4 | Mangesh  | Sanit23   |
| Operations |  5 | Paresh   | Paresh43  |
| Accounts   |  6 | Mayuresh | Mangesh54 |
| Accounts   |  6 | Mayuresh | Sanit23   |
+------------+----+----------+-----------+
10 rows in set (0.00 sec)

mysql> select * from table_2 natural join table_1;
+------------+-----------+----+----------+
| Department | Ename     | id | Mname    |
+------------+-----------+----+----------+
| IT         | Yogesh453 |  1 | Pranit   |
| IT         | Pranit23  |  1 | Pranit   |
| IT         | Yogesh453 |  2 | Sanit    |
| IT         | Pranit23  |  2 | Sanit    |
| Operations | Paresh43  |  3 | Yogesh   |
| Accounts   | Mangesh54 |  4 | Mangesh  |
| Accounts   | Sanit23   |  4 | Mangesh  |
| Operations | Paresh43  |  5 | Paresh   |
| Accounts   | Mangesh54 |  6 | Mayuresh |
| Accounts   | Sanit23   |  6 | Mayuresh |
+------------+-----------+----+----------+
10 rows in set (0.00 sec)

mysql> alter table table_2 rename Ename to Mname;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'to Mname' at line 1
mysql> select * from table_1;
+----+----------+------------+
| id | Mname    | Department |
+----+----------+------------+
|  1 | Pranit   | IT         |
|  2 | Sanit    | IT         |
|  3 | Yogesh   | Operations |
|  4 | Mangesh  | Accounts   |
|  5 | Paresh   | Operations |
|  6 | Mayuresh | Accounts   |
+----+----------+------------+
6 rows in set (0.00 sec)

mysql> select * from table_2;
+-----------+------------+
| Ename     | Department |
+-----------+------------+
| Pranit23  | IT         |
| Sanit23   | Accounts   |
| Yogesh453 | IT         |
| Mangesh54 | Accounts   |
| Paresh43  | Operations |
+-----------+------------+
5 rows in set (0.00 sec)

mysql> alter table table_1 rename Mname to Ename;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'to Ename' at line 1
mysql> alter table table_1 rename Mname to E_name;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'to E_name' at line 1
mysql> alter table table_1 Modify E_name;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '' at line 1
mysql> alter table table_1 Modify E_name varchar(20);
ERROR 1054 (42S22): Unknown column 'E_name' in 'table_1'
mysql> alter table table_1 Modify Mname to E_name varchar(20);
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'to E_name varchar(20)' at line 1
mysql> alter table table_1 rename column Mname to E_name;
Query OK, 0 rows affected (0.05 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> alter table table_2 rename column Ename to M_name;
Query OK, 0 rows affected (0.03 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> select * from table_2 natural join table_1;
+------------+-----------+----+----------+
| Department | M_name    | id | E_name   |
+------------+-----------+----+----------+
| IT         | Yogesh453 |  1 | Pranit   |
| IT         | Pranit23  |  1 | Pranit   |
| IT         | Yogesh453 |  2 | Sanit    |
| IT         | Pranit23  |  2 | Sanit    |
| Operations | Paresh43  |  3 | Yogesh   |
| Accounts   | Mangesh54 |  4 | Mangesh  |
| Accounts   | Sanit23   |  4 | Mangesh  |
| Operations | Paresh43  |  5 | Paresh   |
| Accounts   | Mangesh54 |  6 | Mayuresh |
| Accounts   | Sanit23   |  6 | Mayuresh |
+------------+-----------+----+----------+
10 rows in set (0.00 sec)

mysql>


*/

/*

mysql> create table employee_self (e_id int primary key, e_name varchar(20), m_id int, foreign key(m_id) references employee_self (e_id));
Query OK, 0 rows affected (0.04 sec)

mysql> desc employee_self;
+--------+-------------+------+-----+---------+-------+
| Field  | Type        | Null | Key | Default | Extra |
+--------+-------------+------+-----+---------+-------+
| e_id   | int         | NO   | PRI | NULL    |       |
| e_name | varchar(20) | YES  |     | NULL    |       |
| m_id   | int         | YES  | MUL | NULL    |       |
+--------+-------------+------+-----+---------+-------+
3 rows in set (0.00 sec)

mysql> insert into employee_self values(1,'A',8),(2,'B',8),(3,'C',8),(4,'D',8),(5,'E',8),(6,'F',8),(7,'G',8),(8,'H',9),(9,'I','NULL');
ERROR 1452 (23000): Cannot add or update a child row: a foreign key constraint fails (`joint`.`employee_self`, CONSTRAINT `employee_self_ibfk_1` FOREIGN KEY (`m_id`) REFERENCES `employee_self` (`e_id`))
mysql> truncate employee_self;
Query OK, 0 rows affected (0.05 sec)

mysql> desc employee_self;
+--------+-------------+------+-----+---------+-------+
| Field  | Type        | Null | Key | Default | Extra |
+--------+-------------+------+-----+---------+-------+
| e_id   | int         | NO   | PRI | NULL    |       |
| e_name | varchar(20) | YES  |     | NULL    |       |
| m_id   | int         | YES  | MUL | NULL    |       |
+--------+-------------+------+-----+---------+-------+
3 rows in set (0.00 sec)

mysql> Drop employee_self;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'employee_self' at line 1
mysql> Drop table employee_self;
Query OK, 0 rows affected (0.05 sec)

mysql> desc employee_self;
ERROR 1146 (42S02): Table 'joint.employee_self' doesn't exist
mysql> create table employee_self (e_id int primary key, e_name varchar(20), m_id int);
Query OK, 0 rows affected (0.04 sec)

mysql> insert into employee_self values(1,'A',8),(2,'B',8),(3,'C',8),(4,'D',8),(5,'E',8),(6,'F',8),(7,'G',8),(8,'H',9),(9,'I','NULL');
ERROR 1366 (HY000): Incorrect integer value: 'NULL' for column 'm_id' at row 9
mysql> insert into employee_self values(1,'A',8),(2,'B',8),(3,'C',8),(4,'D',8),(5,'E',8),(6,'F',8),(7,'G',8),(8,'H',9),(9,'I',default);
Query OK, 9 rows affected (0.01 sec)
Records: 9  Duplicates: 0  Warnings: 0

mysql> select * from employee_self;
+------+--------+------+
| e_id | e_name | m_id |
+------+--------+------+
|    1 | A      |    8 |
|    2 | B      |    8 |
|    3 | C      |    8 |
|    4 | D      |    8 |
|    5 | E      |    8 |
|    6 | F      |    8 |
|    7 | G      |    8 |
|    8 | H      |    9 |
|    9 | I      | NULL |
+------+--------+------+
9 rows in set (0.00 sec)

mysql> select A1.e_id, A1.e_name,B1.e_name from employee_self as A1, employee as B1 where A1.e_id = B1.m_id;
ERROR 1146 (42S02): Table 'joint.employee' doesn't exist
mysql> select A1.e_id, A1.e_name,B1.e_name from employee_self as A1, employee_self as B1 where A1.e_id = B1.m_id;
+------+--------+--------+
| e_id | e_name | e_name |
+------+--------+--------+
|    8 | H      | A      |
|    8 | H      | B      |
|    8 | H      | C      |
|    8 | H      | D      |
|    8 | H      | E      |
|    8 | H      | F      |
|    8 | H      | G      |
|    9 | I      | H      |
+------+--------+--------+
8 rows in set (0.00 sec)

mysql> select A1.e_id,B1.e_name, A1.e_name from employee_self as A1, employee_self as B1 where A1.e_id = B1.m_id;
+------+--------+--------+
| e_id | e_name | e_name |
+------+--------+--------+
|    8 | A      | H      |
|    8 | B      | H      |
|    8 | C      | H      |
|    8 | D      | H      |
|    8 | E      | H      |
|    8 | F      | H      |
|    8 | G      | H      |
|    9 | H      | I      |
+------+--------+--------+
8 rows in set (0.00 sec)

mysql> select A1.e_id,B1.e_name as employee_name, A1.e_name as manager_name from employee_self as A1, employee_self as B1 where A1.e_id = B1.m_id;
+------+---------------+--------------+
| e_id | employee_name | manager_name |
+------+---------------+--------------+
|    8 | A             | H            |
|    8 | B             | H            |
|    8 | C             | H            |
|    8 | D             | H            |
|    8 | E             | H            |
|    8 | F             | H            |
|    8 | G             | H            |
|    9 | H             | I            |
+------+---------------+--------------+
8 rows in set (0.00 sec)

mysql> select A1.e_id, B1.e_name as Emp_Name, B1.e_name as Manger_Name from employee_self as A1, employee_self as B1 where A1.e_id = B1.m_id;
+------+----------+-------------+
| e_id | Emp_Name | Manger_Name |
+------+----------+-------------+
|    8 | A        | A           |
|    8 | B        | B           |
|    8 | C        | C           |
|    8 | D        | D           |
|    8 | E        | E           |
|    8 | F        | F           |
|    8 | G        | G           |
|    9 | H        | H           |
+------+----------+-------------+
8 rows in set (0.00 sec)

mysql> select A1.e_id, B1.e_name as Emp_Name, A1.e_name as Manger_Name from employee_self as A1, employee_self as B1 where A1.e_id = B1.m_id;
+------+----------+-------------+
| e_id | Emp_Name | Manger_Name |
+------+----------+-------------+
|    8 | A        | H           |
|    8 | B        | H           |
|    8 | C        | H           |
|    8 | D        | H           |
|    8 | E        | H           |
|    8 | F        | H           |
|    8 | G        | H           |
|    9 | H        | I           |
+------+----------+-------------+
8 rows in set (0.00 sec)

mysql> select A1.e_name, B1.e_name as Emp_Name, A1.e_id as Manger_Name from employee_self as A1, employee_self as B1 where A1.e_id = B1.m_id;
+--------+----------+-------------+
| e_name | Emp_Name | Manger_Name |
+--------+----------+-------------+
| H      | A        |           8 |
| H      | B        |           8 |
| H      | C        |           8 |
| H      | D        |           8 |
| H      | E        |           8 |
| H      | F        |           8 |
| H      | G        |           8 |
| I      | H        |           9 |
+--------+----------+-------------+
8 rows in set (0.00 sec)


*/