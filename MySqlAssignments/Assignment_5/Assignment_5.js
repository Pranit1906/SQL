/*

Assignment

1.write sql query for the following:

1. create database - emp
2.create table - employee with 4 columns
3.To see table structure
	
mysql> create database emp;
Query OK, 1 row affected (0.02 sec)

mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| assignments        |
| ecom_db            |
| emp                |
| information_schema |
| itvedant           |
| joint              |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
9 rows in set (0.03 sec)

mysql> use emp;
Database changed
mysql> create table employee(eid int primary key, ename varchar(20), esalary bigint,dob date);
Query OK, 0 rows affected (0.04 sec)

mysql> desc employee;
+---------+-------------+------+-----+---------+-------+
| Field   | Type        | Null | Key | Default | Extra |
+---------+-------------+------+-----+---------+-------+
| eid     | int         | NO   | PRI | NULL    |       |
| ename   | varchar(20) | YES  |     | NULL    |       |
| esalary | bigint      | YES  |     | NULL    |       |
| dob     | date        | YES  |     | NULL    |       |
+---------+-------------+------+-----+---------+-------+
4 rows in set (0.02 sec)


2. 
eid	 ename	     esalary	      email	             dob
1	 XYZ	     3000.89	   xyz@gmail.com	   1990-08-30
2	 ABC	     2300.90	   abc@gmail.com	   1980-03-21
1] Write Query to insert 2 Records  in above table using single query.
mysql> insert into employee values(1,'XYZ',3000.89,'1990-08-30','xyz@gmail.com'),(2,'ABC',2300.90,'1900-03-21','abc@gmail.com');
Query OK, 2 rows affected (0.01 sec)
Records: 2  Duplicates: 0  Warnings: 0

mysql> select* from employee;
+-----+-------+---------+------------+---------------+
| eid | ename | esalary | dob        | email         |
+-----+-------+---------+------------+---------------+
|   1 | XYZ   | 3000.89 | 1990-08-30 | xyz@gmail.com |
|   2 | ABC   |  2300.9 | 1900-03-21 | abc@gmail.com |
+-----+-------+---------+------------+---------------+
2 rows in set (0.00 sec)

2]Write Query to update esalary to 4000.68 and dob to 1993-08-30  of employee whose eid is 1 in a single query.
mysql> update employee set esalary = 4000.68, dob ='1993-08-30' where eid = 1;
Query OK, 1 row affected (0.01 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> select* from employee;
+-----+-------+---------+------------+---------------+
| eid | ename | esalary | dob        | email         |
+-----+-------+---------+------------+---------------+
|   1 | XYZ   | 4000.68 | 1993-08-30 | xyz@gmail.com |
|   2 | ABC   |  2300.9 | 1900-03-21 | abc@gmail.com |
+-----+-------+---------+------------+---------------+
2 rows in set (0.00 sec)

3] Write Query to delete all records from the table in single query.
mysql> truncate table employee;
Query OK, 0 rows affected (0.04 sec)

mysql> select* from employee;
Empty set (0.00 sec)

 */