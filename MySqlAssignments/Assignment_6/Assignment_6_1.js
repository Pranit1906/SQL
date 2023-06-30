/*

create a table called CUSTOMERS and adds four columns, three of which, ID, NAME and AGE specify
not to accept NULL.fourth column address accepts null value.

mysql> create table CUSTOMERS(ID int primary key, NAME varchar(30) not null, AGE int not null, address varchar(40));
Query OK, 0 rows affected (0.03 sec)

mysql> desc CUSTOMERS;
+---------+-------------+------+-----+---------+-------+
| Field   | Type        | Null | Key | Default | Extra |
+---------+-------------+------+-----+---------+-------+
| ID      | int         | NO   | PRI | NULL    |       |
| NAME    | varchar(30) | NO   |     | NULL    |       |
| AGE     | int         | NO   |     | NULL    |       |
| address | varchar(40) | YES  |     | NULL    |       |
+---------+-------------+------+-----+---------+-------+
4 rows in set (0.01 sec)

*/