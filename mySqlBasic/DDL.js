/*

1.DDL(Data Defination Language):-
 DDL changes the structure of the table like creating a table, deleting a table, altering a table, etc.
 All the command of DDL are auto-committed that means it permanently save all the changes in the database.
 
 Here are some commands that come under DDL:

a.CREATE :- It is used to create a new table in the database.

Syntax:-
CREATE TABLE TABLE_NAME (COLUMN_NAME DATATYPES[,....]);  

Example:-
CREATE TABLE EMPLOYEE(Name VARCHAR2(20), Email VARCHAR2(100), DOB DATE);   

mysql> create table employee (id int primary key not null,name varchar(25) not null, salary bigint,age int);
Query OK, 0 rows affected (0.02 sec)

mysql> select * from employee;
Empty set (0.00 sec)

mysql> desc employee;
+--------+-------------+------+-----+---------+-------+
| Field  | Type        | Null | Key | Default | Extra |
+--------+-------------+------+-----+---------+-------+
| id     | int         | NO   | PRI | NULL    |       |
| name   | varchar(25) | NO   |     | NULL    |       |
| salary | bigint      | YES  |     | NULL    |       |
| age    | int         | YES  |     | NULL    |       |
+--------+-------------+------+-----+---------+-------+
4 rows in set (0.00 sec)



b. DROP: It is used to delete both the structure and record stored in the table.

Syntax:-
DROP TABLE table_name;  

Example:-
DROP TABLE EMPLOYEE;  

mysql> select * from employee;
+----+--------+---------+------+
| id | salary | city    | age  |
+----+--------+---------+------+
|  1 |  25000 | Pranit  |   25 |
|  2 |  26000 | Mohit   |   24 |
|  3 |  27000 | Sanit   |   31 |
|  4 |  21000 | Yogesh  |   27 |
|  5 |  39000 | Mangesh |   23 |
+----+--------+---------+------+

mysql> drop table employee;
Query OK, 0 rows affected (0.03 sec)

mysql> show tables;
+--------------------+
| Tables_in_itvedant |
+--------------------+
| fullstack          |
| table1             |
| table2             |
+--------------------+


c. ALTER:- It is used to alter the structure of the database. This change could be either 
to modify the characteristics of an existing attribute or probably to add a new attribute.

Syntax:-To add a new column in the table
ALTER TABLE table_name ADD column_name COLUMN-definition;    

To modify existing column in the table:
ALTER TABLE table_name MODIFY(column_definitions....);  

EXAMPLE:-
1.) ALTER TABLE STU_DETAILS ADD(ADDRESS VARCHAR2(20));  

mysql> alter table employee add Date date;
Query OK, 0 rows affected (0.03 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> desc employee;
+--------+-------------+------+-----+---------+-------+
| Field  | Type        | Null | Key | Default | Extra |
+--------+-------------+------+-----+---------+-------+
| id     | int         | NO   | PRI | NULL    |       |
| name   | varchar(25) | NO   |     | NULL    |       |
| salary | bigint      | YES  |     | NULL    |       |
| age    | int         | YES  |     | NULL    |       |
| Date   | date        | YES  |     | NULL    |       |
+--------+-------------+------+-----+---------+-------+
5 rows in set (0.00 sec)


2.)ALTER TABLE STU_DETAILS MODIFY (NAME VARCHAR2(20));  

mysql> alter table employee modify name varchar(20);
Query OK, 0 rows affected (0.06 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> desc employee;
+--------+-------------+------+-----+---------+-------+
| Field  | Type        | Null | Key | Default | Extra |
+--------+-------------+------+-----+---------+-------+
| id     | int         | NO   | PRI | NULL    |       |
| name   | varchar(20) | YES  |     | NULL    |       |
| salary | bigint      | YES  |     | NULL    |       |
| age    | int         | YES  |     | NULL    |       |
| Date   | date        | YES  |     | NULL    |       |
+--------+-------------+------+-----+---------+-------+
5 rows in set (0.00 sec)


d. TRUNCATE:- It is used to delete all the rows from the table and free the space containing the table.

Syntax:-
TRUNCATE TABLE table_name;  

Example:-
TRUNCATE TABLE EMPLOYEE;  

mysql> select * from employee;
+----+--------+---------+------+
| id | salary | city    | age  |
+----+--------+---------+------+
|  1 |  25000 | Pranit  |   25 |
|  2 |  26000 | Mohit   |   24 |
|  3 |  27000 | Sanit   |   31 |
|  4 |  21000 | Yogesh  |   27 |
|  5 |  39000 | Mangesh |   23 |
+----+--------+---------+------+

mysql> truncate table employee;
Query OK, 0 rows affected (0.04 sec)



*/