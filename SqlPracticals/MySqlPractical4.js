/*

mysql> create table Manager_1 (m_id int primary key, m_name varchar(30), Department varchar(30));
Query OK, 0 rows affected (0.07 sec)

mysql> desc Manager_1;
+------------+-------------+------+-----+---------+-------+
| Field      | Type        | Null | Key | Default | Extra |
+------------+-------------+------+-----+---------+-------+
| m_id       | int         | NO   | PRI | NULL    |       |
| m_name     | varchar(30) | YES  |     | NULL    |       |
| Department | varchar(30) | YES  |     | NULL    |       |
+------------+-------------+------+-----+---------+-------+
3 rows in set (0.00 sec)

mysql> create Employee_1(e_id int primary key, e_name varhcar(20), m_id int, foreign key(m_id) references Manager_1 (m_id))
    -> create Employee_1(e_id int primary key, e_name varhcar(20), m_id int, foreign key(m_id) references Manager_1 (m_id));
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'Employee_1(e_id int primary key, e_name varhcar(20), m_id int, foreign key(m_id)' at line 1
mysql> ^C
mysql> create Employee_1(e_id int primary key, e_name varhcar(20), m_id int, foreign key(m_id) references Manager_1 (m_id));
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'Employee_1(e_id int primary key, e_name varhcar(20), m_id int, foreign key(m_id)' at line 1
mysql> create Employee_1(e_id int primary key, e_name varhcar(20), m_id int, foriegn key(m_id) references Manager_1 (m_id));
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'Employee_1(e_id int primary key, e_name varhcar(20), m_id int, foriegn key(m_id)' at line 1
mysql> create table Employee_1(e_id int primary key, e_name varhcar(20), m_id int, foriegn key(m_id) references Manager_1 (m_id));
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'varhcar(20), m_id int, foriegn key(m_id) references Manager_1 (m_id))' at line 1
mysql> create table Employee_1(e_id int primary key, e_name varchar(20), m_id int, foriegn key(m_id) references Manager_1 (m_id));
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'key(m_id) references Manager_1 (m_id))' at line 1
mysql> create table Employee_1(e_id int primary key, e_name varchar(20), m_id int, foreign key(m_id) references Manager_1 (m_id));
Query OK, 0 rows affected (0.04 sec)

mysql> desc Employee_1;
+--------+-------------+------+-----+---------+-------+
| Field  | Type        | Null | Key | Default | Extra |
+--------+-------------+------+-----+---------+-------+
| e_id   | int         | NO   | PRI | NULL    |       |
| e_name | varchar(20) | YES  |     | NULL    |       |
| m_id   | int         | YES  | MUL | NULL    |       |
+--------+-------------+------+-----+---------+-------+
3 rows in set (0.00 sec)

mysql> insert into Manager_1 values(101, 'AB','IT'),(102,'ABC','Account'),(103,'BDC','Operations');
Query OK, 3 rows affected (0.01 sec)
Records: 3  Duplicates: 0  Warnings: 0

mysql> select * from Manager_1;
+------+--------+------------+
| m_id | m_name | Department |
+------+--------+------------+
|  101 | AB     | IT         |
|  102 | ABC    | Account    |
|  103 | BDC    | Operations |
+------+--------+------------+
3 rows in set (0.00 sec)

mysql> insert into Employee values(1,'Ram',102),(2,'Shayam',101),(3,'Ravan',103),(4,'Sita',101),(5,'Hanuman',102);
ERROR 1136 (21S01): Column count doesn't match value count at row 1
mysql> insert into Employee_1 values(1,'Ram',102),(2,'Shayam',101),(3,'Ravan',103),(4,'Sita',101),(5,'Hanuman',102);
Query OK, 5 rows affected (0.04 sec)
Records: 5  Duplicates: 0  Warnings: 0

mysql> select * from Employee_1;
+------+---------+------+
| e_id | e_name  | m_id |
+------+---------+------+
|    1 | Ram     |  102 |
|    2 | Shayam  |  101 |
|    3 | Ravan   |  103 |
|    4 | Sita    |  101 |
|    5 | Hanuman |  102 |
+------+---------+------+
5 rows in set (0.00 sec)

mysql> select Employee_1.e_id, Employee_1.e_name,Manager_1.m_id from Employee_1 inner join Manager_1 on Manager_1.m_id = Employee_1.m_id
    -> select Employee_1.e_id, Employee_1.e_name,Manager_1.m_id from Employee_1 inner join Manager_1 on Manager_1.m_id = Employee_1.m_id;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'select Employee_1.e_id, Employee_1.e_name,Manager_1.m_id from Employee_1 inner j' at line 2
mysql> select Employee_1.e_id, Employee_1.e_name,Manager_1.m_id from Employee_1 inner join Manager_1 on Manager_1.m_id = Employee_1.m_id;
+------+---------+------+
| e_id | e_name  | m_id |
+------+---------+------+
|    2 | Shayam  |  101 |
|    4 | Sita    |  101 |
|    1 | Ram     |  102 |
|    5 | Hanuman |  102 |
|    3 | Ravan   |  103 |
+------+---------+------+
5 rows in set (0.00 sec)

mysql> select Employee_1.e_id, Employee_1.e_name,Manager_1.m_name,Manger_1.m_department from Employee_1 inner join Manager_1 on Manager_1.m_id = Employee_1.m_id;
ERROR 1054 (42S22): Unknown column 'Manger_1.m_department' in 'field list'
mysql> select Employee_1.e_id, Employee_1.e_name,Manager_1.m_name,Manger_1.m_Department from Employee_1 inner join Manager_1 on Manager_1.m_id = Employee_1.m_id;
ERROR 1054 (42S22): Unknown column 'Manger_1.m_Department' in 'field list'
mysql>
mysql>
mysql> select Employee_1.e_id, Employee_1.e_name,Manager_1.m_name,Manger_1.Department from Employee_1 inner join Manager_1 on Manager_1.m_id = Employee_1.m_id;
ERROR 1054 (42S22): Unknown column 'Manger_1.Department' in 'field list'
mysql> select Employee_1.e_id, Employee_1.e_name,Manager_1.m_name,Manager_1.Department from Employee_1 inner join Manager_1 on Manager_1.m_id = Employee_1.m_id;
+------+---------+--------+------------+
| e_id | e_name  | m_name | Department |
+------+---------+--------+------------+
|    2 | Shayam  | AB     | IT         |
|    4 | Sita    | AB     | IT         |
|    1 | Ram     | ABC    | Account    |
|    5 | Hanuman | ABC    | Account    |
|    3 | Ravan   | BDC    | Operations |
+------+---------+--------+------------+
5 rows in set (0.00 sec)



*/

/*
JOINS-----------------------------------------------------------------------------------
mysql> desc Teacher;
+-----------+-------------+------+-----+---------+-------+
| Field     | Type        | Null | Key | Default | Extra |
+-----------+-------------+------+-----+---------+-------+
| T_id      | int         | NO   | PRI | NULL    |       |
| T_name    | varchar(20) | NO   |     | NULL    |       |
| T_contact | bigint      | YES  |     | NULL    |       |
+-----------+-------------+------+-----+---------+-------+
3 rows in set (0.00 sec)

mysql> desc Student;
+---------+-------------+------+-----+---------+-------+
| Field   | Type        | Null | Key | Default | Extra |
+---------+-------------+------+-----+---------+-------+
| S_id    | int         | NO   | PRI | NULL    |       |
| S_name  | varchar(20) | NO   |     | NULL    |       |
| S_age   | int         | NO   |     | NULL    |       |
| contact | bigint      | YES  |     | NULL    |       |
+---------+-------------+------+-----+---------+-------+
4 rows in set (0.00 sec)

mysql> insert into Teacher values(1,'A',123456),(2,'B',234567),(3,'C',345678),(4,'D',456789),(5,'E',567891);
Query OK, 5 rows affected (0.01 sec)
Records: 5  Duplicates: 0  Warnings: 0

mysql> insert into Student values(101,'ram',25,0123456),(102,'sham',23,0234567),(103,'sita',20,1345678),(104,'dharam',27,2456789),(105,'yog',19,1567891);
Query OK, 5 rows affected (0.02 sec)
Records: 5  Duplicates: 0  Warnings: 0

mysql> select*from Teacher;
+------+--------+-----------+
| T_id | T_name | T_contact |
+------+--------+-----------+
|    1 | A      |    123456 |
|    2 | B      |    234567 |
|    3 | C      |    345678 |
|    4 | D      |    456789 |
|    5 | E      |    567891 |
+------+--------+-----------+
5 rows in set (0.00 sec)

mysql> select * from student;
+------+--------+-------+---------+
| S_id | S_name | S_age | contact |
+------+--------+-------+---------+
|  101 | ram    |    25 |  123456 |
|  102 | sham   |    23 |  234567 |
|  103 | sita   |    20 | 1345678 |
|  104 | dharam |    27 | 2456789 |
|  105 | yog    |    19 | 1567891 |
+------+--------+-------+---------+
5 rows in set (0.00 sec)

mysql> drop table student;
Query OK, 0 rows affected (0.04 sec)

mysql> select * from student;
ERROR 1146 (42S02): Table 'itvedant.student' doesn't exist
mysql> create table Student(S_id int primary key,S_name varchar(20) not null, S_age int not null, contact bigint);
Query OK, 0 rows affected (0.04 sec)

mysql> insert into Student values(1,'ram',25,0123456),(2,'sham',23,0234567),(3,'sita',20,1345678),(4,'dharam',27,2456789),(5,'yog',19,1567891);
Query OK, 5 rows affected (0.02 sec)
Records: 5  Duplicates: 0  Warnings: 0

mysql> select * from Student;
+------+--------+-------+---------+
| S_id | S_name | S_age | contact |
+------+--------+-------+---------+
|    1 | ram    |    25 |  123456 |
|    2 | sham   |    23 |  234567 |
|    3 | sita   |    20 | 1345678 |
|    4 | dharam |    27 | 2456789 |
|    5 | yog    |    19 | 1567891 |
+------+--------+-------+---------+
5 rows in set (0.00 sec)

mysql> insert into Student values(6,'yam',20,3123456),(7,'bharm',29,3234567),(8,'mitali',29,9745678),(9,'pramesh',31,6656789),(10,'moghe',22,34137891);
Query OK, 5 rows affected (0.01 sec)
Records: 5  Duplicates: 0  Warnings: 0

mysql> select * from Student;
+------+---------+-------+----------+
| S_id | S_name  | S_age | contact  |
+------+---------+-------+----------+
|    1 | ram     |    25 |   123456 |
|    2 | sham    |    23 |   234567 |
|    3 | sita    |    20 |  1345678 |
|    4 | dharam  |    27 |  2456789 |
|    5 | yog     |    19 |  1567891 |
|    6 | yam     |    20 |  3123456 |
|    7 | bharm   |    29 |  3234567 |
|    8 | mitali  |    29 |  9745678 |
|    9 | pramesh |    31 |  6656789 |
|   10 | moghe   |    22 | 34137891 |
+------+---------+-------+----------+
10 rows in set (0.00 sec)

mysql> insert into Student values(11,'hoje',31,4323456),(12,'bhaghe',19,3344567),(13,'chetali',22,7745678),(14,'pramod',35,89456789),(15,'bapat',25,984137891);
Query OK, 5 rows affected (0.01 sec)
Records: 5  Duplicates: 0  Warnings: 0

mysql> select * from Student;
+------+---------+-------+-----------+
| S_id | S_name  | S_age | contact   |
+------+---------+-------+-----------+
|    1 | ram     |    25 |    123456 |
|    2 | sham    |    23 |    234567 |
|    3 | sita    |    20 |   1345678 |
|    4 | dharam  |    27 |   2456789 |
|    5 | yog     |    19 |   1567891 |
|    6 | yam     |    20 |   3123456 |
|    7 | bharm   |    29 |   3234567 |
|    8 | mitali  |    29 |   9745678 |
|    9 | pramesh |    31 |   6656789 |
|   10 | moghe   |    22 |  34137891 |
|   11 | hoje    |    31 |   4323456 |
|   12 | bhaghe  |    19 |   3344567 |
|   13 | chetali |    22 |   7745678 |
|   14 | pramod  |    35 |  89456789 |
|   15 | bapat   |    25 | 984137891 |
+------+---------+-------+-----------+
15 rows in set (0.00 sec)

mysql> select * from Teacher inner join Student on Teacher.T_id = Student.S_id;
+------+--------+-----------+------+--------+-------+---------+
| T_id | T_name | T_contact | S_id | S_name | S_age | contact |
+------+--------+-----------+------+--------+-------+---------+
|    1 | A      |    123456 |    1 | ram    |    25 |  123456 |
|    2 | B      |    234567 |    2 | sham   |    23 |  234567 |
|    3 | C      |    345678 |    3 | sita   |    20 | 1345678 |
|    4 | D      |    456789 |    4 | dharam |    27 | 2456789 |
|    5 | E      |    567891 |    5 | yog    |    19 | 1567891 |
+------+--------+-----------+------+--------+-------+---------+



mysql> select * from Student left join Teacher on Teacher.T_id = Student.S_id;
+------+---------+-------+-----------+------+--------+-----------+
| S_id | S_name  | S_age | contact   | T_id | T_name | T_contact |
+------+---------+-------+-----------+------+--------+-----------+
|    1 | ram     |    25 |    123456 |    1 | A      |    123456 |
|    2 | sham    |    23 |    234567 |    2 | B      |    234567 |
|    3 | sita    |    20 |   1345678 |    3 | C      |    345678 |
|    4 | dharam  |    27 |   2456789 |    4 | D      |    456789 |
|    5 | yog     |    19 |   1567891 |    5 | E      |    567891 |
|    6 | yam     |    20 |   3123456 | NULL | NULL   |      NULL |
|    7 | bharm   |    29 |   3234567 | NULL | NULL   |      NULL |
|    8 | mitali  |    29 |   9745678 | NULL | NULL   |      NULL |
|    9 | pramesh |    31 |   6656789 | NULL | NULL   |      NULL |
|   10 | moghe   |    22 |  34137891 | NULL | NULL   |      NULL |
|   11 | hoje    |    31 |   4323456 | NULL | NULL   |      NULL |
|   12 | bhaghe  |    19 |   3344567 | NULL | NULL   |      NULL |
|   13 | chetali |    22 |   7745678 | NULL | NULL   |      NULL |
|   14 | pramod  |    35 |  89456789 | NULL | NULL   |      NULL |
|   15 | bapat   |    25 | 984137891 | NULL | NULL   |      NULL |
+------+---------+-------+-----------+------+--------+-----------+
15 rows in set (0.00 sec)

mysql> select * from Teacher right join Student on Teacher.T_id = Student.S_id;
+------+--------+-----------+------+---------+-------+-----------+
| T_id | T_name | T_contact | S_id | S_name  | S_age | contact   |
+------+--------+-----------+------+---------+-------+-----------+
|    1 | A      |    123456 |    1 | ram     |    25 |    123456 |
|    2 | B      |    234567 |    2 | sham    |    23 |    234567 |
|    3 | C      |    345678 |    3 | sita    |    20 |   1345678 |
|    4 | D      |    456789 |    4 | dharam  |    27 |   2456789 |
|    5 | E      |    567891 |    5 | yog     |    19 |   1567891 |
| NULL | NULL   |      NULL |    6 | yam     |    20 |   3123456 |
| NULL | NULL   |      NULL |    7 | bharm   |    29 |   3234567 |
| NULL | NULL   |      NULL |    8 | mitali  |    29 |   9745678 |
| NULL | NULL   |      NULL |    9 | pramesh |    31 |   6656789 |
| NULL | NULL   |      NULL |   10 | moghe   |    22 |  34137891 |
| NULL | NULL   |      NULL |   11 | hoje    |    31 |   4323456 |
| NULL | NULL   |      NULL |   12 | bhaghe  |    19 |   3344567 |
| NULL | NULL   |      NULL |   13 | chetali |    22 |   7745678 |
| NULL | NULL   |      NULL |   14 | pramod  |    35 |  89456789 |
| NULL | NULL   |      NULL |   15 | bapat   |    25 | 984137891 |
+------+--------+-----------+------+---------+-------+-----------+
15 rows in set (0.00 sec)


mysql> select * from Teacher left join Student on Teacher.T_id = Student.S_id;
+------+--------+-----------+------+--------+-------+---------+
| T_id | T_name | T_contact | S_id | S_name | S_age | contact |
+------+--------+-----------+------+--------+-------+---------+
|    1 | A      |    123456 |    1 | ram    |    25 |  123456 |
|    2 | B      |    234567 |    2 | sham   |    23 |  234567 |
|    3 | C      |    345678 |    3 | sita   |    20 | 1345678 |
|    4 | D      |    456789 |    4 | dharam |    27 | 2456789 |
|    5 | E      |    567891 |    5 | yog    |    19 | 1567891 |
+------+--------+-----------+------+--------+-------+---------+
5 rows in set (0.00 sec)

*/