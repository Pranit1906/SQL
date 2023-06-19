/*
MySQL can rename the column name in two ways:

Using the CHANGE statement
Using the RENAME statement

Using the CHANGE Statement:
The following are the syntax that illustrates the column rename using the CHANGE statement:

ALTER TABLE table_name   
CHANGE COLUMN old_column_name new_column_name Data Type;  

EXAMPLE:- 
mysql> select * from fullstack;
+----+-----------+----------+------------+
| id | class     | timing   | Date       |
+----+-----------+----------+------------+
|  1 | Sql       | 02:23:00 | 1996-05-23 |
|  2 | Sequelize | 07:03:40 | 1999-02-12 |
|  3 | NodeJs    | 03:35:00 | 1986-08-03 |
|  4 | MySql     | 02:00:08 | 1989-03-25 |
|  5 | MongoDb   | 03:41:10 | 1992-09-23 |
+----+-----------+----------+------------+
5 rows in set (0.06 sec)

mysql> alter table fullstack change class subject varchar(25);
Query OK, 0 rows affected (0.17 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> select * from fullstack;
+----+-----------+----------+------------+
| id | subject   | timing   | Date       |
+----+-----------+----------+------------+
|  1 | Sql       | 02:23:00 | 1996-05-23 |
|  2 | Sequelize | 07:03:40 | 1999-02-12 |
|  3 | NodeJs    | 03:35:00 | 1986-08-03 |
|  4 | MySql     | 02:00:08 | 1989-03-25 |
|  5 | MongoDb   | 03:41:10 | 1992-09-23 |
+----+-----------+----------+------------+
5 rows in set (0.00 sec)





Using the RENAME Statement:
To remove the drawback of a CHANGE statement, MySQL proposed the following syntax that illustrates the changing of the column name using a RENAME statement:

ALTER TABLE table_name   
RENAME COLUMN old_column_name TO new_column_name;  


mysql> select * from fullstack;
+----+-----------+----------+----------------+
| id | subs      | Time     | year_month_day |
+----+-----------+----------+----------------+
|  1 | Sql       | 02:23:00 | 1996-05-23     |
|  2 | Sequelize | 07:03:40 | 1999-02-12     |
|  3 | NodeJs    | 03:35:00 | 1986-08-03     |
|  4 | MySql     | 02:00:08 | 1989-03-25     |
|  5 | MongoDb   | 03:41:10 | 1992-09-23     |
+----+-----------+----------+----------------+
5 rows in set (0.00 sec)

mysql> alter table fullstack rename subs to subject;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'to subject' at line 1
mysql> alter table fullstack rename column subs to subject;
Query OK, 0 rows affected (0.02 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> select * from fullstack;
+----+-----------+----------+----------------+
| id | subject   | Time     | year_month_day |
+----+-----------+----------+----------------+
|  1 | Sql       | 02:23:00 | 1996-05-23     |
|  2 | Sequelize | 07:03:40 | 1999-02-12     |
|  3 | NodeJs    | 03:35:00 | 1986-08-03     |
|  4 | MySql     | 02:00:08 | 1989-03-25     |
|  5 | MongoDb   | 03:41:10 | 1992-09-23     |
+----+-----------+----------+----------------+
5 rows in set (0.00 sec)



Renaming Multiple Columns
MySQL also allows us to change the multiple column names within a single statement. If we want to rename multiple column names, we might use the below syntax:

ALTER TABLE table_name   
CHANGE old_column_name1 new_column_name1 Data Type,  
CHANGE old_column_name2 new_column_name2 Data Type,  
...  
...  
CHANGE old_column_nameN new_column_nameN Data Type;  

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
11 rows in set (0.01 sec)

mysql> alter table employee change name Student_Name varchar(25), change salary Student_Salary bigint, change age Student_Age int;
Query OK, 0 rows affected (0.03 sec)
Records: 0  Duplicates: 0  Warnings: 0

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


OR

ALTER TABLE table_name   
RENAME COLUMN old_column_name1 TO new_column_name1,  
RENAME COLUMN old_column_name2 TO new_column_name2,  
...  
...  
RENAME COLUMN old_column_nameN TO new_column_nameN;  

mysql> select * from fullstack;
+----+-----------+----------+------------+
| id | subject   | timing   | Date       |
+----+-----------+----------+------------+
|  1 | Sql       | 02:23:00 | 1996-05-23 |
|  2 | Sequelize | 07:03:40 | 1999-02-12 |
|  3 | NodeJs    | 03:35:00 | 1986-08-03 |
|  4 | MySql     | 02:00:08 | 1989-03-25 |
|  5 | MongoDb   | 03:41:10 | 1992-09-23 |
+----+-----------+----------+------------+
5 rows in set (0.00 sec)

mysql> alter table fullstack rename column subject to subs,rename column timing to Time,rename column Date to year_month_day;
Query OK, 0 rows affected (0.05 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> select * from fullstack;
+----+-----------+----------+----------------+
| id | subs      | Time     | year_month_day |
+----+-----------+----------+----------------+
|  1 | Sql       | 02:23:00 | 1996-05-23     |
|  2 | Sequelize | 07:03:40 | 1999-02-12     |
|  3 | NodeJs    | 03:35:00 | 1986-08-03     |
|  4 | MySql     | 02:00:08 | 1989-03-25     |
|  5 | MongoDb   | 03:41:10 | 1992-09-23     |
+----+-----------+----------+----------------+
5 rows in set (0.00 sec)

*/