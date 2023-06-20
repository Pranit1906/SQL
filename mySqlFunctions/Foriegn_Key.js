/*

mysql> desc company;
+--------------+-------------+------+-----+---------+-------+
| Field        | Type        | Null | Key | Default | Extra |
+--------------+-------------+------+-----+---------+-------+
| M_Id         | int         | NO   | PRI | NULL    |       |
| Manager_Name | varchar(30) | NO   |     | NULL    |       |
+--------------+-------------+------+-----+---------+-------+
2 rows in set (0.00 sec)

mysql> insert into company values(1,'Pranit'),(2,'Mongesh);
    '> insert into company values(1,'Pranit'),(2,'Mongesh)^C
mysql> insert into company values(1,'Pranit'),(2,'Mongesh);
    '> insert into company values(1,'Pranit'),(2,'Mongesh');
    '> ^C
mysql> insert into company values(1,'Pranit'),(2,'Mongesh');
Query OK, 2 rows affected (0.01 sec)
Records: 2  Duplicates: 0  Warnings: 0

mysql> select * from company;
+------+--------------+
| M_Id | Manager_Name |
+------+--------------+
|    1 | Pranit       |
|    2 | Mongesh      |
+------+--------------+
2 rows in set (0.00 sec)

mysql> create table Com_Employee(E_Id int primary key, E_Name varchar(30) not null, Department varchar(30) not null, M_Id int, foreign key(M_Id) references company(M_Id));
Query OK, 0 rows affected (0.05 sec)

mysql> desc Com_Employee;
+------------+-------------+------+-----+---------+-------+
| Field      | Type        | Null | Key | Default | Extra |
+------------+-------------+------+-----+---------+-------+
| E_Id       | int         | NO   | PRI | NULL    |       |
| E_Name     | varchar(30) | NO   |     | NULL    |       |
| Department | varchar(30) | NO   |     | NULL    |       |
| M_Id       | int         | YES  | MUL | NULL    |       |
+------------+-------------+------+-----+---------+-------+
4 rows in set (0.00 sec)

mysql> insert into Com_Employee (E_Id, E_Name, Department,M_Id) values(101, 'ABC', 'IT',1),(102, 'BBC', 'COM',2),(103,'DBC','IT',1),(104, 'FFG','COM',2);
Query OK, 4 rows affected (0.02 sec)
Records: 4  Duplicates: 0  Warnings: 0

mysql> select * from Com_Employee;
+------+--------+------------+------+
| E_Id | E_Name | Department | M_Id |
+------+--------+------------+------+
|  101 | ABC    | IT         |    1 |
|  102 | BBC    | COM        |    2 |
|  103 | DBC    | IT         |    1 |
|  104 | FFG    | COM        |    2 |
+------+--------+------------+------+
4 rows in set (0.00 sec)

mysql> select Com_Employee.E_Id, Com_Employee.E_Name,company.Manager_Name from Com_Employee inner join company on company.M_Id = Com_Employee.M_Id;
+------+--------+--------------+
| E_Id | E_Name | Manager_Name |
+------+--------+--------------+
|  101 | ABC    | Pranit       |
|  103 | DBC    | Pranit       |
|  102 | BBC    | Mongesh      |
|  104 | FFG    | Mongesh      |
+------+--------+--------------+
4 rows in set (0.00 sec)


*/