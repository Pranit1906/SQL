/*

2.DML(Data Manipulation Language):-
DML commands are used to modify the database. It is responsible for all form of changes in the database.
The command of DML is not auto-committed that means it can't permanently save all the changes in the database. 
They can be rollback.

Here are some commands that come under DML:-
a. INSERT:- The INSERT statement is a SQL query. It is used to insert data into the row of a table.

Syntax:-
INSERT INTO TABLE_NAME (col1, col2, col3,.... col N)  VALUES (value1, value2, value3, .... valueN);  

Or
INSERT INTO TABLE_NAME VALUES (value1, value2, value3, .... valueN);    

For example:-
INSERT INTO javatpoint (Author, Subject) VALUES ("Sonoo", "DBMS");  

mysql> insert into employee(id, name, salary, age, date) values(1, 'Pranit', 35000, 26,'1997-06-19'),(2, 'Sanit', 40000, 18,'2004-07-26'),(3, 'Soumitra', 25000, 29,'1993-09-15'),(4, 'Monu', 27000, 23,'1987-03-10'),(5, 'Yogesh', 31000, 26,'1998-03-29');
Query OK, 5 rows affected (0.05 sec)
Records: 5  Duplicates: 0  Warnings: 0

mysql> select * from employee;
+----+----------+--------+------+------------+
| id | name     | salary | age  | Date       |
+----+----------+--------+------+------------+
|  1 | Pranit   |  35000 |   26 | 1997-06-19 |
|  2 | Sanit    |  40000 |   18 | 2004-07-26 |
|  3 | Soumitra |  25000 |   29 | 1993-09-15 |
|  4 | Monu     |  27000 |   23 | 1987-03-10 |
|  5 | Yogesh   |  31000 |   26 | 1998-03-29 |
+----+----------+--------+------+------------+


mysql> insert into employee values(6, 'Pramod', 28000, 28,'1987-12-09'),(7, 'Sonu', 42000, 24,'1995-07-16'),(8, 'Goma', 19000, 19,'1991-08-01'),(9,'Son',33000,33,'1999-01-19'),(10,'Mogesh', 25600, 23,'1988-07-22');
Query OK, 5 rows affected (0.02 sec)
Records: 5  Duplicates: 0  Warnings: 0

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
|  9 | Son      |  33000 |   33 | 1999-01-19 |
| 10 | Mogesh   |  25600 |   23 | 1988-07-22 |
+----+----------+--------+------+------------+
10 rows in set (0.00 sec)


b. UPDATE: This command is used to update or modify the value of a column in the table.

Syntax:-
UPDATE table_name SET [column_name1= value1,...column_nameN = valueN] [WHERE CONDITION]   

For example:-
UPDATE students SET User_Name = 'Sonoo' WHERE Student_Id = '3'  

mysql> update employee set name = 'Ganesh' where id = 9;
Query OK, 1 row affected (0.01 sec)
Rows matched: 1  Changed: 1  Warnings: 0

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
+----+----------+--------+------+------------+
10 rows in set (0.00 sec)



c. DELETE: It is used to remove one or more row from a table.

Syntax:-
DELETE FROM table_name [WHERE condition];  

For example:-
DELETE FROM javatpoint  WHERE Author="Sonoo"; 


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

mysql> delete from employee where id = 11;
Query OK, 1 row affected (0.00 sec)

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
+----+----------+--------+------+------------+
10 rows in set (0.00 sec)

*/