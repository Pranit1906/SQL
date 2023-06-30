/*


DATEDIFF(expr1,expr2): returns expr1 - expr2 expressed as a value in days from one date to the other. expr1 and expr2 are date or date-and-time expressions. Only the date parts of the values are used in the calculation.

mysql> select datediff(sysdate(),'2023-06-21');
+----------------------------------+
| datediff(sysdate(),'2023-06-21') |
+----------------------------------+
|                               -1 |
+----------------------------------+
1 row in set (0.01 sec)

mysql> select datediff(sysdate(),'2023-06-19');
+----------------------------------+
| datediff(sysdate(),'2023-06-19') |
+----------------------------------+
|                                1 |
+----------------------------------+
1 row in set (0.00 sec)

mysql> select datediff(now(),'2023-06-10');
+------------------------------+
| datediff(now(),'2023-06-10') |
+------------------------------+
|                           10 |
+------------------------------+
1 row in set (0.00 sec)



MONTH(date): Returns the month for date, in the range 1 to 12 for January to December,
or 0 for dates such as '0000-00-00' or '2008-00-00' that have a zero month part.

mysql> select month('2022-06-19');
+---------------------+
| month('2022-06-19') |
+---------------------+
|                   6 |
+---------------------+
1 row in set (0.01 sec)

mysql> select month(now());
+--------------+
| month(now()) |
+--------------+
|            6 |
+--------------+
1 row in set (0.00 sec)



YEAR(date): Returns the year for date, in the range 1000 to 9999, or 0 for the "zero" date.


mysql> select year(sysdate());
+-----------------+
| year(sysdate()) |
+-----------------+
|            2023 |
+-----------------+
1 row in set (0.00 sec)

mysql> select year("1997-05-12");
+--------------------+
| year("1997-05-12") |
+--------------------+
|               1997 |
+--------------------+
1 row in set (0.00 sec)


DAYNAME:- 

mysql> select dayname("2023-05-16");
+-----------------------+
| dayname("2023-05-16") |
+-----------------------+
| Tuesday               |
+-----------------------+
1 row in set (0.01 sec)


DayOfMonth:-


mysql> select dayofmonth('2023-06-19');
+--------------------------+
| dayofmonth('2023-06-19') |
+--------------------------+
|                       19 |
+--------------------------+
1 row in set (0.01 sec)


DayOfWeek:-
The DAYOFWEEK function returns an integer, in the range of 1 to 7,
that represents the day of the week, where 1 is Sunday and 7 is Saturday

mysql> select dayofweek('2023-06-19');
+-------------------------+
| dayofweek('2023-06-19') |
+-------------------------+
|                       2 |
+-------------------------+
1 row in set (0.00 sec)


DayOfYear:-

mysql> select dayofyear('2023-06-20');
+-------------------------+
| dayofyear('2023-06-20') |
+-------------------------+
|                     171 |
+-------------------------+
1 row in set (0.01 sec)





Extract:-

mysql> select now(), extract(hour from now());
+---------------------+--------------------------+
| now()               | extract(hour from now()) |
+---------------------+--------------------------+
| 2023-06-20 20:34:21 |                       20 |
+---------------------+--------------------------+
1 row in set (0.00 sec)

mysql> select now(), extract(minute from now());
+---------------------+----------------------------+
| now()               | extract(minute from now()) |
+---------------------+----------------------------+
| 2023-06-20 20:34:35 |                         34 |
+---------------------+----------------------------+
1 row in set (0.00 sec)

mysql> select now(), extract(second from now());
+---------------------+----------------------------+
| now()               | extract(second from now()) |
+---------------------+----------------------------+
| 2023-06-20 20:34:43 |                         43 |
+---------------------+----------------------------+
1 row in set (0.00 sec)

mysql> select now(), extract(week from current_date());
+---------------------+-----------------------------------+
| now()               | extract(week from current_date()) |
+---------------------+-----------------------------------+
| 2023-06-20 20:36:59 |                                25 |
+---------------------+-----------------------------------+
1 row in set (0.01 sec)

mysql> select now(), extract(month from current_date());
+---------------------+------------------------------------+
| now()               | extract(month from current_date()) |
+---------------------+------------------------------------+
| 2023-06-20 20:37:10 |                                  6 |
+---------------------+------------------------------------+
1 row in set (0.00 sec)

mysql> select now(), extract(quarter from current_date());
+---------------------+--------------------------------------+
| now()               | extract(quarter from current_date()) |
+---------------------+--------------------------------------+
| 2023-06-20 20:39:34 |                                    2 |
+---------------------+--------------------------------------+
1 row in set (0.00 sec)


From_Days():-

mysql> select from_days(2000);
+-----------------+
| from_days(2000) |
+-----------------+
| 0005-06-23      |
+-----------------+

mysql> select from_days(200);
+----------------+
| from_days(200) |
+----------------+
| 0000-00-00     |
+----------------+
1 row in set (0.00 sec)

mysql> select from_days(366);
+----------------+
| from_days(366) |
+----------------+
| 0001-01-01     |
+----------------+
1 row in set (0.00 sec)


Hour:-

mysql> select hour(sysdate()),curtime();
+-----------------+-----------+
| hour(sysdate()) | curtime() |
+-----------------+-----------+
|              20 | 20:50:20  |
+-----------------+-----------+
1 row in set (0.00 sec)
*/