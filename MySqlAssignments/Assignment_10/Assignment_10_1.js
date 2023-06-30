/*

create two tables UNIFORM (UCode, UName, UColor) and COST (UCode, Size, Price) in the SchoolUniform database. UCode is Primary Key in table UNIFORM.

UCode and Size is the Composite Key in table COST.Therefore, Ucode is a common attribute between the two tables which can be used to fetch the common data from both the tables.

 Uniform table:

Ucode                            Uname                            Ucolor 



1                                 Shirt                             White



2                                  Pant                              Grey 



3                                  Tie                               Blue 



Cost table:

Ucode                              Size                                     Price 



 1                                   L                                      580 



 1                                   M                                      500 



 2                                   L                                      890 



2                                    M                                      810 

Write the following sql queries to List the UCode, UName, UColor, Size and Price of related tuples of tables UNIFORM and COST.

a) Using condition in where clause
mysql> select uniform.UName, uniform.UColor,cost.Size,cost.Price from uniform,cost where uniform.UCode = cost.UCode;
+-------+--------+------+-------+
| UName | UColor | Size | Price |
+-------+--------+------+-------+
| Shirt | White  | L    |   500 |
| Shirt | White  | M    |   500 |
| Pant  | Grey   | L    |   890 |
| Pant  | Grey   | M    |   810 |
+-------+--------+------+-------+
4 rows in set (0.00 sec)

b) Explicit use of JOIN clause

Left and Right Join use case:-

mysql> select * from cost right join uniform on uniform.UCode = cost.UCode;
+-------+------+-------+-------+-------+--------+
| UCode | Size | Price | UCode | UName | UColor |
+-------+------+-------+-------+-------+--------+
|     1 | M    |   500 |     1 | Shirt | White  |
|     1 | L    |   500 |     1 | Shirt | White  |
|     2 | M    |   810 |     2 | Pant  | Grey   |
|     2 | L    |   890 |     2 | Pant  | Grey   |
|  NULL | NULL |  NULL |     3 | Tie   | Blue   |
+-------+------+-------+-------+-------+--------+
5 rows in set (0.00 sec)

mysql> select * from cost left join uniform on uniform.UCode = cost.UCode;
+-------+------+-------+-------+-------+--------+
| UCode | Size | Price | UCode | UName | UColor |
+-------+------+-------+-------+-------+--------+
|     1 | L    |   500 |     1 | Shirt | White  |
|     1 | M    |   500 |     1 | Shirt | White  |
|     2 | L    |   890 |     2 | Pant  | Grey   |
|     2 | M    |   810 |     2 | Pant  | Grey   |
+-------+------+-------+-------+-------+--------+
4 rows in set (0.00 s

mysql> select * from uniform right join cost on uniform.UCode = cost.UCode;
+-------+-------+--------+-------+------+-------+
| UCode | UName | UColor | UCode | Size | Price |
+-------+-------+--------+-------+------+-------+
|     1 | Shirt | White  |     1 | L    |   500 |
|     1 | Shirt | White  |     1 | M    |   500 |
|     2 | Pant  | Grey   |     2 | L    |   890 |
|     2 | Pant  | Grey   |     2 | M    |   810 |
+-------+-------+--------+-------+------+-------+
4 rows in set (0.00 sec)


mysql> select * from uniform left join cost on cost.UCode = uniform.UCode ;
+-------+-------+--------+-------+------+-------+
| UCode | UName | UColor | UCode | Size | Price |
+-------+-------+--------+-------+------+-------+
|     1 | Shirt | White  |     1 | M    |   500 |
|     1 | Shirt | White  |     1 | L    |   500 |
|     2 | Pant  | Grey   |     2 | M    |   810 |
|     2 | Pant  | Grey   |     2 | L    |   890 |
|     3 | Tie   | Blue   |  NULL | NULL |  NULL |
+-------+-------+--------+-------+------+-------+
5 rows in set (0.00 sec)

c) Explicit use of NATURAL JOIN clause

mysql> select * from uniform natural join cost;
+-------+-------+--------+------+-------+
| UCode | UName | UColor | Size | Price |
+-------+-------+--------+------+-------+
|     1 | Shirt | White  | L    |   500 |
|     1 | Shirt | White  | M    |   500 |
|     2 | Pant  | Grey   | L    |   890 |
|     2 | Pant  | Grey   | M    |   810 |
+-------+-------+--------+------+-------+
4 rows in set (0.00 sec)

*/