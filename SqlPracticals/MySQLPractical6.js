/*



mysql> use joint;
Database changed
mysql> create table bus(B_Id int primary key, D_Name varchar(20),C_Name varchar(20));
Query OK, 0 rows affected (0.06 sec)

mysql> create table passenger(P_Id int primary key,P_name varchar(20),Seat_No int,B_Id int,foreign key(B_Id) references bus(B_Id));
Query OK, 0 rows affected (0.07 sec)

mysql> desc passenger;
+---------+-------------+------+-----+---------+-------+
| Field   | Type        | Null | Key | Default | Extra |
+---------+-------------+------+-----+---------+-------+
| P_Id    | int         | NO   | PRI | NULL    |       |
| P_name  | varchar(20) | YES  |     | NULL    |       |
| Seat_No | int         | YES  |     | NULL    |       |
| B_Id    | int         | YES  | MUL | NULL    |       |
+---------+-------------+------+-----+---------+-------+
4 rows in set (0.02 sec)

mysql> desc Bus;
+--------+-------------+------+-----+---------+-------+
| Field  | Type        | Null | Key | Default | Extra |
+--------+-------------+------+-----+---------+-------+
| B_Id   | int         | NO   | PRI | NULL    |       |
| D_Name | varchar(20) | YES  |     | NULL    |       |
| C_Name | varchar(20) | YES  |     | NULL    |       |
+--------+-------------+------+-----+---------+-------+
3 rows in set (0.01 sec)

mysql> insert into bus values(1200,'ABC','CBA'),(1201,'NBV','MNB'),(1202,'TYU','PKL'),(1203,'QAS','CDS'),(1204,'FGH','LCS');
Query OK, 5 rows affected (0.03 sec)
Records: 5  Duplicates: 0  Warnings: 0

mysql> select * from  bus;
+------+--------+--------+
| B_Id | D_Name | C_Name |
+------+--------+--------+
| 1200 | ABC    | CBA    |
| 1201 | NBV    | MNB    |
| 1202 | TYU    | PKL    |
| 1203 | QAS    | CDS    |
| 1204 | FGH    | LCS    |
+------+--------+--------+
5 rows in set (0.01 sec)

mysql> insert into passenger values(1,'Prant',12,1200),(2,'Sanit',13,1200),(3,'Yogesh',10,1204),(4,'Mangesh',11,1202),(5,'Humesh',21,1203),(6,'Paresh',22,1201),(7,'Umesh',05,1201),(8,'Ramesh',24,1204),(9,'Ram',13,1203),(10,'Sita',14,1202);
Query OK, 10 rows affected (0.03 sec)
Records: 10  Duplicates: 0  Warnings: 0

mysql> select * from passenger;
+------+---------+---------+------+
| P_Id | P_name  | Seat_No | B_Id |
+------+---------+---------+------+
|    1 | Prant   |      12 | 1200 |
|    2 | Sanit   |      13 | 1200 |
|    3 | Yogesh  |      10 | 1204 |
|    4 | Mangesh |      11 | 1202 |
|    5 | Humesh  |      21 | 1203 |
|    6 | Paresh  |      22 | 1201 |
|    7 | Umesh   |       5 | 1201 |
|    8 | Ramesh  |      24 | 1204 |
|    9 | Ram     |      13 | 1203 |
|   10 | Sita    |      14 | 1202 |
+------+---------+---------+------+
10 rows in set (0.00 sec)





*/

/*

mysql> truncate  table bus;
ERROR 1701 (42000): Cannot truncate a table referenced in a foreign key constraint (`joint`.`passenger`, CONSTRAINT `passenger_ibfk_1`)
mysql> update table bus set Depo = 'Thane' where B_Id = 1200;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'table bus set Depo = 'Thane' where B_Id = 1200' at line 1
mysql> insert into bus(Depo) values('Thane') where B_Id = 1200;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'where B_Id = 1200' at line 1
mysql> insert into bus(Depo) values('Thane');
ERROR 1364 (HY000): Field 'B_Id' doesn't have a default value
mysql> select * from bus;
+------+--------+--------+------+
| B_Id | D_Name | C_Name | Depo |
+------+--------+--------+------+
| 1200 | ABC    | CBA    | NULL |
| 1201 | NBV    | MNB    | NULL |
| 1202 | TYU    | PKL    | NULL |
| 1203 | QAS    | CDS    | NULL |
| 1204 | FGH    | LCS    | NULL |
+------+--------+--------+------+
5 rows in set (0.00 sec)

mysql> update table bus set Depo = 'Thane' where Depo = "NULL";
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'table bus set Depo = 'Thane' where Depo = "NULL"' at line 1
mysql> update bus set Depo = 'Thane' where Depo = "NULL";
Query OK, 0 rows affected (0.01 sec)
Rows matched: 0  Changed: 0  Warnings: 0

mysql> select * from bus;
+------+--------+--------+------+
| B_Id | D_Name | C_Name | Depo |
+------+--------+--------+------+
| 1200 | ABC    | CBA    | NULL |
| 1201 | NBV    | MNB    | NULL |
| 1202 | TYU    | PKL    | NULL |
| 1203 | QAS    | CDS    | NULL |
| 1204 | FGH    | LCS    | NULL |
+------+--------+--------+------+
5 rows in set (0.00 sec)

mysql> update bus set Depo = 'Thane' where B_Id = 1200;
Query OK, 1 row affected (0.02 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> select * from bus;
+------+--------+--------+-------+
| B_Id | D_Name | C_Name | Depo  |
+------+--------+--------+-------+
| 1200 | ABC    | CBA    | Thane |
| 1201 | NBV    | MNB    | NULL  |
| 1202 | TYU    | PKL    | NULL  |
| 1203 | QAS    | CDS    | NULL  |
| 1204 | FGH    | LCS    | NULL  |
+------+--------+--------+-------+
5 rows in set (0.00 sec)

mysql> update bus set Depo = 'Mulund' where B_Id = 1201;
Query OK, 1 row affected (0.00 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> update bus set Depo = 'Bhandup' where B_Id = 1202;
Query OK, 1 row affected (0.01 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> update bus set Depo = 'Kurla' where B_Id = 1203;
Query OK, 1 row affected (0.02 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> update bus set Depo = 'Andheri' where B_Id = 1204;
Query OK, 1 row affected (0.03 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> select * from bus;
+------+--------+--------+---------+
| B_Id | D_Name | C_Name | Depo    |
+------+--------+--------+---------+
| 1200 | ABC    | CBA    | Thane   |
| 1201 | NBV    | MNB    | Mulund  |
| 1202 | TYU    | PKL    | Bhandup |
| 1203 | QAS    | CDS    | Kurla   |
| 1204 | FGH    | LCS    | Andheri |
+------+--------+--------+---------+
5 rows in set (0.01 sec)

mysql> alter table bus add Destination varchar(20);
Query OK, 0 rows affected (0.05 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> update bus set Destination = 'New York' where B_Id = 1200;
Query OK, 1 row affected (0.02 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> update bus set Destination = 'America' where B_Id = 1201;
Query OK, 1 row affected (0.02 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> update bus set Destination = 'Australia' where B_Id = 1202;
Query OK, 1 row affected (0.01 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> update bus set Destination = 'England' where B_Id = 1203;
Query OK, 1 row affected (0.02 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> update bus set Destination = 'South Africa' where B_Id = 1204;
Query OK, 1 row affected (0.02 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> select * from bus;
+------+--------+--------+---------+--------------+
| B_Id | D_Name | C_Name | Depo    | Destination  |
+------+--------+--------+---------+--------------+
| 1200 | ABC    | CBA    | Thane   | New York     |
| 1201 | NBV    | MNB    | Mulund  | America      |
| 1202 | TYU    | PKL    | Bhandup | Australia    |
| 1203 | QAS    | CDS    | Kurla   | England      |
| 1204 | FGH    | LCS    | Andheri | South Africa |
+------+--------+--------+---------+--------------+
5 rows in set (0.00 sec)

mysql> select * from bus inner join passenger on bus.B_Id = passenger.B_Id;
+------+--------+--------+---------+--------------+------+---------+---------+------+
| B_Id | D_Name | C_Name | Depo    | Destination  | P_Id | P_name  | Seat_No | B_Id |
+------+--------+--------+---------+--------------+------+---------+---------+------+
| 1200 | ABC    | CBA    | Thane   | New York     |    1 | Prant   |      12 | 1200 |
| 1200 | ABC    | CBA    | Thane   | New York     |    2 | Sanit   |      13 | 1200 |
| 1201 | NBV    | MNB    | Mulund  | America      |    6 | Paresh  |      22 | 1201 |
| 1201 | NBV    | MNB    | Mulund  | America      |    7 | Umesh   |       5 | 1201 |
| 1202 | TYU    | PKL    | Bhandup | Australia    |    4 | Mangesh |      11 | 1202 |
| 1202 | TYU    | PKL    | Bhandup | Australia    |   10 | Sita    |      14 | 1202 |
| 1203 | QAS    | CDS    | Kurla   | England      |    5 | Humesh  |      21 | 1203 |
| 1203 | QAS    | CDS    | Kurla   | England      |    9 | Ram     |      13 | 1203 |
| 1204 | FGH    | LCS    | Andheri | South Africa |    3 | Yogesh  |      10 | 1204 |
| 1204 | FGH    | LCS    | Andheri | South Africa |    8 | Ramesh  |      24 | 1204 |
+------+--------+--------+---------+--------------+------+---------+---------+------+
10 rows in set (0.00 sec)



mysql> select bus.B_Id,bus.D_Name,bus.Destination,passeneger.P_name,passenger.Seat_No from bus inner join passenger on bus.B_Id = passenger.B_Id;
ERROR 1054 (42S22): Unknown column 'passeneger.P_name' in 'field list'
mysql> select bus.B_Id,bus.D_Name,bus.Destination,passenger.P_name,passenger.Seat_No from bus inner join passenger on bus.B_Id = passenger.B_Id;
+------+--------+--------------+---------+---------+
| B_Id | D_Name | Destination  | P_name  | Seat_No |
+------+--------+--------------+---------+---------+
| 1200 | ABC    | New York     | Prant   |      12 |
| 1200 | ABC    | New York     | Sanit   |      13 |
| 1201 | NBV    | America      | Paresh  |      22 |
| 1201 | NBV    | America      | Umesh   |       5 |
| 1202 | TYU    | Australia    | Mangesh |      11 |
| 1202 | TYU    | Australia    | Sita    |      14 |
| 1203 | QAS    | England      | Humesh  |      21 |
| 1203 | QAS    | England      | Ram     |      13 |
| 1204 | FGH    | South Africa | Yogesh  |      10 |
| 1204 | FGH    | South Africa | Ramesh  |      24 |
+------+--------+--------------+---------+---------+
10 rows in set (0.00 sec)

+------+--------+--------+---------+--------------+------+---------+---------+------+
| B_Id | D_Name | C_Name | Depo    | Destination  | P_Id | P_name  | Seat_No | B_Id |
+------+--------+--------+---------+--------------+------+---------+---------+------+
| 1200 | ABC    | CBA    | Thane   | New York     |    1 | Prant   |      12 | 1200 |
| 1200 | ABC    | CBA    | Thane   | New York     |    2 | Sanit   |      13 | 1200 |
| 1204 | FGH    | LCS    | Andheri | South Africa |    3 | Yogesh  |      10 | 1204 |
| 1202 | TYU    | PKL    | Bhandup | Australia    |    4 | Mangesh |      11 | 1202 |
| 1203 | QAS    | CDS    | Kurla   | England      |    5 | Humesh  |      21 | 1203 |
| 1201 | NBV    | MNB    | Mulund  | America      |    6 | Paresh  |      22 | 1201 |
| 1201 | NBV    | MNB    | Mulund  | America      |    7 | Umesh   |       5 | 1201 |
| 1204 | FGH    | LCS    | Andheri | South Africa |    8 | Ramesh  |      24 | 1204 |
| 1203 | QAS    | CDS    | Kurla   | England      |    9 | Ram     |      13 | 1203 |
| 1202 | TYU    | PKL    | Bhandup | Australia    |   10 | Sita    |      14 | 1202 |
+------+--------+--------+---------+--------------+------+---------+---------+------+
10 rows in set (0.00 sec)


mysql> select * from bus left join passenger on bus.B_Id = passenger.B_Id order by P_Id;
+------+--------+--------+---------+--------------+------+---------+---------+------+
| B_Id | D_Name | C_Name | Depo    | Destination  | P_Id | P_name  | Seat_No | B_Id |
+------+--------+--------+---------+--------------+------+---------+---------+------+
| 1200 | ABC    | CBA    | Thane   | New York     |    1 | Prant   |      12 | 1200 |
| 1200 | ABC    | CBA    | Thane   | New York     |    2 | Sanit   |      13 | 1200 |
| 1204 | FGH    | LCS    | Andheri | South Africa |    3 | Yogesh  |      10 | 1204 |
| 1202 | TYU    | PKL    | Bhandup | Australia    |    4 | Mangesh |      11 | 1202 |
| 1203 | QAS    | CDS    | Kurla   | England      |    5 | Humesh  |      21 | 1203 |
| 1201 | NBV    | MNB    | Mulund  | America      |    6 | Paresh  |      22 | 1201 |
| 1201 | NBV    | MNB    | Mulund  | America      |    7 | Umesh   |       5 | 1201 |
| 1204 | FGH    | LCS    | Andheri | South Africa |    8 | Ramesh  |      24 | 1204 |
| 1203 | QAS    | CDS    | Kurla   | England      |    9 | Ram     |      13 | 1203 |
| 1202 | TYU    | PKL    | Bhandup | Australia    |   10 | Sita    |      14 | 1202 |
+------+--------+--------+---------+--------------+------+---------+---------+------+
10 rows in set (0.00 sec)




mysql> select * from bus natural join passenger;
+------+--------+--------+---------+--------------+------+---------+---------+
| B_Id | D_Name | C_Name | Depo    | Destination  | P_Id | P_name  | Seat_No |
+------+--------+--------+---------+--------------+------+---------+---------+
| 1200 | ABC    | CBA    | Thane   | New York     |    1 | Prant   |      12 |
| 1200 | ABC    | CBA    | Thane   | New York     |    2 | Sanit   |      13 |
| 1201 | NBV    | MNB    | Mulund  | America      |    6 | Paresh  |      22 |
| 1201 | NBV    | MNB    | Mulund  | America      |    7 | Umesh   |       5 |
| 1202 | TYU    | PKL    | Bhandup | Australia    |    4 | Mangesh |      11 |
| 1202 | TYU    | PKL    | Bhandup | Australia    |   10 | Sita    |      14 |
| 1203 | QAS    | CDS    | Kurla   | England      |    5 | Humesh  |      21 |
| 1203 | QAS    | CDS    | Kurla   | England      |    9 | Ram     |      13 |
| 1204 | FGH    | LCS    | Andheri | South Africa |    3 | Yogesh  |      10 |
| 1204 | FGH    | LCS    | Andheri | South Africa |    8 | Ramesh  |      24 |
+------+--------+--------+---------+--------------+------+---------+---------+
10 rows in set (0.00 sec)

mysql> select * from bus cross join passenger;
+------+--------+--------+---------+--------------+------+---------+---------+------+
| B_Id | D_Name | C_Name | Depo    | Destination  | P_Id | P_name  | Seat_No | B_Id |
+------+--------+--------+---------+--------------+------+---------+---------+------+
| 1204 | FGH    | LCS    | Andheri | South Africa |    1 | Prant   |      12 | 1200 |
| 1203 | QAS    | CDS    | Kurla   | England      |    1 | Prant   |      12 | 1200 |
| 1202 | TYU    | PKL    | Bhandup | Australia    |    1 | Prant   |      12 | 1200 |
| 1201 | NBV    | MNB    | Mulund  | America      |    1 | Prant   |      12 | 1200 |
| 1200 | ABC    | CBA    | Thane   | New York     |    1 | Prant   |      12 | 1200 |
| 1204 | FGH    | LCS    | Andheri | South Africa |    2 | Sanit   |      13 | 1200 |
| 1203 | QAS    | CDS    | Kurla   | England      |    2 | Sanit   |      13 | 1200 |
| 1202 | TYU    | PKL    | Bhandup | Australia    |    2 | Sanit   |      13 | 1200 |
| 1201 | NBV    | MNB    | Mulund  | America      |    2 | Sanit   |      13 | 1200 |
| 1200 | ABC    | CBA    | Thane   | New York     |    2 | Sanit   |      13 | 1200 |
| 1204 | FGH    | LCS    | Andheri | South Africa |    3 | Yogesh  |      10 | 1204 |
| 1203 | QAS    | CDS    | Kurla   | England      |    3 | Yogesh  |      10 | 1204 |
| 1202 | TYU    | PKL    | Bhandup | Australia    |    3 | Yogesh  |      10 | 1204 |
| 1201 | NBV    | MNB    | Mulund  | America      |    3 | Yogesh  |      10 | 1204 |
| 1200 | ABC    | CBA    | Thane   | New York     |    3 | Yogesh  |      10 | 1204 |
| 1204 | FGH    | LCS    | Andheri | South Africa |    4 | Mangesh |      11 | 1202 |
| 1203 | QAS    | CDS    | Kurla   | England      |    4 | Mangesh |      11 | 1202 |
| 1202 | TYU    | PKL    | Bhandup | Australia    |    4 | Mangesh |      11 | 1202 |
| 1201 | NBV    | MNB    | Mulund  | America      |    4 | Mangesh |      11 | 1202 |
| 1200 | ABC    | CBA    | Thane   | New York     |    4 | Mangesh |      11 | 1202 |
| 1204 | FGH    | LCS    | Andheri | South Africa |    5 | Humesh  |      21 | 1203 |
| 1203 | QAS    | CDS    | Kurla   | England      |    5 | Humesh  |      21 | 1203 |
| 1202 | TYU    | PKL    | Bhandup | Australia    |    5 | Humesh  |      21 | 1203 |
| 1201 | NBV    | MNB    | Mulund  | America      |    5 | Humesh  |      21 | 1203 |
| 1200 | ABC    | CBA    | Thane   | New York     |    5 | Humesh  |      21 | 1203 |
| 1204 | FGH    | LCS    | Andheri | South Africa |    6 | Paresh  |      22 | 1201 |
| 1203 | QAS    | CDS    | Kurla   | England      |    6 | Paresh  |      22 | 1201 |
| 1202 | TYU    | PKL    | Bhandup | Australia    |    6 | Paresh  |      22 | 1201 |
| 1201 | NBV    | MNB    | Mulund  | America      |    6 | Paresh  |      22 | 1201 |
| 1200 | ABC    | CBA    | Thane   | New York     |    6 | Paresh  |      22 | 1201 |
| 1204 | FGH    | LCS    | Andheri | South Africa |    7 | Umesh   |       5 | 1201 |
| 1203 | QAS    | CDS    | Kurla   | England      |    7 | Umesh   |       5 | 1201 |
| 1202 | TYU    | PKL    | Bhandup | Australia    |    7 | Umesh   |       5 | 1201 |
| 1201 | NBV    | MNB    | Mulund  | America      |    7 | Umesh   |       5 | 1201 |
| 1200 | ABC    | CBA    | Thane   | New York     |    7 | Umesh   |       5 | 1201 |
| 1204 | FGH    | LCS    | Andheri | South Africa |    8 | Ramesh  |      24 | 1204 |
| 1203 | QAS    | CDS    | Kurla   | England      |    8 | Ramesh  |      24 | 1204 |
| 1202 | TYU    | PKL    | Bhandup | Australia    |    8 | Ramesh  |      24 | 1204 |
| 1201 | NBV    | MNB    | Mulund  | America      |    8 | Ramesh  |      24 | 1204 |
| 1200 | ABC    | CBA    | Thane   | New York     |    8 | Ramesh  |      24 | 1204 |
| 1204 | FGH    | LCS    | Andheri | South Africa |    9 | Ram     |      13 | 1203 |
| 1203 | QAS    | CDS    | Kurla   | England      |    9 | Ram     |      13 | 1203 |
| 1202 | TYU    | PKL    | Bhandup | Australia    |    9 | Ram     |      13 | 1203 |
| 1201 | NBV    | MNB    | Mulund  | America      |    9 | Ram     |      13 | 1203 |
| 1200 | ABC    | CBA    | Thane   | New York     |    9 | Ram     |      13 | 1203 |
| 1204 | FGH    | LCS    | Andheri | South Africa |   10 | Sita    |      14 | 1202 |
| 1203 | QAS    | CDS    | Kurla   | England      |   10 | Sita    |      14 | 1202 |
| 1202 | TYU    | PKL    | Bhandup | Australia    |   10 | Sita    |      14 | 1202 |
| 1201 | NBV    | MNB    | Mulund  | America      |   10 | Sita    |      14 | 1202 |
| 1200 | ABC    | CBA    | Thane   | New York     |   10 | Sita    |      14 | 1202 |
+------+--------+--------+---------+--------------+------+---------+---------+------+
50 rows in set (0.00 sec)


*/