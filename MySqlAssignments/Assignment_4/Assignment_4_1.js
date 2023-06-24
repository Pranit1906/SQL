/*

1.Create following table using SQL statements.


Client table


Field name      Data type                Attributes



Clientno            char(6)                    Primary key



Name                 Varchar(20)         Not Null



City                      Varchar(50)          Not Null



Pin Number



Mobile                   Char(10)

mysql> create table Client (clientno char(6) primary key, Name varchar(20) not null, City varchar(50) not null,Pin_Number int, Mobile char(10));
Query OK, 0 rows affected (0.09 sec)

mysql> desc client;
+------------+-------------+------+-----+---------+-------+
| Field      | Type        | Null | Key | Default | Extra |
+------------+-------------+------+-----+---------+-------+
| clientno   | char(6)     | NO   | PRI | NULL    |       |
| Name       | varchar(20) | NO   |     | NULL    |       |
| City       | varchar(50) | NO   |     | NULL    |       |
| Pin_Number | int         | YES  |     | NULL    |       |
| Mobile     | char(10)    | YES  |     | NULL    |       |
+------------+-------------+------+-----+---------+-------+
5 rows in set (0.09 sec)


2. write sql queries for the following:

1.create table grocery(item_no int, item_name varchar(20), mfd varchar (10), expdate varchar(12), address varchar(20), city varchar(10));
2.To drop the above created table

mysql> create table grocery(item_no int, item_name varchar(20), mfd varchar (10), expdate varchar(12), address varchar(20), city varchar(10));
Query OK, 0 rows affected (0.03 sec)

mysql> desc grocery;
+-----------+-------------+------+-----+---------+-------+
| Field     | Type        | Null | Key | Default | Extra |
+-----------+-------------+------+-----+---------+-------+
| item_no   | int         | YES  |     | NULL    |       |
| item_name | varchar(20) | YES  |     | NULL    |       |
| mfd       | varchar(10) | YES  |     | NULL    |       |
| expdate   | varchar(12) | YES  |     | NULL    |       |
| address   | varchar(20) | YES  |     | NULL    |       |
| city      | varchar(10) | YES  |     | NULL    |       |
+-----------+-------------+------+-----+---------+-------+
6 rows in set (0.00 sec)

mysql> drop table grocery;
Query OK, 0 rows affected (0.06 sec)

mysql> desc grocery;
ERROR 1146 (42S02): Table 'itvedant.grocery' doesn't exist


*/